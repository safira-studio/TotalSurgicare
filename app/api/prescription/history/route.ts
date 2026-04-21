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
  const { data, error } = await admin
    .from("prescriptions")
    .select("id, patient_name, patient_age, patient_mobile, tests, created_at")
    .eq("doctor_id", user.id)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error("History fetch error:", error);
    return NextResponse.json({ error: "Failed to load history." }, { status: 500 });
  }

  return NextResponse.json({ prescriptions: data ?? [] });
}
