import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireDoctorHospitalId } from "@/lib/doctorHospital";

const bodySchema = z.object({
  referralId: z.string().uuid(),
});

/**
 * Logged-in staff at receiving hospital: mark pending referral completed when
 * the referral's to_hospital_id matches your hospital.
 */
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

  const parsed = bodySchema.safeParse(body);
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

  const { data: ref, error: rErr } = await admin
    .from("referrals")
    .select("id, status, referring_doctor_id, to_hospital_id")
    .eq("id", parsed.data.referralId)
    .maybeSingle();

  if (rErr || !ref) {
    return NextResponse.json({ error: "Referral not found." }, { status: 404 });
  }

  if (ref.to_hospital_id !== hid.hospitalId) {
    return NextResponse.json(
      { error: "This referral is not addressed to your hospital." },
      { status: 403 },
    );
  }

  if (ref.status !== "pending") {
    return NextResponse.json({ error: "Referral is not pending.", status: ref.status }, { status: 400 });
  }

  const now = new Date().toISOString();
  const { error: updErr } = await admin
    .from("referrals")
    .update({
      status: "completed",
      completed_at: now,
      updated_at: now,
    })
    .eq("id", ref.id)
    .eq("status", "pending");

  if (updErr) {
    console.error("referrals inbound complete:", updErr);
    return NextResponse.json({ error: "Could not update." }, { status: 500 });
  }

  const { error: notifErr } = await admin.from("referral_notifications").insert({
    doctor_id: ref.referring_doctor_id,
    referral_id: ref.id,
  });

  if (notifErr && notifErr.code !== "23505") {
    console.error("referral_notifications insert:", notifErr);
  }

  return NextResponse.json({ ok: true });
}
