import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import PrescriptionHeader from "./PrescriptionHeader";

// Routes that should NOT trigger the letterhead gate
const ONBOARDING_PATHS = ["/prescription/onboarding"];
const AUTH_PATHS = ["/prescription/login", "/prescription/signup"];

export default async function PrescriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read pathname FIRST — before any auth check — to avoid redirect loops
  // on the login/signup pages themselves.
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";

  const isAuthPage = AUTH_PATHS.some((p) => pathname.startsWith(p));
  if (isAuthPage) {
    // No auth required, no chrome — just render the page
    return <>{children}</>;
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/prescription/login");
  }

  // Fetch doctor profile
  const { data: doctor } = await supabase
    .from("doctors")
    .select("full_name, clinic_name, letterhead_path")
    .eq("id", user.id)
    .single();

  const isOnboardingPage = ONBOARDING_PATHS.some((p) =>
    pathname.startsWith(p),
  );

  // Redirect to onboarding if letterhead not yet uploaded
  if (!doctor?.letterhead_path && !isOnboardingPage) {
    redirect("/prescription/onboarding");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PrescriptionHeader
        doctorName={doctor?.full_name ?? undefined}
        clinicName={doctor?.clinic_name ?? "Doctor Portal"}
      />
      <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
    </div>
  );
}
