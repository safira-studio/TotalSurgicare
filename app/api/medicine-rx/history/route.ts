import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireDoctorHospitalId } from "@/lib/doctorHospital";

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
  const hid = await requireDoctorHospitalId(admin, user.id);
  if (!hid.ok) {
    return NextResponse.json({ error: hid.error }, { status: hid.status });
  }

  const { data: rxs, error } = await admin
    .from("medicine_prescriptions")
    .select(
      "id, created_at, lines, complaints, diagnoses_lines, clinic_patient_id, referral_name, referral_mobile",
    )
    .eq("doctor_id", user.id)
    .eq("hospital_id", hid.hospitalId)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error("medicine_rx history:", error);
    return NextResponse.json({ error: "Failed to load history." }, { status: 500 });
  }

  const list = rxs ?? [];
  const patientIds = Array.from(new Set(list.map((r) => r.clinic_patient_id)));
  let patientMap = new Map<
    string,
    { public_code: string; full_name: string; age: number; mobile: string | null }
  >();

  if (patientIds.length > 0) {
    const { data: pts, error: pErr } = await admin
      .from("clinic_patients")
      .select("id, public_code, full_name, age, mobile")
      .eq("hospital_id", hid.hospitalId)
      .in("id", patientIds);

    if (!pErr && pts) {
      patientMap = new Map(pts.map((p) => [p.id, p]));
    }
  }

  const rxIds = list.map((r) => r.id);
  let refByRx = new Map<
    string,
    { public_code: string; status: string; completed_at: string | null }
  >();
  if (rxIds.length > 0) {
    const { data: refRows, error: refErr } = await admin
      .from("referrals")
      .select("medicine_prescription_id, public_code, status, completed_at")
      .in("medicine_prescription_id", rxIds);
    if (refErr) {
      console.error("referrals join in medicine_rx history:", refErr);
    } else if (refRows) {
      refByRx = new Map(
        refRows
          .filter((x) => x.medicine_prescription_id)
          .map((x) => [x.medicine_prescription_id as string, x]),
      );
    }
  }

  const prescriptions = list.map((row) => ({
    id: row.id,
    created_at: row.created_at,
    lines: row.lines,
    complaints: row.complaints ?? null,
    diagnoses_lines: row.diagnoses_lines ?? [],
    referral_name: (row as { referral_name?: string | null }).referral_name ?? null,
    referral_mobile: (row as { referral_mobile?: string | null }).referral_mobile ?? null,
    referral_tracking: refByRx.get(row.id) ?? null,
    patient: patientMap.get(row.clinic_patient_id) ?? null,
  }));

  return NextResponse.json({ prescriptions });
}
