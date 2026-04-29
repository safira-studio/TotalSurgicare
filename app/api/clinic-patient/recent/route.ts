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
    .from("clinic_patients")
    .select("id, public_code, full_name, age, created_at")
    .eq("registered_by", user.id)
    .order("created_at", { ascending: false })
    .limit(15);

  if (error) {
    console.error("clinic_patients recent:", error);
    return NextResponse.json({ error: "Failed to load recent visits." }, { status: 500 });
  }

  return NextResponse.json({ patients: data ?? [] });
}
