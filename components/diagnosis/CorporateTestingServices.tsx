import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Users, MapPin, FileText } from "lucide-react";
import Link from "next/link";

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
      name: "TOTALKAVACH Diabetic Screen",
      tests: "General Health: Urine Routine, Diabetes: Fasting Blood Sugar, HbA1c, Fasting Urine Glucose",
      price: "₹340",
      employees: "21 Parameters",
    },
    {
      name: "TOTALKAVACH Vitamin Check",
      tests: "Bones: Calcium, Vitamins: Vitamin D (25-OH), Vitamin B12",
      price: "₹990",
      employees: "3 Parameters",
    },
    {
      name: "TOTALKAVACH Dahlia",
      tests: "Heart: Lipid Profile, Liver: LFT Gold, Kidney: KFT Gold, Thyroid: Thyroid Total (T3, T4 & TSH), Diabetes: Fasting Blood Sugar, General Health: Urine Routine, CBC, Bones: Calcium",
      price: "₹1440",
      employees: "53 Parameters",
    },
    {
      name: "Fever Panel",
      tests: "CBC, ESR, CRP, Urine Routine, SGPT, MP Antigen, Dengue IgG & IgM - Rapid, Dengue NS1 Antigen, Rapid Typhidot IgM, Widal",
      price: "₹1450",
      employees: "45 Parameters",
    },
    {
      name: "TOTALKAVACH Daisy",
      tests: "Heart: Lipid Profile, Liver: LFT Gold, Kidney: KFT Gold, Thyroid: Thyroid Total (T3, T4 & TSH), Diabetes: Fasting Blood Sugar, HbA1c, General Health: Urine Routine, CBC, ESR, Bones: Calcium, Phosphorus, Vitamins: Vitamin D (25-OH), Vitamin B12, Anemia: Iron Studies",
      price: "₹2550",
      employees: "79 Parameters",
    },
    {
      name: "TOTALKAVACH Lily",
      tests: "Heart: Lipid Profile, Liver: LFT Gold, Kidney: KFT Gold, Thyroid: Thyroid Total (T3, T4 & TSH), Diabetes: Fasting Blood Sugar, HbA1c, Bones: Calcium, General Health: Urine Routine, CBC, ESR",
      price: "₹1740",
      employees: "74 Parameters",
    },
    {
      name: "TOTALKAVACH Orchid",
      tests: "Heart: Lipid Profile, HsCRP, Liver: LFT Gold, Kidney: KFT Gold, Thyroid: Thyroid Total (T3, T4 & TSH), Diabetes: Fasting Blood Sugar, HbA1c, General Health: Urine Routine, CBC, ESR, Bones: Calcium, Phosphorus, Vitamins: Vitamin D (25-OH), Vitamin B12, Anemia: Iron Studies, Allergy: Allergy Screen Adult",
      price: "₹3250",
      employees: "81 Parameters",
    },
    {
      name: "TOTALKAVACH Aster (Male)",
      tests: "Heart: Lipid Profile, HsCRP, CPK, Liver: LFT Gold, Kidney: KFT Gold, Thyroid: Thyroid Total (T3, T4 & TSH), Diabetes: Fasting Blood Sugar, HbA1c, Hormones: Cortisol (Morning Sample), General Health: Urine Routine, CBC, ESR, Allergy: Allergy Screen - Adult, Bones: Calcium, Phosporus, RA-Factor, Vitamins: Vitamin D (25-OH), Vitamin B12, Anaemia: Iron Studies, Pancreas: Amylase, Lipase, Cancer: PSA Total",
      price: "₹3850",
      employees: "89 Parameters",
    },
    {
      name: "TOTALKAVACH Lavender (Female)",
      tests: "Heart: Lipid Profile, HsCRP, CPK, Liver: LFT Gold, Kidney: KFT Gold, Thyroid: Thyroid Total (T3, T4 & TSH), Diabetes: Fasting Blood Sugar, HbA1c, Hormones: Cortisol (Morning Sample), General Health: Urine Routine, CBC, ESR, Allergy: Allergy Screen - Adult, Bones: Calcium, Phosporus, RA-Factor, Vitamins: Vitamin D (25-OH), Vitamin B12, Anaemia: Iron Studies, Pancreas: Amylase, Lipase, Cancer: CA-125, Hormones: FSH",
      price: "₹3850",
      employees: "90 Parameters",
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
                  <div className="text-sm text-gray-700 mb-4">
                    {pkg.tests.split(/(\b[A-Za-z\s]+:)/g).map((part, i) => {
                      if (part.match(/\b[A-Za-z\s]+:/)) {
                        return (
                          <span key={i}>
                            {i > 0 && <br />}
                            <strong>{part}</strong>
                          </span>
                        );
                      }
                      return part;
                    })}
                  </div>
                  <Link href={"/contact"}>
                    <Button className="w-full bg-clinic-primary hover:bg-clinic-dark">
                      Get Quote
                    </Button>
                  </Link>
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
