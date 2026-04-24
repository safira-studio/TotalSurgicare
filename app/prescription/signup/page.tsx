"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createClient } from "@/lib/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const schema = z
  .object({
    fullName: z.string().min(2, "Enter your full name"),
    clinicName: z.string().min(2, "Enter clinic / hospital name"),
    phone: z
      .string()
      .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
    regNo: z.string().optional(),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

export default function SignupPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setServerError(null);
    setLoading(true);
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          full_name: values.fullName,
          clinic_name: values.clinicName,
          phone: values.phone,
          reg_no: values.regNo ?? null,
        },
      },
    });

    if (error) {
      setLoading(false);
      setServerError(error.message);
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (signInError) {
      setLoading(false);
      setServerError(signInError.message);
      return;
    }

    router.push("/prescription/onboarding");
    router.refresh();
  }

  const inputClass =
    "h-12 rounded-xl border-gray-200 bg-white text-[#1B2A41] shadow-sm transition-all focus-visible:border-[#00A9B7] focus-visible:ring-2 focus-visible:ring-[#00A9B7]/20 focus-visible:ring-offset-0";
  const labelClass =
    "text-[11px] font-bold uppercase tracking-[0.12em] text-[#1B2A41]/50";

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">

      {/* ── Mobile branded header (shown only below lg) ── */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-10 text-center lg:hidden"
        style={{ background: "linear-gradient(160deg, #1B2A41 0%, #00768A 60%, #005F73 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #00A9B7, transparent 70%)" }} />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #F4A300, transparent 70%)" }} />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <Image src="/logo.png" alt="Total Surgicare" width={70} height={70} />
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">
              Join the <span style={{ color: "#F4A300" }}>Doctor Portal</span>
            </h1>
            <p className="mt-1 text-sm text-white/55">Set up your account in under 2 minutes</p>
          </div>
        </div>
      </div>

      {/* ── Left brand panel (desktop only) ── */}
      <div
        className="relative hidden lg:flex lg:w-[42%] flex-col justify-between overflow-hidden px-14 py-12"
        style={{ background: "linear-gradient(160deg, #1B2A41 0%, #00768A 60%, #005F73 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute left-0 top-0 h-full w-1" style={{ background: "linear-gradient(to bottom, transparent, #F4A300, transparent)" }} />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #00A9B7, transparent 70%)" }} />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #F4A300, transparent 70%)" }} />

        <div className="relative z-10">
          <Image src="/logo.png" alt="Total Surgicare" width={110} height={110} />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center py-10">
          <h1 className="mb-5 text-6xl font-black leading-[1.05] tracking-tight text-white">
            Join the<br />
            <span style={{ color: "#F4A300" }}>Doctor Portal</span>
          </h1>
          <p className="mb-14 max-w-xs text-lg leading-relaxed text-white/55">
            Set up your account in under 2 minutes and start sending professional prescriptions today.
          </p>
          <div className="flex flex-col items-center gap-5">
            {[
              "Reliability you can count on",
              "Professional PDF prescriptions",
              "Cut down paperwork instantly",
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <span style={{ color: "#F4A300" }} className="text-base">✦</span>
                <span className="text-base" style={{ color: "#F4A300" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-xs text-white/25 tracking-wider">
          © {new Date().getFullYear()} Total Surgicare · All rights reserved
        </p>
      </div>

      {/* ── Right form panel ── */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#F8F9FA] px-5 py-8 sm:px-8 lg:px-14">
        <div className="w-full max-w-md">
          <div className="mb-5">
            <h2 className="text-2xl font-black tracking-tight text-[#1B2A41] sm:text-3xl">
              Create account
            </h2>
            <p className="mt-1.5 text-sm text-gray-400">
              Set up your prescription portal
            </p>
          </div>

          <div className="mb-6 h-0.5 w-12 rounded-full" style={{ background: "#F4A300" }} />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className={labelClass}>Full Name *</Label>
              <Input
                id="fullName"
                placeholder="Dr. Name"
                autoComplete="name"
                className={inputClass}
                {...register("fullName")}
              />
              {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
            </div>

            {/* Clinic name */}
            <div className="space-y-2">
              <Label htmlFor="clinicName" className={labelClass}>Clinic / Hospital *</Label>
              <Input
                id="clinicName"
                placeholder="Clinic Name"
                autoComplete="organization"
                className={inputClass}
                {...register("clinicName")}
              />
              {errors.clinicName && <p className="text-xs text-red-500">{errors.clinicName.message}</p>}
            </div>

            {/* Phone + Reg No — stacked on mobile, side-by-side on sm+ */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone" className={labelClass}>WhatsApp *</Label>
                <Input
                  id="phone"
                  placeholder="9876543210"
                  maxLength={10}
                  autoComplete="tel"
                  className={inputClass}
                  {...register("phone")}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="regNo" className={labelClass}>Reg. No.</Label>
                <Input
                  id="regNo"
                  placeholder="12345"
                  className={inputClass}
                  {...register("regNo")}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className={labelClass}>Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="doctor@example.com"
                autoComplete="email"
                className={inputClass}
                {...register("email")}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* Password + Confirm — stacked on mobile, side-by-side on sm+ */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="password" className={labelClass}>Password *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className={`${inputClass} pr-11`}
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-[#00A9B7]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className={labelClass}>Confirm *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className={`${inputClass} pr-11`}
                    {...register("confirmPassword")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-[#00A9B7]"
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            {serverError && (
              <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                {serverError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="relative mt-1 h-12 w-full overflow-hidden rounded-xl text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-70"
              style={{ background: loading ? "#007D8C" : "linear-gradient(135deg, #00A9B7 0%, #007D8C 100%)" }}
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Spinner />
                  Creating account…
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-300">or</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/prescription/login" className="font-bold transition-colors hover:underline" style={{ color: "#00A9B7" }}>
              Sign in →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.97 9.97 0 012.121-3.584M6.53 6.533A9.97 9.97 0 0112 5c4.477 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411M3 3l18 18" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
