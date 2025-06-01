import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Circle, Plus } from "lucide-react";

const AngioplastyService = () => {
  const advantages = [
    "Minimally invasive procedure",
    "Faster recovery compared to surgery",
    "Immediate restoration of blood flow",
    "Lower risk of complications",
    "Same-day or overnight stay",
    "High success rate",
  ];

  const indications = [
    "Coronary artery blockages",
    "Heart attack treatment",
    "Chest pain (angina)",
    "Abnormal stress test results",
    "Multiple vessel disease",
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Plus className="h-24 w-24 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">
                  Minimally Invasive
                </h3>
                <p className="text-emerald-700">
                  Advanced balloon and stent technology for optimal results
                </p>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 bg-white rounded-lg shadow-lg p-2 md:p-4 border border-emerald-200">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-emerald-500 rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  95% Success Rate
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Badge className="bg-emerald-100 text-emerald-600 mb-4">
              Minimally Invasive Treatment
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-clinic-primary mb-6">
              Angioplasty – Minimally Invasive Treatment
            </h2>
            <p className="md:text-lg text-gray-600 mb-6">
              Angioplasty, also known as percutaneous coronary intervention
              (PCI), is a minimally invasive procedure used to open blocked or
              narrowed coronary arteries. Using a small balloon catheter, we can
              restore blood flow to the heart muscle, often combined with the
              placement of a stent to keep the artery open long-term.
            </p>
            <p className="text-gray-600 mb-8">
              This procedure is particularly beneficial for patients
              experiencing heart attacks, severe chest pain, or those with
              significant coronary artery disease. Our experienced
              interventional cardiologists use the latest technology to ensure
              optimal outcomes with minimal downtime.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary flex items-center">
                    <Plus className="h-5 w-5 mr-2 text-emerald-600" />
                    Key Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start">
                        <Circle className="h-2 w-2 mt-2 mr-3 text-clinic-primary fill-current" />
                        <span className="text-sm text-gray-600">
                          {advantage}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-lg text-clinic-primary">
                    Treatment Indications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {indications.map((indication, index) => (
                      <li key={index} className="flex items-start">
                        <Circle className="h-2 w-2 mt-2 mr-3 text-clinic-primary fill-current" />
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

export default AngioplastyService;
