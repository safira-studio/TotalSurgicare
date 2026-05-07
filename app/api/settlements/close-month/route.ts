import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireDoctorHospitalId } from "@/lib/doctorHospital";
import { utcBoundsForKolkataMonth } from "@/lib/kolkataDay";
import { closeMonthBodySchema } from "../_schemas";

type ReferralRow = { from_hospital_id: string; to_hospital_id: string };
type TermRow = {
  from_hospital_id: string;
  to_hospital_id: string;
  pricing_mode: "per_referral" | "flat_monthly";
  rate_minor: string | number;
  flat_amount_minor: string | number | null;
};

function key(fromId: string, toId: string) {
  return `${fromId}::${toId}`;
}

function toNumber(n: string | number | null | undefined): number {
  if (typeof n === "number") return n;
  if (typeof n === "string") return Number(n);
  return 0;
}

export async function POST(req: Request) {
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

  const parsed = closeMonthBodySchema.safeParse(body);
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

  const { startIso, endExclusiveIso } = utcBoundsForKolkataMonth(parsed.data.periodMonth);

  const { data: refsRaw, error: refErr } = await admin
    .from("referrals")
    .select("from_hospital_id, to_hospital_id")
    .eq("status", "completed")
    .not("completed_at", "is", null)
    .gte("completed_at", startIso)
    .lt("completed_at", endExclusiveIso)
    .or(`from_hospital_id.eq.${hid.hospitalId},to_hospital_id.eq.${hid.hospitalId}`);

  if (refErr) {
    console.error("settlements close-month referrals:", refErr);
    return NextResponse.json({ error: "Could not compute month totals." }, { status: 500 });
  }

  const refs = ((refsRaw ?? []) as ReferralRow[]).filter(
    (r) =>
      Boolean(r.from_hospital_id) &&
      Boolean(r.to_hospital_id) &&
      r.from_hospital_id !== r.to_hospital_id,
  );

  const counts = new Map<string, { fromId: string; toId: string; count: number }>();
  for (const r of refs) {
    const k = key(r.from_hospital_id, r.to_hospital_id);
    const cur = counts.get(k);
    if (cur) cur.count += 1;
    else counts.set(k, { fromId: r.from_hospital_id, toId: r.to_hospital_id, count: 1 });
  }

  if (counts.size === 0) {
    return NextResponse.json({ settlements: [], created: 0 });
  }

  const pairList = Array.from(counts.values());
  const fromIds = Array.from(new Set(pairList.map((x) => x.fromId)));
  const toIds = Array.from(new Set(pairList.map((x) => x.toId)));

  const { data: terms } = await admin
    .from("referral_settlement_terms")
    .select("from_hospital_id, to_hospital_id, pricing_mode, rate_minor, flat_amount_minor")
    .in("from_hospital_id", fromIds)
    .in("to_hospital_id", toIds);

  const termsMap = new Map<string, TermRow>();
  for (const t of (terms ?? []) as TermRow[]) {
    termsMap.set(key(t.from_hospital_id, t.to_hospital_id), t);
  }

  const { data: existing, error: existErr } = await admin
    .from("referral_settlements")
    .select("id, from_hospital_id, to_hospital_id, period_month, referral_count, amount_minor, status")
    .eq("period_month", parsed.data.periodMonth)
    .or(`from_hospital_id.eq.${hid.hospitalId},to_hospital_id.eq.${hid.hospitalId}`);

  if (existErr) {
    console.error("settlements close-month existing:", existErr);
    return NextResponse.json({ error: "Could not check existing settlements." }, { status: 500 });
  }

  const existingMap = new Map<string, (typeof existing)[number]>();
  for (const s of existing ?? []) {
    existingMap.set(key(s.from_hospital_id, s.to_hospital_id), s);
  }

  const nowIso = new Date().toISOString();
  let created = 0;
  const out: Array<{ id: string; fromHospitalId: string; toHospitalId: string; referralCount: number; amountMinor: number; status: string }> =
    [];

  for (const p of pairList) {
    const term = termsMap.get(key(p.fromId, p.toId));
    const amountMinor =
      term?.pricing_mode === "flat_monthly"
        ? Math.max(0, toNumber(term.flat_amount_minor))
        : Math.max(0, p.count * toNumber(term?.rate_minor ?? 0));

    const existingRow = existingMap.get(key(p.fromId, p.toId));
    if (existingRow) {
      if (existingRow.status === "settled") {
        out.push({
          id: existingRow.id,
          fromHospitalId: p.fromId,
          toHospitalId: p.toId,
          referralCount: existingRow.referral_count,
          amountMinor: toNumber(existingRow.amount_minor),
          status: existingRow.status,
        });
        continue;
      }

      if (existingRow.referral_count !== p.count || toNumber(existingRow.amount_minor) !== amountMinor) {
        return NextResponse.json(
          {
            error:
              "This month was already closed with a different count/amount. Contact support to reopen.",
            code: "MONTH_MISMATCH",
            details: {
              fromHospitalId: p.fromId,
              toHospitalId: p.toId,
              existing: {
                referralCount: existingRow.referral_count,
                amountMinor: toNumber(existingRow.amount_minor),
              },
              computed: { referralCount: p.count, amountMinor },
            },
          },
          { status: 409 },
        );
      }

      out.push({
        id: existingRow.id,
        fromHospitalId: p.fromId,
        toHospitalId: p.toId,
        referralCount: existingRow.referral_count,
        amountMinor: toNumber(existingRow.amount_minor),
        status: existingRow.status,
      });
      continue;
    }

    const { data: inserted, error: insErr } = await admin
      .from("referral_settlements")
      .insert({
        from_hospital_id: p.fromId,
        to_hospital_id: p.toId,
        period_month: parsed.data.periodMonth,
        referral_count: p.count,
        amount_minor: amountMinor,
        status: "pending_cash",
        closed_at: nowIso,
        closed_by: user.id,
        updated_at: nowIso,
      })
      .select("id, from_hospital_id, to_hospital_id, referral_count, amount_minor, status")
      .single();

    if (insErr) {
      if (insErr.code === "23505") {
        // Someone else inserted concurrently — re-run is safe; just ask client to refresh.
        return NextResponse.json(
          { error: "Month close is already in progress. Please retry.", code: "RACE_RETRY" },
          { status: 409 },
        );
      }
      console.error("settlements close-month insert:", insErr);
      return NextResponse.json({ error: "Could not close month." }, { status: 500 });
    }

    created += 1;
    out.push({
      id: inserted.id,
      fromHospitalId: inserted.from_hospital_id,
      toHospitalId: inserted.to_hospital_id,
      referralCount: inserted.referral_count,
      amountMinor: toNumber(inserted.amount_minor),
      status: inserted.status,
    });

    await admin.from("referral_settlement_events").insert({
      settlement_id: inserted.id,
      actor_user_id: user.id,
      event_type: "close_month",
      payload: {
        periodMonth: parsed.data.periodMonth,
        startIso,
        endExclusiveIso,
        referralCount: inserted.referral_count,
        amountMinor: toNumber(inserted.amount_minor),
      },
    });
  }

  return NextResponse.json({ settlements: out, created });
}

