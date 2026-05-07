import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireDoctorHospitalId } from "@/lib/doctorHospital";
import { hospitalIdsEqual } from "@/lib/hospitalIds";

type SettlementRow = {
  id: string;
  from_hospital_id: string;
  to_hospital_id: string;
  period_month: string;
  referral_count: number;
  amount_minor: string | number;
  status: "pending_cash" | "settled" | "disputed";
  otp_hash: string | null;
  otp_expires_at: string | null;
  otp_consumed_at: string | null;
  otp_lock_until: string | null;
  otp_confirm_failures: number;
  otp_issued_at: string | null;
  settled_at: string | null;
  closed_at: string;
};

function otpStateFromRow(row: SettlementRow): "none" | "active" | "expired" | "locked" {
  const now = Date.now();
  const lock = row.otp_lock_until ? new Date(row.otp_lock_until).getTime() : null;
  if (lock && lock > now) return "locked";
  if (!row.otp_hash) return "none";
  if (row.otp_consumed_at) return "none";
  if (!row.otp_expires_at) return "expired";
  const exp = new Date(row.otp_expires_at).getTime();
  return exp > now ? "active" : "expired";
}

export async function GET(_: Request, ctx: { params: Promise<{ id: string }> }) {
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

  const { data: row, error } = await admin
    .from("referral_settlements")
    .select(
      "id, from_hospital_id, to_hospital_id, period_month, referral_count, amount_minor, status, otp_hash, otp_expires_at, otp_consumed_at, otp_lock_until, otp_confirm_failures, otp_issued_at, settled_at, closed_at",
    )
    .eq("id", id)
    .or(`from_hospital_id.eq.${hid.hospitalId},to_hospital_id.eq.${hid.hospitalId}`)
    .maybeSingle();

  if (error || !row) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const r = row as SettlementRow;
  const role: "from" | "to" | null = hospitalIdsEqual(r.from_hospital_id, hid.hospitalId)
    ? "from"
    : hospitalIdsEqual(r.to_hospital_id, hid.hospitalId)
      ? "to"
      : null;
  if (!role) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  return NextResponse.json({
    settlement: {
      id: r.id,
      periodMonth: r.period_month,
      role,
      fromHospitalId: r.from_hospital_id,
      toHospitalId: r.to_hospital_id,
      referralCount: r.referral_count,
      amountMinor: typeof r.amount_minor === "string" ? Number(r.amount_minor) : r.amount_minor,
      status: r.status,
      otpState: otpStateFromRow(r),
      otpIssuedAt: r.otp_issued_at,
      otpExpiresAt: r.otp_expires_at,
      otpConfirmFailures: r.otp_confirm_failures,
      otpLockUntil: r.otp_lock_until,
      closedAt: r.closed_at,
      settledAt: r.settled_at,
    },
  });
}

