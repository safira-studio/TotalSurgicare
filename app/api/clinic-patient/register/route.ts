import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { normalizeIndianMobile } from "@/lib/phone";

const bodySchema = z.object({
  fullName: z.string().min(1, "Name is required").max(120),
  age: z.number().int().min(0).max(130),
  bp: z.string().max(40).optional().nullable(),
  mobile: z.string().max(32).optional().nullable(),
  allergies: z.string().max(500).optional().nullable(),
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

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation error", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { fullName, age, bp, mobile, allergies } = parsed.data;

  let mobileDigits: string | null = null;
  if (mobile?.trim()) {
    const m = normalizeIndianMobile(mobile.trim());
    if (!m.ok) {
      return NextResponse.json(
        { error: `Mobile: ${m.error}` },
        { status: 400 },
      );
    }
    mobileDigits = m.digits;
  }

  const admin = createAdminClient();

  const { data: nextCode, error: rpcErr } = await admin.rpc("next_clinic_opd_code");
  if (rpcErr || typeof nextCode !== "string" || !nextCode) {
    console.error("next_clinic_opd_code:", rpcErr);
    return NextResponse.json(
      {
        error:
          "Could not allocate OPD number. Run supabase/medicine_rx_opd_sequence.sql (or re-run medicine_rx_setup.sql) in Supabase SQL.",
      },
      { status: 500 },
    );
  }

  const { data, error } = await admin
    .from("clinic_patients")
    .insert({
      public_code: nextCode,
      full_name: fullName.trim(),
      age,
      bp: bp?.trim() || null,
      mobile: mobileDigits,
      allergies: allergies?.trim() || null,
      registered_by: user.id,
    })
    .select("id, public_code")
    .single();

  if (!error && data) {
    return NextResponse.json({
      id: data.id,
      publicCode: data.public_code,
    });
  }

  console.error("clinic_patients insert (OPD):", error);
  return NextResponse.json(
    { error: "Could not save patient. Check database setup (medicine_rx_setup.sql)." },
    { status: 500 },
  );
}
