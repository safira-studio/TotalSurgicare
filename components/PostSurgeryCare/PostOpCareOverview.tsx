import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Users } from "lucide-react";

const careComponents = {
  "Pain Management": "/back-pain.webp",
  Physiotherapy: "/physical-therapy.webp",
  "Infection Control": "/virus.webp",
  "Psychology and Emotional Wellbeing": "/mental-health.webp",
  "Nutrition and Swallow Therapy": "/nutrition-plan.webp",
  "Wound/Incision Care": "/injury.webp",
  "Balance and Mobility": "/walker.webp",
  "Bed mobility and Transfers training": "/bed.webp",
  "Wheelchair Mobility": "/wheelchair.webp",
};
const PostOpCareOverview = () => {
  const overviewPoints = [
    {
      icon: Shield,
      title: "Infection Monitoring",
      description:
        "Continuous surveillance for signs of infection with immediate intervention protocols",
    },
    {
      icon: Heart,
      title: "Hygiene Maintenance",
      description:
        "Strict hygiene protocols to prevent complications and promote healing",
    },
    {
      icon: Users,
      title: "Regular Follow-ups",
      description:
        "Scheduled check-ups to track recovery progress and adjust care plans",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-left mb-12 flex gap-2">
          <div>
            <Badge className="bg-blue-100 text-clinic-primary mb-4">
              Post-Operative Excellence
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-clinic-primary mb-6">
              Overview of Post-Operative Nursing Care
            </h2>
            <p className="md:text-lg text-gray-600 max-w-4xl mx-auto">
              Post-operative nursing care is crucial for ensuring a safe and
              effective recovery following surgery. Our comprehensive approach
              focuses on preventing complications, managing pain, and supporting
              patients through every stage of their healing journey. With
              specialized monitoring systems and expert nursing staff, we
              provide round-the-clock care that prioritizes patient safety and
              comfort.
            </p>
          </div>
          <div className="grid grid-cols-3 w-3/5">
            {Object.entries(careComponents).map((component, index) => (
              <div
                key={index}
                className="my-4 flex flex-col justify-center items-center"
              >
                <Image
                  src={component[1]}
                  alt={component[0]}
                  className="w-full max-w-16 mx-auto rounded-lg"
                  width={100}
                  height={100}
                />
                <p className="text-sm text-center  text-clinic-primary mb-2 max-w-40">
                  {component[0]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {overviewPoints.map((point, index) => (
            <Card
              key={index}
              className="border-blue-200 hover:shadow-lg transition-shadow h-full"
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-clinic-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {React.createElement(point.icon, {
                    className: "h-8 w-8 text-clinic-primary",
                    "aria-label": point.title,
                  })}
                </div>
                <CardTitle className="text-xl text-clinic-primary">
                  {point.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8 flex gap-5">
          <div>
            <Image
              src={"/care-at-home.webp"}
              alt={"care at home"}
              width={500}
              height={500}
              className="mx-auto w-full rounded-lg"
            />
          </div>
          <div className="w-1/2 flex justify-center flex-col">
            <h3 className="text-xl Md:text-2xl font-bold text-clinic-primary mb-4">
              Why Post-Operative Care Matters
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Proper post-operative care significantly reduces the risk of
              complications, speeds up recovery time, and improves overall
              surgical outcomes. Our dedicated nursing team ensures that every
              patient receives personalized attention and evidence-based care
              protocols tailored to their specific surgical procedure and
              recovery needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostOpCareOverview;
