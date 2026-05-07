"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lux, lux } from "@/lib/prescriptionLuxury";

type Outbound = {
  id: string;
  status: string;
  public_code: string;
  patient_name: string;
  patient_mobile: string | null;
  target_doctor_name: string;
  diagnoses_summary: string;
  completed_at: string | null;
  created_at: string;
};

type Inbound = {
  id: string;
  status: string;
  public_code: string;
  patient_name: string;
  patient_mobile: string | null;
  diagnoses_summary: string;
  complaints_snippet: string | null;
  referring_doctor_name: string;
  referring_clinic_name: string | null;
  created_at: string;
};

export default function ReferralsPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"out" | "in">("out");
  const [outbound, setOutbound] = useState<Outbound[]>([]);
  const [outLoading, setOutLoading] = useState(true);
  const [outError, setOutError] = useState<string | null>(null);
  const [notifUnreadIds, setNotifUnreadIds] = useState<string[]>([]);
  const [dismissing, setDismissing] = useState(false);

  const [codeQ, setCodeQ] = useState("");
  const [phoneQ, setPhoneQ] = useState("");
  const [inbound, setInbound] = useState<Inbound[]>([]);
  const [inLoading, setInLoading] = useState(false);
  const [inError, setInError] = useState<string | null>(null);
  const [completeBusy, setCompleteBusy] = useState<string | null>(null);

  const loadOutbound = useCallback(async () => {
    setOutLoading(true);
    setOutError(null);
    try {
      const [outRes, nRes] = await Promise.all([
        fetch("/api/referrals/outbound"),
        fetch("/api/referrals/notifications"),
      ]);
      const json = await outRes.json().catch(() => ({}));
      if (!outRes.ok) {
        setOutError(json.error ?? "Could not load.");
        setOutbound([]);
        return;
      }
      setOutbound(json.referrals ?? []);

      const nj = await nRes.json().catch(() => ({}));
      const items = (nj.items ?? []) as { id: string; read_at: string | null }[];
      setNotifUnreadIds(items.filter((x) => !x.read_at).map((x) => x.id));
    } finally {
      setOutLoading(false);
    }
  }, []);

  async function dismissNotifications() {
    if (notifUnreadIds.length === 0) return;
    setDismissing(true);
    try {
      const res = await fetch("/api/referrals/notifications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: notifUnreadIds }),
      });
      if (res.ok) {
        setNotifUnreadIds([]);
        router.refresh();
      }
    } finally {
      setDismissing(false);
    }
  }

  const fetchInboundFiltered = useCallback(async (code: string, phone: string) => {
    setInLoading(true);
    setInError(null);
    try {
      const params = new URLSearchParams();
      const c = code.trim();
      const p = phone.trim();
      if (c) params.set("code", c);
      if (!c && p) params.set("phone", p);
      const qs = params.toString();
      const res = await fetch(qs ? `/api/referrals/inbound?${qs}` : `/api/referrals/inbound`);
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setInError(json.error ?? "Lookup failed.");
        setInbound([]);
        return;
      }
      setInbound(json.referrals ?? []);
    } finally {
      setInLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadOutbound();
  }, [loadOutbound]);

  useEffect(() => {
    if (tab !== "in") return;
    setCodeQ("");
    setPhoneQ("");
    void fetchInboundFiltered("", "");
  }, [tab, fetchInboundFiltered]);

  async function searchInbound(e?: React.FormEvent) {
    e?.preventDefault();
    await fetchInboundFiltered(codeQ, phoneQ);
  }

  async function markInboundComplete(referralId: string) {
    if (!window.confirm("Mark this referral complete? The referring doctor will be notified.")) {
      return;
    }
    setCompleteBusy(referralId);
    setInError(null);
    try {
      const res = await fetch("/api/referrals/inbound/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ referralId }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setInError(json.error ?? "Could not update.");
        return;
      }
      await fetchInboundFiltered("", "");
      await loadOutbound();
    } finally {
      setCompleteBusy(null);
    }
  }

  return (
    <div className={lux.shell}>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-light tracking-tight" style={{ color: Lux.ink }}>
            Referrals
          </h1>
          <p className="mt-1 text-sm text-stone-600">
            Track referrals you send and confirm patients referred to your hospital (incoming list shows
            referrals where <span className="font-medium">receiving hospital</span> is yours — open the Incoming tab
            to load pending items automatically).
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/prescription/settlements"
            className="text-sm font-semibold underline decoration-teal-600/40 underline-offset-2"
            style={{ color: Lux.tealDeep }}
          >
            Settlements →
          </Link>
          <Link
            href="/prescription"
            className="text-sm font-semibold underline decoration-teal-600/40 underline-offset-2"
            style={{ color: Lux.tealDeep }}
          >
            ← Dashboard
          </Link>
        </div>
      </div>

      <div className="mb-6 flex gap-2 rounded-xl bg-stone-100/80 p-1">
        <button
          type="button"
          onClick={() => setTab("out")}
          className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition ${
            tab === "out" ? "bg-white text-stone-900 shadow-sm" : "text-stone-600"
          }`}
        >
          I referred out
        </button>
        <button
          type="button"
          onClick={() => setTab("in")}
          className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition ${
            tab === "in" ? "bg-white text-stone-900 shadow-sm" : "text-stone-600"
          }`}
        >
          Incoming (my clinic)
        </button>
      </div>

      {tab === "out" && (
        <div className="space-y-3">
          {notifUnreadIds.length > 0 && (
            <div className="flex flex-col gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-emerald-950">
                You have {notifUnreadIds.length} new &quot;referral completed&quot; update(s).
              </p>
              <button
                type="button"
                disabled={dismissing}
                onClick={() => void dismissNotifications()}
                className="shrink-0 rounded-lg bg-emerald-800 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-60"
              >
                {dismissing ? "Saving…" : "Mark all as read"}
              </button>
            </div>
          )}
          {outLoading && <p className="text-sm text-stone-500">Loading…</p>}
          {outError && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              {outError}
            </div>
          )}
          {!outLoading && !outError && outbound.length === 0 && (
            <p className="text-sm text-stone-500">
              No tracked referrals yet. They appear when you issue an OPD prescription with a valid &quot;refer
              to&quot; doctor and mobile.
            </p>
          )}
          {!outLoading &&
            outbound.map((r) => (
              <div
                key={r.id}
                className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="font-mono text-sm font-semibold text-teal-800">{r.public_code}</p>
                    <p className="mt-1 font-medium text-stone-900">{r.patient_name}</p>
                    <p className="text-xs text-stone-500">
                      To Dr. {r.target_doctor_name}
                      {r.patient_mobile && ` · Patient ${r.patient_mobile}`}
                    </p>
                    {r.diagnoses_summary && (
                      <p className="mt-2 line-clamp-2 text-xs text-stone-600">{r.diagnoses_summary}</p>
                    )}
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${
                      r.status === "completed"
                        ? "bg-emerald-100 text-emerald-900"
                        : r.status === "cancelled"
                          ? "bg-stone-200 text-stone-700"
                          : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
                {r.completed_at && (
                  <p className="mt-2 text-xs text-stone-500">
                    Completed{" "}
                    {new Date(r.completed_at).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                      timeZone: "Asia/Kolkata",
                    })}
                  </p>
                )}
              </div>
            ))}
        </div>
      )}

      {tab === "in" && (
        <div className="space-y-4">
          <form onSubmit={searchInbound} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end">
            <div className="flex-1 min-w-[140px]">
              <label htmlFor="referral-id-q" className="block text-xs font-semibold uppercase text-stone-500">Referral ID</label>
              <input
                id="referral-id-q"
                value={codeQ}
                onChange={(e) => {
                  setCodeQ(e.target.value);
                }}
                placeholder="REF-…"
                className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm"
              />
            </div>
            <div className="flex-1 min-w-[140px]">
              <label htmlFor="referral-phone-q" className="block text-xs font-semibold uppercase text-stone-500">Patient mobile</label>
              <input
                id="referral-phone-q"
                value={phoneQ}
                onChange={(e) => {
                  setPhoneQ(e.target.value);
                }}
                placeholder="10-digit mobile"
                className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={inLoading}
              className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow disabled:opacity-60"
            >
              {inLoading ? "Searching…" : "Search"}
            </button>
            <button
              type="button"
              disabled={inLoading}
              onClick={() => {
                setCodeQ("");
                setPhoneQ("");
                void fetchInboundFiltered("", "");
              }}
              className="rounded-xl border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-700"
            >
              Show all pending
            </button>
          </form>
          {inError && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
              {inError}
            </div>
          )}
          {inbound.length === 0 && !inLoading && !inError && (
            <p className="text-sm text-stone-500">
              No pending referrals for <span className="font-medium">your hospital</span> right now. On the
              referring account, check <span className="font-medium">I referred out</span> — if nothing appears,
              the Rx may not have included a valid referral (specialist name + mobile + receiving hospital). If you
              see a row there but not here, confirm this login&apos;s hospital is the <span className="font-medium">receiving</span>{" "}
              hospital on that referral.
            </p>
          )}
          {inbound.map((r) => (
            <div key={r.id} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <p className="font-mono text-sm font-semibold text-teal-800">{r.public_code}</p>
              <p className="mt-1 font-medium text-stone-900">{r.patient_name}</p>
              {r.patient_mobile && <p className="text-xs text-stone-500">Mobile: {r.patient_mobile}</p>}
              <p className="mt-2 text-xs text-stone-600">
                From Dr. {r.referring_doctor_name}
                {r.referring_clinic_name ? ` · ${r.referring_clinic_name}` : ""}
              </p>
              {r.complaints_snippet && (
                <p className="mt-2 text-xs text-stone-700">
                  <span className="font-semibold">Complaints:</span> {r.complaints_snippet}
                </p>
              )}
              {r.diagnoses_summary && (
                <p className="mt-1 text-xs text-stone-700">
                  <span className="font-semibold">Dx:</span> {r.diagnoses_summary}
                </p>
              )}
              <button
                type="button"
                disabled={completeBusy === r.id}
                onClick={() => void markInboundComplete(r.id)}
                className="mt-4 w-full rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-violet-800 disabled:opacity-60 sm:w-auto"
              >
                {completeBusy === r.id ? "Saving…" : "Mark complete (bill paid)"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
