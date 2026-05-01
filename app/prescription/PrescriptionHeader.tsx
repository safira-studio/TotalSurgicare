"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown, LayoutDashboard, UserPlus, Stethoscope, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import ProfileDrawer from "./ProfileDrawer";

interface Props {
  doctorName?: string;
  clinicName: string;
  onProfileSaved?: () => void;
}

const NAV_ITEMS = [
  { href: "/prescription", label: "Dashboard", icon: LayoutDashboard },
  { href: "/prescription/reception", label: "Reception", icon: UserPlus },
  { href: "/opd-prescribing", label: "OPD prescribing", icon: Stethoscope },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/prescription") return pathname === "/prescription" || pathname === "/prescription/";
  if (href === "/opd-prescribing") return pathname.includes("opd-prescribing");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function PrescriptionHeader({ doctorName, clinicName, onProfileSaved }: Props) {
  const router = useRouter();
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeItem = NAV_ITEMS.find((item) => isActive(pathname, item.href));

  /* Close dropdown on outside click */
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  /* Close dropdown on route change */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  async function handleLogout() {
    setOpen(false);
    setLoggingOut(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/prescription/login");
    router.refresh();
  }

  // Compute initials from doctorName for the avatar
  const initials = (doctorName ?? "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("") || "Dr";

  return (
    <>
      <ProfileDrawer open={profileOpen} onClose={() => setProfileOpen(false)} onProfileSaved={onProfileSaved} />

      <header
        className="sticky top-0 z-50"
        style={{
          background: "linear-gradient(180deg,#121C2E 0%,#0F1729 55%,#0B1220 100%)",
          boxShadow: "0 8px 32px -8px rgba(11,18,32,0.45)",
        }}
      >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3 sm:px-5 lg:px-6">

        {/* ── Brand + Profile button ────────────────────────────── */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          {/* Clickable avatar — opens profile drawer */}
          <button
            type="button"
            onClick={() => setProfileOpen(true)}
            title="View / edit your profile"
            aria-label="Open profile"
            className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FD9E6]"
            style={{ background: "linear-gradient(135deg,#F4A300 0%,#E49501 100%)" }}
          >
            {initials}
            {/* Subtle edit indicator on hover */}
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#00A9B7] opacity-0 shadow transition-opacity group-hover:opacity-100">
              <svg className="h-2 w-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15.232 5.232l3.536 3.536M9 13l6.768-6.768a2 2 0 112.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z" />
              </svg>
            </span>
          </button>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold leading-tight text-white">{clinicName}</p>
            {doctorName && (
              <button
                type="button"
                onClick={() => setProfileOpen(true)}
                className="truncate text-xs font-medium transition-colors hover:text-white/90 focus:outline-none"
                style={{ color: "#7FD9E6" }}
              >
                {doctorName}
              </button>
            )}
          </div>
        </div>

        {/* ── Desktop nav ───────────────────────────────────────── */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive(pathname, href)
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white",
              )}
            >
              {label}
            </Link>
          ))}
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="ml-1 flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white disabled:opacity-50"
          >
            <LogOut className="h-3.5 w-3.5" />
            {loggingOut ? "…" : "Logout"}
          </button>
        </nav>

        {/* ── Mobile dropdown trigger ───────────────────────────── */}
        <div ref={dropdownRef} className="relative md:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-haspopup="true"
            className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 py-2 pl-2 pr-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            {activeItem ? (
              <>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <activeItem.icon className="h-4 w-4 text-[#7FD9E6]" strokeWidth={2} />
                </span>
                <span>{activeItem.label}</span>
              </>
            ) : (
              <span>Menu</span>
            )}
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-white/60 transition-transform duration-200",
                open && "rotate-180",
              )}
            />
          </button>

          {/* Dropdown panel */}
          {open && (
            <div className="absolute right-0 top-[calc(100%+8px)] z-[200] w-56 overflow-hidden rounded-2xl border border-[#1B2A41]/12 bg-[#FFFCF9] shadow-[0_16px_48px_-8px_rgba(11,18,32,0.28)] ring-1 ring-black/5">
              <nav className="flex flex-col gap-0.5 p-1.5" aria-label="Mobile navigation">
                {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
                  const active = isActive(pathname, href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-colors",
                        active
                          ? "bg-[#E5F8F9] text-[#065056]"
                          : "text-[#1B2A41] hover:bg-stone-100",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
                          active ? "bg-[#00A9B7]/18" : "bg-stone-100",
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-4 w-4",
                            active ? "text-[#00A9B7]" : "text-stone-500",
                          )}
                          strokeWidth={active ? 2.2 : 1.8}
                        />
                      </span>
                      {label}
                      {active && (
                        <span className="ml-auto h-2 w-2 rounded-full bg-[#00A9B7]" />
                      )}
                    </Link>
                  );
                })}
              </nav>
              <div className="border-t border-stone-200/80 p-1.5">
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <LogOut className="h-4 w-4 text-red-500" strokeWidth={1.8} />
                  </span>
                  {loggingOut ? "Logging out…" : "Logout"}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
    </>
  );
}
