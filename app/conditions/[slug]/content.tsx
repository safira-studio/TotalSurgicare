import Diagnosis from "@/components/conditions/Diagnosis";
import InfoSection from "@/components/conditions/InfoSection";
import Treatment from "@/components/conditions/Treatment";
import Hero from "@/components/conditions/Hero";
import ConditionTypes from "@/components/conditions/ConditionTypes";
import {
  Pill,
  Clock,
  Image,
  ArrowUp,
  Thermometer,
  Syringe,
} from "lucide-react";
import SectionTitle from "@/components/conditions/SectionTitle";
import TreatmentCard from "@/components/conditions/TreatmentCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MedicalCondition } from "@/types";

const IconMap = {
  pill: Pill,
  clock: Clock,
  image: Image,
  "arrow-up": ArrowUp,
  thermometer: Thermometer,
  syringe: Syringe,
  "alert-circle": Pill, // Using Pill as a fallback for alert-circle
};

type Props = {
  slug: string;
  data: MedicalCondition;
};

export default async function Content({ slug, data }: Props) {
  return (
    <div>
      {/* Hero Section */}
      <Hero {...data.overview} />
      {/* What is the condition section */}
      <InfoSection {...data.aboutCondition} slug={slug} />
      {/* food triggers */}
      {data.foodTriggers && (
        <div className="mb-16">
          <div className="container mx-auto px-4">
            {" "}
            <h2 className="text-3xl font-onest text-gray-800 mb-6 text-center px-4 sm:px-6 lg:px-0 pb-4">
              Trigger Foods to Avoid in a Diet
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center sm:px-6 lg:px-16">
              {data.foodTriggers?.map((food, index) => (
                <div
                  key={index}
                  className={`${food.bgColor} p-4 rounded-lg shadow-md transition-transform hover:scale-[1.02]`}
                >
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                    {food.name}
                  </h3>
                  <p className="text-sm text-gray-600">{food.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Symptoms */}

      {data.symptoms && (
        <div className="mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-onest text-gray-800 mb-6 text-center">
              Symptoms of {data.name}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {data.symptoms?.map((symptom, index) => {
                const IconComponent =
                  IconMap[symptom.icon as keyof typeof IconMap];

                return (
                  <div
                    key={index}
                    className="bg-[#DCFCE7] border border-gray-200 rounded-2xl md:rounded-3xl p-4 shadow-sm hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-[#4CAF7D] flex items-center justify-center mb-4 mx-auto">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-[#4CAF7D]" />
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {symptom.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {symptom.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* Common Causes */}
      <div className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-onest text-gray-800 mb-6 text-center">
            Common Causes of {data.name}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 ">
            {data.causes.map((cause, index) => {
              const IconComponent = IconMap[cause.icon as keyof typeof IconMap];

              return (
                <div
                  key={index}
                  className="bg-clinic-vlight_primary/50 border border-gray-100 rounded-2xl md:rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-clinic-primary/50 flex items-center justify-center mb-4 mx-auto">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-clinic-primary" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{cause.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Risk Factors */}
      {data.riskFactors && (
        <div className="mb-14">
          <div className="container mx-auto px-4 ">
            <h2 className="text-3xl font-onest text-gray-800 mb-6 text-center">
              Risk Factors for {data.name}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 ">
              {data.riskFactors?.map((riskFactor, index) => {
                const IconComponent =
                  IconMap[riskFactor.icon as keyof typeof IconMap];

                return (
                  <div
                    key={index}
                    className="bg-clinic-secondary/20 border border-gray-100 rounded-2xl md:rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow text-center w-full"
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-clinic-secondary/50 bg-orange-80 flex items-center justify-center mb-4 mx-auto">
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 text-orange-600" />
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                      {riskFactor.title}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {riskFactor.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* Complications if Left Untreated */}
      {data.complications && (
        <div className="mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-onest text-gray-800 mb-6 text-center">
              Complications if {data.name} are Left Untreated
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {data.complications?.map((complication, index) => {
                const IconComponent =
                  IconMap[complication.icon as keyof typeof IconMap];

                return (
                  <div
                    key={index}
                    className="bg-red-100 border border-gray-100 rounded-2xl md:rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow text-center w-full"
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 mx-auto">
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 text-red-600" />
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                      {complication.title}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {complication.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* Prevention and Non-Surgical Treatment */}
      {data.treatments.nonSurgical && (
        <div className="mb-16 md:px-10 max-sm:px-3">
          <h2 className="text-3xl text-center font-onest text-gray-800 mb-6">
            Preventive Measures
          </h2>
          <div className="bg-blue-50 rounded-2xl md:rounded-3xl p-6 ">
            <div className="grid md:grid-cols-2 gap-6">
              {data.treatments.nonSurgical?.map((measure, index) => (
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
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {measure.name}
                    </h3>
                    <p className="text-gray-600">{measure.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* sugrical treatment */}

      <section className="py-12 lg:px-10 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our advanced surgical procedures provide effective, long-term relief"
            title={"Surgical Treatment Options"}
          />

          {/* Mobile Carousel View */}
          <div className="block md:hidden">
            <Carousel className="w-full relative overflow-hidden">
              <CarouselContent>
                {data.treatments.surgical.map((treatment, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <TreatmentCard
                      anesthesia={treatment.anesthesia}
                      benefits={treatment.benefits}
                      description={treatment.description}
                      isFeatured={index === 0}
                      name={treatment.name}
                      recoveryTime={treatment.recoveryTime}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Buttons */}
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {data.treatments.surgical.map((treatment, index) => (
              <TreatmentCard
                key={index}
                anesthesia={treatment.anesthesia}
                benefits={treatment.benefits}
                description={treatment.description}
                isFeatured={index === 0}
                name={treatment.name}
                recoveryTime={treatment.recoveryTime}
              />
            ))}
          </div>
        </div>
      </section>

      <Diagnosis {...data.diagnosis} slug={slug} />
      <ConditionTypes name={data.name} types={data.types} />
      <Treatment name={data.name} whyUs={data.whyChooseUs} />
    </div>
  );
}
