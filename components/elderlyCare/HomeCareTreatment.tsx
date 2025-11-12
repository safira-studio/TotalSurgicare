import { Home, Stethoscope, Heart, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HomeCareTreatment = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Medical Assessment",
      description:
        "Comprehensive health evaluations and regular monitoring by qualified healthcare professionals in the comfort of your home.",
    },
    {
      icon: Heart,
      title: "Chronic Disease Management",
      description:
        "Specialized care for diabetes, hypertension, heart conditions, and other chronic illnesses with personalized treatment plans.",
    },
    {
      icon: Clock,
      title: "Medication Management",
      description:
        "Proper administration and monitoring of medications, ensuring adherence to prescribed treatment schedules.",
    },
    {
      icon: Home,
      title: "Post-Operative Care",
      description:
        "Expert wound care, vital sign monitoring, and recovery support following surgical procedures.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white overflow-x-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-onest text-clinic-primary mb-4">
            Home Treatment Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professional medical care delivered at home for elderly patients who
            require regular monitoring, treatment, and support. Our experienced
            healthcare team ensures quality care in familiar surroundings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-clinic-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="bg-clinic-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-clinic-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-clinic-primary mb-6 text-center">
            Treatment Procedures Available at Home
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Wound dressing and care",
              "IV fluid administration",
              "Catheter care and management",
              "Injection administration",
              "Physical therapy sessions",
              "Respiratory therapy",
              "Pain management",
              "Nutritional support",
              "Palliative care services",
            ].map((procedure, index) => (
              <div key={index} className="flex items-start">
                <div className="rounded-full bg-clinic-primary p-1 mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">{procedure}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareTreatment;

