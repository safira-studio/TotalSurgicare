import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();

  const { data: rx, error: fetchError } = await admin
    .from("medicine_prescriptions")
    .select("id, doctor_id, pdf_path")
    .eq("id", id)
    .single();

  if (fetchError || !rx) {
    return NextResponse.json({ error: "Prescription not found" }, { status: 404 });
  }

  if (rx.doctor_id !== user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (rx.pdf_path) {
    const { error: storageError } = await admin.storage
      .from("prescriptions")
      .remove([rx.pdf_path]);
    if (storageError) {
      console.error("Medicine PDF delete error:", storageError);
    }
  }

  const { error: deleteError } = await admin
    .from("medicine_prescriptions")
    .delete()
    .eq("id", id);

  if (deleteError) {
    console.error("medicine_prescriptions delete:", deleteError);
    return NextResponse.json({ error: "Failed to delete." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
