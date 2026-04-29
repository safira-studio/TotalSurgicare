import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { kolkataDateString, utcBoundsForKolkataDate } from "@/lib/kolkataDay";

/**
 * GET /api/clinic-patient/doctor-queue
 * Today's walk-ins (Asia/Kolkata calendar day) still waiting for a medicine Rx.
 * Any logged-in doctor sees the whole clinic queue for that day.
 */
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
  const dateParam = searchParams.get("date")?.trim();
  const ymd =
    dateParam && /^\d{4}-\d{2}-\d{2}$/.test(dateParam)
      ? dateParam
      : kolkataDateString();

  const { startIso, endIso } = utcBoundsForKolkataDate(ymd);

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("clinic_patients")
    .select(
      "id, public_code, full_name, age, bp, mobile, allergies, created_at, medicine_rx_done_at",
    )
    .is("medicine_rx_done_at", null)
    .gte("created_at", startIso)
    .lte("created_at", endIso)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("doctor-queue:", error);
    return NextResponse.json(
      {
        error:
          "Queue unavailable. Run the latest supabase/medicine_rx_setup.sql (adds medicine_rx_done_at) if you see a column error.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    date: ymd,
    patients: data ?? [],
  });
}
