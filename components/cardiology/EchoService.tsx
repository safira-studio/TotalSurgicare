import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Circle, ScanHeart } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";

const EchoService = () => {
  const benefits = [
    "Non-invasive, radiation-free imaging",
    "Real-time assessment of heart chambers and valves",
    "Detects heart failure, valve disease & clots",
    "Measures ejection fraction (heart pumping strength)",
    "Results available immediately during the scan",
  ];

  const useCases = [
    "Chest pain or shortness of breath evaluation",
    "Monitoring known heart disease",
    "Pre-operative cardiac clearance",
    "Post-heart attack assessment",
    "Follow-up after cardiac surgery",
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-cyan-100 text-cyan-700 mb-4">
              Cardiac Imaging
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-onest text-clinic-primary mb-6">
              2D Echocardiography – See Your Heart in Action
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              A 2D Echo (Two-Dimensional Echocardiogram) is an ultrasound-based
              cardiac imaging test that provides live, moving images of your
              heart. It allows our cardiologists to evaluate the structure and
              function of all four chambers, valves, and the surrounding
              pericardium — without any radiation or invasive procedure.
            </p>
            <p className="text-gray-600 mb-8">
              This is one of the most important and widely used diagnostic tools
              in cardiology. Within 20–30 minutes, our specialists get a
              comprehensive picture of your heart health to guide accurate
              treatment decisions.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary flex items-center">
                    <ScanHeart className="h-5 w-5 mr-2 text-cyan-600" />
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

              <Card className="border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary">
                    When Is It Needed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Circle className="h-2 w-2 mt-2 text-clinic-primary fill-current shrink-0" />
                        <span className="text-sm text-gray-600">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <AppointmentForm
              buttonClass="bg-clinic-primary hover:bg-clinic-dark"
              colorClass="focus:ring-clinic-primary focus-visible:ring-clinic-primary"
              formClass="space-y-4"
              parentClass="border border-clinic-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EchoService;
