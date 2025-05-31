import React from "react";
import { Badge } from "@/components/ui/badge";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const StatItem = ({
  value,
  label,
  description,
  color = "text-black",
}: {
  value: React.ReactNode;
  label: string;
  description: string;
  color?: string;
}) => {
  return (
    <div className="mt-8 flex flex-col justify-center">
      <div className="flex items-start gap-1 my-3">
        <span className={`text-5xl font-bold ${color}`}>{value}</span>
        <span className={`text-3xl ${color}`}>+</span>
      </div>
      <div className="text-sm font-medium">{label}</div>
      <p className="text-xs text-gray-500 mt-1 max-w-xs">{description}</p>
    </div>
  );
};

const FeatureBadge = ({
  label,
  className,
}: {
  label: string;
  className: string;
}) => {
  return (
    <div
      className={` bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-black z-10 ${className}`}
    >
      {label}
    </div>
  );
};

type StatItemProps = {
  value: React.ReactNode;
  label: string;
  description: string;
  color?: string;
};

const WhyChooseUs = () => {
  return (
    <div className="w-full py-12 mb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side */}
          <div className="relative w-full lg:w-1/2 bg-[radial-gradient(circle_at_top_right,white_0%,#00A9B7_40%)] text-white rounded-3xl p-8 ">
            <div className="flex flex-col justify-between items-start w-fit h-full p-4">
              <h2 className="text-4xl font-onest mt-10 mb-2">
                Why
                <br />
                choose us
              </h2>
              <Link href="/contact">
                <Button className="bg-background text-black hover:bg-white/90">
                  Book Appointment
                </Button>
              </Link>
            </div>

            <div className="absolute right-0 bottom-0 hidden sm:block sm:max-w-[20rem] lg:max-w-none">
              <div className="">
                <Image
                  width={500}
                  height={250}
                  src="/doctor4.png"
                  alt="Medical team"
                  className="transform scale-x-[-1] "
                />
              </div>
              <FeatureBadge
                label="Experienced Doctors"
                className="absolute top-40 -left-10"
              />
              <FeatureBadge
                label="Certified Clinic"
                className="absolute top-56 right-10"
              />
              <FeatureBadge
                label="Modern Equipment"
                className="absolute bottom-24 left-10"
              />
            </div>
          </div>

          {/* Right side */}
          {/* <div className=" bg-white rounded-lg "> */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 p-8">
            <StatItem
              value={
                <NumberTicker
                  value={10}
                  decimalPlaces={0}
                  className="text-5xl font-semibold text-clinic-primary"
                />
              }
              label="Years of experience"
              description="We have been working since 2012, improving the quality every day."
              color="text-clinic-primary"
            />

            <StatItem
              value={
                <NumberTicker
                  value={15}
                  decimalPlaces={0}
                  className="text-5xl font-semibold text-clinic-primary"
                />
              }
              label="Areas of medicine"
              description="From family medicine to cardiology and laboratory diagnostics."
              color="text-clinic-primary"
            />

            <StatItem
              value={
                <NumberTicker
                  value={95}
                  decimalPlaces={0}
                  className="text-5xl font-semibold text-clinic-primary"
                />
              }
              label="Satisfied patients"
              description="According to internal surveys over the past year."
              color="text-clinic-primary"
            />

            <StatItem
              value={
                <NumberTicker
                  value={98}
                  decimalPlaces={0}
                  className="text-5xl font-semibold text-clinic-primary"
                />
              }
              label="Diagnostic accuracy"
              description="Thanks to modern equipment and experienced specialists."
              color="text-clinic-primary"
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
