import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

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
  const raw = searchParams.get("code")?.trim() ?? "";
  const code = raw.toUpperCase().replace(/\s+/g, "");

  if (code.length < 3) {
    return NextResponse.json(
      { error: "Enter the visit ID (at least 3 characters)." },
      { status: 400 },
    );
  }

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("clinic_patients")
    .select(
      "id, public_code, full_name, age, bp, mobile, allergies, created_at",
    )
    .eq("public_code", code)
    .maybeSingle();

  if (error) {
    console.error("clinic_patients lookup:", error);
    return NextResponse.json({ error: "Lookup failed." }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ error: "No patient found for this visit ID." }, { status: 404 });
  }

  return NextResponse.json({ patient: data });
}
