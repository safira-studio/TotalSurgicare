import React from "react";
import { medicalData } from "./data";

const DiagnosisProcedure = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-onest text-gray-800 mb-6">Diagnosis</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <p className="text-gray-600 mb-6">
              The proper diagnosis requires a physical examination of the anal
              area, including the use of a proctoscope. This allows the doctor
              to look inside the anal canal to identify internal hemorrhoids as
              well as determine their grade and stage.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Diagnostic Methods
                </h3>
                <ul className="space-y-3">
                  {medicalData.piles.diagnosticMethods.map((method, index) => (
                    <li key={index} className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-1 mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                alt="Diagnostic procedure"
                className="rounded-lg shadow-md w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-onest text-gray-800 mb-6">Procedure</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <p className="text-gray-600 mb-6">
              Our advanced laser procedure for piles is minimally invasive and
              typically takes only 15-20 minutes. The high-precision laser beam
              is directed at the hemorrhoid, causing it to shrink and seal
              damaged blood vessels. This approach ensures minimal discomfort
              and faster recovery compared to conventional surgical methods.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="/placeholder.svg"
                alt="Procedure illustration"
                className="rounded-lg shadow-md w-full max-w-md mx-auto order-2 md:order-1"
              />
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Procedure Steps
                </h3>
                <ol className="space-y-3 list-decimal pl-5">
                  {medicalData.piles.procedureSteps.map((step, index) => (
                    <li key={index} className="text-gray-600">
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Recovery Time
                  </h4>
                  <p className="text-gray-600">
                    Most patients can return to normal activities within 1-2
                    days after the procedure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisProcedure;
