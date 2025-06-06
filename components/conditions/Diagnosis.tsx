import Image from "next/image";
import React from "react";

const Diagnosis = ({
  description,
  methods,
  slug,
}: {
  description: string;
  methods: string[];
  slug: string;
}) => {
  return (
    <div className="bg-gray-50 py-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto bg-white shadow-sm rounded-lg">
        <div className="mb-16 py-4">
          {/* <h2 className="text-3xl font-onest text-gray-800 mb-4">Diagnosis</h2> */}
          <h2 className="text-3xl font-onest text-gray-800 mb-4 text-center">
            Diagnosis
          </h2>

          <div className="   p-6 md:p-8">
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Diagnostic Methods
                </h3>
                <ul className="space-y-3">
                  {methods.map((method, index) => (
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
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                alt="Diagnostic procedure"
                className="rounded-lg shadow-md w-full max-w-md mx-auto"
                height={500}
                src={`/conditions/${slug}-2.webp`}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
