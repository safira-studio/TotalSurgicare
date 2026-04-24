"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getTestsByCategory, getTestLabel } from "@/lib/data/diagnosticTests";
import { PRESCRIPTION_COORDS } from "@/lib/pdf/coords";
import {
  VoiceRecorder,
  type ExtractedFieldsResult,
} from "@/components/prescription/VoiceRecorder";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const B = {
  navy: "#1B2A41",
  teal: "#00A9B7",
  tealDark: "#007D8C",
  gold: "#F4A300",
  goldDark: "#E49501",
  bg: "#F8F9FA",
  headerGrad: "linear-gradient(135deg, #1B2A41 0%, #00768A 60%, #005F73 100%)",
  goldGrad: "linear-gradient(135deg, #F4A300 0%, #E49501 100%)",
  tealGrad: "linear-gradient(135deg, #00A9B7 0%, #007D8C 100%)",
};

// ─── Schema ───────────────────────────────────────────────────────────────────
const formSchema = z.object({
  patientName: z.string().min(1, "Patient name is required"),
  patientAge: z
    .string()
    .optional()
    .refine((v) => !v || (Number(v) >= 0 && Number(v) <= 130), {
      message: "Enter a valid age (0–130)",
    }),
  patientMobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
});

type FormValues = z.infer<typeof formSchema>;
type Step = "form" | "preview" | "sent";

interface SendResult {
  signedUrl: string;
  waPatient: string;
  waDoctor: string | null;
}

const TESTS_BY_CATEGORY = getTestsByCategory();
const CATEGORY_KEYS = Object.keys(TESTS_BY_CATEGORY);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function NewPrescriptionPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("form");
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [testError, setTestError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [result, setResult] = useState<SendResult | null>(null);
  const [formSnapshot, setFormSnapshot] = useState<FormValues | null>(null);
  const [letterheadUrl, setLetterheadUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  function handleVoiceExtracted(data: ExtractedFieldsResult) {
    if (data.patientName) setValue("patientName", data.patientName, { shouldValidate: true });
    if (typeof data.patientAge === "number") setValue("patientAge", String(data.patientAge), { shouldValidate: true });
    if (data.patientMobile) setValue("patientMobile", data.patientMobile, { shouldValidate: true });
    if (data.testIds?.length) {
      setSelectedTests((prev) => Array.from(new Set([...prev, ...data.testIds])));
      setTestError(null);
    }
  }

  useEffect(() => {
    let cancelled = false;
    fetch("/api/prescription/letterhead-url", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (!cancelled && j?.url) setLetterheadUrl(j.url); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  function handleNext(values: FormValues) {
    if (selectedTests.length === 0) { setTestError("Please select at least one test."); return; }
    setTestError(null);
    setFormSnapshot(values);
    setStep("preview");
  }

  function toggleTest(id: string) {
    setTestError(null);
    setSelectedTests((prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]);
  }

  function toggleAll(category: string) {
    const ids = TESTS_BY_CATEGORY[category].map((t) => t.id);
    const allSelected = ids.every((id) => selectedTests.includes(id));
    setSelectedTests((prev) =>
      allSelected ? prev.filter((id) => !ids.includes(id)) : Array.from(new Set([...prev, ...ids])),
    );
  }

  async function handleSubmitPrescription() {
    if (!formSnapshot) return;
    setSubmitting(true);
    setServerError(null);
    const res = await fetch("/api/prescription/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patientName: formSnapshot.patientName,
        patientAge: formSnapshot.patientAge ? Number(formSnapshot.patientAge) : null,
        patientMobile: formSnapshot.patientMobile,
        testIds: selectedTests,
      }),
    });
    setSubmitting(false);
    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      setServerError(json.error ?? "Something went wrong. Please try again.");
      return;
    }
    const json = await res.json();
    setResult({ signedUrl: json.signedUrl, waPatient: json.waPatient, waDoctor: json.waDoctor });
    setStep("sent");
  }

  // ─── SENT ───────────────────────────────────────────────────────────────────
  if (step === "sent" && result) {
    const snap = formSnapshot!;
    return (
      <div className="mx-auto max-w-md px-4">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Success header */}
          <div className="relative flex flex-col items-center px-8 py-10 text-center" style={{ background: B.headerGrad }}>
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "rgba(244,163,0,0.18)", border: "2px solid rgba(244,163,0,0.4)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={B.gold}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">Prescription Ready!</h2>
            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              For <span className="font-semibold text-white">{snap.patientName}</span>
            </p>
          </div>

          <div className="space-y-3 p-6">
            <a
              href={result.waPatient}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-2xl px-4 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg,#25D366 0%,#128C7E 100%)" }}
            >
              <WhatsAppIcon />
              Send to Patient ({snap.patientMobile})
            </a>

            {result.waDoctor && (
              <a
                href={result.waDoctor}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-2xl px-4 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
                style={{ background: B.tealGrad }}
              >
                <WhatsAppIcon />
                Send Copy to Myself
              </a>
            )}

            <a
              href={result.signedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition-all hover:bg-gray-50 active:scale-[0.98]"
              style={{ borderColor: B.teal, color: B.tealDark }}
            >
              <DownloadIcon />
              Download PDF
            </a>
          </div>

          <p className="pb-4 text-center text-xs text-gray-400">
            Tap each button, then press Send in the opened chat.
          </p>

          <div className="flex flex-col items-center gap-3 border-t border-gray-100 px-6 py-5">
            <button
              onClick={() => router.push("/prescription/new")}
              className="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
              style={{ background: B.goldGrad }}
            >
              + New Prescription
            </button>
            <Link href="/prescription" className="text-sm font-medium" style={{ color: B.tealDark }}>
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── PREVIEW ─────────────────────────────────────────────────────────────────
  if (step === "preview" && formSnapshot) {
    const snap = formSnapshot;
    const today = new Date().toLocaleDateString("en-IN", {
      day: "2-digit", month: "short", year: "numeric", timeZone: "Asia/Kolkata",
    });

    return (
      <div className="mx-auto max-w-2xl px-4">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Header */}
          <div className="px-7 py-5" style={{ background: B.headerGrad }}>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: B.gold }}>Step 2 of 2</p>
            <h2 className="mt-0.5 text-xl font-bold text-white">Review Prescription</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>Confirm before sending</p>
          </div>

          <div className="space-y-5 p-6">
            {/* Letterhead preview */}
            <div>
              <SectionLabel>Letterhead Preview</SectionLabel>
              <LetterheadPreview
                letterheadUrl={letterheadUrl}
                patientName={snap.patientName}
                patientAge={snap.patientAge}
                patientMobile={snap.patientMobile}
                date={today}
                testIds={selectedTests}
              />
              <p className="mt-2 text-xs text-gray-400">
                Approximate preview — the final PDF uses exact positions.
              </p>
            </div>

            {/* Patient details */}
            <div
              className="rounded-2xl border p-5 space-y-3"
              style={{ borderColor: "#E0F3F5", background: "rgba(0,169,183,0.03)" }}
            >
              <SectionLabel>Patient Details</SectionLabel>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ["Name", snap.patientName],
                  ["Age", snap.patientAge ? `${snap.patientAge} yrs` : "—"],
                  ["Mobile", snap.patientMobile],
                  ["Date", today],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-400">{label}</span>
                    <p className="mt-0.5 font-semibold" style={{ color: B.navy }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tests list */}
            <div
              className="rounded-2xl border p-5"
              style={{ borderColor: "#E0F3F5", background: "rgba(0,169,183,0.03)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <SectionLabel>Advised Investigations</SectionLabel>
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{ background: "rgba(0,169,183,0.12)", color: B.tealDark }}
                >
                  {selectedTests.length} test{selectedTests.length !== 1 ? "s" : ""}
                </span>
              </div>
              <ul className="space-y-1.5">
                {selectedTests.map((id) => (
                  <li key={id} className="flex items-center gap-2.5 text-sm" style={{ color: B.navy }}>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: B.teal }} />
                    {getTestLabel(id)}
                  </li>
                ))}
              </ul>
            </div>

            {serverError && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {serverError}
              </div>
            )}

            <div className="flex gap-3 pt-1">
              <button
                type="button"
                onClick={() => setStep("form")}
                disabled={submitting}
                className="flex-1 rounded-2xl border-2 py-3 text-sm font-semibold transition-all hover:bg-gray-50 disabled:opacity-50 active:scale-[0.98]"
                style={{ borderColor: B.teal, color: B.tealDark }}
              >
                ← Edit
              </button>
              <button
                type="button"
                onClick={handleSubmitPrescription}
                disabled={submitting}
                className="flex-1 rounded-2xl py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg disabled:opacity-60 active:scale-[0.98]"
                style={{ background: B.goldGrad }}
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <MiniSpinner color="white" /> Generating PDF…
                  </span>
                ) : (
                  "Submit & Send →"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── FORM ─────────────────────────────────────────────────────────────────
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
        {/* Header */}
        <div className="px-7 py-5" style={{ background: B.headerGrad }}>
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: B.gold }}>New Prescription</p>
          <h2 className="mt-0.5 text-xl font-bold text-white">Patient Details</h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>Fill the form or use voice input</p>
        </div>

        <form onSubmit={handleSubmit(handleNext)} className="p-6 space-y-7">
          {/* Voice recorder */}
          <VoiceRecorder onExtracted={handleVoiceExtracted} />

          {/* Patient fields */}
          <section className="space-y-5">
            <SectionLabel>Patient Information</SectionLabel>

            <div className="space-y-1.5">
              <FieldLabel htmlFor="patientName">Patient Name *</FieldLabel>
              <BrandInput
                id="patientName"
                placeholder="e.g. Rahul Sharma"
                autoComplete="off"
                {...register("patientName")}
              />
              {errors.patientName && <FieldError>{errors.patientName.message}</FieldError>}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <FieldLabel htmlFor="patientAge">Age (years)</FieldLabel>
                <BrandInput
                  id="patientAge"
                  type="number"
                  min="0"
                  max="130"
                  placeholder="e.g. 45"
                  {...register("patientAge")}
                />
                {errors.patientAge && <FieldError>{errors.patientAge.message}</FieldError>}
              </div>

              <div className="space-y-1.5">
                <FieldLabel htmlFor="patientMobile">Mobile (WhatsApp) *</FieldLabel>
                <BrandInput
                  id="patientMobile"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="9876543210"
                  {...register("patientMobile")}
                />
                {errors.patientMobile && <FieldError>{errors.patientMobile.message}</FieldError>}
              </div>
            </div>
          </section>

          {/* Diagnostic tests */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <SectionLabel>Diagnostic Tests</SectionLabel>
              {selectedTests.length > 0 && (
                <span
                  className="rounded-full px-3 py-0.5 text-xs font-semibold"
                  style={{ background: "rgba(0,169,183,0.12)", color: B.tealDark }}
                >
                  {selectedTests.length} selected
                </span>
              )}
            </div>

            {testError && <FieldError>{testError}</FieldError>}

            <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
              {CATEGORY_KEYS.map((category) => {
                const tests = TESTS_BY_CATEGORY[category];
                const allSelected = tests.every((t) => selectedTests.includes(t.id));
                const someSelected = tests.some((t) => selectedTests.includes(t.id));
                return (
                  <div
                    key={category}
                    className="overflow-hidden rounded-2xl border transition-all"
                    style={{
                      borderColor: someSelected ? B.teal : "#E5E7EB",
                      background: someSelected ? "rgba(0,169,183,0.02)" : "white",
                    }}
                  >
                    {/* Category header */}
                    <button
                      type="button"
                      onClick={() => toggleAll(category)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-gray-50"
                    >
                      <span className="text-sm font-semibold" style={{ color: B.navy }}>
                        {category}
                      </span>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all"
                        style={
                          allSelected
                            ? { background: B.tealGrad, color: "white" }
                            : { background: "#F3F4F6", color: "#6B7280" }
                        }
                      >
                        {allSelected ? "Deselect all" : "Select all"}
                      </span>
                    </button>

                    {/* Test rows */}
                    <div className="divide-y divide-gray-100">
                      {tests.map((test) => {
                        const checked = selectedTests.includes(test.id);
                        return (
                          <label
                            key={test.id}
                            className={cn(
                              "flex cursor-pointer items-center gap-3 px-4 py-2.5 transition-colors",
                              checked ? "bg-[rgba(0,169,183,0.07)]" : "hover:bg-gray-50",
                            )}
                          >
                            <input
                              type="checkbox"
                              className="h-4 w-4 shrink-0 rounded border-gray-300 accent-[#00A9B7]"
                              checked={checked}
                              onChange={() => toggleTest(test.id)}
                            />
                            <span
                              className={cn("text-sm", checked ? "font-semibold" : "text-gray-600")}
                              style={checked ? { color: B.tealDark } : {}}
                            >
                              {test.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-2xl py-3.5 text-sm font-bold text-white shadow-md transition-all hover:shadow-xl active:scale-[0.98]"
            style={{ background: B.goldGrad }}
          >
            Review Prescription →
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Small helpers ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#9CA3AF" }}>
      {children}
    </p>
  );
}

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold" style={{ color: "#1B2A41" }}>
      {children}
    </label>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-medium text-red-500">{children}</p>;
}

const BrandInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={cn(
      "w-full rounded-xl border bg-white px-4 py-2.5 text-sm font-medium text-gray-900 placeholder-gray-400 outline-none transition-all",
      "border-gray-200 focus:border-[#00A9B7] focus:ring-2 focus:ring-[#00A9B7]/20",
      className,
    )}
    {...props}
  />
);

function MiniSpinner({ color = "#00A9B7" }: { color?: string }) {
  return (
    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke={color} strokeWidth="4" />
      <path className="opacity-75" fill={color} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

// ─── Letterhead Preview ───────────────────────────────────────────────────────
interface LetterheadPreviewProps {
  letterheadUrl: string | null;
  patientName: string;
  patientAge?: string;
  patientMobile: string;
  date: string;
  testIds: string[];
}

function LetterheadPreview({
  letterheadUrl,
  patientName,
  patientAge,
  patientMobile,
  date,
  testIds,
}: LetterheadPreviewProps) {
  const C = PRESCRIPTION_COORDS;
  const ptToCqh = (pt: number) => `${(pt / 842) * 100}cqh`;

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border bg-white shadow-sm"
      style={{ aspectRatio: "595 / 842", containerType: "size", borderColor: "#E0F3F5" }}
    >
      {letterheadUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={letterheadUrl} alt="Letterhead" className="absolute inset-0 h-full w-full object-fill" draggable={false} />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-sm text-gray-400">
          Loading letterhead…
        </div>
      )}

      <div className="absolute inset-0 font-sans text-[#0d0d0d]" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
        <span style={{ position: "absolute", left: `${C.name.xFrac * 100}%`, top: `${C.name.yFrac * 100}%`, fontSize: ptToCqh(C.name.size), fontWeight: 700, lineHeight: 1, transform: "translateY(-100%)", whiteSpace: "nowrap" }}>
          {patientName}
        </span>
        {patientAge && (
          <span style={{ position: "absolute", left: `${C.age.xFrac * 100}%`, top: `${C.age.yFrac * 100}%`, fontSize: ptToCqh(C.age.size), lineHeight: 1, transform: "translateY(-100%)", whiteSpace: "nowrap" }}>
            {patientAge} yrs
          </span>
        )}
        <span style={{ position: "absolute", left: `${C.date.xFrac * 100}%`, top: `${C.date.yFrac * 100}%`, fontSize: ptToCqh(C.date.size), lineHeight: 1, transform: "translateY(-100%)", whiteSpace: "nowrap" }}>
          {date}
        </span>
        <span style={{ position: "absolute", left: `${C.mobile.xFrac * 100}%`, top: `${C.mobile.yFrac * 100}%`, fontSize: ptToCqh(C.mobile.size), lineHeight: 1, transform: "translateY(-100%)", whiteSpace: "nowrap" }}>
          Mob: {patientMobile}
        </span>
        <span style={{ position: "absolute", left: `${C.testsStart.xFrac * 100}%`, top: `${C.testsStart.yStartFrac * 100}%`, fontSize: ptToCqh(C.testsStart.size + 1), fontWeight: 700, lineHeight: 1, transform: "translateY(-100%)", whiteSpace: "nowrap" }}>
          Advised Investigations:
        </span>
        {testIds.map((id, i) => {
          const yFrac = C.testsStart.yStartFrac + (i + 1) * C.testsStart.lineFrac;
          if (yFrac > 0.95) return null;
          return (
            <span key={id} style={{ position: "absolute", left: `${(C.testsStart.xFrac + 0.02) * 100}%`, top: `${yFrac * 100}%`, fontSize: ptToCqh(C.testsStart.size), lineHeight: 1, transform: "translateY(-100%)", whiteSpace: "nowrap" }}>
              • {getTestLabel(id)}
            </span>
          );
        })}
      </div>
    </div>
  );
}
