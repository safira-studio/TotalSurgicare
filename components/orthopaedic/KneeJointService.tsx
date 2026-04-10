import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Circle, Zap } from "lucide-react";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

const KneeJointService = () => {
  const advantages = [
    "Complete elimination of chronic knee pain",
    "Restoration of normal walking and stair climbing",
    "Highly durable implants (15–25 years)",
    "Computer-assisted precision surgery available",
    "Physiotherapy-backed rapid recovery",
    "Return to daily activities within 6–8 weeks",
  ];

  const types = [
    "Total Knee Replacement (TKR)",
    "Partial / Unicompartmental Knee Replacement",
    "Revision Knee Replacement",
    "Robotic-assisted Knee Surgery",
    "Bilateral Knee Replacement",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-teal-100 text-teal-600 mb-4">
              Knee Reconstruction
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-onest text-clinic-primary mb-6">
              Knee Joint Replacement – Walk Pain-Free Again
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Total Knee Replacement (TKR) is a surgical procedure that replaces
              the damaged surface of the knee joint with metal and high-grade
              plastic components. It is the gold-standard treatment for
              end-stage knee arthritis and is performed over 700,000 times
              annually worldwide with outstanding success rates.
            </p>
            <p className="text-gray-600 mb-8">
              Our orthopaedic specialists use computer-assisted and
              robotic-guided techniques to ensure precise implant alignment,
              improving outcomes and extending the life of your knee replacement.
              Combined with an intensive physiotherapy program, patients regain
              independence quickly and with lasting results.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-teal-200">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-teal-500" />
                    Key Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Circle className="h-2 w-2 mt-2 text-clinic-primary fill-current shrink-0" />
                        <span className="text-sm text-gray-600">
                          {advantage}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-teal-200">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary">
                    Procedure Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {types.map((type, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Circle className="h-2 w-2 mt-2 text-clinic-primary fill-current shrink-0" />
                        <span className="text-sm text-gray-600">{type}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-200 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
              <Image
                src="/kneejoint.png"
                alt="Knee Joint Replacement Surgery"
                width={800}
                height={800}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-teal-200">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-teal-500 rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  Computer-Assisted Precision
                </span>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-teal-200">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-clinic-secondary rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  6–8 Week Recovery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment form row */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-2xl">
            <AppointmentForm
              buttonClass="bg-clinic-primary hover:bg-clinic-dark"
              colorClass="focus:ring-clinic-primary focus-visible:ring-clinic-primary"
              formClass="space-y-2"
              parentClass="border border-clinic-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KneeJointService;
