import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireDoctorHospitalId } from "@/lib/doctorHospital";
import { generateOtpHash } from "@/lib/settlementOtp";
import { hospitalIdsEqual } from "@/lib/hospitalIds";

type SettlementRow = {
  id: string;
  from_hospital_id: string;
  to_hospital_id: string;
  status: "pending_cash" | "settled" | "disputed";
  otp_lock_until: string | null;
};

export async function POST(_: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;

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
    .select("id, from_hospital_id, to_hospital_id, status, otp_lock_until")
    .eq("id", id)
    .or(`from_hospital_id.eq.${hid.hospitalId},to_hospital_id.eq.${hid.hospitalId}`)
    .maybeSingle();

  if (error || !settlement) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const s = settlement as SettlementRow;
  if (!hospitalIdsEqual(s.to_hospital_id, hid.hospitalId)) {
    return NextResponse.json({ error: "Only the receiving hospital can generate the code." }, { status: 403 });
  }

  if (s.status !== "pending_cash") {
    return NextResponse.json({ error: "Settlement is not pending.", status: s.status }, { status: 409 });
  }

  const { code, otp } = await generateOtpHash();
  const now = Date.now();
  const issuedAt = new Date(now).toISOString();
  const expiresAt = new Date(now + 15 * 60_000).toISOString();

  const { data: updated, error: updErr } = await admin
    .from("referral_settlements")
    .update({
      otp_hash: otp.hash,
      otp_salt: otp.salt,
      otp_issued_at: issuedAt,
      otp_issued_by: user.id,
      otp_expires_at: expiresAt,
      otp_consumed_at: null,
      otp_confirm_failures: 0,
      otp_lock_until: null,
      updated_at: issuedAt,
    })
    .eq("id", id)
    .eq("status", "pending_cash")
    .is("settled_at", null)
    .select("id, otp_expires_at")
    .single();

  if (updErr || !updated) {
    return NextResponse.json({ error: "Could not generate code. Please retry." }, { status: 409 });
  }

  await admin.from("referral_settlement_events").insert({
    settlement_id: id,
    actor_user_id: user.id,
    event_type: "otp_issued",
    payload: { otpIssuedAt: issuedAt, otpExpiresAt: updated.otp_expires_at },
  });

  return NextResponse.json({
    otp: {
      code,
      issuedAt,
      expiresAt: updated.otp_expires_at,
    },
  });
}

