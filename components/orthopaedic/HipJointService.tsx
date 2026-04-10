import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Circle, ShieldCheck } from "lucide-react";
import Image from "next/image";

const HipJointService = () => {
  const benefits = [
    "Significant pain relief and improved mobility",
    "Long-lasting implants (15–20+ years)",
    "Minimally invasive surgical techniques available",
    "Rapid recovery with early mobilisation",
    "Restores ability to walk, climb stairs, and exercise",
    "Improved quality of life for elderly patients",
  ];

  const indications = [
    "Severe osteoarthritis of the hip",
    "Rheumatoid arthritis causing joint damage",
    "Avascular necrosis of the femoral head",
    "Hip fractures (especially in elderly)",
    "Failed previous hip surgeries",
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-orange-100 to-amber-200 rounded-2xl flex flex-col gap-3 p-4">
              <Image
                src="/hip-2.png"
                alt="Hip Joint Replacement - Implant Components"
                width={600}
                height={800}
                className="rounded-xl w-full object-contain"
              />
              <Image
                src="/hip.png"
                alt="Hip Joint Replacement Surgery"
                width={800}
                height={800}
                className="rounded-xl w-full object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-clinic-secondary/30">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-clinic-secondary rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  15–20 Year Implant Life
                </span>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-clinic-secondary/30">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-clinic-primary rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  Early Mobilisation
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Badge className="bg-orange-100 text-orange-600 mb-4">
              Joint Replacement
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-onest text-clinic-primary mb-6">
              Hip Joint Replacement – Restore Pain-Free Movement
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Total Hip Replacement (THR) is a highly effective surgical
              procedure that replaces a damaged or worn hip joint with a
              precision-engineered prosthetic implant. It is one of the most
              successful orthopaedic surgeries performed worldwide, offering
              lasting relief from chronic hip pain and dramatically improved
              mobility.
            </p>
            <p className="text-gray-600 mb-8">
              Our orthopaedic team uses the latest ceramic and titanium implants
              combined with minimally invasive techniques to reduce blood loss,
              shorten hospital stay, and enable faster recovery. Most patients
              are walking with assistance within 24 hours of surgery.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary flex items-center">
                    <ShieldCheck className="h-5 w-5 mr-2 text-orange-500" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Circle className="h-2 w-2 mt-2 text-clinic-primary fill-current shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary">
                    Who Needs It
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {indications.map((indication, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Circle className="h-2 w-2 mt-2 text-clinic-primary fill-current shrink-0" />
                        <span className="text-sm text-gray-600">
                          {indication}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HipJointService;
