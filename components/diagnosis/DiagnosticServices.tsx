import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestTube, Activity, Stethoscope } from "lucide-react";

const DiagnosticServices = () => {
  const pathologyTests = [
    "Complete Blood Count (CBC)",
    "Blood Sugar Tests",
    "Lipid Profile",
    "Liver Function Tests",
    "Kidney Function Tests",
    "Thyroid Function Tests",
    "Urine Analysis",
    "Hemoglobin A1C",
  ];

  const radiologyServices = [
    "X-ray Imaging",
    "Ultrasound Scanning",
    "CT Scan",
    "MRI Imaging",
    "Mammography",
    "Bone Density Scan",
  ];

  const specialtyTests = [
    "ECG (Electrocardiogram)",
    "Echocardiography",
    "TMT (Treadmill Test)",
    "PFT (Pulmonary Function Test)",
    "Stress Testing",
    "Holter Monitoring",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-clinic-primary mb-4">
            Comprehensive Testing
          </Badge>
          <h2 className="text-2xl md:text-4xl font-onest text-clinic-primary mb-6">
            Diagnostic Services Offered
          </h2>
          <p className="md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of diagnostic services ensures accurate
            diagnosis and effective treatment planning. From basic pathology to
            advanced imaging, we have everything you need under one roof.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TestTube className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-xl text-clinic-primary">
                Pathology Tests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 text-center">
                Comprehensive blood tests, urine analysis, and laboratory
                diagnostics
              </p>
              <ul className="space-y-2">
                {pathologyTests.map((test, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="h-2 w-2 bg-red-500 rounded-full mr-3" />
                    {test}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-clinic-primary">
                Radiology Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 text-center">
                Advanced imaging services with state-of-the-art equipment
              </p>
              <ul className="space-y-2">
                {radiologyServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl text-clinic-primary">
                Specialty Tests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 text-center">
                Specialized diagnostic tests for comprehensive health assessment
              </p>
              <ul className="space-y-2">
                {specialtyTests.map((test, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3" />
                    {test}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticServices;
