import React from "react";
import { medicalData } from "./data";
import {
  Pill,
  Clock,
  Image,
  ArrowUp,
  Thermometer,
  Syringe,
} from "lucide-react";

const IconMap = {
  pill: Pill,
  clock: Clock,
  image: Image,
  "arrow-up": ArrowUp,
  thermometer: Thermometer,
  syringe: Syringe,
  "alert-circle": Pill, // Using Pill as a fallback for alert-circle
};

const InfoSection = ({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images?: { src: string; alt: string }[];
}) => {
  return (
    <div className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl font-onest text-gray-800 mb-10">
                {title}
              </h2>

              {/* Text Content */}
              <p className="text-gray-600 leading-relaxed">{description}</p>
              <p className="text-gray-600 leading-relaxed">
                At higher stages of piles, such as Grade 3 or 4, an enlargement,
                pain, and bleeding is common, and a surgical solution is often
                needed to bring lasting relief.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Although piles are not a serious health risk, they can be
                irritating and uncomfortable. If you're ready to move forward
                with our team, we can guide you to the best treatment options
                for lasting relief.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg"
                alt="Grade 1 Piles"
                className="rounded-xl shadow-md object-cover w-full h-42"
              />
              <img
                src="/placeholder.svg"
                alt="Grade 2 Piles"
                className="rounded-xl shadow-md object-cover w-full h-42"
              />
              <img
                src="/placeholder.svg"
                alt="Grade 3 Piles"
                className="rounded-xl shadow-md object-cover w-full h-42"
              />
              <img
                src="/placeholder.svg"
                alt="Grade 4 Piles"
                className="rounded-xl shadow-md object-cover w-full h-42"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-onest text-gray-800 mb-6">
            Trigger Foods to Avoid in a Piles Diet
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {medicalData.piles.triggerFoods.map((food, index) => (
              <div key={index} className={`${food.bgColor} p-4 rounded-lg`}>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {food.name}
                </h3>
                <p className="text-sm text-gray-600">{food.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-onest text-gray-800 mb-6">
            Common Causes of Piles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {medicalData.piles.causesOfPiles.map((cause, index) => {
              const IconComponent = IconMap[cause.icon as keyof typeof IconMap];

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-clinic-primary" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-gray-600">{cause.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-onest text-gray-800 mb-6">
            Preventive Measures
          </h2>
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {medicalData.piles.preventiveMeasures.map((measure, index) => (
                <div key={index} className="flex items-start">
                  <div className="rounded-full bg-blue-100 p-2 mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-clinic-primary"
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
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {measure.title}
                    </h3>
                    <p className="text-gray-600">{measure.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-onest text-gray-800 mb-6">
            Surgery for Piles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Surgery for piles (hemorrhoids) is usually recommended when
                other treatments haven't been effective or the hemorrhoids are
                particularly large. There are several surgical approaches
                depending on the severity and location of the hemorrhoids.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Types of Pile Surgery
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {medicalData.piles.surgeryTypes.map((surgery, index) => (
                  <li key={index}>{surgery}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/placeholder.svg"
                alt="Pile Surgery Illustration"
                className="rounded-lg shadow-lg max-h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
