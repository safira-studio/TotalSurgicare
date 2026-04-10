import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Circle, Activity } from "lucide-react";
import Image from "next/image";

const ACLService = () => {
  const symptoms = [
    "Sudden loud 'pop' sound at the time of injury",
    "Severe pain and inability to continue activity",
    "Rapid swelling within 24 hours",
    "Loss of full range of motion",
    "Feeling of instability or 'giving way' of the knee",
  ];

  const treatments = [
    "Arthroscopic ACL Reconstruction",
    "Hamstring or patellar tendon graft",
    "Accelerated rehabilitation protocol",
    "Sport-specific recovery training",
    "Return-to-play assessment",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-blue-100 text-clinic-primary mb-4">
              Sports Medicine
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-onest text-clinic-primary mb-6">
              ACL Reconstruction – Advanced Knee Ligament Repair
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Anterior Cruciate Ligament (ACL) tears are among the most common
              sports injuries affecting athletes and active individuals. Our
              experienced orthopaedic surgeons perform minimally invasive
              arthroscopic ACL reconstruction using the latest surgical
              techniques to restore knee stability and function.
            </p>
            <p className="text-gray-600 mb-8">
              Using advanced arthroscopic methods, we replace the damaged
              ligament with a graft — either from your own tissue (autograft) or
              donor tissue (allograft) — ensuring a strong, durable repair. Our
              structured rehabilitation program gets you back to your sport
              faster and safer.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-clinic-primary">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-clinic-secondary" />
                    Symptoms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Circle className="h-2 w-2 mt-2 text-clinic-primary fill-current shrink-0" />
                        <span className="text-sm text-gray-600">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-clinic-primary">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-clinic-secondary" />
                    Our Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {treatments.map((treatment, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Circle className="h-2 w-2 mt-2 text-clinic-primary fill-current shrink-0" />
                        <span className="text-sm text-gray-600">
                          {treatment}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
              <Image
                src="/ACL.png"
                alt="ACL Reconstruction Surgery"
                width={800}
                height={800}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-clinic-primary/30">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-clinic-primary rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  Minimally Invasive
                </span>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-clinic-primary/30">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-clinic-secondary rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  90%+ Success Rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ACLService;
