import React from "react";
import AppointmentForm from "./AppointmentForm";
import {
  Calendar,
  Check,
  Info,
  Image as ImageIcon,
  CircleArrowDown,
} from "lucide-react";
import InfoIcon from "./InfoIcon";

interface Heroprops {
  title: string;
  brief: string;
  alternateNames?: {
    language: string;
    name: string;
  }[];
}
const Hero = ({ title, brief, alternateNames }: Heroprops) => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')",
        }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-clinic-primary/90 via-clinic-primary/70 to-transparent z-0"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto flex gap-10 py-16 px-6 lg:px-12">
          <div className="flex flex-col justify-center w-3/5 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-onest text-white leading-tight mb-6 font-bold">
              {title}
            </h1>
            <p className="text-lg text-gray-200 mb-8">{brief}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <InfoIcon
                icon={<Calendar className="h-6 w-6" />}
                title="Quick Recovery"
                description="Return to normal activities fast"
              />
              <InfoIcon
                icon={<Check className="h-6 w-6" />}
                title="Minimally Invasive"
                description="Advanced techniques with minimal pain"
              />
              <InfoIcon
                icon={<ImageIcon className="h-6 w-6" />}
                title="Modern Technology"
                description="State-of-the-art equipment"
              />
              <InfoIcon
                icon={<Info className="h-6 w-6" />}
                title="Expert Doctors"
                description="Specialized in treatment"
              />
            </div>
            {alternateNames && alternateNames.length > 0 && (
              <div className="my-6">
                <h3 className="text-lg font-medium mb-2 text-white">
                  Also Known As:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {alternateNames.map((item, index) => (
                    <span
                      key={index}
                      className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white"
                    >
                      {item.name}{" "}
                      <span className="text-xs text-white/70">
                        ({item.language})
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="hidden md:block">
              <CircleArrowDown className="h-8 w-8 text-white animate-bounce" />
              <span className="text-sm text-white/80">
                Scroll for more information
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center w-2/5">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
