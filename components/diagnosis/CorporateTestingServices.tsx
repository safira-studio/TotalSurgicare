import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Users, MapPin, FileText } from "lucide-react";

const CorporateTestingServices = () => {
  const corporateFeatures = [
    {
      icon: Building,
      title: "On-Site Testing",
      description:
        "We bring our diagnostic services directly to your workplace for maximum convenience",
    },
    {
      icon: Users,
      title: "Group Discounts",
      description:
        "Special pricing for groups of 10 or more employees with customized packages",
    },
    {
      icon: FileText,
      title: "Comprehensive Reports",
      description:
        "Detailed health reports with recommendations and corporate wellness insights",
    },
    {
      icon: MapPin,
      title: "Flexible Scheduling",
      description:
        "Arrange testing sessions that fit your company's schedule and requirements",
    },
  ];

  const packages = [
    {
      name: "Ayaksham-Basic",
      tests: "CBC, Lipid Profile, Thyroid Profile, LFT, KFT, Glucose (Fasting)",
      price: "₹799",
      employees: "74 Parameters",
    },
    {
      name: "Ayaksham-Total",
      tests:
        "CBC, Urine Routine, Glucose (Fasting), HbA1c, Vitamin D, Calcium, Vitamin B12, Magnesium, Iron Deficiency Profile (Iron, TIBC, % Saturation), Thyroid Profile, Lipid Profile, LFT (Liver Function Test), Electrolyte, KFT (Kidney Function Test)",
      price: "₹3549",
      employees: "78 Parameters",
    },
    {
      name: "Ayaksham-Diabetes",
      tests:
        "CBC, Glucose (Fasting), HbA1c, Cholesterol, Triglycerides, BUN (Blood Urea Nitrogen), Creatinine, Uric Acid",
      price: "₹699",
      employees: "30 Parameters",
    },
    {
      name: "Ayaksham-Healthy Heart",
      tests:
        "CBC, Glucose (Fasting), HbA1c, Cholesterol, Triglycerides, BUN (Blood Urea Nitrogen), Creatinine, Uric Acid",
      price: "₹1299",
      employees: "55 Parameters",
    },
    {
      name: "Ayaksham-Senior Citizen (Male)",
      tests:
        "CBC, ESR, Glucose (Fasting), HbA1c, Lipid Profile, SGPT, Urea, Vitamin D, Creatinine, Uric Acid, Calcium, Thyroid Profile, Vitamin B12, PSA Total, Urine Routine",
      price: "₹1299",
      employees: "62 Parameters",
    },
    {
      name: "Ayaksham-Senior Citizen (Female)",
      tests:
        "CBC, ESR, Glucose (Fasting), HbA1c, Lipid Profile, SGPT, Urea, Vitamin D, Creatinine, Uric Acid, Calcium, Thyroid Profile, Vitamin B12, Urine Routine",
      price: "₹1599",
      employees: "62 Parameters",
    },
    {
      name: "Ayaksham-Vitamin & Mineral Check",
      tests:
        "CBC, Electrolyte, Magnesium, Calcium, Vitamin D, Phosphorus, Iron, Vitamin B12",
      price: "₹1499",
      employees: "32 Parameters",
    },
    {
      name: "Ayaksham-Fever Profile-Advance",
      tests:
        "CBC, ESR, MP Antigen, MP SMEAR, Typhidot IgM, SGPT, Blood Culture, Urine Routine",
      price: "₹1649",
      employees: "—",
    },
    {
      name: "Ayaksham-Fever Profile-Basic",
      tests: "CBC, ESR, MP Antigen, Typhidot IgM, Urine Routine",
      price: "₹599",
      employees: "—",
    },
    {
      name: "Ayaksham-Bone Health-Basic",
      tests:
        "CBC, ESR, Glucose (Fasting), SGOT, SGPT, Urea, Calcium, Creatinine, Uric Acid, Lipid Profile, Vitamin B12, Vitamin D, ALK PO4",
      price: "₹1599",
      employees: "41 Parameters",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-clinic-primary mb-4">
            Corporate Solutions
          </Badge>
          <h2 className="text-2xl md:text-4xl font-onest text-clinic-primary mb-6">
            Corporate Testing Services
          </h2>
          <p className="md:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive health check-up solutions for organizations committed
            to employee wellness. Our corporate packages are designed to promote
            preventive healthcare and boost productivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-clinic-primary mb-6">
              Why Choose Our Corporate Services?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {corporateFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-clinic-primary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="text-center mb-6">
              <Building className="h-16 w-16 text-clinic-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-clinic-primary">
                Health Partnership
              </h3>
              <p className="text-gray-600 mt-2">
                Join 500+ companies that trust us for their employee health
                programs
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Companies Served</span>
                <span className="font-bold text-clinic-primary">500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Employees Tested</span>
                <span className="font-bold text-clinic-primary">50,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Satisfaction Rate</span>
                <span className="font-bold text-clinic-primary">98%</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-onest text-clinic-primary text-center mb-8">
            Health Packages
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className="border-blue-200 hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-clinic-primary">
                    {pkg.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-clinic-primary">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2">{pkg.employees}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full">
                  <p className="text-sm text-gray-700 mb-4">{pkg.tests}</p>
                  <Button className="w-full bg-clinic-primary hover:bg-clinic-dark">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTestingServices;
