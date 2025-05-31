import BookingHighlights from "@/components/diagnosis/BookingHighlights";
import CorporateTestingServices from "@/components/diagnosis/CorporateTestingServices";
import DiagnosticServices from "@/components/diagnosis/DiagnosticServices";
import HowItWorks from "@/components/diagnosis/HowItWorks";
import React from "react";

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
