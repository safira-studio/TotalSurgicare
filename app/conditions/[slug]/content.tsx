import Diagnosis from "@/components/conditions/Diagnosis";
import InfoSection from "@/components/conditions/InfoSection";
import Treatment from "@/components/conditions/Treatment";
import Hero from "@/components/conditions/Hero";
import ConditionTypes from "@/components/conditions/ConditionTypes";
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
import Insights from "@/components/conditions/insights";

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
      {data.foodTriggers && data.foodTriggers.length > 0 && (
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

      <Insights
        data={data.symptoms}
        title={`Symptoms for ${data.name}`}
        color="green"
      />
      <Insights
        data={data.causes}
        title={`Common Causes of ${data.name}`}
        color="blue"
      />
      <Insights
        data={data.riskFactors}
        title={`Risk Factors for ${data.name}`}
        color="orange"
      />
      <Insights
        data={data.indications}
        title={`Indication of ${data.name}`}
        color="blue"
      />
      <Insights
        data={data.complications}
        title={`Complications if ${data.name} Left Untreated`}
        color="red"
      />

      {/* Prevention and Non-Surgical Treatment */}

      <Diagnosis {...data.diagnosis} slug={slug} />
      {/* {data.treatments.nonSurgical &&
        data.treatments.nonSurgical.length > 0 && (
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
        )} */}
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

      {/* <Diagnosis {...data.diagnosis} slug={slug} /> */}
      {data.treatments.nonSurgical &&
        data.treatments.nonSurgical.length > 0 && (
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
      {data.types && data.types.length > 0 && (
        <ConditionTypes name={data.name} types={data.types} />
      )}
      <Treatment name={data.name} whyUs={data.whyChooseUs} />
    </div>
  );
}
