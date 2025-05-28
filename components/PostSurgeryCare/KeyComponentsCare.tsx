import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Brain,
  Shield,
  Heart,
  Utensils,
  Bandage,
  Scale,
  Move3D,
  AccessibilityIcon,
  Zap,
  Monitor,
  Users,
  AlertTriangle,
  Star,
} from "lucide-react";

const KeyComponentsCare = () => {
  const careComponents = [
    {
      icon: Activity,
      title: "Pain Management",
      description:
        "Comprehensive pain control strategies using multimodal approaches for optimal comfort",
    },
    {
      icon: Move3D,
      title: "Physiotherapy",
      description:
        "Specialized physical therapy programs to restore function and prevent complications",
    },
    {
      icon: Shield,
      title: "Infection Control",
      description:
        "Strict protocols to prevent surgical site infections and monitor for early signs",
    },
    {
      icon: Brain,
      title: "Psychology & Emotional Wellbeing",
      description:
        "Mental health support and counseling to address post-surgical anxiety and depression",
    },
    {
      icon: Utensils,
      title: "Nutrition & Swallow Therapy",
      description:
        "Nutritional assessment and swallowing rehabilitation for optimal healing",
    },
    {
      icon: Bandage,
      title: "Wound/Incision Care",
      description:
        "Expert wound management and dressing changes to promote proper healing",
    },
    {
      icon: Scale,
      title: "Balance & Mobility",
      description:
        "Balance training and mobility exercises to prevent falls and restore independence",
    },
    {
      icon: Move3D,
      title: "Bed Mobility & Transfers Training",
      description:
        "Safe transfer techniques and bed mobility training for patient independence",
    },
    {
      icon: AccessibilityIcon,
      title: "Wheelchair Mobility",
      description:
        "Wheelchair assessment and training for patients requiring mobility assistance",
    },
    {
      icon: Zap,
      title: "Early Mobility & Strength Training",
      description:
        "Progressive mobilization programs to prevent complications and build strength",
    },
    {
      icon: Monitor,
      title: "Continuous Monitoring",
      description:
        "24/7 vital sign monitoring and assessment for early complication detection",
    },
    {
      icon: Users,
      title: "Family Support & Inclusion",
      description:
        "Family education and involvement in the care process for better outcomes",
    },
    {
      icon: AlertTriangle,
      title: "Preventing Complications",
      description:
        "Proactive measures to prevent blood clots, pneumonia, and other post-op complications",
    },
    {
      icon: Star,
      title: "Improved Overall Quality of Life",
      description:
        "Holistic care approach focusing on returning patients to their optimal functioning",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-clinic-primary/10 text-clinic-primary mb-4">
            Comprehensive Care
          </Badge>
          <h2 className="text-4xl font-bold text-clinic-primary mb-6">
            Key Components of Post-Operative Nursing Care
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our multidisciplinary approach ensures every aspect of your recovery
            is carefully managed with evidence-based protocols and personalized
            care plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careComponents.map((component, index) => (
            <Card
              key={index}
              className="border-clinic-primary/20 hover:shadow-lg transition-shadow h-full"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-clinic-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <component.icon className="h-6 w-6 text-clinic-primary" />
                  </div>
                  <CardTitle className="text-lg text-clinic-primary">
                    {component.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-clinic-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Personalized Care Plans</h3>
          <p className="text-white/90 max-w-2xl mx-auto">
            Each patient receives a customized care plan based on their specific
            surgical procedure, health status, and recovery goals. Our team
            continuously adjusts treatments to ensure optimal outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyComponentsCare;
