import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { stripToDigits } from "@/lib/phone";
import { requireDoctorHospitalId } from "@/lib/doctorHospital";

function normalizeCode(raw: string): string {
  const t = raw.trim().toUpperCase().replace(/\s+/g, "");
  if (!t.startsWith("REF-")) return t;
  return t;
}

/**
 * Logged-in staff at receiving hospital: pending referrals addressed to this
 * hospital (to_hospital_id). Optional filters: referral public_code, patient mobile.
 */
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
  const codeRaw = searchParams.get("code")?.trim();
  const phoneRaw = searchParams.get("phone")?.trim();

  const admin = createAdminClient();
  const hid = await requireDoctorHospitalId(admin, user.id);
  if (!hid.ok) {
    return NextResponse.json({ error: hid.error }, { status: hid.status });
  }

  const selectCols =
    "id, status, public_code, patient_name, patient_mobile, diagnoses_summary, complaints_snippet, target_doctor_name, target_doctor_mobile, referring_doctor_name, referring_clinic_name, completed_at, created_at";

  let query = admin
    .from("referrals")
    .select(selectCols)
    .eq("to_hospital_id", hid.hospitalId)
    .eq("status", "pending")
    .order("created_at", { ascending: false })
    .limit(20);

  if (codeRaw) {
    const code = normalizeCode(codeRaw);
    query = query.eq("public_code", code);
  } else if (phoneRaw) {
    const digits = stripToDigits(phoneRaw);
    const patientDigits =
      digits.length === 12 && digits.startsWith("91")
        ? digits.slice(2)
        : digits.length === 11 && digits.startsWith("0")
          ? digits.slice(1)
          : digits;
    if (patientDigits.length !== 10) {
      return NextResponse.json(
        { error: "Enter a 10-digit patient mobile (or with +91)." },
        { status: 400 },
      );
    }
    query = query.eq("patient_mobile", patientDigits);
  }

  const { data: rows, error } = await query;

  if (error) {
    console.error("referrals inbound:", error);
    return NextResponse.json({ error: "Lookup failed." }, { status: 500 });
  }

  return NextResponse.json({ referrals: rows ?? [] });
}
