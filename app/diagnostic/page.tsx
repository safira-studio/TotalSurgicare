import BookingHighlights from "@/components/diagnosis/BookingHighlights";
import CorporateTestingServices from "@/components/diagnosis/CorporateTestingServices";
import DiagnosticServices from "@/components/diagnosis/DiagnosticServices";
import HowItWorks from "@/components/diagnosis/HowItWorks";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Diagnostic",
  description:
    "At Total Surgicare, we provide reliable diagnostic tests to ensure precise health assessments. Our state-of-the-art facilities and experienced professionals are dedicated to delivering accurate results with utmost care and efficiency, supporting early detection and effective treatment planning for optimal patient outcomes.",
  openGraph: {
    title: "About Us - Total Surgicare",
    description:
      "Learn about Total Surgicare, a leading surgical care provider in Pune specializing in minimally invasive procedures for various conditions.",
    url: "https://totalsurgicare.com/aboutus",
    images: [
      {
        url: "https://totalsurgicare.com/logo.webp",
        width: 800,
        height: 600,
        alt: "Total Surgicare About Us",
      },
    ],
  },
};

const Diagnostic = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-clinic-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-onest mb-6">
            Diagnostic Services
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto">
            Comprehensive diagnostic testing with state-of-the-art technology
            and expert analysis. From routine check-ups to specialized tests, we
            provide accurate results you can trust.
          </p>
        </div>
      </section>

      <DiagnosticServices />
      <BookingHighlights />
      <CorporateTestingServices />
      <HowItWorks />
    </div>
  );
};

export default Diagnostic;
