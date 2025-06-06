import React from "react";

const IconMap = {
  pill: Pill,
  clock: Clock,
  image: Image,
  "arrow-up": ArrowUp,
  thermometer: Thermometer,
  heart: Heart,
  bandage: Bandage,
  user: User,
  syringe: Syringe,
  "alert-circle": AlertCircle, // Using Pill as a fallback for alert-circle
  cigarette: Cigarette,
  frown: Frown,
  weight: Weight,
};

import {
  Pill,
  Clock,
  Image,
  ArrowUp,
  Thermometer,
  Syringe,
  Heart,
  Bandage,
  User,
  Frown,
  AlertCircle,
  Cigarette,
  Weight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightsProps {
  data?: { title: string; description: string; icon: string }[];
  title: string;
  color: string;
}
export default function Insights({ data, title, color }: InsightsProps) {
  return (
    data &&
    data.length > 0 && (
      <div className="mb-14">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-onest text-gray-800 mb-6 text-center">
            {title}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 ">
            {data.map((item, index) => {
              const IconComponent = IconMap[item.icon as keyof typeof IconMap];

              return (
                <div
                  key={index}
                  className={cn(
                    " border  rounded-2xl md:rounded-3xl border-gray-100 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow text-center w-full",
                    color === "orange" && "bg-clinic-secondary/20 ",
                    color === "green" && "bg-[#DCFCE7]",
                    color === "blue" && "bg-clinic-vlight_primary/50",
                    color === "red" && "bg-red-100"
                  )}
                >
                  <div
                    className={cn(
                      "w-14 h-14 rounded-full border-2 flex items-center justify-center mb-4 mx-auto",
                      color === "orange" && "border-clinic-secondary/50",
                      color === "green" && "border-[#4CAF7D]",
                      color === "blue" && "border-clinic-primary/50",
                      color === "red" && "border-red-400"
                    )}
                  >
                    {IconComponent && (
                      <IconComponent
                        className={cn(
                          "w-7 h-7 ",
                          color === "orange" && "text-orange-600",
                          color === "green" && "text-[#4CAF7D]",
                          color === "blue" && "text-clinic-primary",
                          color === "red" && "text-red-600"
                        )}
                      />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
}
