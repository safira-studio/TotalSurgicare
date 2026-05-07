import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireDoctorHospitalId } from "@/lib/doctorHospital";
import { utcBoundsForKolkataMonth } from "@/lib/kolkataDay";
import { confirmCashBodySchema } from "../../_schemas";
import { normalizeOtpInput, verifyOtpScrypt } from "@/lib/settlementOtp";
import { hospitalIdsEqual } from "@/lib/hospitalIds";

type SettlementRow = {
  id: string;
  from_hospital_id: string;
  to_hospital_id: string;
  period_month: string;
  status: "pending_cash" | "settled" | "disputed";
  otp_hash: string | null;
  otp_salt: string | null;
  otp_expires_at: string | null;
  otp_consumed_at: string | null;
  otp_confirm_failures: number;
  otp_lock_until: string | null;
};

function isLocked(lockUntil: string | null): boolean {
  if (!lockUntil) return false;
  return new Date(lockUntil).getTime() > Date.now();
}

type AdminClient = ReturnType<typeof createAdminClient>;

/** True if this user referred at least one completed case in-period from hid → settlement.to. */
async function hasCompletedReferralAsReferringDoctor(
  admin: AdminClient,
  s: SettlementRow,
  userId: string,
  hid: string,
): Promise<boolean> {
  const { startIso, endExclusiveIso } = utcBoundsForKolkataMonth(s.period_month);
  const { data, error } = await admin
    .from("referrals")
    .select("id")
    .eq("status", "completed")
    .not("completed_at", "is", null)
    .gte("completed_at", startIso)
    .lt("completed_at", endExclusiveIso)
    .eq("referring_doctor_id", userId)
    .eq("from_hospital_id", hid)
    .eq("to_hospital_id", s.to_hospital_id)
    .limit(1);
  if (error || !data?.length) return false;
  return true;
}

export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;

  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = confirmCashBodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation error", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createAdminClient();
  const hid = await requireDoctorHospitalId(admin, user.id);
  if (!hid.ok) {
    return NextResponse.json({ error: hid.error }, { status: hid.status });
  }

  const { data: settlement, error } = await admin
    .from("referral_settlements")
    .select(
      "id, from_hospital_id, to_hospital_id, period_month, status, otp_hash, otp_salt, otp_expires_at, otp_consumed_at, otp_confirm_failures, otp_lock_until",
    )
    .eq("id", id)
    .maybeSingle();

  if (error || !settlement) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const s = settlement as SettlementRow;

  const snapshotParty =
    hospitalIdsEqual(s.from_hospital_id, hid.hospitalId) ||
    hospitalIdsEqual(s.to_hospital_id, hid.hospitalId);
  const liveReferrerParty = await hasCompletedReferralAsReferringDoctor(
    admin,
    s,
    user.id,
    hid.hospitalId,
  );
  if (!snapshotParty && !liveReferrerParty) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const mayConfirmCash =
    hospitalIdsEqual(s.from_hospital_id, hid.hospitalId) ||
    liveReferrerParty;

  if (!mayConfirmCash) {
    if (hospitalIdsEqual(s.to_hospital_id, hid.hospitalId)) {
      return NextResponse.json(
        {
          error:
            "Only the referring hospital can confirm cash. Your login is the receiving hospital on this settlement — the referring hospital must enter the code.",
          code: "RECEIVER_CANNOT_CONFIRM",
        },
        { status: 403 },
      );
    }
    return NextResponse.json(
      {
        error:
          "Only the referring hospital can confirm cash. Sign in with the referring clinic’s account, or ask an admin to sync doctors.hospital_id and referral from_hospital_id.",
        code: "NOT_REFERRING_HOSPITAL",
      },
      { status: 403 },
    );
  }

  const repairFromHospitalId =
    mayConfirmCash && !hospitalIdsEqual(s.from_hospital_id, hid.hospitalId);

  if (s.status !== "pending_cash") {
    return NextResponse.json({ error: "Settlement is not pending.", status: s.status }, { status: 409 });
  }

  if (isLocked(s.otp_lock_until)) {
    return NextResponse.json(
      { error: "Too many attempts. Please wait or ask receiver to regenerate code.", code: "LOCKED", otpLockUntil: s.otp_lock_until },
      { status: 429 },
    );
  }

  const now = Date.now();
  if (!s.otp_hash || !s.otp_salt || !s.otp_expires_at || s.otp_consumed_at) {
    return NextResponse.json({ error: "No active code. Ask receiver to generate one.", code: "NO_CODE" }, { status: 409 });
  }

  if (new Date(s.otp_expires_at).getTime() <= now) {
    // Treat expired as a failed attempt (brute-force limiter still applies).
    const nextFailures = s.otp_confirm_failures + 1;
    const lockUntil = nextFailures >= 10 ? new Date(now + 15 * 60_000).toISOString() : null;
    await admin
      .from("referral_settlements")
      .update({
        otp_confirm_failures: nextFailures,
        otp_lock_until: lockUntil ?? s.otp_lock_until,
        updated_at: new Date(now).toISOString(),
      })
      .eq("id", id)
      .eq("status", "pending_cash")
      .eq("otp_hash", s.otp_hash)
      .eq("otp_confirm_failures", s.otp_confirm_failures);

    return NextResponse.json({ error: "Invalid or expired code.", code: "INVALID" }, { status: 400 });
  }

  const code = normalizeOtpInput(parsed.data.code);
  const ok = await verifyOtpScrypt({ code, salt: s.otp_salt, expectedHashHex: s.otp_hash });

  if (!ok) {
    const nextFailures = s.otp_confirm_failures + 1;
    const lockUntil = nextFailures >= 10 ? new Date(now + 15 * 60_000).toISOString() : null;

    await admin
      .from("referral_settlements")
      .update({
        otp_confirm_failures: nextFailures,
        otp_lock_until: lockUntil ?? s.otp_lock_until,
        updated_at: new Date(now).toISOString(),
      })
      .eq("id", id)
      .eq("status", "pending_cash")
      .eq("otp_hash", s.otp_hash)
      .eq("otp_confirm_failures", s.otp_confirm_failures);

    if (lockUntil) {
      return NextResponse.json(
        { error: "Too many attempts. Please wait or ask receiver to regenerate code.", code: "LOCKED", otpLockUntil: lockUntil },
        { status: 429 },
      );
    }

    return NextResponse.json({ error: "Invalid or expired code.", code: "INVALID" }, { status: 400 });
  }

  const settledAt = new Date(now).toISOString();
  const { data: updated, error: updErr } = await admin
    .from("referral_settlements")
    .update({
      ...(repairFromHospitalId ? { from_hospital_id: hid.hospitalId } : {}),
      status: "settled",
      settled_at: settledAt,
      settled_by: user.id,
      otp_consumed_at: settledAt,
      otp_hash: null,
      otp_salt: null,
      otp_expires_at: null,
      otp_lock_until: null,
      updated_at: settledAt,
    })
    .eq("id", id)
    .eq("status", "pending_cash")
    .eq("otp_hash", s.otp_hash)
    .is("otp_consumed_at", null)
    .select("id, status, settled_at")
    .maybeSingle();

  if (updErr || !updated) {
    return NextResponse.json(
      { error: "Could not confirm. The code may have been regenerated; please retry.", code: "RACE" },
      { status: 409 },
    );
  }

  await admin.from("referral_settlement_events").insert({
    settlement_id: id,
    actor_user_id: user.id,
    event_type: "settled_cash",
    payload: { settledAt },
  });

  return NextResponse.json({ ok: true, settledAt });
}

