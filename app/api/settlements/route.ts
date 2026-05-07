import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireDoctorHospitalId } from "@/lib/doctorHospital";
import { hospitalIdsEqual } from "@/lib/hospitalIds";
import { periodMonthSchema } from "./_schemas";

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
  closed_at: string;
  settled_at: string | null;
  updated_at: string;
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

export async function GET(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const periodRaw = searchParams.get("period")?.trim();
  const parsedPeriod = periodMonthSchema.safeParse(periodRaw);
  if (!parsedPeriod.success) {
    return NextResponse.json({ error: "Invalid period (YYYY-MM required)." }, { status: 400 });
  }

  const admin = createAdminClient();
  const hid = await requireDoctorHospitalId(admin, user.id);
  if (!hid.ok) {
    return NextResponse.json({ error: hid.error }, { status: hid.status });
  }

  const { data: rows, error } = await admin
    .from("referral_settlements")
    .select(
      "id, from_hospital_id, to_hospital_id, period_month, referral_count, amount_minor, status, otp_hash, otp_expires_at, otp_consumed_at, otp_lock_until, closed_at, settled_at, updated_at",
    )
    .eq("period_month", parsedPeriod.data)
    .or(`from_hospital_id.eq.${hid.hospitalId},to_hospital_id.eq.${hid.hospitalId}`)
    .order("amount_minor", { ascending: false });

  if (error) {
    console.error("settlements list:", error);
    return NextResponse.json({ error: "Could not load settlements." }, { status: 500 });
  }

  const list = ((rows ?? []) as SettlementRow[])
    .map((r) => {
      const role: "from" | "to" | null = hospitalIdsEqual(r.from_hospital_id, hid.hospitalId)
        ? "from"
        : hospitalIdsEqual(r.to_hospital_id, hid.hospitalId)
          ? "to"
          : null;
      if (!role) return null;
      const counterpartyId = role === "from" ? r.to_hospital_id : r.from_hospital_id;
      return { ...r, role, counterpartyId, otpState: otpStateFromRow(r) };
    })
    .filter((x): x is NonNullable<typeof x> => x != null);

  const hospitalIds = Array.from(
    new Set(list.flatMap((r) => [r.from_hospital_id, r.to_hospital_id])),
  );
  let hospitalMap = new Map<string, { id: string; name: string }>();
  if (hospitalIds.length > 0) {
    const { data: hs } = await admin.from("hospitals").select("id, name").in("id", hospitalIds);
    if (hs) hospitalMap = new Map(hs.map((h) => [h.id, h]));
  }

  const settlements = list.map((r) => ({
    id: r.id,
    periodMonth: r.period_month,
    role: r.role,
    fromHospital: hospitalMap.get(r.from_hospital_id) ?? { id: r.from_hospital_id, name: "Hospital" },
    toHospital: hospitalMap.get(r.to_hospital_id) ?? { id: r.to_hospital_id, name: "Hospital" },
    counterparty:
      r.role === "from"
        ? hospitalMap.get(r.to_hospital_id) ?? { id: r.to_hospital_id, name: "Hospital" }
        : hospitalMap.get(r.from_hospital_id) ?? { id: r.from_hospital_id, name: "Hospital" },
    referralCount: r.referral_count,
    amountMinor: typeof r.amount_minor === "string" ? Number(r.amount_minor) : r.amount_minor,
    status: r.status,
    otpState: otpStateFromRow(r),
    closedAt: r.closed_at,
    settledAt: r.settled_at,
    updatedAt: r.updated_at,
  }));

  return NextResponse.json({ settlements });
}

