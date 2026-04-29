import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import PrescriptionHeader from "./PrescriptionHeader";

// Routes that should NOT trigger the letterhead gate
const ONBOARDING_PATHS = ["/prescription/onboarding"];
const AUTH_PATHS = ["/prescription/login", "/prescription/signup"];
/** Reception can register patients before letterhead exists */
const LETTERHEAD_OPTIONAL_PATHS = ["/prescription/reception"];

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
  const letterheadOptional = LETTERHEAD_OPTIONAL_PATHS.some((p) =>
    pathname.startsWith(p),
  );

  // Redirect to onboarding if letterhead not yet uploaded
  if (!doctor?.letterhead_path && !isOnboardingPage && !letterheadOptional) {
    redirect("/prescription/onboarding");
  }

  const showChrome = doctor?.letterhead_path || letterheadOptional;

  return (
    <div className="min-h-screen" style={{ background: "#F4F1EC" }}>
      {showChrome && (
        <PrescriptionHeader
          doctorName={doctor?.full_name ?? undefined}
          clinicName={doctor?.clinic_name ?? "Doctor Portal"}
        />
      )}
      <main className="mx-auto w-full max-w-7xl px-3 py-8 sm:px-5 lg:px-6">
        {children}
      </main>
    </div>
  );
}
