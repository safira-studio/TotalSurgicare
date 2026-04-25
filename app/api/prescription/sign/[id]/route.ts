import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { normalizeIndianMobile, waUrl } from "@/lib/phone";
import { formatDateIN } from "@/lib/pdf/prescription";
import { clinicFooter } from "@/lib/clinic";

const THIRTY_DAYS_SECS = 60 * 60 * 24 * 30;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  // Auth guard
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();

  // Fetch prescription — RLS is bypassed by admin; we enforce ownership manually
  const { data: rx, error: rxError } = await admin
    .from("prescriptions")
    .select("id, doctor_id, patient_name, patient_mobile, tests, pdf_path, created_at")
    .eq("id", id)
    .single();

  if (rxError || !rx) {
    return NextResponse.json({ error: "Prescription not found" }, { status: 404 });
  }

  if (rx.doctor_id !== user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (!rx.pdf_path) {
    return NextResponse.json({ error: "No PDF on record for this prescription" }, { status: 404 });
  }

  const { data: signedData, error: signError } = await admin.storage
    .from("prescriptions")
    .createSignedUrl(rx.pdf_path, THIRTY_DAYS_SECS);

  if (signError || !signedData?.signedUrl) {
    console.error("Signed URL error:", signError);
    return NextResponse.json(
      { error: "Failed to generate link." },
      { status: 500 },
    );
  }

  const signedUrl = signedData.signedUrl;

  // Fetch doctor details to build wa.me links
  const { data: doctor } = await admin
    .from("doctors")
    .select("full_name, clinic_name, phone")
    .eq("id", user.id)
    .single();

  const clinicName = doctor?.clinic_name ?? "Shifa Clinic";
  const patientName = rx.patient_name;
  const date = formatDateIN(new Date(rx.created_at));
  const msg =
    `Namaste ${patientName},\n` +
    `Your prescription from ${doctor?.full_name ?? "Doctor"} (${clinicName}) is ready:\n${signedUrl}\n\n` +
    `Date: ${date}` +
    clinicFooter();

  const patientMobile = normalizeIndianMobile(rx.patient_mobile);
  const doctorMobile = doctor?.phone
    ? normalizeIndianMobile(doctor.phone)
    : { ok: false as const, error: "" };

  return NextResponse.json({
    signedUrl,
    waPatient: patientMobile.ok ? waUrl(patientMobile.digits, msg) : null,
    waDoctor: doctorMobile.ok
      ? waUrl(doctorMobile.digits, msg)
      : null,
  });
}
