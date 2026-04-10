import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Circle, Activity } from "lucide-react";
import Image from "next/image";

const TMTService = () => {
  const whatItDetects = [
    "Coronary artery disease (blocked heart arteries)",
    "Exercise-induced abnormal heart rhythms",
    "Inadequate blood supply to the heart during exertion",
    "Cause of unexplained chest pain during activity",
    "Functional capacity after a heart attack or surgery",
  ];

  const howItWorks = [
    "You walk on a treadmill while connected to an ECG monitor",
    "Speed and incline increase gradually every 3 minutes",
    "Heart rate, blood pressure & ECG changes are recorded",
    "The test stops when target heart rate is reached or symptoms appear",
    "Total duration: 15–30 minutes including preparation",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-rose-100 to-red-200 rounded-2xl h-[600px] flex items-center justify-center overflow-hidden">
              <Image
                src="/hearthealth.webp"
                alt="TMT Stress Test"
                width={800}
                height={800}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-rose-200">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-rose-500 rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  Safe & Non-Invasive
                </span>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-rose-200">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-clinic-secondary rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  30-Min Procedure
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Badge className="bg-rose-100 text-rose-700 mb-4">
              Stress Testing
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-onest text-clinic-primary mb-6">
              TMT (Treadmill Stress Test) – Assess Your Heart Under Exertion
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The Treadmill Stress Test (TMT), also known as an Exercise Stress
              Test or Stress ECG, measures how your heart performs under
              physical stress. Many heart problems only become evident when the
              heart is working harder — this test safely simulates that exertion
              while continuously monitoring your cardiac response.
            </p>
            <p className="text-gray-600 mb-8">
              It is one of the most effective and affordable screening tools for
              detecting hidden coronary artery disease and is routinely
              recommended for patients with chest pain, breathlessness, or as
              part of a cardiac health checkup.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-rose-200 bg-rose-50">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-rose-600" />
                    What It Detects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {whatItDetects.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Circle className="h-2 w-2 mt-2 text-clinic-primary fill-current shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-rose-200 bg-rose-50">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary">
                    How It Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {howItWorks.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-xs font-bold text-clinic-primary mt-0.5 shrink-0">
                          {index + 1}.
                        </span>
                        <span className="text-sm text-gray-600">{step}</span>
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

export default TMTService;
