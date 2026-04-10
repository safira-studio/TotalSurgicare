import ACLService from "@/components/orthopaedic/ACLService";
import HipJointService from "@/components/orthopaedic/HipJointService";
import KneeJointService from "@/components/orthopaedic/KneeJointService";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orthopaedic Surgery - ACL, Hip & Knee Replacement | Total Surgicare",
  description:
    "Expert orthopaedic care at Total Surgicare Pune — ACL Reconstruction, Hip Joint Replacement, and Knee Joint Replacement by experienced surgeons using the latest minimally invasive techniques.",
  openGraph: {
    title: "Orthopaedic Surgery - Total Surgicare",
    description:
      "Expert orthopaedic care at Total Surgicare Pune — ACL Reconstruction, Hip Joint Replacement, and Knee Joint Replacement.",
    url: "https://totalsurgicare.com/orthopaedic",
    images: [
      {
        url: "https://totalsurgicare.com/logo.webp",
        width: 800,
        height: 600,
        alt: "Total Surgicare Orthopaedic",
      },
    ],
  },
};

const Orthopaedic = () => {
  return (
    <div className="min-h-screen to-white rounded-2xl">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-clinic-primary/80">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-onest text-white mb-6">
            Specialized Orthopaedic Services
          </h1>
          <p className="text-sm md:text-xl text-white mb-8 max-w-3xl mx-auto">
            From sports injuries to age-related joint degeneration, our
            orthopaedic team delivers advanced, minimally invasive treatments to
            restore mobility and get you back to the life you love.
          </p>

          {/* Section anchor links */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="#acl"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/40 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200"
            >
              ACL Reconstruction
            </a>
            <a
              href="#hip"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/40 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200"
            >
              Hip Joint Replacement
            </a>
            <a
              href="#knee"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/40 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200"
            >
              Knee Joint Replacement
            </a>
          </div>
        </div>
      </section>

      {/* ACL Section */}
      <div id="acl">
        <ACLService />
      </div>

      {/* Hip Joint Section */}
      <div id="hip">
        <HipJointService />
      </div>

      {/* Knee Joint Section */}
      <div id="knee">
        <KneeJointService />
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-clinic-primary mb-6">
            Ready to Move Without Pain?
          </h3>
          <p className="text-clinic-primary mb-8 text-lg max-w-2xl mx-auto">
            Consult our orthopaedic specialists today and take the first step
            toward a pain-free, active life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                aria-label="appointment button"
                className="bg-white text-clinic-primary hover:bg-clinic-dark border-clinic-primary border-2 hover:text-white px-8 py-3"
                size="lg"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link href={`tel:${siteConfig.contact.phone.primary}`}>
              <Button
                aria-label="call button"
                className="text-clinic-primary hover:bg-white border-clinic-primary border-2 hover:text-clinic-dark px-8 py-3"
                size="lg"
                variant="outline"
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

export default Orthopaedic;
