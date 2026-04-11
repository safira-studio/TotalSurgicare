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
      <div className="container mx-auto space-y-12">

        {/* TOP — Information */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="bg-teal-100 text-teal-600 mb-4">
            Knee Reconstruction
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-onest text-clinic-primary mb-6">
            Knee Joint Replacement – Walk Pain-Free Again
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Total Knee Replacement (TKR) is a surgical procedure that replaces
            the damaged surface of the knee joint with metal and high-grade
            plastic components. It is the gold-standard treatment for end-stage
            knee arthritis and is performed over 700,000 times annually
            worldwide with outstanding success rates.
          </p>
          <p className="text-gray-600">
            Our orthopaedic specialists use computer-assisted and robotic-guided
            techniques to ensure precise implant alignment, improving outcomes
            and extending the life of your knee replacement. Combined with an
            intensive physiotherapy program, patients regain independence
            quickly and with lasting results.
          </p>
        </div>

        {/* MIDDLE — Side-by-side images */}
        <div className="bg-gradient-to-br from-teal-100 to-cyan-200 rounded-2xl p-4 grid grid-cols-5 gap-3">
          {/* Portrait — narrower column */}
          <div className="col-span-2 rounded-xl overflow-hidden bg-white/40 flex items-center justify-center">
            <Image
              src="/kneejoint.png"
              alt="Knee Joint Replacement Diagram"
              width={400}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Landscape — wider column */}
          <div className="col-span-3 rounded-xl overflow-hidden">
            <Image
              src="/knee-machine.png"
              alt="Knee Replacement Robotic Surgery"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* BOTTOM — Key Advantages + Procedure Types */}
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
                    <span className="text-sm text-gray-600">{advantage}</span>
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

        {/* Appointment form */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <AppointmentForm formClass="space-y-4" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default KneeJointService;
