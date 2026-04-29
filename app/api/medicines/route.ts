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
  let query = admin.from("medicines").select("id, name").order("name", { ascending: true }).limit(80);

  if (q.length > 0) {
    query = query.ilike("name", `%${escapeIlikeLiteral(q)}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("medicines list:", error);
    return NextResponse.json(
      {
        error:
          "Failed to load medicines. If you upgraded from per-doctor medicines, run supabase/medicine_rx_migrate_shared_medicines.sql.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ medicines: data ?? [] });
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
    .from("medicines")
    .select("id, name")
    .ilike("name", escapeIlikeLiteral(name))
    .maybeSingle();

  if (!dupErr && dupRow && dupRow.name.trim().toLowerCase() === name.toLowerCase()) {
    return NextResponse.json({ medicine: dupRow, created: false });
  }

  const { data: row, error: insErr } = await admin
    .from("medicines")
    .insert({ name })
    .select("id, name")
    .single();

  if (insErr) {
    if (insErr.code === "23502" && String(insErr.message).includes("doctor_id")) {
      return NextResponse.json(
        {
          error:
            "Database still has medicines.doctor_id. Re-run supabase/medicine_rx_setup.sql (or medicine_rx_migrate_shared_medicines.sql) in the Supabase SQL editor, then try again.",
        },
        { status: 500 },
      );
    }
    if (insErr.code === "23505") {
      const { data: again } = await admin
        .from("medicines")
        .select("id, name")
        .ilike("name", escapeIlikeLiteral(name))
        .maybeSingle();
      if (again && again.name.trim().toLowerCase() === name.toLowerCase()) {
        return NextResponse.json({ medicine: again, created: false });
      }
    }
    console.error("medicines insert:", insErr);
    return NextResponse.json(
      {
        error:
          "Could not add medicine. If the DB still has per-doctor columns, run medicine_rx_migrate_shared_medicines.sql.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ medicine: row, created: true });
}
