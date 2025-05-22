import React from "react";
import AppointmentForm from "./AppointmentForm";
import { medicalData } from "./data";

const Hero = (main: any) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 py-16 px-6 lg:px-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-onest text-gray-800 leading-tight mb-6">
            {main.main.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8">{main.main.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
              <div className="rounded-full bg-blue-100 p-3 mb-3">
                <svg
                  className="w-6 h-6 text-clinic-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <p className="text-center text-sm font-medium">
                Painless Procedure
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
              <div className="rounded-full bg-blue-100 p-3 mb-3">
                <svg
                  className="w-6 h-6 text-clinic-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <p className="text-center text-sm font-medium">
                Quick Recovery Time
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
              <div className="rounded-full bg-blue-100 p-3 mb-3">
                <svg
                  className="w-6 h-6 text-clinic-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  ></path>
                </svg>
              </div>
              <p className="text-center text-sm font-medium">
                Advanced Technology
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
              <div className="rounded-full bg-blue-100 p-3 mb-3">
                <svg
                  className="w-6 h-6 text-clinic-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <p className="text-center text-sm font-medium">
                1-Day Rehabilitation
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
