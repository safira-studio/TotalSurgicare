import Link from "next/link";
import React from "react";

const TreatmentStages = ({
  whyUs,
  name,
}: {
  whyUs: { title: string; description: string }[];
  name: string;
}) => {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-3xl font-onest text-gray-800 text-center mb-12">
          Why choose Total Surgicare for {name} Surgery?
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12  gap-y-8 md:gap-y-16 ">
          {whyUs.map((stage, index) => (
            <div
              key={index}
              className=" rounded-lg p-8 shadow-md bg-clinic-vlight_primary/40"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-clinic-primary text-white flex items-center justify-center rounded-full font-semibold mr-3">
                  {index}
                </div>
                <h3 className="text-lg md:text-xl font-onest text-gray-800">
                  {stage.title}
                </h3>
              </div>
              <p className="text-gray-600">{stage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href={"/contact"}>
            <button className="bg-clinic-primary hover:bg-clinic-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Book Your FREE Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TreatmentStages;
