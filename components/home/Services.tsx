import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Baby, HeartPulse } from "lucide-react";

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-2 md:p-5 lg:p-7">
        {/* Icon + Title centered and side-by-side */}
        <div className="flex items-center justify-center gap-2 mt-4 mb-2">
          <div className="text-clinic-primary">{icon}</div>
          <h3 className="font-medium">{title}</h3>
        </div>

        <p className="text-xs text-gray-500 mb-4 text-center">{description}</p>

        {/* Centered Button */}
        <div className="flex justify-center">
          <Button className="text-clinic-primary p-0 h-auto" variant="link">
            Make an appointment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const BlueServiceCard = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <Card
      className={`relative overflow-hidden bg-clinic-primary text-white ${className}`}
    >
      <CardContent className="p-2 md:p-5 lg:p-7 text-center">
        <div className="md:text-2xl font-onest mt-4 mb-2 text-xl">{title}</div>
        <p className="text-xs mb-4 opacity-80">{description}</p>
        <div className="absolute top-0 right-0 w-full h-full opacity-30">
          {/* <div className="absolute top-20 right-10 h-20 w-20 rounded-full bg-clinic-accent/50"></div>
          <div className="absolute top-10 right-32 h-12 w-12 rounded-full bg-clinic-accent/50"></div>
          <div className="absolute top-40 right-28 h-16 w-16 rounded-full bg-clinic-dark/50"></div> */}
        </div>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <div className="w-full py-12 bg-gray-50 rounded-lg px-5">
      <div className="container mt-5 mx-auto">
        <div className="w-full mx-auto mb-2 text-center">
          <div>
            <h2 className="text-4xl w-full mx-auto font-onest mb-1">
              Our medical services
            </h2>
            <p className="text-sm text-gray-500">What you get</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 text-center">
          <ServiceCard
            description="Comprehensive testing with advanced tech and expert analysis — from routine check-ups to specialized diagnostics, delivering results you can trust."
            icon={<Heart className="text-gray-600" size={16} />}
            title="Diagnostics "
          />
          <BlueServiceCard
            description="From consultation and diagnosis to treatment with care and attention to detail."
            title="Total Surgicare"
          />
          <BlueServiceCard
            className="md:hidden"
            description=" Fast, expert emergency care available 24/7 for urgent medical needs."
            title="Emergency Care"
          />
          <ServiceCard
            description="24/7 post-op care with expert nursing and advanced remote monitoring for a smooth, complete recovery."
            icon={<Baby className="text-gray-600" size={16} />}
            title="Post Surgical Care"
          />
          <BlueServiceCard
            className="hidden md:block"
            description=" Fast, expert emergency care available 24/7 for urgent medical needs."
            title="Emergency Care"
          />
          <ServiceCard
            description="Diagnosis and treatment of cardiovascular diseases, ECG, monitoring, and consultations."
            icon={<HeartPulse className="text-gray-600" size={16} />}
            title="Cardiology"
          />
          <BlueServiceCard
            description="Fast and accurate tests, modern laboratory diagnostics and ultrasounds
          of various organs."
            title="Ultrasound & Lab"
          />
        </div>
      </div>
      <div className="text-center mt-8 mx-auto">
        <p className="text-sm text-gray-500 mb-1">
          We provide a full range of medical services — from consultation to
          diagnosis and treatment.
        </p>
        <Button className="text-clinic-primary p-0 h-auto" variant="link">
          See all services
        </Button>
      </div>
    </div>
  );
};

export default Services;
