import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

// ── GET /api/doctor/profile ───────────────────────────────────────────────────
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();

  // Try with the new column; fall back if it hasn't been migrated yet
  let { data: doctor, error } = await admin
    .from("doctors")
    .select("full_name, clinic_name, phone, reg_no, letterhead_path, letterhead_has_doctor_info, doctor_header_xfrac, doctor_header_yfrac")
    .eq("id", user.id)
    .single();

  if (error?.code === "PGRST204") {
    // Try without both new position columns
    ({ data: doctor, error } = await admin
      .from("doctors")
      .select("full_name, clinic_name, phone, reg_no, letterhead_path, letterhead_has_doctor_info, doctor_header_xfrac")
      .eq("id", user.id)
      .single());
  }

  if (error?.code === "PGRST204") {
    // Try without any position columns
    ({ data: doctor, error } = await admin
      .from("doctors")
      .select("full_name, clinic_name, phone, reg_no, letterhead_path, letterhead_has_doctor_info")
      .eq("id", user.id)
      .single());
  }

  if (error || !doctor) {
    console.error("Doctor profile fetch error:", error);
    return NextResponse.json({ error: "Doctor profile not found" }, { status: 404 });
  }

  // Build a short-lived signed URL for the letterhead preview (1 hour)
  let letterheadUrl: string | null = null;
  if (doctor.letterhead_path) {
    const { data: signed } = await admin.storage
      .from("letterheads")
      .createSignedUrl(doctor.letterhead_path, 3600);
    letterheadUrl = signed?.signedUrl ?? null;
  }

  return NextResponse.json({
    fullName: doctor.full_name,
    clinicName: doctor.clinic_name ?? "",
    phone: doctor.phone ?? "",
    regNo: doctor.reg_no ?? "",
    email: user.email ?? "",
    letterheadUrl,
    letterheadHasDoctorInfo: doctor.letterhead_has_doctor_info ?? false,
    doctorHeaderXFrac: (doctor as Record<string, unknown>).doctor_header_xfrac as number ?? 0.50,
    doctorHeaderYFrac: (doctor as Record<string, unknown>).doctor_header_yfrac as number ?? 0.04,
  });
}

// ── PATCH /api/doctor/profile ─────────────────────────────────────────────────
const patchSchema = z.object({
  fullName: z.string().min(1).max(120),
  clinicName: z.string().max(120).optional().default(""),
  phone: z.string().max(20).optional().default(""),
  regNo: z.string().max(60).optional().default(""),
  doctorHeaderXFrac: z.number().min(0.05).max(0.95).optional().default(0.50),
  doctorHeaderYFrac: z.number().min(0.01).max(0.30).optional().default(0.04),
  letterheadHasDoctorInfo: z.boolean().optional(),
});

export async function PATCH(req: Request) {
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

  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation error", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { fullName: rawFullName, clinicName, phone, regNo, doctorHeaderXFrac, doctorHeaderYFrac, letterheadHasDoctorInfo } = parsed.data;

  // Strip any number of leading "Dr." / "Dr " prefixes and store exactly one.
  // Prevents accumulating "Dr. Dr. Dr. X" on repeated saves.
  const baseName = rawFullName.replace(/^(dr\.?\s*)+/i, "").trim();
  const fullName = baseName ? `Dr. ${baseName}` : rawFullName;

  const admin = createAdminClient();

  type DoctorUpdate = {
    full_name: string;
    clinic_name: string | null;
    phone: string;
    reg_no: string | null;
    doctor_header_xfrac?: number;
    doctor_header_yfrac?: number;
    letterhead_has_doctor_info?: boolean;
  };
  const payload: DoctorUpdate = {
    full_name: fullName,
    clinic_name: clinicName || null,
    phone: phone || "",
    reg_no: regNo || null,
    doctor_header_xfrac: doctorHeaderXFrac,
    doctor_header_yfrac: doctorHeaderYFrac,
    ...(typeof letterheadHasDoctorInfo === "boolean" ? { letterhead_has_doctor_info: letterheadHasDoctorInfo } : {}),
  };

  let { error: updateError } = await admin.from("doctors").update(payload).eq("id", user.id);

  // Retry stripping unrecognised columns until it succeeds
  if (updateError?.code === "PGRST204") {
    const { doctor_header_yfrac: _y, ...withoutY } = payload;
    void _y;
    ({ error: updateError } = await admin.from("doctors").update(withoutY).eq("id", user.id));
  }
  if (updateError?.code === "PGRST204") {
    const { doctor_header_xfrac: _x, doctor_header_yfrac: _y2, ...corePayload } = payload;
    void _x; void _y2;
    ({ error: updateError } = await admin.from("doctors").update(corePayload).eq("id", user.id));
  }

  if (updateError) {
    console.error("Profile update error:", updateError);
    return NextResponse.json({ error: "Failed to update profile." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
