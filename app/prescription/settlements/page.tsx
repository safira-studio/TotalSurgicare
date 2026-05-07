"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Lux, lux } from "@/lib/prescriptionLuxury";
import { kolkataDateString } from "@/lib/kolkataDay";

type SettlementListItem = {
  id: string;
  periodMonth: string;
  role: "from" | "to";
  fromHospital: { id: string; name: string };
  toHospital: { id: string; name: string };
  counterparty: { id: string; name: string };
  referralCount: number;
  amountMinor: number;
  status: "pending_cash" | "settled" | "disputed";
  otpState: "none" | "active" | "expired" | "locked";
  closedAt: string;
  settledAt: string | null;
  updatedAt: string;
};

function currentKolkataMonth(): string {
  return kolkataDateString().slice(0, 7);
}

function formatInr(minor: number): string {
  const rupees = minor / 100;
  return rupees.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 });
}

export default function SettlementsPage() {
  const [period, setPeriod] = useState<string>(() => currentKolkataMonth());
  const [items, setItems] = useState<SettlementListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = useMemo(() => items.find((x) => x.id === selectedId) ?? null, [items, selectedId]);

  const [closeBusy, setCloseBusy] = useState(false);
  const [otpBusy, setOtpBusy] = useState(false);
  const [confirmBusy, setConfirmBusy] = useState(false);
  const [reopenBusy, setReopenBusy] = useState(false);
  const [issuedOtp, setIssuedOtp] = useState<{ code: string; expiresAt: string } | null>(null);
  const [confirmCode, setConfirmCode] = useState("");
  const [actionMsg, setActionMsg] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    // Do not clear actionMsg / issuedOtp here — generateOtp (and similar) call load()
    // after setting them; clearing would hide the one-time code immediately.
    try {
      const res = await fetch(`/api/settlements?period=${encodeURIComponent(period)}`);
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Could not load settlements.");
        setItems([]);
        return;
      }
      setItems((json.settlements ?? []) as SettlementListItem[]);
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => {
    void load();
  }, [load]);

  async function closeMonth() {
    if (closeBusy) return;
    setCloseBusy(true);
    setError(null);
    setActionMsg(null);
    setIssuedOtp(null);
    try {
      const res = await fetch("/api/settlements/close-month", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ periodMonth: period }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Could not close month.");
        return;
      }
      setActionMsg(`Closed ${period}. ${json.created ?? 0} new settlement(s) created.`);
      await load();
    } finally {
      setCloseBusy(false);
    }
  }

  async function generateOtp() {
    if (!selected || otpBusy) return;
    setOtpBusy(true);
    setError(null);
    setActionMsg(null);
    setIssuedOtp(null);
    try {
      const res = await fetch(`/api/settlements/${selected.id}/generate-otp`, { method: "POST" });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Could not generate code.");
        return;
      }
      const code = String(json.otp?.code ?? "");
      const expiresAt = String(json.otp?.expiresAt ?? "");
      if (!code) {
        setError("Could not generate code.");
        return;
      }
      setIssuedOtp({ code, expiresAt });
      setActionMsg("Code generated. Copy it now — it cannot be retrieved later.");
      await load();
    } finally {
      setOtpBusy(false);
    }
  }

  async function confirmCash() {
    if (!selected || confirmBusy) return;
    const code = confirmCode.trim();
    if (!code) return;
    setConfirmBusy(true);
    setError(null);
    setActionMsg(null);
    try {
      const res = await fetch(`/api/settlements/${selected.id}/confirm-cash`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Could not confirm.");
        return;
      }
      setConfirmCode("");
      setActionMsg("Marked as settled.");
      await load();
    } finally {
      setConfirmBusy(false);
    }
  }

  async function reopenSettlement() {
    if (!selected || reopenBusy) return;
    if (
      !window.confirm(
        "Undo this settlement? It goes back to pending: OTP is cleared and the receiver must generate a new code (good for client demos).",
      )
    ) {
      return;
    }
    setReopenBusy(true);
    setError(null);
    setActionMsg(null);
    setIssuedOtp(null);
    setConfirmCode("");
    try {
      const res = await fetch(`/api/settlements/${selected.id}/reopen`, { method: "POST" });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Could not reopen settlement.");
        return;
      }
      setActionMsg("Settlement reopened — run generate code / confirm again.");
      await load();
    } finally {
      setReopenBusy(false);
    }
  }

  return (
    <div className={lux.shell}>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-light tracking-tight" style={{ color: Lux.ink }}>
            Settlements
          </h1>
          <p className="mt-1 text-sm text-stone-600">
            Cash-only coordination for referrals completed in a month. Counts are frozen when you close the month.
          </p>
        </div>
        <Link
          href="/prescription/referrals"
          className="text-sm font-semibold underline decoration-teal-600/40 underline-offset-2"
          style={{ color: Lux.tealDeep }}
        >
          ← Referrals
        </Link>
      </div>

      <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase text-stone-500" htmlFor="settle-month">
            Month (Kolkata)
          </label>
          <input
            id="settle-month"
            type="month"
            value={period}
            onChange={(e) => {
              setPeriod(e.target.value);
              setSelectedId(null);
              setIssuedOtp(null);
              setConfirmCode("");
            }}
            className="w-[180px] rounded-xl border border-stone-200 px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void load()}
            disabled={loading}
            className="rounded-xl border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 disabled:opacity-60"
          >
            {loading ? "Refreshing…" : "Refresh"}
          </button>
          <button
            type="button"
            onClick={() => void closeMonth()}
            disabled={closeBusy}
            aria-busy={closeBusy}
            className="rounded-xl bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow disabled:opacity-60"
          >
            {closeBusy ? "Closing…" : "Close month (snapshot)"}
          </button>
        </div>
      </div>

      <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        This tool only records coordination. Cash settlement is offline, and referral fee arrangements may be regulated.
      </div>

      {error && (
        <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          {error}
        </div>
      )}
      {actionMsg && (
        <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-950">
          {actionMsg}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {loading && <p className="text-sm text-stone-500">Loading…</p>}
          {!loading && items.length === 0 && (
            <p className="text-sm text-stone-500">
              No settlements for {period}. Click “Close month” to snapshot completed cross-hospital referrals.
            </p>
          )}
          <div className="space-y-3">
            {items.map((s) => {
              const active = s.id === selectedId;
              const direction = s.role === "from" ? "I sent →" : "I received ←";
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(s.id);
                    setIssuedOtp(null);
                    setConfirmCode("");
                    setActionMsg(null);
                    setError(null);
                  }}
                  className={`w-full rounded-2xl border p-4 text-left shadow-sm transition ${
                    active ? "border-teal-300 bg-teal-50" : "border-stone-200 bg-white hover:bg-stone-50"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold uppercase text-stone-500">{direction}</p>
                      <p className="mt-1 font-medium text-stone-900">{s.counterparty.name}</p>
                      <p className="mt-1 text-xs text-stone-600">
                        {s.referralCount} referral(s) · {formatInr(s.amountMinor)}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${
                        s.status === "settled"
                          ? "bg-emerald-100 text-emerald-900"
                          : s.status === "disputed"
                            ? "bg-red-100 text-red-900"
                            : "bg-amber-100 text-amber-900"
                      }`}
                    >
                      {s.status === "pending_cash" ? "pending" : s.status}
                    </span>
                  </div>
                  {s.status === "pending_cash" && s.otpState !== "none" && (
                    <p className="mt-2 text-xs text-stone-500">
                      Code:{" "}
                      {s.otpState === "active"
                        ? "active"
                        : s.otpState === "expired"
                          ? "expired"
                          : s.otpState === "locked"
                            ? "locked"
                            : "none"}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
            {!selected && <p className="text-sm text-stone-500">Select a settlement to view actions.</p>}
            {selected && (
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-stone-500">Counterparty</p>
                  <p className="mt-1 font-medium text-stone-900">{selected.counterparty.name}</p>
                  <p className="mt-1 text-xs text-stone-600">
                    {selected.referralCount} referral(s) · {formatInr(selected.amountMinor)}
                  </p>
                </div>

                {selected.status === "pending_cash" && selected.role === "to" && (
                  <div className="space-y-2">
                    <p className="text-xs text-stone-600">
                      Receiver action: generate a one-time code and share it with the referring hospital.
                    </p>
                    <button
                      type="button"
                      onClick={() => void generateOtp()}
                      disabled={otpBusy}
                      aria-busy={otpBusy}
                      className="w-full rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white shadow disabled:opacity-60"
                    >
                      {otpBusy ? "Generating…" : "Generate code"}
                    </button>
                    {issuedOtp && (
                      <div className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2">
                        <p className="text-xs font-semibold uppercase text-stone-500">One-time code</p>
                        <p className="mt-1 font-mono text-xl font-bold tracking-widest text-stone-900">
                          {issuedOtp.code}
                        </p>
                        <p className="mt-1 text-xs text-stone-600">
                          Expires{" "}
                          {new Date(issuedOtp.expiresAt).toLocaleString("en-IN", {
                            dateStyle: "medium",
                            timeStyle: "short",
                            timeZone: "Asia/Kolkata",
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {selected.status === "pending_cash" && selected.role === "from" && (
                  <div className="space-y-2">
                    <p className="text-xs text-stone-600">
                      Referrer action: enter the code you received to mark this month as settled.
                    </p>
                    <input
                      value={confirmCode}
                      onChange={(e) => setConfirmCode(e.target.value)}
                      placeholder="Enter 8-digit code"
                      className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm"
                      inputMode="numeric"
                    />
                    <button
                      type="button"
                      onClick={() => void confirmCash()}
                      disabled={confirmBusy || !confirmCode.trim()}
                      aria-busy={confirmBusy}
                      className="w-full rounded-xl bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white shadow disabled:opacity-60"
                    >
                      {confirmBusy ? "Confirming…" : "Confirm cash settled"}
                    </button>
                    <p className="text-xs text-stone-500">
                      If you enter the wrong code too many times, confirmation will be temporarily locked.
                    </p>
                  </div>
                )}

                {selected.status === "settled" && (
                  <div className="space-y-3">
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-950">
                      Settled
                      {selected.settledAt && (
                        <span className="block pt-1 text-xs text-emerald-900/80">
                          {new Date(selected.settledAt).toLocaleString("en-IN", {
                            dateStyle: "medium",
                            timeStyle: "short",
                            timeZone: "Asia/Kolkata",
                          })}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-stone-600">
                        For client demos or corrections: revert to pending and clear the OTP so you can walk through the flow again.
                      </p>
                      <button
                        type="button"
                        onClick={() => void reopenSettlement()}
                        disabled={reopenBusy}
                        aria-busy={reopenBusy}
                        className="w-full rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-950 shadow-sm hover:bg-amber-100 disabled:opacity-60"
                      >
                        {reopenBusy ? "Reopening…" : "Undo settlement (demo)"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

