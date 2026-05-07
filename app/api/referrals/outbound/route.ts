import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireDoctorHospitalId } from "@/lib/doctorHospital";

/** Referring doctor: list referrals you created. */
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

  const { data: rows, error } = await admin
    .from("referrals")
    .select(
      "id, status, public_code, patient_name, patient_mobile, target_doctor_name, diagnoses_summary, completed_at, created_at, medicine_prescription_id",
    )
    .eq("referring_doctor_id", user.id)
    .eq("from_hospital_id", hid.hospitalId)
    .order("created_at", { ascending: false })
    .limit(80);

  if (error) {
    console.error("referrals outbound:", error);
    return NextResponse.json({ error: "Failed to load referrals." }, { status: 500 });
  }

  return NextResponse.json({ referrals: rows ?? [] });
}
