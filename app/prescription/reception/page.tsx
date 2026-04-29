"use client";

import { useState } from "react";
import Link from "next/link";
import { Lux, lux } from "@/lib/prescriptionLuxury";

export default function ReceptionPage() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [bp, setBp] = useState("");
  const [mobile, setMobile] = useState("");
  const [allergies, setAllergies] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [publicCode, setPublicCode] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPublicCode(null);
    const ageNum = Number(age);
    if (!fullName.trim()) {
      setError("Patient name is required.");
      return;
    }
    if (!Number.isFinite(ageNum) || ageNum < 0 || ageNum > 130) {
      setError("Enter a valid age (0–130).");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/clinic-patient/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          age: ageNum,
          bp: bp.trim() || null,
          mobile: mobile.trim() || null,
          allergies: allergies.trim() || null,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Could not save. Try again.");
        return;
      }
      setPublicCode(json.publicCode as string);
      setFullName("");
      setAge("");
      setBp("");
      setMobile("");
      setAllergies("");
    } finally {
      setSubmitting(false);
    }
  }

  async function copyCode() {
    if (!publicCode) return;
    try {
      await navigator.clipboard.writeText(publicCode);
    } catch {
      /* ignore */
    }
  }

  return (
    <div
      className={lux.shell}
      style={{
        background:
          "radial-gradient(100% 60% at 50% -5%, rgba(212,168,83,0.1) 0%, transparent 45%), linear-gradient(180deg, #F6F3EE 0%, #EDE8E0 100%)",
      }}
    >
      <div className="rounded-3xl border border-[#E6DFD4]/80 bg-[#FFFCF9]/90 px-6 py-8 shadow-[0_32px_64px_-28px_rgba(11,18,32,0.14)] backdrop-blur-sm sm:px-10 sm:py-10">
        <p className={lux.eyebrow}>Front desk</p>
        <h1 className={lux.title}>Reception</h1>
        <p className={lux.subtitle}>
          Register walk-in patients. The next <strong className="font-medium text-stone-700">OPD</strong>{" "}
          number is assigned automatically (e.g. OPD-0001). The physician opens the chart in{" "}
          <Link
            href="/opd-prescribing"
            className="font-semibold underline decoration-[#00A9B7]/40 underline-offset-2 transition hover:decoration-[#00A9B7]"
            style={{ color: Lux.tealDeep }}
          >
            OPD prescribing
          </Link>
          .
        </p>
      </div>

      {publicCode && (
        <div className={`relative ${lux.cardLift} max-w-xl p-8 text-center`}>
          <div className={lux.cardAccentTop} aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
            Visit identifier
          </p>
          <p
            className="mt-3 font-mono text-3xl font-light tracking-[0.12em] text-stone-900 sm:text-4xl"
          >
            {publicCode}
          </p>
          <button
            type="button"
            onClick={copyCode}
            className="mt-6 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
            style={{
              background: `linear-gradient(135deg, ${Lux.teal} 0%, ${Lux.tealDeep} 100%)`,
            }}
          >
            Copy to clipboard
          </button>
          <p className="mt-4 text-xs leading-relaxed text-stone-500">
            Patient keeps this for today’s visit and any return visits to the same clinic.
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`relative ${lux.card} max-w-xl space-y-5`}
      >
        <div className={lux.cardAccentTop} aria-hidden />
        <div>
          <label htmlFor="rx-fullName" className={lux.label}>
            Full name *
          </label>
          <input
            id="rx-fullName"
            className={`mt-2 ${lux.input}`}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="rx-age" className={lux.label}>
            Age *
          </label>
          <input
            id="rx-age"
            type="number"
            min={0}
            max={130}
            className={`mt-2 ${lux.input}`}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rx-bp" className={lux.label}>
            BP (optional)
          </label>
          <input
            id="rx-bp"
            className={`mt-2 ${lux.input}`}
            placeholder="e.g. 120/80"
            value={bp}
            onChange={(e) => setBp(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rx-mobile" className={lux.label}>
            Mobile (optional)
          </label>
          <input
            id="rx-mobile"
            className={`mt-2 ${lux.input}`}
            placeholder="10-digit Indian mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rx-allergies" className={lux.label}>
            Allergic to (optional)
          </label>
          <textarea
            id="rx-allergies"
            className={`mt-2 min-h-[88px] ${lux.input}`}
            placeholder="Known allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          />
        </div>

        {error && (
          <div className="rounded-xl border border-red-100 bg-red-50/90 px-4 py-3 text-sm text-red-800">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-95 disabled:opacity-60"
          style={{
            background: `linear-gradient(135deg, ${Lux.gold} 0%, ${Lux.goldDeep} 100%)`,
          }}
        >
          {submitting ? "Saving…" : "Register & assign OPD number"}
        </button>
      </form>
    </div>
  );
}
