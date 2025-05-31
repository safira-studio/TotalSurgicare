import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Smile,
  Home,
  Clock,
  MessageCircle,
  Award,
  TrendingUp,
} from "lucide-react";

const EnhancingPatientExperience = () => {
  const experienceFeatures = [
    {
      icon: Home,
      title: "Comfort of Home Recovery",
      description:
        "Recover in familiar surroundings while receiving hospital-quality monitoring",
    },
    {
      icon: Clock,
      title: "Reduced Hospital Stays",
      description:
        "Earlier discharge with continued monitoring reduces healthcare costs",
    },
    {
      icon: MessageCircle,
      title: "Enhanced Communication",
      description: "Direct messaging with care team for questions and updates",
    },
    {
      icon: Award,
      title: "Personalized Care Plans",
      description:
        "Customized recovery programs based on individual progress and needs",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Visual progress reports to motivate and inform recovery journey",
    },
    {
      icon: Smile,
      title: "Peace of Mind",
      description:
        "Continuous monitoring provides confidence and reduces anxiety",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-clinic-primary/10 text-clinic-primary mb-4">
            Patient-Centered Care
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold text-clinic-primary mb-6">
            Enhancing Patient Experience
          </h2>
          <p className="md:text-lg text-gray-600 max-w-4xl mx-auto">
            Our comprehensive post-operative care program, enhanced by Remote
            Patient Monitoring and continuous support, transforms the recovery
            experience. We focus on comfort, convenience, and confidence
            throughout the healing journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experienceFeatures.map((feature, index) => (
            <Card
              key={index}
              className="border-clinic-primary/20 hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-clinic-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-clinic-primary" />
                </div>
                <CardTitle className="text-lg text-clinic-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-clinic-primary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-3xl font-bold text-clinic-primary mb-4">
              The Complete Recovery Experience
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              By combining advanced technology with compassionate care, we
              create an environment where patients feel supported, informed, and
              confident throughout their recovery journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-clinic-primary mb-2">
                  98%
                </div>
                <div className="text-sm text-gray-600">
                  Patient Satisfaction Rate
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-clinic-primary mb-2">
                  45%
                </div>
                <div className="text-sm text-gray-600">
                  Faster Recovery Times
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-clinic-primary mb-2">
                  80%
                </div>
                <div className="text-sm text-gray-600">
                  Reduced Anxiety Levels
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-clinic-primary hover:bg-clinic-primary/90"
            >
              Learn More About Our Care Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancingPatientExperience;
