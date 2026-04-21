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
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            Rx
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 leading-tight">
              {clinicName}
            </p>
            {doctorName && (
              <p className="text-xs text-gray-500">{doctorName}</p>
            )}
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <Link
            href="/prescription"
            className="rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            New Prescription
          </Link>
          <Link
            href="/prescription/history"
            className="rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            History
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="text-xs"
          >
            Logout
          </Button>
        </nav>
      </div>
    </header>
  );
}
