import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  buildMedicineRxPdf,
  detectImageMime,
  formatDateIN,
} from "@/lib/pdf/medicinePrescription";
import { normalizeIndianMobile, waUrl } from "@/lib/phone";
import { clinicFooter } from "@/lib/clinic";
import { hasAnyTimingSelected } from "@/lib/data/medicineTiming";

const lineSchema = z.object({
  medicineId: z.string().uuid(),
  before_food: z.boolean(),
  after_food: z.boolean(),
  morning: z.boolean(),
  evening: z.boolean(),
});

const bodySchema = z.object({
  visitCode: z.string().min(3).max(32),
  lines: z.array(lineSchema).min(1, "Add at least one medicine"),
});

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

  const { visitCode, lines } = parsed.data;
  const code = visitCode.trim().replace(/\s+/g, "").toUpperCase();

  for (const line of lines) {
    if (!hasAnyTimingSelected(line)) {
      return NextResponse.json(
        { error: "Each medicine needs at least one timing checked (before/after food, morning, or evening)." },
        { status: 400 },
      );
    }
  }

  const admin = createAdminClient();

  const { data: doctor, error: doctorError } = await admin
    .from("doctors")
    .select("full_name, clinic_name, phone, letterhead_path")
    .eq("id", user.id)
    .single();

  if (doctorError || !doctor) {
    return NextResponse.json({ error: "Doctor profile not found" }, { status: 404 });
  }

  if (!doctor.letterhead_path) {
    return NextResponse.json(
      { error: "Letterhead not uploaded. Please complete onboarding first." },
      { status: 400 },
    );
  }

  const { data: patient, error: pErr } = await admin
    .from("clinic_patients")
    .select("id, public_code, full_name, age, bp, mobile, allergies")
    .eq("public_code", code)
    .maybeSingle();

  if (pErr || !patient) {
    return NextResponse.json(
      { error: "Patient not found for this visit ID." },
      { status: 404 },
    );
  }

  const medicineIds = Array.from(new Set(lines.map((l) => l.medicineId)));
  const { data: meds, error: mErr } = await admin
    .from("medicines")
    .select("id, name")
    .in("id", medicineIds);

  if (mErr || !meds?.length) {
    return NextResponse.json(
      { error: "One or more medicines are invalid." },
      { status: 400 },
    );
  }

  const medMap = new Map(meds.map((m) => [m.id, m.name]));
  for (const id of medicineIds) {
    if (!medMap.has(id)) {
      return NextResponse.json(
        { error: "One or more medicines are invalid." },
        { status: 400 },
      );
    }
  }

  const resolvedLines = lines.map((l) => ({
    medicine_id: l.medicineId,
    name: medMap.get(l.medicineId)!,
    before_food: l.before_food,
    after_food: l.after_food,
    morning: l.morning,
    evening: l.evening,
  }));

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

  const date = formatDateIN();
  let pdfBytes: Uint8Array;
  try {
    pdfBytes = await buildMedicineRxPdf({
      letterheadBytes,
      letterheadMime,
      patientName: patient.full_name,
      patientAge: patient.age,
      bp: patient.bp,
      patientMobile: patient.mobile,
      allergies: patient.allergies,
      visitCode: patient.public_code,
      lines: resolvedLines.map((r) => ({
        name: r.name,
        before_food: r.before_food,
        after_food: r.after_food,
        morning: r.morning,
        evening: r.evening,
      })),
      date,
      doctorName: doctor.full_name,
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "PDF generation failed";
    console.error("Medicine PDF build error:", e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  const rxId = crypto.randomUUID();
  const pdfPath = `${user.id}/mr-${rxId}.pdf`;

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

  const { error: dbError } = await admin.from("medicine_prescriptions").insert({
    id: rxId,
    doctor_id: user.id,
    clinic_patient_id: patient.id,
    lines: resolvedLines,
    pdf_path: pdfPath,
  });

  if (dbError) {
    console.error("medicine_prescriptions insert:", dbError);
  } else {
    const { error: doneErr } = await admin
      .from("clinic_patients")
      .update({ medicine_rx_done_at: new Date().toISOString() })
      .eq("id", patient.id);
    if (doneErr) {
      console.error("clinic_patients medicine_rx_done_at update:", doneErr);
    }
  }

  const clinicName = doctor.clinic_name ?? "Clinic";
  const mobileOk = patient.mobile
    ? normalizeIndianMobile(patient.mobile)
    : { ok: false as const, error: "" };

  const msg =
    `Namaste ${patient.full_name},\n` +
    `Your medicine prescription from ${doctor.full_name} (${clinicName}) is ready:\n${signedUrl}\n\n` +
    `Visit ID: ${patient.public_code}\n` +
    `Date: ${date}` +
    clinicFooter();

  const waPatient =
    mobileOk.ok ? waUrl(mobileOk.digits, msg) : null;
  const doctorMobile = normalizeIndianMobile(doctor.phone);
  const waDoctor = doctorMobile.ok ? waUrl(doctorMobile.digits, msg) : null;

  return NextResponse.json({
    id: rxId,
    signedUrl,
    waPatient,
    waDoctor,
  });
}
