"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";

const specialties = [
  "Proctology",
  "Laparoscopy",
  "Urology",
  "Gynaecology",
  "Aesthetics",
  "Vascular",
  "Opthalmology",
  "Cardiology",
  "Diagnostic",
  "Post Surgery Care",
];

const formSchema = z.object({
  specialty: z.string().min(1, "Please select a department"),
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .regex(/^\+?[0-9]{10,15}$/, "Please enter a valid phone number"),
  gender: z.string().min(1, "Please select your gender"),
  email: z.string().email("Please enter a valid email address"),
  reason: z
    .string()
    .min(10, "Please provide a reason for your visit (min 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

interface AppointmentProps {
  parentClass?: string;
  colorClass?: string;
  buttonClass?: string;
  formClass?: string;
}

export default function AppointmentForm({
  parentClass = "",
  colorClass = "",
  buttonClass = "",
  formClass = "",
}: AppointmentProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      specialty: "",
      name: "",
      phone: "",
      gender: "",
      email: "",
      reason: "",
    },
  });

  const specialty = watch("specialty");
  const gender = watch("gender");

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        setSubmittedData(data);
      } else {
        alert(`Booking failed: ${result.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("An error occurred while booking the appointment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        "w-full p-8 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl",
        parentClass
      )}
    >
      {submitted ? (
        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-onest font-semibold text-gray-900">
              Appointment Booked Successfully!
            </h3>
            <p className="text-gray-600 text-lg">
              Your appointment for{" "}
              <span className="font-semibold text-clinic-secondary">
                {submittedData?.specialty}
              </span>{" "}
              has been confirmed.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-left">
            <h4 className="font-semibold text-gray-900 mb-3">
              Appointment Details:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-500">Patient Name:</span>
                <p className="font-medium">{submittedData?.name}</p>
              </div>
              <div>
                <span className="text-gray-500">Department:</span>
                <p className="font-medium">{submittedData?.specialty}</p>
              </div>
              <div>
                <span className="text-gray-500">Phone:</span>
                <p className="font-medium">{submittedData?.phone}</p>
              </div>
              <div>
                <span className="text-gray-500">Email:</span>
                <p className="font-medium">{submittedData?.email}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <svg
                className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <div className="text-left">
                <p className="text-blue-800 font-medium text-sm">
                  What&apos;s Next?
                </p>
                <p className="text-blue-700 text-sm mt-1">
                  We will contact you within 24 hours on your provided phone
                  number and email to confirm your appointment time and provide
                  further instructions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              aria-label="book appointment"
              className="flex-1 border-clinic-secondary text-clinic-secondary hover:bg-clinic-secondary hover:text-white"
              variant="outline"
              onClick={() => {
                setSubmitted(false);
                setSubmittedData(null);
                reset();
              }}
            >
              Book Another Appointment
            </Button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-onest mb-6">Book an Appointment</h3>

          <form className={cn("", formClass)} onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Select Department</Label>
              <Select
                value={specialty}
                onValueChange={(value) => setValue("specialty", value)}
              >
                <SelectTrigger
                  aria-label="select specialty"
                  className={cn(
                    "w-full focus:ring-2 focus:ring-clinic-secondary focus-visible:ring-clinic-secondary",
                    colorClass
                  )}
                >
                  <SelectValue placeholder="Select a specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((s, index) => (
                    <SelectItem key={index} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.specialty && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.specialty.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="name">
                Full Name
              </Label>
              <Input
                className={cn(
                  "focus:ring-2 focus:ring-clinic-secondary focus-visible:ring-clinic-secondary",
                  colorClass
                )}
                id="name"
                placeholder="Your full name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label className="text-sm font-medium" htmlFor="phone">
                  Phone Number
                </Label>
                <Input
                  className={cn(
                    "focus:ring-2 focus:ring-clinic-secondary focus-visible:ring-clinic-secondary",
                    colorClass
                  )}
                  id="phone"
                  placeholder="Your phone number"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Gender</Label>
                <Select
                  value={gender}
                  onValueChange={(value) => setValue("gender", value)}
                >
                  <SelectTrigger
                    aria-label="Select Gender"
                    className={cn(
                      "w-full focus:ring-2 focus:ring-clinic-secondary focus-visible:ring-clinic-secondary",
                      colorClass
                    )}
                  >
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="email">
                Email Address
              </Label>
              <Input
                className={cn(
                  "focus:ring-2 focus:ring-clinic-secondary focus-visible:ring-clinic-secondary",
                  colorClass
                )}
                id="email"
                placeholder="Your email address"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="reason">
                Reason for Visit
              </Label>
              <Textarea
                className={cn(
                  "focus:ring-2 focus:ring-clinic-secondary focus-visible:ring-clinic-secondary",
                  colorClass
                )}
                id="reason"
                placeholder="Please briefly describe your symptoms or reason for the appointment"
                rows={3}
                {...register("reason")}
              />
              {errors.reason && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.reason.message}
                </p>
              )}
            </div>

            <div className="pt-2">
              <Button
                aria-label="submit form"
                className={cn(
                  "w-full bg-clinic-secondary hover:bg-clinic-secondaryDark",
                  buttonClass,
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Submitting..." : "Book Appointment"}
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
