import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

function escapeIlikeLiteral(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/%/g, "\\%").replace(/_/g, "\\_");
}

export async function GET(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const q = new URL(req.url).searchParams.get("q")?.trim() ?? "";

  const admin = createAdminClient();
  let query = admin.from("diagnoses").select("id, name").order("name", { ascending: true }).limit(80);

  if (q.length > 0) {
    query = query.ilike("name", `%${escapeIlikeLiteral(q)}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("diagnoses list:", error);
    return NextResponse.json(
      {
        error:
          "Failed to load diagnoses. Run supabase/medicine_rx_shared_diagnoses_catalog.sql (or medicine_rx_setup.sql) in Supabase.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ diagnoses: data ?? [] });
}

const postSchema = z.object({
  name: z.string().min(1).max(200),
});

export async function POST(req: Request) {
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

  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation error", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const name = parsed.data.name.trim();
  const admin = createAdminClient();

  const { data: dupRow, error: dupErr } = await admin
    .from("diagnoses")
    .select("id, name")
    .ilike("name", escapeIlikeLiteral(name))
    .maybeSingle();

  if (!dupErr && dupRow && dupRow.name.trim().toLowerCase() === name.toLowerCase()) {
    return NextResponse.json({ diagnosis: dupRow, created: false });
  }

  const { data: row, error: insErr } = await admin
    .from("diagnoses")
    .insert({ name })
    .select("id, name")
    .single();

  if (insErr) {
    if (insErr.code === "23505") {
      const { data: again } = await admin
        .from("diagnoses")
        .select("id, name")
        .ilike("name", escapeIlikeLiteral(name))
        .maybeSingle();
      if (again && again.name.trim().toLowerCase() === name.toLowerCase()) {
        return NextResponse.json({ diagnosis: again, created: false });
      }
    }
    console.error("diagnoses insert:", insErr);
    return NextResponse.json(
      { error: "Could not add diagnosis. Check database setup (diagnoses table)." },
      { status: 500 },
    );
  }

  return NextResponse.json({ diagnosis: row, created: true });
}
