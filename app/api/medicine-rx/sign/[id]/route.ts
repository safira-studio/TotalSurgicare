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

  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();

  const { data: rx, error: rxError } = await admin
    .from("medicine_prescriptions")
    .select("id, doctor_id, pdf_path, created_at, clinic_patient_id")
    .eq("id", id)
    .single();

  if (rxError || !rx) {
    return NextResponse.json({ error: "Prescription not found" }, { status: 404 });
  }

  if (rx.doctor_id !== user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (!rx.pdf_path) {
    return NextResponse.json(
      { error: "No PDF on record for this prescription" },
      { status: 404 },
    );
  }

  const { data: signedData, error: signError } = await admin.storage
    .from("prescriptions")
    .createSignedUrl(rx.pdf_path, THIRTY_DAYS_SECS);

  if (signError || !signedData?.signedUrl) {
    console.error("Signed URL error:", signError);
    return NextResponse.json({ error: "Failed to generate link." }, { status: 500 });
  }

  const signedUrl = signedData.signedUrl;

  const { data: doctor } = await admin
    .from("doctors")
    .select("full_name, clinic_name, phone")
    .eq("id", user.id)
    .single();

  const { data: patient } = await admin
    .from("clinic_patients")
    .select("full_name, mobile, public_code")
    .eq("id", rx.clinic_patient_id)
    .single();

  const clinicName = doctor?.clinic_name ?? "Clinic";
  const patientName = patient?.full_name ?? "Patient";
  const visitCode = patient?.public_code ?? "";
  const date = formatDateIN(new Date(rx.created_at));

  const msg =
    `Namaste ${patientName},\n` +
    `Your medicine prescription from ${doctor?.full_name ?? "Doctor"} (${clinicName}) is ready:\n${signedUrl}\n\n` +
    (visitCode ? `Visit ID: ${visitCode}\n` : "") +
    `Date: ${date}` +
    clinicFooter();

  const patientMobile = patient?.mobile
    ? normalizeIndianMobile(patient.mobile)
    : { ok: false as const, error: "" };
  const doctorMobile = doctor?.phone
    ? normalizeIndianMobile(doctor.phone)
    : { ok: false as const, error: "" };

  return NextResponse.json({
    signedUrl,
    waPatient: patientMobile.ok ? waUrl(patientMobile.digits, msg) : null,
    waDoctor: doctorMobile.ok ? waUrl(doctorMobile.digits, msg) : null,
  });
}
