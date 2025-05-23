import React from "react";
import Image from "next/image";
const Procedure = ({
  description,
  steps,
  recovery,
}: {
  description: string;
  steps: string[];
  recovery: string;
}) => {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-onest text-gray-800 mb-6">Procedure</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <p className="text-gray-600 mb-6">{description}</p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                width={100}
                height={100}
                src="/placeholder.svg"
                alt="Procedure illustration"
                className="rounded-lg shadow-md w-full max-w-md mx-auto order-2 md:order-1"
              />
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Procedure Steps
                </h3>
                <ol className="space-y-3 list-decimal pl-5">
                  {steps.map((step, index) => (
                    <li key={index} className="text-gray-600">
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Recovery Time
                  </h4>
                  <p className="text-gray-600">{recovery}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
