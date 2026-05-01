import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  buildPrescriptionPdf,
  detectImageMime,
  formatDateIN,
} from "@/lib/pdf/prescription";
import { normalizeIndianMobile, waUrl } from "@/lib/phone";
import { clinicFooter } from "@/lib/clinic";

const bodySchema = z.object({
  patientName: z.string().min(1, "Patient name is required"),
  patientAge: z.number().int().min(0).max(130).nullable(),
  patientMobile: z.string(),
  testIds: z.array(z.string()).min(1, "Select at least one test"),
});

export async function POST(req: Request) {
  // --- Auth guard ---
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // --- Parse + validate body ---
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

  const { patientName, patientAge, patientMobile, testIds } = parsed.data;

  // --- Normalize phone number ---
  const mobileResult = normalizeIndianMobile(patientMobile);
  if (!mobileResult.ok) {
    return NextResponse.json(
      { error: `Patient mobile: ${mobileResult.error}` },
      { status: 400 },
    );
  }

  const admin = createAdminClient();

  // --- Fetch doctor profile ---
  let { data: doctor, error: doctorError } = await admin
    .from("doctors")
    .select("full_name, clinic_name, phone, reg_no, letterhead_path, letterhead_has_doctor_info, doctor_header_xfrac")
    .eq("id", user.id)
    .single();

  // Graceful fallback if new position columns not yet migrated
  if (doctorError?.code === "PGRST204") {
    ({ data: doctor, error: doctorError } = await admin
      .from("doctors")
      .select("full_name, clinic_name, phone, reg_no, letterhead_path, letterhead_has_doctor_info, doctor_header_xfrac")
      .eq("id", user.id)
      .single());
  }
  if (doctorError?.code === "PGRST204") {
    ({ data: doctor, error: doctorError } = await admin
      .from("doctors")
      .select("full_name, clinic_name, phone, reg_no, letterhead_path, letterhead_has_doctor_info")
      .eq("id", user.id)
      .single());
  }

  if (doctorError || !doctor) {
    return NextResponse.json({ error: "Doctor profile not found" }, { status: 404 });
  }

  if (!doctor.letterhead_path) {
    return NextResponse.json(
      { error: "Letterhead not uploaded. Please complete onboarding first." },
      { status: 400 },
    );
  }

  // --- Download letterhead from storage ---
  const { data: letterheadData, error: letterheadError } = await admin.storage
    .from("letterheads")
    .download(doctor.letterhead_path);

  if (letterheadError || !letterheadData) {
    console.error("Letterhead download error:", letterheadError);
    return NextResponse.json(
      { error: "Failed to load letterhead. Please re-upload." },
      { status: 500 },
    );
  }

  const letterheadBytes = new Uint8Array(await letterheadData.arrayBuffer());
  let letterheadMime: "image/png" | "image/jpeg";
  try {
    letterheadMime = detectImageMime(letterheadBytes);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  // --- Generate PDF ---
  // When the letterhead is a plain/blank design (no doctor info printed on it),
  // pass doctor details so the PDF builder can overlay them in the header.
  const showDoctorHeader = !doctor.letterhead_has_doctor_info;
  const doctorHeaderInfo = showDoctorHeader
    ? {
        name: doctor.full_name,
        clinicName: doctor.clinic_name ?? null,
        phone: doctor.phone ?? null,
        regNo: doctor.reg_no ?? null,
        email: user.email ?? null,
        xFrac: (doctor as Record<string, unknown>).doctor_header_xfrac as number ?? 0.50,
        yFrac: (doctor as Record<string, unknown>).doctor_header_yfrac as number ?? 0.04,
      }
    : null;

  const date = formatDateIN();
  let pdfBytes: Uint8Array;
  try {
    pdfBytes = await buildPrescriptionPdf({
      letterheadBytes,
      letterheadMime,
      patientName,
      patientAge,
      patientMobile: mobileResult.digits,
      testIds,
      date,
      doctorName: doctor.full_name,
      doctorHeaderInfo,
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "PDF generation failed";
    console.error("PDF build error:", e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  // --- Upload PDF to Supabase storage (private bucket) ---
  const prescriptionId = crypto.randomUUID();
  const pdfPath = `${user.id}/${prescriptionId}.pdf`;

  const { error: pdfUploadError } = await admin.storage
    .from("prescriptions")
    .upload(pdfPath, pdfBytes, {
      contentType: "application/pdf",
      upsert: false,
    });

  if (pdfUploadError) {
    console.error("PDF upload error:", pdfUploadError);
    return NextResponse.json(
      { error: "Failed to save prescription PDF. Please try again." },
      { status: 500 },
    );
  }

  // --- Mint a 30-day signed URL ---
  const THIRTY_DAYS_SECS = 60 * 60 * 24 * 30;
  const { data: signedData, error: signError } = await admin.storage
    .from("prescriptions")
    .createSignedUrl(pdfPath, THIRTY_DAYS_SECS);

  if (signError || !signedData?.signedUrl) {
    console.error("Signed URL error:", signError);
    return NextResponse.json(
      { error: "Failed to generate prescription link." },
      { status: 500 },
    );
  }

  const signedUrl = signedData.signedUrl;

  // --- Persist prescription record ---
  const { error: dbError } = await admin.from("prescriptions").insert({
    id: prescriptionId,
    doctor_id: user.id,
    patient_name: patientName,
    patient_age: patientAge,
    patient_mobile: mobileResult.digits,
    tests: testIds,
    pdf_path: pdfPath,
  });

  if (dbError) {
    console.error("DB insert error:", dbError);
    // PDF is uploaded — proceed without failing (data consistency warning only)
  }

  // --- Build wa.me URLs (server-side) ---
  const clinicName = doctor.clinic_name ?? "Shifa Clinic";
  const msg =
    `Namaste ${patientName},\n` +
    `Your prescription from ${doctor.full_name} (${clinicName}) is ready:\n${signedUrl}\n\n` +
    `Date: ${date}` +
    clinicFooter();

  const doctorMobile = normalizeIndianMobile(doctor.phone);
  const waPatient = waUrl(mobileResult.digits, msg);
  const waDoctor = doctorMobile.ok
    ? waUrl(doctorMobile.digits, msg)
    : null;

  return NextResponse.json({
    id: prescriptionId,
    signedUrl,
    waPatient,
    waDoctor,
  });
}
