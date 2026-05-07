import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireDoctorHospitalId } from "@/lib/doctorHospital";
import { hospitalIdsEqual } from "@/lib/hospitalIds";

type SettlementRow = {
  id: string;
  from_hospital_id: string;
  to_hospital_id: string;
  status: "pending_cash" | "settled" | "disputed";
};

function reopenDisabled(): boolean {
  return process.env.SETTLEMENT_REOPEN_ALLOWED === "false";
}

/**
 * Either hospital on the row may reopen a settled month for demos/corrections.
 * Clears OTP state so the receiver must generate a new code.
 */
export async function POST(_: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;

  if (reopenDisabled()) {
    return NextResponse.json(
      { error: "Reopening settlements is disabled. Set SETTLEMENT_REOPEN_ALLOWED=true if you need this.", code: "REOPEN_DISABLED" },
      { status: 403 },
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();
  const hid = await requireDoctorHospitalId(admin, user.id);
  if (!hid.ok) {
    return NextResponse.json({ error: hid.error }, { status: hid.status });
  }

  const { data: settlement, error } = await admin
    .from("referral_settlements")
    .select("id, from_hospital_id, to_hospital_id, status")
    .eq("id", id)
    .maybeSingle();

  if (error || !settlement) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const s = settlement as SettlementRow;
  const party =
    hospitalIdsEqual(s.from_hospital_id, hid.hospitalId) ||
    hospitalIdsEqual(s.to_hospital_id, hid.hospitalId);
  if (!party) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  if (s.status !== "settled") {
    return NextResponse.json(
      { error: "Only a settled row can be reopened.", status: s.status },
      { status: 409 },
    );
  }

  const nowIso = new Date().toISOString();
  const { data: updated, error: updErr } = await admin
    .from("referral_settlements")
    .update({
      status: "pending_cash",
      settled_at: null,
      settled_by: null,
      otp_hash: null,
      otp_salt: null,
      otp_expires_at: null,
      otp_issued_at: null,
      otp_issued_by: null,
      otp_consumed_at: null,
      otp_confirm_failures: 0,
      otp_lock_until: null,
      updated_at: nowIso,
    })
    .eq("id", id)
    .eq("status", "settled")
    .select("id, status, updated_at")
    .maybeSingle();

  if (updErr || !updated) {
    return NextResponse.json(
      { error: "Could not reopen. It may have changed already — refresh and try again.", code: "RACE" },
      { status: 409 },
    );
  }

  await admin.from("referral_settlement_events").insert({
    settlement_id: id,
    actor_user_id: user.id,
    event_type: "reopened",
    payload: { previousStatus: "settled", reopenedAt: nowIso },
  });

  return NextResponse.json({ ok: true, status: updated.status as string, updatedAt: updated.updated_at });
}
