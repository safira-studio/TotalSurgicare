import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * Returns a short-lived signed URL for the current doctor's letterhead image,
 * so the browser can render a live preview before sending.
 */
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

  const { data: doctor, error: doctorErr } = await admin
    .from("doctors")
    .select("letterhead_path")
    .eq("id", user.id)
    .single();

  if (doctorErr || !doctor?.letterhead_path) {
    return NextResponse.json(
      { error: "No letterhead uploaded yet." },
      { status: 404 },
    );
  }

  const { data: signed, error: signErr } = await admin.storage
    .from("letterheads")
    .createSignedUrl(doctor.letterhead_path, 60 * 60); // 1 hour

  if (signErr || !signed?.signedUrl) {
    console.error("Letterhead sign error:", signErr);
    return NextResponse.json(
      { error: "Failed to generate preview URL." },
      { status: 500 },
    );
  }

  return NextResponse.json({ url: signed.signedUrl });
}
