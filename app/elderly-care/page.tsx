import DailyHomeCare from "@/components/elderlyCare/DailyHomeCare";
import EmergencyHomeVisit from "@/components/elderlyCare/EmergencyHomeVisit";
import HomeCareTreatment from "@/components/elderlyCare/HomeCareTreatment";
import HomeInvestigation from "@/components/elderlyCare/HomeInvestigation";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Elderly Care Services - Home Care, Treatment & Emergency Visits",
  description:
    "Comprehensive elderly care services in Pune including home treatment, home investigations, daily care assistance, and 24/7 emergency home visits with qualified nursing staff at Total Surgicare.",
  keywords:
    "Elderly Care Pune, Home Care Services, Home Treatment, Home Investigation, Emergency Home Visit, Nursing Staff, Senior Care",
  openGraph: {
    title: "Elderly Care Services - Total Surgicare",
    description:
      "Professional elderly care services at home with medical treatment, investigations, daily care, and emergency visits in Pune.",
    url: "https://totalsurgicare.com/elderly-care",
    images: [
      {
        url: "https://totalsurgicare.com/logo.webp",
        width: 800,
        height: 600,
        alt: "Total Surgicare Elderly Care",
      },
    ],
  },
};

const ElderlyCarePage = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Dedicated caregivers providing personalized attention with dignity and respect",
    },
    {
      icon: Users,
      title: "Qualified Staff",
      description:
        "Trained nurses, doctors, and caregivers with extensive experience in elderly care",
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description:
        "Background-verified staff ensuring safety and trustworthiness for your loved ones",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock support and emergency services whenever you need assistance",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-clinic-primary to-clinic-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-onest mb-6">
            Comprehensive Elderly Care Services
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto mb-8">
            Bringing quality healthcare and compassionate care to the comfort of
            your home. Professional medical services, daily care assistance, and
            emergency support for your elderly loved ones in Pune.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/contact"}>
              <Button
                aria-label="Book Service"
                className="bg-white text-clinic-primary hover:bg-gray-100 px-8 py-3 text-lg"
                size="lg"
              >
                Book a Service
              </Button>
            </Link>
            <Link href={`tel:${siteConfig.contact.phone.primary}`}>
              <Button
                aria-label="Call Now"
                className="bg-clinic-secondary hover:bg-clinic-secondaryDark text-white px-8 py-3 text-lg"
                size="lg"
                variant="outline"
              >
                Call: {siteConfig.contact.phone.primary}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-onest text-center text-clinic-primary mb-12">
            Why Choose Our Elderly Care Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="bg-clinic-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <HomeCareTreatment />
      <HomeInvestigation />
      <DailyHomeCare />
      <EmergencyHomeVisit />

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-clinic-primary to-clinic-dark">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-onest mb-6">
            Ready to Provide the Best Care for Your Loved Ones?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your elderly care needs. Our team is
            here to help you find the perfect care solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/contact"}>
              <Button
                aria-label="Get Started"
                className="bg-white text-clinic-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                size="lg"
              >
                Get Started Today
              </Button>
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.contact.phone.primary}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button
                aria-label="WhatsApp"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                size="lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.15-1.758-.867-2.03-.967-.272-.1-.47-.15-.669.15-.197.3-.759.967-.928 1.167-.17.2-.34.225-.637.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.65-2.058-.17-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.2-.297.3-.495.1-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51a12.279 12.279 0 00-.57-.01c-.197 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.2 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.005-1.413.247-.694.247-1.289.172-1.413-.075-.124-.272-.2-.57-.35zm-5.421 7.234h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 01-1.511-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.055 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElderlyCarePage;

