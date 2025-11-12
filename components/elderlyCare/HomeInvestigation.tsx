import { Microscope, Activity, Droplet, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HomeInvestigation = () => {
  const investigations = [
    {
      icon: Droplet,
      title: "Blood Tests",
      tests: [
        "Complete Blood Count (CBC)",
        "Blood Sugar (Fasting & PP)",
        "Lipid Profile",
        "Kidney Function Tests",
        "Liver Function Tests",
        "Thyroid Function Tests",
      ],
      color: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: Activity,
      title: "Diagnostic Tests",
      tests: [
        "ECG (Electrocardiogram)",
        "Blood Pressure Monitoring",
        "Pulse Oximetry",
        "Blood Glucose Monitoring",
        "INR Monitoring",
        "Holter Monitoring",
      ],
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Microscope,
      title: "Sample Collection",
      tests: [
        "Urine Sample Collection",
        "Stool Sample Collection",
        "Sputum Sample Collection",
        "Swab Tests",
        "COVID-19 Testing",
        "Culture Tests",
      ],
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: FlaskConical,
      title: "Special Tests",
      tests: [
        "HbA1c (Diabetes Control)",
        "Vitamin D & B12 Levels",
        "Electrolyte Panel",
        "Coagulation Profile",
        "Cardiac Markers",
        "Tumor Markers",
      ],
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-onest text-clinic-primary mb-4">
            Home Investigation Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Complete diagnostic and investigation services at your doorstep.
            Sample collection by trained phlebotomists with same-day or next-day
            results delivered directly to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {investigations.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className={`${category.color} rounded-t-lg`}>
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <Icon className={`w-6 h-6 ${category.iconColor}`} />
                    </div>
                    <CardTitle className="text-gray-800">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {category.tests.map((test, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="rounded-full bg-clinic-primary/20 p-1 mr-3 mt-0.5">
                          <svg
                            className="w-3 h-3 text-clinic-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 13l4 4L19 7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{test}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-clinic-primary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-clinic-primary mb-6 text-center">
            Why Choose Home Investigation Services?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Convenience",
                description:
                  "No need to travel or wait in queues. We come to your home at your preferred time.",
              },
              {
                title: "Safety",
                description:
                  "Especially important for elderly patients with mobility issues or compromised immunity.",
              },
              {
                title: "Accurate Results",
                description:
                  "Professional sample collection and handling ensures reliable test results.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2 text-lg">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInvestigation;

