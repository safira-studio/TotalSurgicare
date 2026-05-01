import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { detectLetterheadFields } from "@/lib/letterhead/detect";

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

  // "true" means the letterhead already has the doctor's name/clinic/contact
  // info printed on it, so the PDF builder should NOT add an overlay.
  const letterheadHasDoctorInfo =
    (formData.get("letterhead_has_doctor_info") as string | null) === "true";

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

  // Run AI coordinate detection (best-effort; null if key missing or model fails)
  const mimeType = file.type === "image/png" ? "image/png" : "image/jpeg";
  const detectedCoords = await detectLetterheadFields(buffer, mimeType);

  // Try to save all fields including the new letterhead_has_doctor_info column.
  // If the column doesn't exist yet in the DB (schema not migrated), fall back
  // to saving only the core fields so the upload never fails for that reason.
  const fullUpdate = await admin
    .from("doctors")
    .update({
      letterhead_path: storagePath,
      letterhead_coords: detectedCoords ?? null,
      letterhead_has_doctor_info: letterheadHasDoctorInfo,
    })
    .eq("id", user.id);

  if (fullUpdate.error) {
    // PGRST204 = column not found in schema cache → column not yet migrated.
    if (fullUpdate.error.code === "PGRST204") {
      console.warn(
        "letterhead_has_doctor_info column missing – falling back to core-fields update. " +
        "Run the migration: ALTER TABLE public.doctors ADD COLUMN IF NOT EXISTS letterhead_has_doctor_info boolean NOT NULL DEFAULT false;",
      );

      const fallbackUpdate = await admin
        .from("doctors")
        .update({
          letterhead_path: storagePath,
          letterhead_coords: detectedCoords ?? null,
        })
        .eq("id", user.id);

      if (fallbackUpdate.error) {
        console.error("DB update error (fallback):", fallbackUpdate.error);
        return NextResponse.json(
          { error: "Failed to save letterhead reference." },
          { status: 500 },
        );
      }
    } else {
      console.error("DB update error:", fullUpdate.error);
      return NextResponse.json(
        { error: "Failed to save letterhead reference." },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({
    ok: true,
    path: storagePath,
    coordsDetected: detectedCoords !== null,
    // Let the client know whether the flag was actually persisted
    doctorInfoFlagSaved: fullUpdate.error === null,
  });
}
