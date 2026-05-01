"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  User,
  Building2,
  Phone,
  BadgeCheck,
  Mail,
  Upload,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MoveHorizontal,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface DoctorProfile {
  fullName: string;
  clinicName: string;
  phone: string;
  regNo: string;
  email: string;
  letterheadUrl: string | null;
  letterheadHasDoctorInfo: boolean;
  doctorHeaderXFrac: number;
  doctorHeaderYFrac: number;
}

interface ProfileDrawerProps {
  open: boolean;
  onClose: () => void;
  /** Called after the doctor info is successfully saved, so the parent can refetch. */
  onProfileSaved?: () => void;
}

type SaveState = "idle" | "saving" | "saved" | "error";

// ─────────────────────────────────────────────────────────────────────────────

export default function ProfileDrawer({ open, onClose, onProfileSaved }: ProfileDrawerProps) {
  const [profile, setProfile] = useState<DoctorProfile | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Edit form state (mirrors profile once loaded)
  const [fullName, setFullName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [phone, setPhone] = useState("");
  const [regNo, setRegNo] = useState("");
  // Doctor info block position (fractions of page width / height)
  const [doctorHeaderXFrac, setDoctorHeaderXFrac] = useState(0.50);
  const [doctorHeaderYFrac, setDoctorHeaderYFrac] = useState(0.04);

  // Info save state
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [saveError, setSaveError] = useState<string | null>(null);

  // Letterhead re-upload state
  const [letterheadHasDoctorInfo, setLetterheadHasDoctorInfo] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadState, setUploadState] = useState<SaveState>("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Load profile when drawer opens ─────────────────────────────────────────
  useEffect(() => {
    if (!open) return;
    setLoadError(null);
    fetch("/api/doctor/profile", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) { setLoadError(data.error); return; }
        const p: DoctorProfile = data;
        setProfile(p);
        setFullName(p.fullName);
        setClinicName(p.clinicName);
        setPhone(p.phone);
        setRegNo(p.regNo);
        setLetterheadHasDoctorInfo(p.letterheadHasDoctorInfo);
        setDoctorHeaderXFrac(p.doctorHeaderXFrac ?? 0.50);
        setDoctorHeaderYFrac(p.doctorHeaderYFrac ?? 0.04);
      })
      .catch(() => setLoadError("Failed to load profile."));
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Reset upload state when drawer closes
  useEffect(() => {
    if (!open) {
      setUploadFile(null);
      setUploadPreview(null);
      setUploadError(null);
      setUploadState("idle");
      setSaveState("idle");
      setSaveError(null);
    }
  }, [open]);

  // ── Save profile info ───────────────────────────────────────────────────────
  async function handleSaveInfo() {
    setSaveState("saving");
    setSaveError(null);
    const res = await fetch("/api/doctor/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, clinicName, phone, regNo, doctorHeaderXFrac, doctorHeaderYFrac, letterheadHasDoctorInfo }),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setSaveState("error");
      setSaveError(json.error ?? "Failed to save.");
    } else {
      setSaveState("saved");
      setProfile((prev) => prev ? { ...prev, letterheadHasDoctorInfo } : prev);
      onProfileSaved?.();
      // Notify any page-level listeners (e.g. OPD page) that profile data changed
      window.dispatchEvent(new CustomEvent("doctor-profile-saved"));
      setTimeout(() => setSaveState("idle"), 3000);
    }
  }

  // ── Letterhead file picker ──────────────────────────────────────────────────
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUploadError(null);
    setUploadState("idle");
    const file = e.target.files?.[0];
    if (!file) return;
    if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      setUploadError("Only PNG and JPG files are accepted.");
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setUploadError("File must be under 4 MB.");
      return;
    }
    const url = URL.createObjectURL(file);
    const img = new window.Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      if (img.naturalWidth < 800) {
        setUploadError(`Image must be at least 800 px wide (this is ${img.naturalWidth} px).`);
        return;
      }
      setUploadFile(file);
      setUploadPreview(URL.createObjectURL(file));
    };
    img.src = url;
  }

  async function handleUploadLetterhead() {
    if (!uploadFile) return;
    setUploadState("saving");
    setUploadError(null);
    const fd = new FormData();
    fd.append("file", uploadFile);
    fd.append("letterhead_has_doctor_info", String(letterheadHasDoctorInfo));

    const res = await fetch("/api/prescription/letterhead", { method: "POST", body: fd });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setUploadState("error");
      setUploadError(json.error ?? "Upload failed.");
    } else {
      setUploadState("saved");
      // Update the profile's letterheadUrl to the new preview
      setProfile((prev) => prev ? { ...prev, letterheadUrl: uploadPreview, letterheadHasDoctorInfo } : prev);
      setUploadFile(null);
      setTimeout(() => setUploadState("idle"), 3000);
    }
  }

  // ── Initials avatar ─────────────────────────────────────────────────────────
  const initials = fullName
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Doctor profile"
        className={cn(
          "fixed left-0 top-0 z-[101] flex h-full w-full max-w-sm flex-col overflow-y-auto shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
        style={{ background: "#FFFCF9" }}
      >
        {/* Header strip */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ background: "linear-gradient(180deg,#121C2E 0%,#0F1729 100%)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow"
              style={{ background: "linear-gradient(135deg,#F4A300 0%,#E49501 100%)" }}
            >
              {initials || "Dr"}
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">
                {fullName || "Your Profile"}
              </p>
              <p className="text-xs font-medium" style={{ color: "#7FD9E6" }}>
                {profile?.email ?? ""}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close profile"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-7">

          {loadError && (
            <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {loadError}
            </div>
          )}

          {/* ── Doctor info form ─────────────────────────────────── */}
          {profile && (
            <section>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-stone-400">
                Doctor Information
              </h2>

              {/* ── Letterhead type (controls whether doctor info is overlayed on PDFs) */}
              <div className="mb-4 rounded-xl border border-[#00A9B7]/30 bg-[#F0FBFC] px-4 py-3">
                <p className="mb-2 text-xs font-semibold text-stone-700">
                  Does your letterhead already have your name & clinic info printed on it?
                </p>
                <RadioGroup
                  value={letterheadHasDoctorInfo ? "yes" : "no"}
                  onValueChange={(v) => { setLetterheadHasDoctorInfo(v === "yes"); setSaveState("idle"); }}
                  className="space-y-2"
                >
                  <div className="flex items-start gap-2">
                    <RadioGroupItem value="yes" id="ld-yes-top" className="mt-0.5" />
                    <Label htmlFor="ld-yes-top" className="cursor-pointer text-xs leading-snug font-normal">
                      <span className="font-semibold">Yes — already printed</span>
                      <span className="block text-stone-500">PDF uses your letterhead as-is, no overlay.</span>
                    </Label>
                  </div>
                  <div className="flex items-start gap-2">
                    <RadioGroupItem value="no" id="ld-no-top" className="mt-0.5" />
                    <Label htmlFor="ld-no-top" className="cursor-pointer text-xs leading-snug font-normal">
                      <span className="font-semibold">No — blank / design-only</span>
                      <span className="block text-stone-500">PDF will overlay your name, clinic, phone, reg no & email.</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Field icon={<User className="h-4 w-4" />} label="Full Name">
                  <input
                    value={fullName}
                    onChange={(e) => { setFullName(e.target.value); setSaveState("idle"); }}
                    placeholder="Dr. Full Name"
                    className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#00A9B7] focus:ring-2 focus:ring-[#00A9B7]/15"
                  />
                </Field>

                <Field icon={<Building2 className="h-4 w-4" />} label="Clinic Name">
                  <input
                    value={clinicName}
                    onChange={(e) => { setClinicName(e.target.value); setSaveState("idle"); }}
                    placeholder="Clinic / Hospital Name"
                    className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#00A9B7] focus:ring-2 focus:ring-[#00A9B7]/15"
                  />
                </Field>

                <Field icon={<Phone className="h-4 w-4" />} label="Mobile Number">
                  <input
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setSaveState("idle"); }}
                    placeholder="10-digit mobile"
                    className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#00A9B7] focus:ring-2 focus:ring-[#00A9B7]/15"
                  />
                </Field>

                <Field icon={<BadgeCheck className="h-4 w-4" />} label="Registration No.">
                  <input
                    value={regNo}
                    onChange={(e) => { setRegNo(e.target.value); setSaveState("idle"); }}
                    placeholder="Medical council reg. no."
                    className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#00A9B7] focus:ring-2 focus:ring-[#00A9B7]/15"
                  />
                </Field>

                <Field icon={<Mail className="h-4 w-4" />} label="Email">
                  <input
                    value={profile.email}
                    readOnly
                    className="w-full rounded-lg border border-stone-100 bg-stone-50 px-3 py-2 text-sm text-stone-400 cursor-not-allowed"
                  />
                  <p className="mt-1 text-[11px] text-stone-400">Email is managed via login and cannot be changed here.</p>
                </Field>
              </div>

              {/* ── Doctor info block position (only relevant for blank letterheads) */}
              {!letterheadHasDoctorInfo && (
                <div className="mt-4 rounded-xl border border-stone-200 bg-stone-50 px-4 py-4 space-y-4">
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-500">
                    <MoveHorizontal className="h-3.5 w-3.5 text-stone-400" />
                    Doctor info block position
                  </p>

                  {/* Horizontal slider */}
                  <div>
                    <div className="flex justify-between mb-1 text-[11px] text-stone-500">
                      <span>Horizontal</span>
                      <span className="font-semibold text-stone-700">{Math.round(doctorHeaderXFrac * 100)}% from left</span>
                    </div>
                    <input
                      type="range" min={5} max={85} step={1}
                      value={Math.round(doctorHeaderXFrac * 100)}
                      onChange={(e) => { setDoctorHeaderXFrac(Number(e.target.value) / 100); setSaveState("idle"); }}
                      className="w-full accent-[#00A9B7]"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                      <span>← Left edge</span><span>Right edge →</span>
                    </div>
                  </div>

                  {/* Vertical slider */}
                  <div>
                    <div className="flex justify-between mb-1 text-[11px] text-stone-500">
                      <span>Vertical</span>
                      <span className="font-semibold text-stone-700">{Math.round(doctorHeaderYFrac * 100)}% from top</span>
                    </div>
                    <input
                      type="range" min={1} max={25} step={1}
                      value={Math.round(doctorHeaderYFrac * 100)}
                      onChange={(e) => { setDoctorHeaderYFrac(Number(e.target.value) / 100); setSaveState("idle"); }}
                      className="w-full accent-[#00A9B7]"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                      <span>↑ Very top</span><span>Further down ↓</span>
                    </div>
                  </div>

                  {/* Live preview — identical math to the final PDF */}
                  {profile.letterheadUrl && (() => {
                    // Same helper as the main OPD preview: pt → cqh on a 595×842 A4 container
                    const ptToCqh = (pt: number) => `${(pt / 842) * 130}cqh`;
                    const yBase = doctorHeaderYFrac * 100;
                    // Line offsets match PDF: 19pt / 16pt / 16pt on A4 (842pt)
                    const l1 = yBase + (19 / 842) * 100;
                    const l2 = l1 + (16 / 842) * 100;
                    const l3 = l2 + (16 / 842) * 100;
                    const xPct = `${doctorHeaderXFrac * 100}%`;
                    const cleanName = fullName.replace(/^(dr\.?\s*)+/i, "").trim() || "Your Name";
                    return (
                      <div>
                        <p className="mb-1.5 text-[11px] text-stone-400">Live preview (full page)</p>
                        <div
                          className="relative overflow-hidden rounded-lg border border-stone-200 bg-white"
                          style={{ aspectRatio: "595 / 842", containerType: "size" }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={profile.letterheadUrl}
                            alt=""
                            className="absolute inset-0 h-full w-full"
                            style={{ objectFit: "fill" }}
                          />
                          {/* Doctor info lines — absolutely positioned, exact PDF line math */}
                          <span style={{ position: "absolute", left: xPct, top: `${yBase}%`, fontSize: ptToCqh(13), fontWeight: 700, lineHeight: 1, whiteSpace: "nowrap", color: "#0d0d0d", fontFamily: "Helvetica, Arial, sans-serif" }}>
                            Dr. {cleanName}
                          </span>
                          {clinicName && (
                            <span style={{ position: "absolute", left: xPct, top: `${l1}%`, fontSize: ptToCqh(10), lineHeight: 1, whiteSpace: "nowrap", color: "#222", fontFamily: "Helvetica, Arial, sans-serif" }}>
                              {clinicName}
                            </span>
                          )}
                          {(phone || regNo) && (
                            <span style={{ position: "absolute", left: xPct, top: `${l2}%`, fontSize: ptToCqh(9), lineHeight: 1, whiteSpace: "nowrap", color: "#444", fontFamily: "Helvetica, Arial, sans-serif" }}>
                              {[phone && `Mob: ${phone}`, regNo && `Reg. No.: ${regNo}`].filter(Boolean).join("   |   ")}
                            </span>
                          )}
                          {profile.email && (
                            <span style={{ position: "absolute", left: xPct, top: `${l3}%`, fontSize: ptToCqh(9), lineHeight: 1, whiteSpace: "nowrap", color: "#444", fontFamily: "Helvetica, Arial, sans-serif" }}>
                              {profile.email}
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-[11px] text-stone-400">
                          Drag sliders until your info sits in the clear area beside the logo.
                        </p>
                      </div>
                    );
                  })()}
                </div>
              )}

              {saveError && (
                <p className="mt-3 flex items-center gap-1.5 text-xs text-red-600">
                  <AlertCircle className="h-3.5 w-3.5" /> {saveError}
                </p>
              )}

              <button
                type="button"
                onClick={handleSaveInfo}
                disabled={saveState === "saving" || !fullName.trim()}
                className={cn(
                  "mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white transition-all",
                  saveState === "saved"
                    ? "bg-emerald-500"
                    : saveState === "error"
                      ? "bg-red-500"
                      : "bg-[#00A9B7] hover:bg-[#008f9c] disabled:opacity-50",
                )}
              >
                {saveState === "saving" && <Loader2 className="h-4 w-4 animate-spin" />}
                {saveState === "saved" && <CheckCircle2 className="h-4 w-4" />}
                {saveState === "saving" ? "Saving…" : saveState === "saved" ? "Saved!" : saveState === "error" ? "Retry" : "Save Changes"}
              </button>
            </section>
          )}

          {/* ── Letterhead section ───────────────────────────────── */}
          {profile && (
            <section>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-stone-400">
                Letterhead
              </h2>

              {/* Current letterhead preview */}
              {(uploadPreview ?? profile.letterheadUrl) && (
                <div className="mb-4 overflow-hidden rounded-xl border border-stone-200 shadow-sm">
                  <p className="border-b border-stone-100 bg-stone-50 px-3 py-1.5 text-[11px] font-medium text-stone-500">
                    {uploadPreview ? "New letterhead (not yet saved)" : "Current letterhead"}
                  </p>
                  <Image
                    src={uploadPreview ?? profile.letterheadUrl!}
                    alt="Letterhead preview"
                    width={400}
                    height={300}
                    className="w-full object-contain"
                    unoptimized
                  />
                </div>
              )}

              {/* Note: the "already has info?" toggle has moved to the top of the Doctor Information section */}
              <p className="mb-3 rounded-lg bg-stone-50 px-3 py-2 text-[11px] text-stone-500">
                You&apos;re currently marked as <span className="font-semibold text-stone-700">{letterheadHasDoctorInfo ? "Yes — info already printed" : "No — blank / design-only"}</span>.
                Change this at the top of the profile if needed.
              </p>

              {/* File drop zone */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                  "flex w-full cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed p-5 text-center transition-colors",
                  uploadFile
                    ? "border-[#00A9B7] bg-[#E5F8F9]"
                    : "border-stone-300 bg-stone-50 hover:border-[#00A9B7] hover:bg-[#E5F8F9]/40",
                )}
              >
                <Upload className={cn("h-6 w-6", uploadFile ? "text-[#00A9B7]" : "text-stone-400")} />
                <span className="text-xs font-medium text-stone-600">
                  {uploadFile ? uploadFile.name : "Click to select a new letterhead"}
                </span>
                <span className="text-[11px] text-stone-400">PNG or JPG · Max 4 MB · Min 800 px wide</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                className="hidden"
                onChange={handleFileChange}
              />

              {uploadError && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" /> {uploadError}
                </p>
              )}

              <button
                type="button"
                onClick={handleUploadLetterhead}
                disabled={!uploadFile || uploadState === "saving"}
                className={cn(
                  "mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white transition-all",
                  uploadState === "saved"
                    ? "bg-emerald-500"
                    : uploadState === "error"
                      ? "bg-red-500"
                      : "bg-[#00A9B7] hover:bg-[#008f9c] disabled:opacity-50 disabled:cursor-not-allowed",
                )}
              >
                {uploadState === "saving" && <Loader2 className="h-4 w-4 animate-spin" />}
                {uploadState === "saved" && <CheckCircle2 className="h-4 w-4" />}
                {uploadState === "saving"
                  ? "Uploading…"
                  : uploadState === "saved"
                    ? "Letterhead Updated!"
                    : uploadState === "error"
                      ? "Retry Upload"
                      : "Upload New Letterhead"}
              </button>
            </section>
          )}
        </div>
      </aside>
    </>
  );
}

// ── Small labelled field wrapper ──────────────────────────────────────────────
function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-500">
        <span className="text-stone-400">{icon}</span>
        {label}
      </label>
      {children}
    </div>
  );
}
