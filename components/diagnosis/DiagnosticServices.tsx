import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestTube, Activity, Stethoscope, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

  const petScanTests = [
    "Thyroid Scan",
    "Whole Body PET",
    "Cardiac PET",
    "Neurology Brain PET",
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

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Pathology Tests */}
          <Card className="border-blue-200 hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader className="text-center">
              <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TestTube className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-xl text-clinic-primary">
                Pathology Tests
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div>
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
              </div>
              <div className="mt-6 text-center">
                <Link href="/contact">
                  <Button className="bg-clinic-primary text-white hover:bg-clinic-primary/90">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Radiology Services */}
          <Card className="border-blue-200 hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-clinic-primary">
                Radiology Services
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div>
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
                      {["CT Scan", "MRI Imaging"].includes(service) ? (
                        <span className="font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                          {service}
                        </span>
                      ) : (
                        service
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-center">
                <Link href="/contact">
                  <Button className="bg-clinic-primary text-white hover:bg-clinic-primary/90">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Specialty Tests */}
          <Card className="border-blue-200 hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader className="text-center">
              <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl text-clinic-primary">
                Specialty Tests
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-600 mb-4 text-center">
                  Specialized diagnostic tests for comprehensive health
                  assessment
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
              </div>
              <div className="mt-6 text-center">
                <Link href="/contact">
                  <Button className="bg-clinic-primary text-white hover:bg-clinic-primary/90">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* PET Scan */}
          <Card className="border-blue-200 hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader className="text-center">
              <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Scan className="h-8 w-8 text-yellow-600" />
              </div>
              <CardTitle className="text-xl text-clinic-primary">
                PET Scan
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-600 mb-4 text-center">
                  High-precision imaging for advanced disease detection
                </p>
                <ul className="space-y-2">
                  {petScanTests.map((test, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="h-2 w-2 bg-yellow-500 rounded-full mr-3" />
                      {test}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-center">
                <Link href="/contact">
                  <Button className="bg-clinic-primary text-white hover:bg-clinic-primary/90">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticServices;
