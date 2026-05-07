import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

/** Active hospitals for referral destination picker (authenticated). */
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
  const { data: rows, error } = await admin
    .from("hospitals")
    .select("id, name, slug")
    .eq("active", true)
    .order("name", { ascending: true });

  if (error) {
    console.error("hospitals list:", error);
    const msg = String(error.message ?? "");
    if (msg.includes("hospitals") && (msg.includes("does not exist") || msg.includes("schema cache"))) {
      return NextResponse.json(
        {
          error:
            "Hospitals table not found. Run supabase/multi_tenant_hospitals.sql in Supabase.",
        },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: "Could not load hospitals." }, { status: 500 });
  }

  return NextResponse.json({ hospitals: rows ?? [] });
}
