import AffordableTreatment from "@/components/cardiology/AffordableTreatment";
import AngiographyService from "@/components/cardiology/AngiographyService";
import AngioplastyService from "@/components/cardiology/AngioplastyService";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Heart } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cardiology",
  description:
    " At Total Surgicare, we provide high-quality cardiac care at budget-friendly prices, ensuring access to life-saving treatments.",
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

const Cardiac = () => {
  return (
    <div className="min-h-screen  to-white rounded-2xl">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-clinic-primary/80">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-onest text-white mb-6">
            Specialized Cardiac Services
          </h1>
          <p className="text-sm md:text-xl text-white mb-8 max-w-3xl mx-auto">
            Our state-of-the-art cardiac care center offers comprehensive heart
            health services with advanced diagnostic tools and minimally
            invasive treatment options.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <AngiographyService />
      <AngioplastyService />
      <AffordableTreatment />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-clinic-primary mb-6">
            Ready to Take Care of Your Heart?
          </h3>
          <p className="text-clinic-primary mb-8 text-lg max-w-2xl mx-auto">
            Don&apos;t wait when it comes to your heart health. Schedule a
            consultation with our cardiac specialists today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/contact"}>
              <Button
                size="lg"
                aria-label="appointment button"
                className="bg-white text-clinic-primary hover:bg-clinic-dark border-clinic-primary border-2 hover:text-white px-8 py-3"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link href={`tel:${siteConfig.contact.phone.primary}`}>
              <Button
                size="lg"
                variant="outline"
                aria-label="call button"
                className=" text-clinic-primary hover:bg-white border-clinic-primary border-2 hover:text-clinic-dark px-8 py-3"
              >
                Call Now: {siteConfig.contact.phone.primary}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardiac;
