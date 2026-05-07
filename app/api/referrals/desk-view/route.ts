import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

function extractUuid(input: string | null | undefined): string | null {
  if (!input) return null;
  // 1) Standard UUID
  const uuid = input.match(
    /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
  )?.[0];
  if (uuid) return uuid.toLowerCase();

  // 2) Compact UUID: 32 hex chars (no dashes)
  const compact = input.match(/[0-9a-f]{32}/i)?.[0];
  if (!compact) return null;
  const c = compact.toLowerCase();
  return `${c.slice(0, 8)}-${c.slice(8, 12)}-${c.slice(12, 16)}-${c.slice(16, 20)}-${c.slice(20)}`;
}

/**
 * Public (no auth): load referral details for the receiving clinic using the
 * secret completion_token from the PDF / WhatsApp link.
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tokenRaw = (searchParams.get("t") ?? searchParams.get("token"))?.trim();
  const token = extractUuid(tokenRaw);
  if (!token) {
    return NextResponse.json({ error: "Invalid link." }, { status: 400 });
  }

  const admin = createAdminClient();
  const { data: row, error } = await admin
    .from("referrals")
    .select(
      "id, status, public_code, patient_name, patient_mobile, diagnoses_summary, complaints_snippet, target_doctor_name, referring_doctor_name, referring_clinic_name, completed_at, created_at",
    )
    .eq("completion_token", token)
    .maybeSingle();

  if (error) {
    console.error("referrals desk-view:", error);
    return NextResponse.json({ error: "Could not load referral." }, { status: 500 });
  }

  if (!row) {
    return NextResponse.json({ error: "Referral not found." }, { status: 404 });
  }

  return NextResponse.json({
    referral: {
      id: row.id,
      status: row.status,
      publicCode: row.public_code,
      patientName: row.patient_name,
      patientMobile: row.patient_mobile,
      diagnosesSummary: row.diagnoses_summary,
      complaintsSnippet: row.complaints_snippet,
      targetDoctorName: row.target_doctor_name,
      referringDoctorName: row.referring_doctor_name,
      referringClinicName: row.referring_clinic_name,
      completedAt: row.completed_at,
      createdAt: row.created_at,
    },
  });
}
