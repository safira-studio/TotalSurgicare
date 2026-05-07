import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { z } from "zod";

/** Unread completion notifications for the referring doctor. */
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
    .from("referral_notifications")
    .select("id, read_at, created_at, referral_id")
    .eq("doctor_id", user.id)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error("referral_notifications GET:", error);
    return NextResponse.json({ error: "Failed to load notifications." }, { status: 500 });
  }

  const list = rows ?? [];
  const refIds = list.map((r) => r.referral_id).filter(Boolean);
  let refMap = new Map<
    string,
    { public_code: string; patient_name: string; target_doctor_name: string; completed_at: string | null }
  >();
  if (refIds.length > 0) {
    const { data: refs } = await admin
      .from("referrals")
      .select("id, public_code, patient_name, target_doctor_name, completed_at")
      .in("id", refIds);
    if (refs) {
      refMap = new Map(refs.map((x) => [x.id, x]));
    }
  }

  const items = list.map((n) => ({
    id: n.id,
    read_at: n.read_at,
    created_at: n.created_at,
    referral: refMap.get(n.referral_id) ?? null,
  }));

  const unread = items.filter((r) => !r.read_at).length;

  return NextResponse.json({ items, unread });
}

const markReadSchema = z.object({
  ids: z.array(z.string().uuid()).min(1).max(100),
});

export async function PATCH(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = markReadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation error", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createAdminClient();
  const now = new Date().toISOString();

  const { error } = await admin
    .from("referral_notifications")
    .update({ read_at: now })
    .eq("doctor_id", user.id)
    .in("id", parsed.data.ids)
    .is("read_at", null);

  if (error) {
    console.error("referral_notifications PATCH:", error);
    return NextResponse.json({ error: "Could not mark read." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
