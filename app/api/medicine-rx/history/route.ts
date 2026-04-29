import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

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
  const { data: rxs, error } = await admin
    .from("medicine_prescriptions")
    .select("id, created_at, lines, clinic_patient_id")
    .eq("doctor_id", user.id)
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
      .in("id", patientIds);

    if (!pErr && pts) {
      patientMap = new Map(pts.map((p) => [p.id, p]));
    }
  }

  const prescriptions = list.map((row) => ({
    id: row.id,
    created_at: row.created_at,
    lines: row.lines,
    patient: patientMap.get(row.clinic_patient_id) ?? null,
  }));

  return NextResponse.json({ prescriptions });
}
