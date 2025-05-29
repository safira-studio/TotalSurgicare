import React from "react";
import { Check } from "lucide-react";

interface TreatmentCardProps {
  name: string;
  description: string;
  benefits: string[];
  recoveryTime?: string;
  anesthesia?: string;
  isFeatured?: boolean;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  name,
  description,
  benefits,
  recoveryTime,
  anesthesia,
  isFeatured = false,
}) => {
  return (
    <div
      className={`rounded-lg p-6 transition-all duration-300 h-full flex flex-col justify-between 
        ${
          isFeatured
            ? "bg-clinic-primary text-white shadow-lg"
            : " border border-gray-200 hover:shadow-md bg-clinic-vlight_primary/40"
        }`}
    >
      {isFeatured && (
        <span className="bg-white text-clinic-primary text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
          Recommended
        </span>
      )}

      <div>
        <h3
          className={`text-xl font-bold mb-2 ${isFeatured ? "text-white" : "text-clinic-dark"}`}
        >
          {name}
        </h3>

        <p className={`mb-4 ${isFeatured ? "text-white/90" : "text-gray-600"}`}>
          {description}
        </p>

        <div className="space-y-2 mb-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <span
                className={`mr-2 mt-1 ${isFeatured ? "text-white" : "text-clinic-primary"}`}
              >
                <Check size={16} />
              </span>
              <span className={isFeatured ? "text-white/90" : "text-gray-600"}>
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {(recoveryTime || anesthesia) && (
        <div
          className={`border-t ${isFeatured ? "border-white/20" : "border-gray-200"} 
          pt-4 mt-4 grid grid-cols-2 gap-2`}
        >
          {recoveryTime && (
            <div>
              <p
                className={`text-xs ${isFeatured ? "text-white/70" : "text-gray-500"}`}
              >
                Recovery Time
              </p>
              <p
                className={`font-medium ${isFeatured ? "text-white" : "text-clinic-dark"}`}
              >
                {recoveryTime}
              </p>
            </div>
          )}

          {anesthesia && (
            <div>
              <p
                className={`text-xs ${isFeatured ? "text-white/70" : "text-gray-500"}`}
              >
                Anesthesia
              </p>
              <p
                className={`font-medium ${isFeatured ? "text-white" : "text-clinic-dark"}`}
              >
                {anesthesia}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TreatmentCard;
