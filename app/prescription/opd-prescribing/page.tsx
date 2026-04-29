"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  MEDICINE_TIMING_OPTIONS,
  DEFAULT_LINE_TIMINGS,
  formatTimingSummary,
  hasAnyTimingSelected,
  type MedicineLineTimings,
  type MedicineTimingFlagId,
} from "@/lib/data/medicineTiming";
import { Lux, lux } from "@/lib/prescriptionLuxury";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

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

interface DiagnosisRow {
  diagnosisId: string;
  name: string;
}

type Step = "edit" | "preview" | "sent";

const opdCardClass =
  "relative overflow-hidden rounded-2xl border border-[#E6DFD4] bg-[#FFFCF9] text-[#0B1220] shadow-[0_16px_40px_-20px_rgba(11,18,32,0.12)]";

/** Light teal surface using brand accent (Lux.teal) for selected queue row & chart medicines */
const brandPastelSurface =
  "border-[#00A9B7]/40 bg-gradient-to-b from-[#eefcfb] to-[#e3f8f6] ring-1 ring-[#00A9B7]/15 shadow-[0_4px_20px_-10px_rgba(0,169,183,0.18)]";

/** Tap to fill search — common OPD wording */
const DX_SEARCH_EXAMPLES = [
  "Acute gastroenteritis",
  "Essential hypertension",
  "Migraine",
  "Type 2 diabetes mellitus",
  "URTI",
  "Acute pharyngitis",
] as const;

function StepBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-md",
        className,
      )}
      style={{
        background: `linear-gradient(135deg, ${Lux.teal} 0%, ${Lux.tealDeep} 100%)`,
      }}
    >
      {children}
    </span>
  );
}

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

  const [complaints, setComplaints] = useState("");
  const [voiceBusy, setVoiceBusy] = useState(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaChunksRef = useRef<BlobPart[]>([]);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const [dxSearch, setDxSearch] = useState("");
  const [dxResults, setDxResults] = useState<MedicineRow[]>([]);
  const [dxLoading, setDxLoading] = useState(false);
  const [newDxName, setNewDxName] = useState("");
  const [dxBusy, setDxBusy] = useState(false);
  const [dxLines, setDxLines] = useState<DiagnosisRow[]>([]);

  function resetChartFields() {
    setComplaints("");
    setVoiceError(null);
    setDxSearch("");
    setNewDxName("");
    setDxLines([]);
    // Do not clear dxResults here: dxSearch is often still "" after load, so the debounced
    // diagnoses fetch effect does not re-run (same deps) and the list would stay empty.
    // Shared catalog results are not patient-specific.
  }

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
    resetChartFields();
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
      resetChartFields();
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

  const runDxSearch = useCallback(async () => {
    const q = dxSearch.trim();
    setDxLoading(true);
    try {
      const url =
        q.length === 0
          ? "/api/diagnoses"
          : `/api/diagnoses?q=${encodeURIComponent(q)}`;
      const res = await fetch(url);
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setDxResults([]);
        return;
      }
      setDxResults((json.diagnoses ?? []) as MedicineRow[]);
    } finally {
      setDxLoading(false);
    }
  }, [dxSearch]);

  useEffect(() => {
    const t = setTimeout(runDxSearch, 280);
    return () => clearTimeout(t);
  }, [runDxSearch]);

  useEffect(() => {
    return () => {
      const mr = mediaRecorderRef.current;
      const stream = mediaStreamRef.current;
      if (mr && mr.state !== "inactive") {
        mr.onstop = null;
        mr.stop();
      }
      stream?.getTracks().forEach((t) => t.stop());
      mediaRecorderRef.current = null;
      mediaStreamRef.current = null;
    };
  }, []);

  function addDxLine(row: MedicineRow) {
    setLineError(null);
    if (dxLines.some((d) => d.diagnosisId === row.id)) return;
    setDxLines((prev) => [...prev, { diagnosisId: row.id, name: row.name }]);
  }

  function removeDxLine(diagnosisId: string) {
    setDxLines((prev) => prev.filter((d) => d.diagnosisId !== diagnosisId));
  }

  async function addNewDiagnosis() {
    const name = newDxName.trim();
    if (!name) return;
    setDxBusy(true);
    setLineError(null);
    try {
      const res = await fetch("/api/diagnoses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setLineError(json.error ?? "Could not add diagnosis.");
        return;
      }
      const row = json.diagnosis as MedicineRow;
      setNewDxName("");
      addDxLine(row);
      void runDxSearch();
    } finally {
      setDxBusy(false);
    }
  }

  async function startComplaintRecording() {
    setVoiceError(null);
    if (recording || voiceBusy) return;
    if (!navigator.mediaDevices?.getUserMedia) {
      setVoiceError("Recording is not supported in this browser.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      mediaChunksRef.current = [];
      const mime =
        typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : typeof MediaRecorder !== "undefined" &&
              MediaRecorder.isTypeSupported("audio/mp4")
            ? "audio/mp4"
            : "";
      const mr = mime
        ? new MediaRecorder(stream, { mimeType: mime })
        : new MediaRecorder(stream);
      mr.ondataavailable = (e) => {
        if (e.data.size > 0) mediaChunksRef.current.push(e.data);
      };
      mr.onerror = () => {
        setVoiceError("Recorder error.");
        setRecording(false);
      };
      mr.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        mediaStreamRef.current = null;
        mediaRecorderRef.current = null;
        setRecording(false);
        void transcribeComplaintBlob(
          new Blob(mediaChunksRef.current, { type: mr.mimeType || mime || "audio/webm" }),
          mr.mimeType || mime || "audio/webm",
        );
      };
      mediaRecorderRef.current = mr;
      mr.start(200);
      setRecording(true);
    } catch {
      setVoiceError("Microphone permission denied or unavailable.");
      setRecording(false);
    }
  }

  function stopComplaintRecording() {
    mediaRecorderRef.current?.stop();
  }

  async function transcribeComplaintBlob(blob: Blob, mimeType: string) {
    setVoiceBusy(true);
    setVoiceError(null);
    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const r = new FileReader();
        r.onloadend = () => resolve(typeof r.result === "string" ? r.result : "");
        r.onerror = () => reject(new Error("read failed"));
        r.readAsDataURL(blob);
      });
      const res = await fetch("/api/prescription/transcribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ audioBase64: base64, mimeType }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setVoiceError(
          typeof json.error === "string"
            ? json.error
            : "Transcription failed. Check ASSEMBLYAI_API_KEY on the server.",
        );
        return;
      }
      const text = typeof json.transcript === "string" ? json.transcript.trim() : "";
      if (!text) {
        setVoiceError("No speech detected. Try again closer to the microphone.");
        return;
      }
      setComplaints((prev) => {
        const p = prev.trim();
        return p ? `${p}\n${text}` : text;
      });
    } catch {
      setVoiceError("Could not transcribe audio.");
    } finally {
      setVoiceBusy(false);
    }
  }

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
        `Select at least one direction for: ${missing.name} (time, food, or spoon dose).`,
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
          complaints: complaints.trim() || undefined,
          diagnoses: dxLines.map((d) => ({
            diagnosisId: d.diagnosisId,
            name: d.name,
          })),
          lines: lines.map((l) => ({
            medicineId: l.medicineId,
            before_food: l.timings.before_food,
            after_food: l.timings.after_food,
            morning: l.timings.morning,
            afternoon: l.timings.afternoon,
            evening: l.timings.evening,
            one_spoon: l.timings.one_spoon,
            two_spoons: l.timings.two_spoons,
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
                resetChartFields();
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
      <div className={cn(lux.shell, "max-w-2xl")}>
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

        <div className="space-y-4">
          <Card className={cn(opdCardClass, "text-sm")}>
            <CardHeader className="pb-2">
              <CardTitle className="font-serif text-base font-light tracking-tight text-[#0B1220]">
                Diagnoses
              </CardTitle>
            </CardHeader>
            <CardContent>
              {dxLines.length > 0 ? (
                <ul className="list-disc space-y-1 pl-5 text-stone-800">
                  {dxLines.map((d) => (
                    <li key={d.diagnosisId}>{d.name}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm italic text-stone-500">No diagnoses added.</p>
              )}
            </CardContent>
          </Card>

          <Card className={cn(opdCardClass, "text-sm")}>
            <CardHeader className="pb-2">
              <CardTitle className="font-serif text-base font-light tracking-tight text-[#0B1220]">
                Complaints
              </CardTitle>
            </CardHeader>
            <CardContent>
              {complaints.trim() ? (
                <p className="whitespace-pre-wrap text-stone-800">{complaints.trim()}</p>
              ) : (
                <p className="text-sm italic text-stone-500">No complaints recorded.</p>
              )}
            </CardContent>
          </Card>
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
      className={cn(lux.shell, "max-w-full")}
      style={{
        background:
          "radial-gradient(120% 80% at 50% -10%, rgba(212,168,83,0.08) 0%, transparent 50%), linear-gradient(180deg, #F6F3EE 0%, #EDE8E0 100%)",
      }}
    >
      <div className="rounded-3xl border border-[#E6DFD4]/80 bg-[#FFFCF9]/90 px-4 py-7 text-center shadow-[0_32px_64px_-28px_rgba(11,18,32,0.15)] backdrop-blur-sm sm:px-6 sm:py-8 lg:px-8">
        <p className={lux.eyebrow}>Physician</p>
        <h1 className={lux.title}>OPD prescribing</h1>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start">
          {/* Left: visit ID (1) above, today’s queue (2) below */}
          <div className="flex min-h-0 flex-col gap-8">
            <section className={`${lux.card} relative max-w-none space-y-4`}>
              <div className={lux.cardAccentTop} aria-hidden />
              <div className="mb-4 grid grid-cols-[auto,minmax(0,1fr)] gap-x-3 gap-y-1">
                <div className="row-span-2 flex items-start pt-0.5">
                  <StepBadge>1</StepBadge>
                </div>
                <h2 className="font-serif text-lg font-light leading-snug tracking-tight text-[#0B1220]">
                  Load patient by visit ID
                </h2>
                <p className="text-xs leading-relaxed text-stone-500">
                  Optional if you already opened a chart from the queue. Use the OPD number for
                  return visits.
                </p>
              </div>
              <Separator className="bg-[#E6DFD4]/70" />
              <div className="flex flex-wrap gap-2 pt-2">
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
                  {lookupLoading ? "…" : "Load Patient"}
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

            <section className={`${lux.cardLift} relative space-y-3`}>
              <div className={lux.cardAccentTop} aria-hidden />
              <div className="mb-4 grid grid-cols-[auto,minmax(0,1fr)] gap-x-3 gap-y-1">
                <div className="row-span-2 flex items-start pt-0.5">
                  <StepBadge>2</StepBadge>
                </div>
                <h2 className="font-serif text-lg font-light leading-snug tracking-tight text-[#0B1220]">
                  Today&apos;s queue
                </h2>
                <p className="text-xs leading-relaxed text-stone-600">
                  <span className="font-mono text-[11px] font-medium text-stone-800">
                    {queueDate || "…"}
                  </span>
                  <span className="text-stone-400"> · </span>
                  Reception registers walk-ins. A visit leaves this list after you issue that
                  patient&apos;s prescription PDF.
                </p>
              </div>
              {queueLoading && <p className="text-sm text-gray-500">Loading list…</p>}
              {queueError && (
                <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
                  {queueError}
                </p>
              )}
              {!queueLoading && !queueError && queue.length === 0 && (
                <p className="text-sm text-stone-600">
                  No patients in queue — use visit ID above for a return visit, or ask reception to
                  register new walk-ins.
                </p>
              )}
              {!queueLoading && queue.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {queue.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => selectPatientFromQueue(p)}
                        className={cn(
                          lux.queueRow,
                          patient?.id === p.id && brandPastelSurface,
                        )}
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
          </div>

          {/* Right: clinical (3) above, medications (4) below */}
          <div className="flex min-h-0 flex-col gap-8">
      <div className="space-y-6">
        <div className="grid grid-cols-[auto,minmax(0,1fr)] gap-x-3 gap-y-1 px-0.5">
          <div className="row-span-2 flex items-start pt-0.5">
            <StepBadge>3</StepBadge>
          </div>
          <h2 className="font-serif text-xl font-light leading-snug tracking-tight text-[#0B1220]">
            Clinical documentation
          </h2>
          <p className="text-sm leading-relaxed text-stone-600">
            Diagnoses first, then chief complaints. Both are included on the PDF for the active
            chart.
          </p>
        </div>

        {!patient && (
          <div
            role="status"
            className="rounded-xl border border-amber-200/90 bg-amber-50/95 px-4 py-3 text-xs text-amber-950"
          >
            Select or load a patient on the left (visit ID or queue) before issuing — complaints and
            diagnoses attach to that visit&apos;s PDF.
          </div>
        )}

        <Card className={cn(opdCardClass)}>
          <div className={lux.cardAccentTop} aria-hidden />
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="font-serif text-lg font-light tracking-tight text-[#0B1220]">
              Diagnoses
            </CardTitle>
            <CardDescription className="text-stone-600">
              Search the shared list and tap <strong className="font-medium text-stone-700">Add</strong>{" "}
              for each diagnosis (same as medicines). Each one appears in{" "}
              <strong className="font-medium text-stone-700">Selected diagnoses</strong> below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <label htmlFor="dx-search" className={lux.label}>
                Search diagnoses
              </label>
              <input
                id="dx-search"
                className={`mt-2 ${lux.input}`}
                placeholder="e.g. stroke, GERD, URTI, hypertension, viral fever…"
                value={dxSearch}
                onChange={(e) => setDxSearch(e.target.value)}
              />
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-stone-400">
                  Examples
                </span>
                {DX_SEARCH_EXAMPLES.map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setDxSearch(label)}
                    className="rounded-full border border-[#00A9B7]/25 bg-[#f4fdfb] px-2.5 py-1 text-left text-xs text-[#0a5c66] transition hover:border-[#00A9B7]/45 hover:bg-[#e8faf8]"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="mt-2 max-h-40 overflow-y-auto rounded-xl border border-stone-200/80 bg-[#FAF8F5]">
                {dxLoading && <p className="p-2 text-xs text-gray-500">Loading…</p>}
                {!dxLoading &&
                  dxResults
                    .filter((d) => !dxLines.some((l) => l.diagnosisId === d.id))
                    .map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => addDxLine(d)}
                        className="flex w-full items-center justify-between border-b border-stone-100 px-3 py-2.5 text-left text-sm last:border-0 hover:bg-white"
                      >
                        <span>{d.name}</span>
                        <span className="text-xs text-gray-400">Add</span>
                      </button>
                    ))}
                {!dxLoading &&
                  dxResults.filter((d) => !dxLines.some((l) => l.diagnosisId === d.id)).length ===
                    0 && (
                    <p className="p-2 text-xs text-gray-500">
                      {dxResults.length > 0
                        ? "Every diagnosis in this list is already on the chart — try another search or add new below."
                        : "No matches — add a new diagnosis below."}
                    </p>
                  )}
              </div>
            </div>

            <div className="flex flex-wrap items-end gap-2">
              <div className="min-w-[180px] flex-1">
                <label htmlFor="new-dx-name" className={lux.label}>
                  New diagnosis (shared list)
                </label>
                <input
                  id="new-dx-name"
                  className={`mt-2 ${lux.input}`}
                  placeholder="e.g. Iron deficiency anemia, Osteoarthritis knee…"
                  value={newDxName}
                  onChange={(e) => setNewDxName(e.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={addNewDiagnosis}
                disabled={dxBusy || !newDxName.trim()}
                className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95 disabled:opacity-50"
                style={{
                  background: `linear-gradient(135deg, ${Lux.navySoft} 0%, ${Lux.ink} 100%)`,
                }}
              >
                {dxBusy ? "…" : "Add to list & chart"}
              </button>
            </div>

            <div className="space-y-3 border-t border-stone-200/80 pt-5">
              <p className={lux.label}>Selected diagnoses</p>
              {dxLines.length > 0 ? (
                <>
                  <p className="text-xs text-gray-500">
                    On this chart — tap Remove to drop one (same idea as medicine lines below).
                  </p>
                  {dxLines.map((d) => (
                    <div
                      key={d.diagnosisId}
                      className={cn(
                        "rounded-xl border p-4 text-sm transition",
                        brandPastelSurface,
                      )}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="font-medium text-gray-900 pr-2">{d.name}</p>
                        <button
                          type="button"
                          className="shrink-0 text-xs font-medium text-red-600 hover:underline"
                          onClick={() => removeDxLine(d.diagnosisId)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <p className="rounded-xl border border-dashed border-stone-200/90 bg-stone-50/60 px-4 py-6 text-center text-sm text-stone-500">
                  No diagnoses on this chart yet. Use <strong className="text-stone-700">Add</strong>{" "}
                  in the search list above for each one — you can add as many as you need.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className={cn(opdCardClass)}>
          <div className={lux.cardAccentTop} aria-hidden />
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="font-serif text-lg font-light tracking-tight text-[#0B1220]">
              Complaints
            </CardTitle>
            <CardDescription className="text-stone-600">
              Type chief complaints or dictate — transcribed text is appended after each recording.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              className={cn(lux.input, "min-h-[120px] resize-y")}
              placeholder="e.g. Epigastric pain 3 days, nausea…"
              value={complaints}
              onChange={(e) => setComplaints(e.target.value)}
              maxLength={8000}
            />
            <div className="flex flex-wrap items-center gap-2">
              {!recording ? (
                <button
                  type="button"
                  disabled={voiceBusy}
                  onClick={startComplaintRecording}
                  className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-95 disabled:opacity-50"
                  style={{
                    background: `linear-gradient(135deg, ${Lux.teal} 0%, ${Lux.tealDeep} 100%)`,
                  }}
                >
                  {voiceBusy ? "Transcribing…" : "Record voice"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopComplaintRecording}
                  className="rounded-xl border-2 border-red-500 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-700"
                >
                  Stop & transcribe
                </button>
              )}
              {recording && (
                <span className="text-xs font-medium text-red-600">Recording…</span>
              )}
            </div>
            {voiceError && <p className="text-sm text-red-600">{voiceError}</p>}
          </CardContent>
        </Card>
      </div>

      <Card className={cn(opdCardClass)}>
        <div className={lux.cardAccentTop} aria-hidden />
        <CardHeader className="space-y-0 pb-4">
          <div className="grid grid-cols-[auto,minmax(0,1fr)] gap-x-3 gap-y-1">
            <div className="row-span-2 flex items-start pt-0.5">
              <StepBadge>4</StepBadge>
            </div>
            <CardTitle className="font-serif text-xl font-light leading-snug tracking-tight text-[#0B1220]">
              Medications & directions
            </CardTitle>
            <CardDescription className="text-stone-600">
              Search the formulary, add lines, set directions, then review and issue.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
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
              Tick all that apply — time of day, with meals, or spoon dose (1 Spoon / 2 Spoon).
            </p>
            {lines.map((l) => (
              <div
                key={l.medicineId}
                className={cn(
                  "rounded-xl border p-4 text-sm transition",
                  brandPastelSurface,
                )}
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
        </CardContent>
      </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
