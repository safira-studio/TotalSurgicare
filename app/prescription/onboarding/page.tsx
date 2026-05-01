"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const MAX_SIZE_MB = 4;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

export default function OnboardingPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  // True = letterhead already has doctor name/clinic/contact printed on it.
  // False (default) = blank design; the PDF builder will overlay doctor info.
  const [letterheadHasDoctorInfo, setLetterheadHasDoctorInfo] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValidationError(null);
    setServerError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setValidationError("Only PNG and JPG/JPEG files are accepted.");
      return;
    }
    if (file.size > MAX_SIZE_BYTES) {
      setValidationError(`File must be under ${MAX_SIZE_MB} MB.`);
      return;
    }

    // Check image dimensions
    const url = URL.createObjectURL(file);
    const img = new window.Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      if (img.naturalWidth < 800) {
        setValidationError(
          `Image must be at least 800px wide. This image is ${img.naturalWidth}px.`,
        );
        return;
      }
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    };
    img.src = url;
  }

  async function handleUpload() {
    if (!selectedFile) return;
    setUploading(true);
    setServerError(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("letterhead_has_doctor_info", String(letterheadHasDoctorInfo));

    const res = await fetch("/api/prescription/letterhead", {
      method: "POST",
      body: formData,
    });

    setUploading(false);

    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      setServerError(json.error ?? "Upload failed. Please try again.");
      return;
    }

    router.push("/prescription");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
            Rx
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Upload Your Letterhead
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Upload a scan or photo of your clinic letterhead (blank, no writing).
            This will be used as the background of every prescription PDF.
          </p>
        </div>

        {/* Drop zone */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "relative flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-8 text-left transition-colors",
            preview
              ? "border-blue-300 bg-blue-50"
              : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50",
          )}
        >
          {preview ? (
            <Image
              src={preview}
              alt="Letterhead preview"
              width={400}
              height={300}
              className="max-h-72 w-auto rounded-lg object-contain shadow"
            />
          ) : (
            <>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </span>
              <span className="text-sm font-medium text-gray-700">
                Click to upload your letterhead
              </span>
              <span className="text-xs text-gray-400">PNG or JPG · Max 4 MB · Min 800px wide</span>
            </>
          )}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          className="hidden"
          onChange={handleFileChange}
        />

        {preview && (
          <button
            type="button"
            className="mt-2 w-full cursor-pointer text-center text-xs text-blue-600 hover:underline"
            onClick={() => fileInputRef.current?.click()}
          >
            Change file
          </button>
        )}

        {validationError && (
          <div className="mt-3 rounded-md bg-red-50 px-4 py-2 text-sm text-red-700">
            {validationError}
          </div>
        )}
        {serverError && (
          <div className="mt-3 rounded-md bg-red-50 px-4 py-2 text-sm text-red-700">
            {serverError}
          </div>
        )}

        {/* Letterhead type selector */}
        <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4">
          <p className="mb-3 text-sm font-medium text-gray-700">
            Does your letterhead already have your info printed on it?
          </p>
          <RadioGroup
            value={letterheadHasDoctorInfo ? "yes" : "no"}
            onValueChange={(v) => setLetterheadHasDoctorInfo(v === "yes")}
            className="space-y-2"
          >
            <div className="flex items-start gap-3">
              <RadioGroupItem value="no" id="has-info-no" className="mt-0.5" />
              <Label htmlFor="has-info-no" className="cursor-pointer">
                <span className="text-sm font-medium text-gray-800">
                  No — it&apos;s a blank / design-only letterhead
                </span>
                <p className="text-xs text-gray-500">
                  Your name, clinic, mobile, registration no. and email will be
                  automatically added to every prescription PDF.
                </p>
              </Label>
            </div>
            <div className="flex items-start gap-3">
              <RadioGroupItem value="yes" id="has-info-yes" className="mt-0.5" />
              <Label htmlFor="has-info-yes" className="cursor-pointer">
                <span className="text-sm font-medium text-gray-800">
                  Yes — my name &amp; clinic info are already printed on it
                </span>
                <p className="text-xs text-gray-500">
                  The PDF will use your letterhead as-is without adding any extra
                  header text.
                </p>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Button
          className="mt-6 w-full"
          disabled={!selectedFile || uploading}
          onClick={handleUpload}
        >
          {uploading ? "Uploading…" : "Save Letterhead & Continue"}
        </Button>

        <p className="mt-4 text-center text-xs text-gray-400">
          You can re-upload a new letterhead anytime from your profile.
        </p>
      </div>
    </div>
  );
}
