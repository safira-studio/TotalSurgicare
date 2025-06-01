import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Circle } from "lucide-react";
import Link from "next/link";

const AffordableTreatment = () => {
  const strategies = [
    {
      title: "Transparent Pricing",
      description: "Clear, upfront costs with no hidden fees",
      icon: "💰",
    },
    {
      title: "Flexible Payment Plans",
      description: "Interest-free monthly payment options available",
      icon: "📅",
    },
    {
      title: "Insurance Coordination",
      description: "We work directly with your insurance provider",
      icon: "🏥",
    },
    {
      title: "Preventive Care Programs",
      description: "Early intervention reduces long-term costs",
      icon: "🛡️",
    },
    {
      title: "Group Discounts",
      description: "Special rates for family treatment packages",
      icon: "👥",
    },
    {
      title: "Financial Assistance",
      description: "Need-based assistance programs available",
      icon: "🤝",
    },
  ];

  const affordableOptions = [
    "Low-cost consultation packages",
    "Bundled diagnostic services",
    "Post-treatment care included",
    "Generic medication options",
    "Outpatient procedure focus",
    "24/7 support at no extra cost",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-clinic-primary mb-4">
            Affordable Excellence
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-clinic-primary mb-6">
            Affordable Treatment Options
          </h2>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
            Quality cardiac care shouldn&apos;t be a financial burden.
            We&apos;re committed to providing world-class treatment options that
            are accessible to everyone, regardless of their economic situation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8 md:mb-12">
          {strategies.map((strategy, index) => (
            <Card
              key={index}
              className="border-green-200 hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-center">
                <div className="text-2xl md:text-4xl">{strategy.icon}</div>
                <CardTitle className="text-base md:text-lg text-clinic-accent">
                  {strategy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="max-md:text-sm text-gray-600 text-center">
                  {strategy.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl  md:text-3xl font-bold text-clinic-primary mb-6">
              Our Commitment to Affordable Care
            </h3>
            <p className="md:text-lg text-gray-600 mb-6">
              We believe that exceptional cardiac care should be accessible to
              all patients. Our clinic has implemented comprehensive strategies
              to reduce treatment costs while maintaining the highest standards
              of medical excellence.
            </p>
            <p className="text-gray-600 mb-8">
              From transparent pricing and flexible payment plans to insurance
              coordination and financial assistance programs, we work closely
              with each patient to develop a treatment plan that fits their
              medical needs and budget constraints.
            </p>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-green-600" />
                  What&apos;s Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {affordableOptions.map((option, index) => (
                    <li key={index} className="flex items-start">
                      <Circle className="h-2 w-2 mt-2 mr-3 text-green-600 fill-current" />
                      <span className="text-sm text-gray-600">{option}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-clinic-secondary/10 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h4
                className="text-xl md:text-2xl font-bold text-clinic-primary
               mb-4"
              >
                Free Financial Consultation
              </h4>
              <p className="text-gray-600 mb-6">
                Speak with our financial counselors to explore all available
                options for making your cardiac care affordable.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">
                    Initial Consultation
                  </span>
                  <span className="text-clinic-secondary font-bold">
                    Starting at $99
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">
                    Diagnostic Package
                  </span>
                  <span className="text-clinic-secondary font-bold">
                    30% Off Bundle
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">
                    Payment Plans
                  </span>
                  <span className="text-clinic-secondary font-bold">
                    0% Interest
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Link href="/contact">
                <Button className="w-full bg-clinic-primary hover:bg-clinic-dark text-white">
                  Schedule Financial Consultation
                </Button>
              </Link>
              <Button
                className="w-full border-clinic-primary text-clinic-primary hover:bg-clinic-dark/20 hover:text-clinic-primary"
                variant="outline"
              >
                Download Pricing Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffordableTreatment;
