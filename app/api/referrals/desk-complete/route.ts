import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";

function extractUuid(input: string | null | undefined): string | null {
  if (!input) return null;
  // 1) Standard UUID
  const uuid = input.match(
    /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
  )?.[0];
  if (uuid) return uuid.toLowerCase();

  // 2) Compact UUID: 32 hex chars (no dashes)
  const compact = input.match(/[0-9a-f]{32}/i)?.[0];
  if (!compact) return null;
  const c = compact.toLowerCase();
  return `${c.slice(0, 8)}-${c.slice(8, 12)}-${c.slice(12, 16)}-${c.slice(16, 20)}-${c.slice(20)}`;
}

const bodySchema = z.object({
  token: z.string().min(1),
});

/**
 * Public (no auth): mark referral completed using secret completion_token.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation error", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const token = extractUuid(parsed.data.token);
  if (!token) {
    return NextResponse.json({ error: "Invalid link." }, { status: 400 });
  }

  const admin = createAdminClient();
  const { data: row, error: fetchErr } = await admin
    .from("referrals")
    .select("id, status, referring_doctor_id")
    .eq("completion_token", token)
    .maybeSingle();

  if (fetchErr) {
    console.error("referrals desk-complete fetch:", fetchErr);
    return NextResponse.json({ error: "Could not update referral." }, { status: 500 });
  }

  if (!row) {
    return NextResponse.json({ error: "Referral not found." }, { status: 404 });
  }

  if (row.status === "completed") {
    return NextResponse.json({ ok: true, alreadyCompleted: true });
  }

  if (row.status === "cancelled") {
    return NextResponse.json({ error: "This referral was cancelled." }, { status: 400 });
  }

  const now = new Date().toISOString();
  const { error: updErr } = await admin
    .from("referrals")
    .update({
      status: "completed",
      completed_at: now,
      updated_at: now,
    })
    .eq("id", row.id)
    .eq("status", "pending");

  if (updErr) {
    console.error("referrals desk-complete update:", updErr);
    return NextResponse.json({ error: "Could not mark complete." }, { status: 500 });
  }

  const { error: notifErr } = await admin.from("referral_notifications").insert({
    doctor_id: row.referring_doctor_id,
    referral_id: row.id,
  });

  if (notifErr) {
    // Unique violation if already notified — ignore
    if (notifErr.code !== "23505") {
      console.error("referral_notifications insert:", notifErr);
    }
  }

  return NextResponse.json({ ok: true });
}
