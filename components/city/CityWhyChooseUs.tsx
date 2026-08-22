import React from "react";
import Link from "next/link";
import { UserRound, Cpu, IndianRupee, Hospital } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { CityConfig } from "./types";

interface ReasonProps {
  index: number;
  title: string;
  body: string;
  icon: React.ReactNode;
  accentClass: string;
}

const Reason = ({ index, title, body, icon, accentClass }: ReasonProps) => (
  <article className="relative bg-white border border-gray-100 rounded-3xl p-8 h-full transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 overflow-hidden">
    <div
      aria-hidden="true"
      className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-60 ${accentClass}`}
    />

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-5">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-clinic-primary/10 text-clinic-dark shrink-0">
          {icon}
        </span>
        <span
          aria-hidden="true"
          className="text-4xl font-onest font-bold text-gray-200 leading-none"
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
    </div>
  </article>
);

/** Identical across cities — only the intro paragraph names the city. */
const reasons: Omit<ReasonProps, "index">[] = [
  {
    title: "Experienced Surgical Specialists & Personalized Care",
    body: "Our surgeons have years of hands-on experience across multiple specialties, including minimally invasive procedures. We don't believe in one-size-fits-all treatment. Before any surgery, we review your medical history, current condition, and personal goals to plan an approach that fits you specifically. Our team also walks you through each step of the process, so you know what's happening and why, before, during, and after your surgery.",
    icon: <UserRound className="w-6 h-6" />,
    accentClass: "bg-gradient-to-br from-blue-100 to-indigo-100",
  },
  {
    title: "Advanced Technology for Accurate, Faster Treatment",
    body: "We use modern diagnostic equipment and updated surgical techniques to improve accuracy and cut down recovery time. Our operation theatres follow strict safety and hygiene standards to keep risks low. This combination of good technology and skilled surgeons means shorter hospital stays, fewer complications, and a quicker return to normal life for most patients.",
    icon: <Cpu className="w-6 h-6" />,
    accentClass: "bg-gradient-to-br from-emerald-100 to-teal-100",
  },
  {
    title: "Affordable and Transparent Healthcare",
    body: "We give patients clear, upfront pricing with no hidden charges. Treatment packages are designed to be budget-friendly, and we offer EMI options for those who need to spread out payments. Good surgical care shouldn't be out of reach because of cost, and we work to keep it accessible without cutting corners on quality.",
    icon: <IndianRupee className="w-6 h-6" />,
    accentClass: "bg-gradient-to-br from-amber-100 to-orange-100",
  },
  {
    title: "Complete Surgical Care Under One Roof",
    body: "From your first consultation to full recovery, everything happens at Total Surgicare. We keep waiting times short with quick consultations and fast diagnosis, so treatment can start sooner. After surgery, our team stays involved, monitoring your recovery and staying available if you have questions or concerns during healing.",
    icon: <Hospital className="w-6 h-6" />,
    accentClass: "bg-gradient-to-br from-rose-100 to-pink-100",
  },
];

const CityWhyChooseUs = ({ city }: { city: CityConfig }) => {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="w-full py-20 bg-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mb-14">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-clinic-dark text-xs font-bold tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2
            className="text-4xl md:text-5xl font-onest font-bold text-gray-900 mb-5"
            id="why-choose-heading"
          >
            Why Choose Total Surgicare
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {city.whyChooseUsIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <Reason key={reason.title} index={index + 1} {...reason} />
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button
              aria-label="Book Appointment"
              className="rounded-full bg-clinic-primary hover:bg-clinic-dark text-white px-8 h-11"
            >
              Book Appointment
            </Button>
          </Link>
          <Link
            className="text-sm font-semibold text-clinic-dark hover:underline"
            href="/aboutus"
          >
            Learn more about Total Surgicare
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CityWhyChooseUs;
