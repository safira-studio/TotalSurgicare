import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

const MAX_SIZE_BYTES = 4 * 1024 * 1024; // 4 MB
const ACCEPTED_MIMES = ["image/png", "image/jpeg", "image/jpg"];

export async function POST(req: Request) {
  // Verify session
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const file = formData.get("file") as File | null;
  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (!ACCEPTED_MIMES.includes(file.type)) {
    return NextResponse.json(
      { error: "Only PNG and JPG files are accepted." },
      { status: 400 },
    );
  }

  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json(
      { error: "File must be under 4 MB." },
      { status: 400 },
    );
  }

  const ext = file.type === "image/png" ? "png" : "jpg";
  const storagePath = `${user.id}.${ext}`;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const admin = createAdminClient();

  const { error: uploadError } = await admin.storage
    .from("letterheads")
    .upload(storagePath, buffer, {
      contentType: file.type,
      upsert: true, // allow re-upload
    });

  if (uploadError) {
    console.error("Letterhead upload error:", uploadError);
    return NextResponse.json(
      { error: "Storage upload failed. Please try again." },
      { status: 500 },
    );
  }

  // Update doctor's letterhead_path
  const { error: dbError } = await admin
    .from("doctors")
    .update({ letterhead_path: storagePath })
    .eq("id", user.id);

  if (dbError) {
    console.error("DB update error:", dbError);
    return NextResponse.json(
      { error: "Failed to save letterhead reference." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, path: storagePath });
}
