import type { createAdminClient } from "@/lib/supabase/admin";

type Admin = ReturnType<typeof createAdminClient>;

/**
 * Loads the signed-in doctor's hospital_id (multi-tenant).
 * Returns 503 if the column is missing (migration not applied).
 */
export async function requireDoctorHospitalId(
  admin: Admin,
  userId: string,
): Promise<
  | { ok: true; hospitalId: string }
  | { ok: false; status: number; error: string }
> {
  const { data: row, error } = await admin
    .from("doctors")
    .select("hospital_id")
    .eq("id", userId)
    .maybeSingle();

  if (error?.code === "PGRST204" || error?.message?.includes("hospital_id")) {
    return {
      ok: false,
      status: 503,
      error:
        "Database is not migrated for multi-hospital mode. Run supabase/multi_tenant_hospitals.sql in Supabase SQL Editor.",
    };
  }

  if (error || !row) {
    return { ok: false, status: 404, error: "Doctor profile not found." };
  }

  const hid = (row as { hospital_id?: string | null }).hospital_id;
  if (!hid) {
    return {
      ok: false,
      status: 400,
      error: "Your profile has no hospital assigned. Contact support.",
    };
  }

  return { ok: true, hospitalId: hid };
}
