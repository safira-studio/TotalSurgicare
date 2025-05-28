import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Heart,
  Thermometer,
  Activity,
  Smartphone,
  Wifi,
} from "lucide-react";

const RemotePatientMonitoring = () => {
  const rpmFeatures = [
    {
      icon: Heart,
      title: "Vital Signs Tracking",
      description:
        "Continuous monitoring of heart rate, blood pressure, and oxygen saturation",
    },
    {
      icon: Thermometer,
      title: "Temperature Monitoring",
      description:
        "Real-time body temperature tracking to detect fever or infection",
    },
    {
      icon: Activity,
      title: "Activity Levels",
      description:
        "Monitoring daily activity and mobility progress during recovery",
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description:
        "Easy-to-use mobile app for patients to track and report symptoms",
    },
    {
      icon: Wifi,
      title: "Real-Time Data",
      description:
        "Instant data transmission to healthcare providers for immediate response",
    },
    {
      icon: Monitor,
      title: "Dashboard Analytics",
      description:
        "Comprehensive data visualization for healthcare team analysis",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-white text-clinic-primary mb-4">
            Advanced Technology
          </Badge>
          <h2 className="text-4xl font-bold text-clinic-primary mb-6">
            Role of Remote Patient Monitoring (RPM) in Postoperative Care
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Remote Patient Monitoring technology revolutionizes post-operative
            care by enabling continuous tracking of vital signs and patient
            progress from the comfort of home. This innovative approach enhances
            communication between patients and healthcare providers while
            reducing the need for frequent hospital visits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rpmFeatures.map((feature, index) => (
            <Card
              key={index}
              className="border-orange-200 hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg text-clinic-secondary">
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

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-clinic-secondary mb-4">
                How RPM Transforms Recovery
              </h3>
              <p className="text-gray-700 mb-6">
                Remote Patient Monitoring creates a seamless bridge between
                hospital discharge and full recovery. By continuously collecting
                and analyzing patient data, our healthcare team can detect
                potential complications early, adjust treatment plans promptly,
                and provide personalized care guidance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-clinic-secondary">
                      Early Detection
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Identify complications before they become serious
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-clinic-secondary">
                      Improved Communication
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Direct line to your care team with real-time updates
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Reduced Readmissions
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Prevent unnecessary hospital visits through proactive
                      monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <h4 className="text-xl font-bold text-blue-900 mb-4 text-center">
                RPM Benefits
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">75%</div>
                  <div className="text-sm text-gray-600">
                    Fewer Readmissions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">90%</div>
                  <div className="text-sm text-gray-600">
                    Patient Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">60%</div>
                  <div className="text-sm text-gray-600">Faster Recovery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemotePatientMonitoring;
