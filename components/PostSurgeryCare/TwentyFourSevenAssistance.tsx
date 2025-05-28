import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Phone, Stethoscope, Headphones } from "lucide-react";

const TwentyFourSevenAssistance = () => {
  const assistanceFeatures = [
    {
      icon: Clock,
      title: "Round-the-Clock Availability",
      description:
        "Nursing staff available 24 hours a day, 7 days a week for immediate assistance",
    },
    {
      icon: Phone,
      title: "Emergency Response",
      description:
        "Immediate response to medical emergencies with on-call specialists",
    },
    {
      icon: Stethoscope,
      title: "Clinical Support",
      description:
        "Expert clinical guidance for medication management and symptom assessment",
    },
    {
      icon: Headphones,
      title: "Patient Helpline",
      description:
        "Dedicated helpline for patient questions, concerns, and care coordination",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-clinic-primary mb-4">
            24/7 Support
          </Badge>
          <h2 className="text-4xl font-bold text-clinic-primary mb-6">
            24/7 Assistance for Post-Operative Care
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recovery doesn&apos;t follow business hours. Our round-the-clock
            support ensures that help is always available when you need it most,
            providing peace of mind for patients and their families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {assistanceFeatures.map((feature, index) => (
            <Card
              key={index}
              className="border-clinic-primary hover:shadow-lg transition-shadow text-center"
            >
              <CardHeader>
                <div className="mx-auto bg-clinic-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-clinic-primary" />
                </div>
                <CardTitle className="text-lg text-clinic-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-purple-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-clinic-primary mb-4">
                Always Here When You Need Us
              </h3>
              <p className="text-gray-700 mb-6">
                Our 24/7 assistance program includes experienced nurses, on-call
                physicians, and specialized support staff who understand the
                unique challenges of post-operative recovery. Whether you have
                questions about medications, concerns about symptoms, or need
                emergency assistance, our team is just a phone call away.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Immediate triage and assessment
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Direct communication with care team
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Emergency intervention when needed
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Family support and guidance
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-clinic-primary mb-4">
                  Emergency Contact
                </h4>
                <div className="text-3xl font-bold text-clinic-primary mb-2">
                  1-800-CARE-24/7
                </div>
                <p className="text-gray-600 mb-4">
                  Available 24 hours, 365 days a year
                </p>
                <Button className="bg-clinic-primary hover:bg-purple-700">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwentyFourSevenAssistance;
