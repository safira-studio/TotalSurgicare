"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

    // Auto sign-in after signup (email confirmation disabled in Supabase for MVP)
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (signInError) {
      setLoading(false);
      setServerError(signInError.message);
      return;
    }

    // Keep loading=true through navigation so button stays disabled
    router.push("/prescription/onboarding");
    router.refresh();
  }

  const inputClass =
    "h-11 rounded-xl border-gray-200 bg-gray-50 focus-visible:ring-[#00A9B7]";
  const labelClass =
    "text-xs font-semibold uppercase tracking-wider text-gray-500";

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12"
      style={{
        background: "linear-gradient(135deg, #1B2A41 0%, #00768A 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "#00A9B7" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "#F4A300" }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <div className="rounded-3xl bg-white px-10 py-10 shadow-2xl">
          {/* Brand mark */}
          <div className="mb-7 flex flex-col items-center">
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-lg"
              style={{
                background: "linear-gradient(135deg, #F4A300 0%, #E49501 100%)",
              }}
            >
              Rx
            </div>
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1B2A41" }}
            >
              Create Account
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              Set up your prescription portal
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className={labelClass}>
                Full Name *
              </Label>
              <Input
                id="fullName"
                placeholder="Dr. Afifa T. Adhikari"
                className={inputClass}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-xs text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="clinicName" className={labelClass}>
                Clinic / Hospital Name *
              </Label>
              <Input
                id="clinicName"
                placeholder="Shifa Clinic"
                className={inputClass}
                {...register("clinicName")}
              />
              {errors.clinicName && (
                <p className="text-xs text-red-500">
                  {errors.clinicName.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="phone" className={labelClass}>
                  WhatsApp Mobile *
                </Label>
                <Input
                  id="phone"
                  placeholder="9975586761"
                  maxLength={10}
                  className={inputClass}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="regNo" className={labelClass}>
                  Reg. No.
                </Label>
                <Input
                  id="regNo"
                  placeholder="44363"
                  className={inputClass}
                  {...register("regNo")}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className={labelClass}>
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="doctor@example.com"
                className={inputClass}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="password" className={labelClass}>
                  Password *
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className={inputClass}
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword" className={labelClass}>
                  Confirm *
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className={inputClass}
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {serverError && (
              <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {serverError}
              </div>
            )}

            <Button
              type="submit"
              className="mt-1 h-11 w-full rounded-xl text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg disabled:opacity-70"
              style={{
                background: loading
                  ? "#007D8C"
                  : "linear-gradient(135deg, #00A9B7 0%, #007D8C 100%)",
              }}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Spinner />
                  Creating account…
                </span>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-xs text-gray-300">or</span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>

          <p className="mt-5 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/prescription/login"
              className="font-semibold hover:underline"
              style={{ color: "#00A9B7" }}
            >
              Sign in
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Total Surgicare · Doctor Portal
        </p>
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
