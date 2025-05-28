import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Circle } from "lucide-react";
import AppointmentForm from "./conditions/AppointmentForm";

const AngiographyService = () => {
  const benefits = [
    "Non-invasive diagnostic procedure",
    "Real-time visualization of blood vessels",
    "Early detection of blockages",
    "Precise treatment planning",
    "Minimal recovery time required",
  ];

  const procedures = [
    "Coronary Angiography",
    "Peripheral Angiography",
    "Cerebral Angiography",
    "Pulmonary Angiography",
  ];

  return (
    <section className="py-16 px-4 bg-white item ">
      {/* <div className="container mx-auto"> */}
      <div className="container mx-auto md:pl-20 flex justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-blue-100 text-clinic-primary mb-4">
              Advanced Diagnosis
            </Badge>
            <h2 className="text-4xl font-onest text-clinic-primary mb-6">
              Angiography – Advanced Heart Diagnosis
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Angiography is a sophisticated medical imaging technique that
              allows our specialists to visualize the inside of blood vessels
              and organs, particularly the heart's coronary arteries. Using
              contrast dye and advanced X-ray technology, we can detect
              blockages, narrowing, or other abnormalities that may be affecting
              your heart health.
            </p>
            <p className="text-gray-600 mb-8">
              This procedure is essential for diagnosing coronary artery
              disease, planning treatment strategies, and monitoring the
              effectiveness of cardiac interventions. Our state-of-the-art
              catheterization lab ensures the highest quality imaging with
              minimal discomfort to patients.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-clinic-primary">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-clinic-secondary" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Circle className="h-2 w-2 mt-2 mr-3 text-clinic-primary fill-current" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-clinic-primary">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary">
                    Types Available
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {procedures.map((procedure, index) => (
                      <li key={index} className="flex items-start">
                        <Circle className="h-2 w-2 mt-2 mr-3 text-clinic-primary fill-current" />
                        <span className="text-sm text-gray-600">
                          {procedure}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="pl-10 ">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngiographyService;
