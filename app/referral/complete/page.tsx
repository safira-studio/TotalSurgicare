"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type ReferralView = {
  id: string;
  status: string;
  publicCode: string;
  patientName: string;
  patientMobile: string | null;
  diagnosesSummary: string;
  complaintsSnippet: string | null;
  targetDoctorName: string;
  referringDoctorName: string;
  referringClinicName: string | null;
  completedAt: string | null;
  createdAt: string;
};

function ReferralCompleteInner() {
  const searchParams = useSearchParams();
  const token = (searchParams.get("t") ?? searchParams.get("token"))?.trim() ?? "";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [referral, setReferral] = useState<ReferralView | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [doneMsg, setDoneMsg] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!token) {
      setError("This page needs a valid link (missing token).");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/referrals/desk-view?t=${encodeURIComponent(token)}`);
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Could not load referral.");
        setReferral(null);
        return;
      }
      setReferral(json.referral as ReferralView);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    void load();
  }, [load]);

  async function markComplete() {
    if (!token) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/referrals/desk-complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Could not save.");
        return;
      }
      if (json.alreadyCompleted) {
        setDoneMsg("This referral was already marked complete. Thank you.");
      } else {
        setDoneMsg("Marked complete. The referring doctor has been notified. Thank you.");
      }
      await load();
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-sm text-stone-600 shadow-sm">
        Loading referral…
      </div>
    );
  }

  if (error && !referral) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-900">
        {error}
      </div>
    );
  }

  if (!referral) return null;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">Referral completion</p>
        <h1 className="mt-1 font-serif text-2xl font-light text-stone-900">Receiving clinic</h1>
        <p className="mt-2 text-sm text-stone-600">
          Confirm after the patient has been seen and billing is settled.
        </p>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase text-stone-500">Referral ID</dt>
            <dd className="font-mono text-base font-semibold tracking-wide text-stone-900">
              {referral.publicCode}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-stone-500">Patient</dt>
            <dd className="font-medium text-stone-900">{referral.patientName}</dd>
            {referral.patientMobile && (
              <dd className="text-stone-600">Mobile: {referral.patientMobile}</dd>
            )}
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-stone-500">Referred by</dt>
            <dd className="text-stone-900">Dr. {referral.referringDoctorName}</dd>
            {referral.referringClinicName && (
              <dd className="text-stone-600">{referral.referringClinicName}</dd>
            )}
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-stone-500">For</dt>
            <dd className="text-stone-900">Dr. {referral.targetDoctorName}</dd>
          </div>
          {referral.complaintsSnippet && (
            <div>
              <dt className="text-xs font-semibold uppercase text-stone-500">Complaints</dt>
              <dd className="whitespace-pre-wrap text-stone-800">{referral.complaintsSnippet}</dd>
            </div>
          )}
          <div>
            <dt className="text-xs font-semibold uppercase text-stone-500">Diagnoses (from referral)</dt>
            <dd className="text-stone-800">{referral.diagnosesSummary || "—"}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-stone-500">Status</dt>
            <dd className="capitalize text-stone-900">{referral.status}</dd>
          </div>
        </dl>

        {error && (
          <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>
        )}
        {doneMsg && (
          <p className="mt-4 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900">{doneMsg}</p>
        )}

        {referral.status === "pending" && (
          <button
            type="button"
            disabled={submitting}
            onClick={() => void markComplete()}
            className="mt-6 w-full rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-teal-700 disabled:opacity-60"
          >
            {submitting ? "Saving…" : "Mark visit complete (bill paid)"}
          </button>
        )}

        {referral.status === "completed" && referral.completedAt && (
          <p className="mt-4 text-center text-sm text-stone-600">
            Completed on{" "}
            {new Date(referral.completedAt).toLocaleString("en-IN", {
              dateStyle: "medium",
              timeStyle: "short",
              timeZone: "Asia/Kolkata",
            })}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ReferralCompletePage() {
  return (
    <Suspense
      fallback={
        <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-sm text-stone-600 shadow-sm">
          Loading…
        </div>
      }
    >
      <ReferralCompleteInner />
    </Suspense>
  );
}
