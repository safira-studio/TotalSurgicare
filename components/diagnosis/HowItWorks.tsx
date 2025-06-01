import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, TestTube, FileCheck } from "lucide-react";
import { Button } from "../ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Select Your Test",
      description:
        "Browse our comprehensive list of diagnostic tests and packages. Choose individual tests or complete health check-up packages based on your needs.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      step: "02",
      icon: Calendar,
      title: "Book Appointment",
      description:
        "Schedule your appointment online or call us. Choose between visiting our center or opting for home sample collection service.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      step: "03",
      icon: TestTube,
      title: "Get Tested",
      description:
        "Visit our state-of-the-art facility or have our trained phlebotomist collect samples at your home. All procedures follow strict safety protocols.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      step: "04",
      icon: FileCheck,
      title: "Receive Reports",
      description:
        "Get your detailed reports within 24-48 hours via email, SMS, or download from our secure online portal. Consultation available if needed.",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 hover:bg-white text-clinic-primary mb-4">
            Simple Process
          </Badge>
          <h2 className="text-4xl font-onest text-clinic-primary mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Getting your diagnostic tests done has never been easier. Follow our
            simple 4-step process from test selection to receiving your
            comprehensive health reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div
                      className={`mx-auto ${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
                    >
                      <step.icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-clinic-primary text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-clinic-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-blue-300" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-blue-300 border-t-2 border-t-transparent border-b-2 border-b-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-onest text-clinic-primary mb-6">
              Ready to Take Care of Your Heart?
            </h3>
            <p className="text-clinic-primary mb-8 text-lg max-w-2xl mx-auto">
              Do&apos;t wait when it comes to your heart health. Schedule a
              consultation with our cardiac specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/contact"}>
                <Button
                  className="bg-white text-clinic-primary hover:bg-clinic-dark border-clinic-primary border-2 hover:text-white px-8 py-3"
                  size="lg"
                >
                  Schedule Consultation
                </Button>
              </Link>
              <Link href={`tel:${siteConfig.contact.phone.primary}`}>
                <Button
                  className=" text-clinic-primary hover:bg-white border-clinic-primary border-2 hover:text-clinic-dark px-8 py-3"
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
    </section>
  );
};

export default HowItWorks;
