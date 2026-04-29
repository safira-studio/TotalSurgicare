"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  doctorName?: string;
  clinicName: string;
}

export default function PrescriptionHeader({ doctorName, clinicName }: Props) {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/prescription/login");
    router.refresh();
  }

  return (
    <header
      className="shadow-[0_12px_40px_-12px_rgba(11,18,32,0.35)]"
      style={{
        background: "linear-gradient(180deg, #121C2E 0%, #0F1729 55%, #0B1220 100%)",
      }}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between border-b border-white/[0.06] px-4 py-3.5">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white shadow-md"
            style={{
              background: "linear-gradient(135deg, #F4A300 0%, #E49501 100%)",
            }}
          >
            Rx
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight text-white">
              {clinicName}
            </p>
            {doctorName && (
              <p className="text-xs" style={{ color: "#99E5EE" }}>
                {doctorName}
              </p>
            )}
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
          <Link
            href="/prescription"
            className="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Dashboard
          </Link>
          <Link
            href="/prescription/reception"
            className="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Reception
          </Link>
          <Link
            href="/prescription/opd-prescribing"
            className="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            OPD prescribing
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="ml-2 rounded-lg border-white/20 bg-transparent text-xs font-medium text-white/70 hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            Logout
          </Button>
        </nav>
      </div>
    </header>
  );
}
