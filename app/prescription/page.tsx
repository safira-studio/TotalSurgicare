"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { getTestsByCategory, getTestLabel } from "@/lib/data/diagnosticTests";
import { PRESCRIPTION_COORDS } from "@/lib/pdf/coords";

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type Step = "form" | "preview" | "sent";

interface SendResult {
  signedUrl: string;
  waPatient: string;
  waDoctor: string | null;
}

const TESTS_BY_CATEGORY = getTestsByCategory();
const CATEGORY_KEYS = Object.keys(TESTS_BY_CATEGORY);

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function PrescriptionPage() {
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
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  useEffect(() => {
    let cancelled = false;
    fetch("/api/prescription/letterhead-url", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (!cancelled && j?.url) setLetterheadUrl(j.url);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // --- Step 1 → Step 2 ---
  function handleNext(values: FormValues) {
    if (selectedTests.length === 0) {
      setTestError("Please select at least one test.");
      return;
    }
    setTestError(null);
    setFormSnapshot(values);
    setStep("preview");
  }

  function toggleTest(id: string) {
    setTestError(null);
    setSelectedTests((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  }

  function toggleAll(category: string) {
    const ids = TESTS_BY_CATEGORY[category].map((t) => t.id);
    const allSelected = ids.every((id) => selectedTests.includes(id));
    if (allSelected) {
      setSelectedTests((prev) => prev.filter((id) => !ids.includes(id)));
    } else {
      setSelectedTests((prev) => Array.from(new Set([...prev, ...ids])));
    }
  }

  // --- Step 2 → Submit ---
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
    setResult({
      signedUrl: json.signedUrl,
      waPatient: json.waPatient,
      waDoctor: json.waDoctor,
    });
    setStep("sent");
  }

  function handleReset() {
    setStep("form");
    setSelectedTests([]);
    setFormSnapshot(null);
    setResult(null);
    setServerError(null);
  }

  // ===========================================================================
  // RENDER
  // ===========================================================================

  // --- STEP: SENT ---
  if (step === "sent" && result) {
    const snap = formSnapshot!;
    return (
      <div className="mx-auto max-w-lg">
        <div className="rounded-2xl bg-white p-8 shadow text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Prescription Ready!</h2>
          <p className="text-sm text-gray-500 mb-6">
            For <strong>{snap.patientName}</strong>
          </p>

          <div className="space-y-3">
            {/* Send to patient */}
            <a
              href={result.waPatient}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
            >
              <WhatsAppIcon />
              Send to Patient ({snap.patientMobile})
            </a>

            {/* Send to doctor */}
            {result.waDoctor && (
              <a
                href={result.waDoctor}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
              >
                <WhatsAppIcon />
                Send Copy to Myself
              </a>
            )}

            {/* Download */}
            <a
              href={result.signedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <DownloadIcon />
              Download PDF
            </a>
          </div>

          <p className="mt-5 text-xs text-gray-400">
            Tap each WhatsApp button, then press Send in the opened chat.
          </p>

          <button
            onClick={handleReset}
            className="mt-6 text-sm text-blue-600 hover:underline"
          >
            ← New Prescription
          </button>
        </div>
      </div>
    );
  }

  // --- STEP: PREVIEW ---
  if (step === "preview" && formSnapshot) {
    const snap = formSnapshot;
    const today = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "Asia/Kolkata",
    });

    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white shadow overflow-hidden">
          {/* Preview header */}
          <div className="bg-blue-600 px-6 py-4 text-white">
            <h2 className="font-semibold text-lg">Review Prescription</h2>
            <p className="text-blue-200 text-sm">Check before sending</p>
          </div>

          <div className="p-6 space-y-4">
            {/* Visual letterhead preview */}
            <div>
              <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wide mb-2">
                Letterhead Preview
              </h3>
              <LetterheadPreview
                letterheadUrl={letterheadUrl}
                patientName={snap.patientName}
                patientAge={snap.patientAge}
                patientMobile={snap.patientMobile}
                date={today}
                testIds={selectedTests}
              />
              <p className="mt-2 text-xs text-gray-400">
                Approximate preview. The final PDF uses the exact same positions.
              </p>
            </div>

            {/* Patient info */}
            <div className="rounded-xl border bg-gray-50 p-4 space-y-2">
              <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wide">Patient Details</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500">Name: </span>
                  <span className="font-medium text-gray-900">{snap.patientName}</span>
                </div>
                <div>
                  <span className="text-gray-500">Age: </span>
                  <span className="font-medium text-gray-900">{snap.patientAge ? `${snap.patientAge} yrs` : "—"}</span>
                </div>
                <div>
                  <span className="text-gray-500">Mobile: </span>
                  <span className="font-medium text-gray-900">{snap.patientMobile}</span>
                </div>
                <div>
                  <span className="text-gray-500">Date: </span>
                  <span className="font-medium text-gray-900">{today}</span>
                </div>
              </div>
            </div>

            {/* Tests */}
            <div className="rounded-xl border bg-gray-50 p-4">
              <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wide mb-3">
                Advised Investigations ({selectedTests.length})
              </h3>
              <ul className="space-y-1">
                {selectedTests.map((id) => (
                  <li key={id} className="flex items-center gap-2 text-sm text-gray-800">
                    <span className="text-blue-500">•</span>
                    {getTestLabel(id)}
                  </li>
                ))}
              </ul>
            </div>

            {serverError && (
              <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
                {serverError}
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setStep("form")}
                disabled={submitting}
              >
                ← Edit
              </Button>
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                onClick={handleSubmitPrescription}
                disabled={submitting}
              >
                {submitting ? "Generating PDF…" : "Submit & Send →"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- STEP: FORM ---
  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl bg-white shadow overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 px-6 py-4 text-white">
          <h2 className="font-semibold text-lg">New Prescription</h2>
          <p className="text-blue-200 text-sm">Fill patient details and select tests</p>
        </div>

        <form onSubmit={handleSubmit(handleNext)} className="p-6 space-y-6">
          {/* Patient info */}
          <section className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Patient Details
            </h3>

            <div className="space-y-1">
              <Label htmlFor="patientName">Patient Name *</Label>
              <Input
                id="patientName"
                placeholder="e.g. Rahul Sharma"
                {...register("patientName")}
              />
              {errors.patientName && (
                <p className="text-xs text-red-500">{errors.patientName.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="patientAge">Age (years)</Label>
                <Input
                  id="patientAge"
                  type="number"
                  min="0"
                  max="130"
                  placeholder="e.g. 45"
                  {...register("patientAge")}
                />
                {errors.patientAge && (
                  <p className="text-xs text-red-500">{errors.patientAge.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label htmlFor="patientMobile">Mobile (WhatsApp) *</Label>
                <Input
                  id="patientMobile"
                  type="tel"
                  maxLength={10}
                  placeholder="9876543210"
                  {...register("patientMobile")}
                />
                {errors.patientMobile && (
                  <p className="text-xs text-red-500">{errors.patientMobile.message}</p>
                )}
              </div>
            </div>
          </section>

          {/* Diagnostic tests */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                Diagnostic Tests
              </h3>
              {selectedTests.length > 0 && (
                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                  {selectedTests.length} selected
                </span>
              )}
            </div>

            {testError && (
              <p className="text-xs text-red-500">{testError}</p>
            )}

            <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1">
              {CATEGORY_KEYS.map((category) => {
                const tests = TESTS_BY_CATEGORY[category];
                const allSelected = tests.every((t) =>
                  selectedTests.includes(t.id),
                );
                return (
                  <div key={category} className="rounded-xl border bg-gray-50 overflow-hidden">
                    {/* Category header */}
                    <button
                      type="button"
                      onClick={() => toggleAll(category)}
                      className="flex w-full items-center justify-between px-4 py-2.5 text-left hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm font-semibold text-gray-700">
                        {category}
                      </span>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-medium transition-colors",
                          allSelected
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-600",
                        )}
                      >
                        {allSelected ? "Deselect all" : "Select all"}
                      </span>
                    </button>

                    {/* Tests grid */}
                    <div className="grid grid-cols-1 gap-0 divide-y divide-gray-100">
                      {tests.map((test) => {
                        const checked = selectedTests.includes(test.id);
                        return (
                          <label
                            key={test.id}
                            className={cn(
                              "flex cursor-pointer items-center gap-3 px-4 py-2.5 transition-colors",
                              checked ? "bg-blue-50" : "hover:bg-white",
                            )}
                          >
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              checked={checked}
                              onChange={() => toggleTest(test.id)}
                            />
                            <span
                              className={cn(
                                "text-sm",
                                checked ? "font-medium text-blue-800" : "text-gray-700",
                              )}
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

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Review Prescription →
          </Button>
        </form>
      </div>
    </div>
  );
}

// Small inline icons to avoid new imports
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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

// ---------------------------------------------------------------------------
// Letterhead preview component
// ---------------------------------------------------------------------------
// Renders the doctor's letterhead image stretched to A4 proportions with the
// patient details overlaid using the SAME fractional coordinates as the PDF
// generator (lib/pdf/coords.ts). So what the doctor sees here is what the PDF
// will look like.
//
// Font sizes in the PDF are expressed in POINTS against a 842pt-tall A4 page.
// Here we use the container's height (via container queries) so text scales
// automatically with the preview size. 1pt ≈ 842/100 cqh → size/8.42 cqh.
// ---------------------------------------------------------------------------
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

  // Convert PDF points → container-relative CSS font size.
  // A4 page height = 842pt, so N pt = (N / 842) * 100 cqh.
  const ptToCqh = (pt: number) => `${(pt / 842) * 100}cqh`;

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border bg-white shadow-sm"
      style={{
        aspectRatio: "595 / 842", // A4 portrait
        containerType: "size",
      }}
    >
      {letterheadUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={letterheadUrl}
          alt="Letterhead"
          className="absolute inset-0 h-full w-full object-fill"
          draggable={false}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-sm text-gray-400">
          Loading letterhead…
        </div>
      )}

      {/* Overlay text layer */}
      <div
        className="absolute inset-0 font-sans text-[#0d0d0d]"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        {/* Name (bold) */}
        <span
          style={{
            position: "absolute",
            left: `${C.name.xFrac * 100}%`,
            top: `${C.name.yFrac * 100}%`,
            fontSize: ptToCqh(C.name.size),
            fontWeight: 700,
            lineHeight: 1,
            transform: "translateY(-100%)",
            whiteSpace: "nowrap",
          }}
        >
          {patientName}
        </span>

        {/* Age */}
        {patientAge && (
          <span
            style={{
              position: "absolute",
              left: `${C.age.xFrac * 100}%`,
              top: `${C.age.yFrac * 100}%`,
              fontSize: ptToCqh(C.age.size),
              lineHeight: 1,
              transform: "translateY(-100%)",
              whiteSpace: "nowrap",
            }}
          >
            {patientAge} yrs
          </span>
        )}

        {/* Date */}
        <span
          style={{
            position: "absolute",
            left: `${C.date.xFrac * 100}%`,
            top: `${C.date.yFrac * 100}%`,
            fontSize: ptToCqh(C.date.size),
            lineHeight: 1,
            transform: "translateY(-100%)",
            whiteSpace: "nowrap",
          }}
        >
          {date}
        </span>

        {/* Mobile */}
        <span
          style={{
            position: "absolute",
            left: `${C.mobile.xFrac * 100}%`,
            top: `${C.mobile.yFrac * 100}%`,
            fontSize: ptToCqh(C.mobile.size),
            lineHeight: 1,
            transform: "translateY(-100%)",
            whiteSpace: "nowrap",
          }}
        >
          Mob: {patientMobile}
        </span>

        {/* Tests heading */}
        <span
          style={{
            position: "absolute",
            left: `${C.testsStart.xFrac * 100}%`,
            top: `${C.testsStart.yStartFrac * 100}%`,
            fontSize: ptToCqh(C.testsStart.size + 1),
            fontWeight: 700,
            lineHeight: 1,
            transform: "translateY(-100%)",
            whiteSpace: "nowrap",
          }}
        >
          Advised Investigations:
        </span>

        {/* Test lines */}
        {testIds.map((id, i) => {
          const yFrac =
            C.testsStart.yStartFrac + (i + 1) * C.testsStart.lineFrac;
          if (yFrac > 0.95) return null; // off the page
          return (
            <span
              key={id}
              style={{
                position: "absolute",
                left: `${(C.testsStart.xFrac + 0.02) * 100}%`,
                top: `${yFrac * 100}%`,
                fontSize: ptToCqh(C.testsStart.size),
                lineHeight: 1,
                transform: "translateY(-100%)",
                whiteSpace: "nowrap",
              }}
            >
              • {getTestLabel(id)}
            </span>
          );
        })}
      </div>
    </div>
  );
}
