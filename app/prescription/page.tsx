"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { getTestLabel } from "@/lib/data/diagnosticTests";
import { cn } from "@/lib/utils";

interface Prescription {
  id: string;
  patient_name: string;
  patient_age: number | null;
  patient_mobile: string;
  tests: string[];
  created_at: string;
}

interface SendLinks {
  signedUrl: string;
  waPatient: string | null;
  waDoctor: string | null;
}

export default function DashboardPage() {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingLinks, setLoadingLinks] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [activeLinks, setActiveLinks] = useState<Record<string, SendLinks>>({});

  const fetchHistory = useCallback(async () => {
    setLoading(true);
    setError(null);
    const res = await fetch("/api/prescription/history");
    if (!res.ok) {
      setError("Failed to load prescriptions.");
      setLoading(false);
      return;
    }
    const json = await res.json();
    setPrescriptions(json.prescriptions ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  async function getLinks(id: string) {
    if (activeLinks[id]) return;
    setLoadingLinks(id);
    const res = await fetch(`/api/prescription/sign/${id}`);
    setLoadingLinks(null);
    if (!res.ok) return;
    const json = await res.json();
    setActiveLinks((prev) => ({
      ...prev,
      [id]: {
        signedUrl: json.signedUrl,
        waPatient: json.waPatient,
        waDoctor: json.waDoctor,
      },
    }));
  }

  async function deletePrescription(id: string) {
    if (
      !window.confirm(
        "Delete this prescription permanently? The PDF will be removed and cannot be recovered.",
      )
    ) {
      return;
    }
    setDeletingId(id);
    try {
      const res = await fetch(`/api/prescription/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        alert(json.error ?? "Could not delete. Please try again.");
        return;
      }
      setPrescriptions((prev) => prev.filter((p) => p.id !== id));
      setActiveLinks((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-2xl font-bold tracking-tight"
            style={{ color: "#1B2A41" }}
          >
            Dashboard
          </h1>
          {!loading && !error && (
            <p className="mt-0.5 text-sm font-medium" style={{ color: "#00A9B7" }}>
              {prescriptions.length} prescription
              {prescriptions.length !== 1 ? "s" : ""} issued
            </p>
          )}
        </div>

        <Link href="/prescription/new">
          <button
            className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
            style={{
              background: "linear-gradient(135deg, #F4A300 0%, #E49501 100%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Prescription
          </button>
        </Link>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-2xl bg-red-50 px-6 py-4 text-sm text-red-600">
          {error}{" "}
          <button onClick={fetchHistory} className="font-semibold underline ml-1">
            Retry
          </button>
        </div>
      )}

      {/* Loading skeleton */}
      {loading && (
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-2xl border border-white bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2.5">
                  <div className="h-4 w-36 rounded-lg bg-gray-100" />
                  <div className="h-3 w-52 rounded-lg bg-gray-100" />
                  <div className="h-3 w-44 rounded-lg bg-gray-100" />
                </div>
                <div className="h-8 w-24 rounded-lg bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && prescriptions.length === 0 && (
        <div
          className="rounded-3xl border-2 border-dashed py-20 text-center"
          style={{ borderColor: "#99E5EE", background: "rgba(0,169,183,0.03)" }}
        >
          <div
            className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
            style={{ background: "rgba(0,169,183,0.1)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: "#00A9B7" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-base font-semibold" style={{ color: "#1B2A41" }}>
            No prescriptions yet
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Create your first prescription to see it here.
          </p>
          <Link href="/prescription/new" className="mt-6 inline-block">
            <button
              className="rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #F4A300 0%, #E49501 100%)",
              }}
            >
              + New Prescription
            </button>
          </Link>
        </div>
      )}

      {/* Prescription list */}
      {!loading && !error && prescriptions.length > 0 && (
        <div className="space-y-3">
          {prescriptions.map((rx) => {
            const links = activeLinks[rx.id];
            const isLoadingThis = loadingLinks === rx.id;
            const isDeletingThis = deletingId === rx.id;
            const date = new Date(rx.created_at).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              timeZone: "Asia/Kolkata",
            });

            return (
              <div
                key={rx.id}
                className="rounded-2xl border border-transparent bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                style={{ borderLeftWidth: 4, borderLeftColor: "#00A9B7" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p
                        className="font-semibold"
                        style={{ color: "#1B2A41" }}
                      >
                        {rx.patient_name}
                      </p>
                      {rx.patient_age && (
                        <span
                          className="rounded-full px-2 py-0.5 text-xs font-medium"
                          style={{
                            background: "rgba(0,169,183,0.1)",
                            color: "#007D8C",
                          }}
                        >
                          {rx.patient_age} yrs
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm text-gray-400">
                      {rx.patient_mobile} · {date}
                    </p>
                    {rx.tests?.length > 0 && (
                      <p className="mt-1.5 text-xs text-gray-400 line-clamp-1">
                        {rx.tests
                          .slice(0, 4)
                          .map((id) => getTestLabel(id))
                          .join(", ")}
                        {rx.tests.length > 4 &&
                          ` +${rx.tests.length - 4} more`}
                      </p>
                    )}
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => deletePrescription(rx.id)}
                      disabled={isDeletingThis || isLoadingThis}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-400 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                      aria-label="Delete prescription"
                      title="Delete prescription"
                    >
                      {isDeletingThis ? (
                        <MiniSpinner />
                      ) : (
                        <TrashIcon />
                      )}
                    </button>
                    <button
                      onClick={() => getLinks(rx.id)}
                      disabled={isLoadingThis || isDeletingThis}
                      className={cn(
                        "rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all disabled:opacity-60",
                        links
                          ? "border-transparent text-white"
                          : "border-gray-200 bg-white text-gray-600 hover:border-[#00A9B7] hover:text-[#00A9B7]",
                      )}
                      style={
                        links
                          ? {
                              background:
                                "linear-gradient(135deg, #00A9B7 0%, #007D8C 100%)",
                            }
                          : {}
                      }
                    >
                      {isLoadingThis ? (
                        <span className="flex items-center gap-1.5">
                          <MiniSpinner />
                          Loading…
                        </span>
                      ) : links ? (
                        "Links Ready ✓"
                      ) : (
                        "Get Links"
                      )}
                    </button>
                  </div>
                </div>

                {links && (
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                    {links.waPatient && (
                      <a
                        href={links.waPatient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg bg-green-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-600 transition-colors"
                      >
                        <WhatsAppIcon />
                        Send to Patient
                      </a>
                    )}
                    {links.waDoctor && (
                      <a
                        href={links.waDoctor}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:opacity-90"
                        style={{ background: "#00A9B7" }}
                      >
                        <WhatsAppIcon />
                        Send to Myself
                      </a>
                    )}
                    <a
                      href={links.signedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Download PDF
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );
}

function MiniSpinner() {
  return (
    <svg
      className="h-3 w-3 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
