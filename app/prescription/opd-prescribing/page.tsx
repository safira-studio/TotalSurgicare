"use client";

import { useCallback, useEffect, useState } from "react";
import {
  MEDICINE_TIMING_OPTIONS,
  DEFAULT_LINE_TIMINGS,
  formatTimingSummary,
  hasAnyTimingSelected,
  type MedicineLineTimings,
  type MedicineTimingFlagId,
} from "@/lib/data/medicineTiming";
import { Lux, lux } from "@/lib/prescriptionLuxury";

interface ClinicPatient {
  id: string;
  public_code: string;
  full_name: string;
  age: number;
  bp: string | null;
  mobile: string | null;
  allergies: string | null;
}

/** Row from doctor queue API (same as patient + optional timestamps). */
interface QueuePatient extends ClinicPatient {
  created_at?: string;
  medicine_rx_done_at?: string | null;
}

interface RxLine {
  medicineId: string;
  name: string;
  timings: MedicineLineTimings;
}

interface MedicineRow {
  id: string;
  name: string;
}

type Step = "edit" | "preview" | "sent";

interface SendResult {
  signedUrl: string;
  waPatient: string | null;
  waDoctor: string | null;
}

export default function OpdPrescribingPage() {
  const [visitCodeInput, setVisitCodeInput] = useState("");
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState<string | null>(null);
  const [patient, setPatient] = useState<ClinicPatient | null>(null);

  const [step, setStep] = useState<Step>("edit");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<MedicineRow[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [newMedicineName, setNewMedicineName] = useState("");
  const [addBusy, setAddBusy] = useState(false);
  const [lines, setLines] = useState<RxLine[]>([]);
  const [lineError, setLineError] = useState<string | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [result, setResult] = useState<SendResult | null>(null);

  const [queue, setQueue] = useState<QueuePatient[]>([]);
  const [queueDate, setQueueDate] = useState<string>("");
  const [queueLoading, setQueueLoading] = useState(true);
  const [queueError, setQueueError] = useState<string | null>(null);

  const fetchQueue = useCallback(async () => {
    setQueueLoading(true);
    setQueueError(null);
    try {
      const res = await fetch("/api/clinic-patient/doctor-queue", { cache: "no-store" });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setQueue([]);
        setQueueError(json.error ?? "Could not load today’s list.");
        return;
      }
      setQueue((json.patients ?? []) as QueuePatient[]);
      setQueueDate((json.date as string) ?? "");
    } finally {
      setQueueLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQueue();
  }, [fetchQueue]);

  function selectPatientFromQueue(p: QueuePatient) {
    setLookupError(null);
    setPatient({
      id: p.id,
      public_code: p.public_code,
      full_name: p.full_name,
      age: p.age,
      bp: p.bp,
      mobile: p.mobile,
      allergies: p.allergies,
    });
    setVisitCodeInput(p.public_code);
    setLines([]);
    setStep("edit");
  }

  const loadPatient = async () => {
    setLookupError(null);
    const q = visitCodeInput.trim().replace(/\s+/g, "");
    if (q.length < 3) {
      setLookupError("Enter the visit ID.");
      return;
    }
    setLookupLoading(true);
    try {
      const res = await fetch(
        `/api/clinic-patient/lookup?code=${encodeURIComponent(q.toUpperCase())}`,
      );
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setPatient(null);
        setLookupError(json.error ?? "Lookup failed.");
        return;
      }
      setPatient(json.patient as ClinicPatient);
      setLines([]);
      setStep("edit");
    } finally {
      setLookupLoading(false);
    }
  };

  const runSearch = useCallback(async () => {
    const q = search.trim();
    setSearchLoading(true);
    try {
      const url =
        q.length === 0
          ? "/api/medicines"
          : `/api/medicines?q=${encodeURIComponent(q)}`;
      const res = await fetch(url);
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSearchResults([]);
        return;
      }
      setSearchResults((json.medicines ?? []) as MedicineRow[]);
    } finally {
      setSearchLoading(false);
    }
  }, [search]);

  useEffect(() => {
    const t = setTimeout(runSearch, 280);
    return () => clearTimeout(t);
  }, [runSearch]);

  function addLine(m: MedicineRow) {
    setLineError(null);
    if (lines.some((l) => l.medicineId === m.id)) return;
    setLines((prev) => [
      ...prev,
      { medicineId: m.id, name: m.name, timings: { ...DEFAULT_LINE_TIMINGS } },
    ]);
  }

  function removeLine(medicineId: string) {
    setLines((prev) => prev.filter((l) => l.medicineId !== medicineId));
  }

  function toggleTiming(medicineId: string, flag: MedicineTimingFlagId, checked: boolean) {
    setLines((prev) =>
      prev.map((l) =>
        l.medicineId === medicineId
          ? { ...l, timings: { ...l.timings, [flag]: checked } }
          : l,
      ),
    );
  }

  async function addNewMedicine() {
    const name = newMedicineName.trim();
    if (!name) return;
    setAddBusy(true);
    setLineError(null);
    try {
      const res = await fetch("/api/medicines", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setLineError(json.error ?? "Could not add medicine.");
        return;
      }
      const med = json.medicine as MedicineRow;
      setNewMedicineName("");
      addLine(med);
      runSearch();
    } finally {
      setAddBusy(false);
    }
  }

  function goPreview() {
    setLineError(null);
    if (!patient) {
      setLineError("Load a patient with their visit ID first.");
      return;
    }
    if (lines.length === 0) {
      setLineError("Add at least one medicine.");
      return;
    }
    const missing = lines.find((l) => !hasAnyTimingSelected(l.timings));
    if (missing) {
      setLineError(
        `Select at least one timing for: ${missing.name} (before/after food, morning, or evening).`,
      );
      return;
    }
    setServerError(null);
    setStep("preview");
  }

  async function submitRx() {
    if (!patient) return;
    setSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch("/api/medicine-rx/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitCode: patient.public_code,
          lines: lines.map((l) => ({
            medicineId: l.medicineId,
            before_food: l.timings.before_food,
            after_food: l.timings.after_food,
            morning: l.timings.morning,
            evening: l.timings.evening,
          })),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setServerError(json.error ?? "Could not create prescription.");
        return;
      }
      setResult({
        signedUrl: json.signedUrl,
        waPatient: json.waPatient,
        waDoctor: json.waDoctor,
      });
      setStep("sent");
    } finally {
      setSubmitting(false);
    }
  }

  if (step === "sent" && result && patient) {
    return (
      <div className="mx-auto max-w-md px-1 sm:px-4">
        <div className={`relative overflow-hidden ${lux.cardLift}`}>
          <div className={lux.cardAccentTop} aria-hidden />
          <div
            className="relative flex flex-col items-center px-8 py-11 text-center text-white"
            style={{ background: Lux.hero }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/50">
              Issued
            </p>
            <h2 className="mt-2 font-serif text-2xl font-light tracking-tight">
              Prescription ready
            </h2>
            <p className="mt-2 text-sm text-white/85">
              {patient.full_name} · {patient.public_code}
            </p>
          </div>
          <div className="space-y-3 p-6">
            {result.waPatient ? (
              <a
                href={result.waPatient}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-semibold text-white shadow-md"
                style={{
                  background: "linear-gradient(135deg,#25D366 0%,#128C7E 100%)",
                }}
              >
                Send to patient (WhatsApp)
              </a>
            ) : (
              <p className="rounded-xl bg-amber-50 px-3 py-2 text-center text-sm text-amber-900">
                No mobile on file for this patient — share the PDF link manually or update the
                record at reception next time.
              </p>
            )}
            {result.waDoctor && (
              <a
                href={result.waDoctor}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 px-4 py-3 text-sm font-semibold"
                style={{ borderColor: Lux.teal, color: Lux.tealDeep }}
              >
                Send copy to myself
              </a>
            )}
            <a
              href={result.signedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-800"
            >
              Open / download PDF
            </a>
          </div>
          <p className="pb-6 text-center text-xs text-gray-400 px-4">
            WhatsApp opens in a new tab — press Send in the chat.
          </p>
          <div className="border-t px-6 pb-6 text-center">
            <button
              type="button"
              className="text-sm font-semibold underline"
              style={{ color: Lux.teal }}
              onClick={() => {
                setStep("edit");
                setResult(null);
                setPatient(null);
                setVisitCodeInput("");
                setLines([]);
                setServerError(null);
                void fetchQueue();
              }}
            >
              New patient chart
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "preview" && patient) {
    return (
      <div className={`${lux.shell} max-w-xl`}>
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-serif text-2xl font-light tracking-tight" style={{ color: Lux.ink }}>
            Review prescription
          </h1>
          <button
            type="button"
            className="text-sm font-medium text-stone-500 transition hover:text-stone-800"
            onClick={() => setStep("edit")}
          >
            ← Edit chart
          </button>
        </div>

        <div className={`${lux.card} space-y-3 text-sm`}>
          <p>
            <span className="font-semibold text-gray-700">Patient:</span>{" "}
            {patient.full_name}, {patient.age} yrs
          </p>
          {patient.bp && (
            <p>
              <span className="font-semibold text-gray-700">BP:</span> {patient.bp}
            </p>
          )}
          {patient.mobile && (
            <p>
              <span className="font-semibold text-gray-700">Mobile:</span> {patient.mobile}
            </p>
          )}
          {patient.allergies && (
            <p>
              <span className="font-semibold text-gray-700">Allergies:</span>{" "}
              {patient.allergies}
            </p>
          )}
          <p className="font-mono text-xs text-stone-500">Visit ID · {patient.public_code}</p>
        </div>

        <div className={lux.card}>
          <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
            Medications
          </h2>
          <ul className="space-y-2 text-sm">
            {lines.map((l) => (
              <li key={l.medicineId} className="flex justify-between gap-2 border-b border-gray-100 pb-2">
                <span>{l.name}</span>
                <span className="text-gray-600 shrink-0 text-right max-w-[min(100%,14rem)]">
                  {formatTimingSummary(l.timings)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {serverError && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{serverError}</div>
        )}

        <button
          type="button"
          disabled={submitting}
          onClick={submitRx}
          className="w-full rounded-xl py-3.5 text-sm font-semibold text-white shadow-lg disabled:opacity-60"
          style={{
            background: `linear-gradient(135deg, ${Lux.gold} 0%, ${Lux.goldDeep} 100%)`,
          }}
        >
          {submitting ? "Issuing PDF…" : "Issue PDF & sharing"}
        </button>
      </div>
    );
  }

  return (
    <div
      className={lux.shell}
      style={{
        background:
          "radial-gradient(120% 80% at 50% -10%, rgba(212,168,83,0.08) 0%, transparent 50%), linear-gradient(180deg, #F6F3EE 0%, #EDE8E0 100%)",
      }}
    >
      <div className="rounded-3xl border border-[#E6DFD4]/80 bg-[#FFFCF9]/90 px-6 py-8 shadow-[0_32px_64px_-28px_rgba(11,18,32,0.15)] backdrop-blur-sm sm:px-10 sm:py-10">
        <p className={lux.eyebrow}>Physician</p>
        <h1 className={lux.title}>OPD prescribing</h1>
        <p className={lux.subtitle}>
          Select from <strong className="font-medium text-stone-700">today’s queue</strong>{" "}
          (India calendar) or enter an OPD visit ID for a returning patient. Build the chart, set
          timings, then review and issue the PDF. Completed visits leave today’s queue until
          tomorrow’s new registrations.
        </p>
      </div>

      <section className={`${lux.cardLift} relative max-w-2xl space-y-3`}>
        <div className={lux.cardAccentTop} aria-hidden />
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
          Today’s queue — pending charts
        </h2>
        <p className="text-xs leading-relaxed text-stone-600">
          <span className="font-mono text-[11px] font-medium text-stone-800">{queueDate || "…"}</span>
          <span className="text-stone-400"> · </span>
          Reception registers walk-ins. A visit leaves this list after you issue that patient’s
          prescription PDF.
        </p>
        {queueLoading && <p className="text-sm text-gray-500">Loading list…</p>}
        {queueError && (
          <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">{queueError}</p>
        )}
        {!queueLoading && !queueError && queue.length === 0 && (
          <p className="text-sm text-stone-600">
            No patients in queue — enter an OPD visit ID below for a return visit, or ask reception
            to register new walk-ins.
          </p>
        )}
        {!queueLoading && queue.length > 0 && (
          <ul className="flex flex-col gap-3">
            {queue.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => selectPatientFromQueue(p)}
                  className={lux.queueRow}
                >
                  <span>
                    <span className="font-semibold text-stone-900">{p.full_name}</span>
                    <span className="ml-2 font-mono text-xs" style={{ color: Lux.tealDeep }}>
                      {p.public_code}
                    </span>
                    <span className="mt-0.5 block text-xs text-stone-500">
                      Age {p.age}
                      {p.bp ? ` · BP ${p.bp}` : ""}
                      {p.mobile ? ` · ${p.mobile}` : ""}
                    </span>
                  </span>
                  <span
                    className="shrink-0 rounded-lg px-2 py-1 text-xs font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${Lux.teal} 0%, ${Lux.tealDeep} 100%)`,
                    }}
                  >
                    Open chart
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={`${lux.card} relative max-w-xl space-y-4`}>
        <div className={lux.cardAccentTop} aria-hidden />
        <h2 className={lux.label}>Load patient by visit ID</h2>
        <p className="text-xs text-stone-500">
          Optional if you opened a chart from the queue. Use OPD number for return visits.
        </p>
        <div className="flex flex-wrap gap-2">
          <label htmlFor="visit-code-input" className="sr-only">
            Visit ID
          </label>
          <input
            id="visit-code-input"
            className={`min-w-[200px] flex-1 font-mono ${lux.input}`}
            placeholder="e.g. OPD-0001"
            value={visitCodeInput}
            onChange={(e) => setVisitCodeInput(e.target.value.replace(/\s+/g, ""))}
          />
          <button
            type="button"
            onClick={loadPatient}
            disabled={lookupLoading}
            className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95 disabled:opacity-60"
            style={{
              background: `linear-gradient(135deg, ${Lux.teal} 0%, ${Lux.tealDeep} 100%)`,
            }}
          >
            {lookupLoading ? "…" : "Load chart"}
          </button>
        </div>
        {lookupError && <p className="text-sm text-red-600">{lookupError}</p>}
        {patient && (
          <div className="space-y-1 rounded-xl border border-stone-200/80 bg-stone-50/80 p-4 text-sm">
            <p className="font-semibold text-stone-900">{patient.full_name}</p>
            <p className="text-stone-600">
              Age {patient.age}
              {patient.bp ? ` · BP ${patient.bp}` : ""}
              {patient.mobile ? ` · Mob ${patient.mobile}` : ""}
            </p>
            {patient.allergies && (
              <p className="text-xs text-amber-900">Allergies: {patient.allergies}</p>
            )}
            <p className="font-mono text-xs text-stone-500">Visit · {patient.public_code}</p>
          </div>
        )}
      </section>

      <section className={`${lux.card} relative max-w-2xl space-y-5`}>
        <div className={lux.cardAccentTop} aria-hidden />
        <h2 className={lux.label}>Medications & directions</h2>
        <div>
          <label htmlFor="med-search" className={lux.label}>
            Formulary search
          </label>
          <input
            id="med-search"
            className={`mt-2 ${lux.input}`}
            placeholder="Type to filter…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="mt-2 max-h-40 overflow-y-auto rounded-xl border border-stone-200/80 bg-[#FAF8F5]">
            {searchLoading && (
              <p className="p-2 text-xs text-gray-500">Loading…</p>
            )}
            {!searchLoading &&
              searchResults.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => addLine(m)}
                  className="flex w-full items-center justify-between border-b border-stone-100 px-3 py-2.5 text-left text-sm last:border-0 hover:bg-white"
                >
                  <span>{m.name}</span>
                  <span className="text-xs text-gray-400">Add</span>
                </button>
              ))}
            {!searchLoading && searchResults.length === 0 && (
              <p className="p-2 text-xs text-gray-500">No matches — add a new name below.</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-end">
          <div className="flex-1 min-w-[180px]">
            <label htmlFor="new-med-name" className={lux.label}>
              New entry (shared formulary)
            </label>
            <input
              id="new-med-name"
              className={`mt-2 ${lux.input}`}
              placeholder="e.g. Tab. Paracetamol 500mg"
              value={newMedicineName}
              onChange={(e) => setNewMedicineName(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={addNewMedicine}
            disabled={addBusy || !newMedicineName.trim()}
            className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95 disabled:opacity-50"
            style={{
              background: `linear-gradient(135deg, ${Lux.navySoft} 0%, ${Lux.ink} 100%)`,
            }}
          >
            {addBusy ? "…" : "Add to formulary & chart"}
          </button>
        </div>

        {lines.length > 0 && (
          <div className="space-y-3">
            <p className="text-xs text-gray-500">
              Tick all that apply — e.g. before food and after food, or morning and evening together.
            </p>
            {lines.map((l) => (
              <div
                key={l.medicineId}
                className="rounded-xl border border-stone-200/90 bg-gradient-to-b from-white to-stone-50/50 p-4 text-sm shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="font-medium text-gray-900 pr-2">{l.name}</p>
                  <button
                    type="button"
                    className="text-red-600 text-xs font-medium hover:underline shrink-0"
                    onClick={() => removeLine(l.medicineId)}
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                  {MEDICINE_TIMING_OPTIONS.map((o) => (
                    <label
                      key={o.id}
                      className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-gray-700"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={l.timings[o.id]}
                        onChange={(e) => toggleTiming(l.medicineId, o.id, e.target.checked)}
                      />
                      {o.label}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {lineError && (
          <p className="text-sm text-red-600">{lineError}</p>
        )}

        <button
          type="button"
          onClick={goPreview}
          className="rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-95"
          style={{
            background: `linear-gradient(135deg, ${Lux.teal} 0%, ${Lux.tealDeep} 100%)`,
          }}
        >
          Review & issue PDF
        </button>
      </section>
    </div>
  );
}
