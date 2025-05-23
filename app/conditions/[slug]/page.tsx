import Diagnosis from "@/components/conditions/Diagnosis";
import InfoSection from "@/components/conditions/InfoSection";
import Treatment from "@/components/conditions/Treatment";
import Hero from "@/components/conditions/Hero";
import { notFound } from "next/navigation";
import Types from "@/components/conditions/Types";
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
import { siteConfig } from "@/config/site";
import allData from "@/components/data/index";

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
  params: Promise<{ slug: string }>;
};
export async function generateStaticParams() {
  const slugs = siteConfig.navItems.flatMap((section) =>
    section.items
      .map((item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")
      )
      .concat(
        section.items.length === 0
          ? [section.title.toLowerCase().replace(/\s+/g, "-")]
          : []
      )
  );
  return slugs.map((slug) => ({ slug }));
}
export default async function ConditionsPage({ params }: Props) {
  const { slug } = await params;

  // Fetch your data here
  const data = await getDataFromSlug(slug);

  if (!data) {
    notFound(); // shows 404 page
  }
  return (
    <div>
      {/* Hero Section */}
      <Hero {...data.overview} />
      {/* What is the condition section */}
      <InfoSection {...data.aboutCondition} />
      {/* food triggers */}
      <div className="mb-16">
        <h2 className="text-3xl font-onest text-gray-800 mb-6">
          Trigger Foods to Avoid in a Diet
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.foodTriggers?.map((food, index) => (
            <div key={index} className={`${food.bgColor} p-4 rounded-lg`}>
              <h3 className="font-semibold text-gray-800 mb-2">{food.name}</h3>
              <p className="text-sm text-gray-600">{food.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Symptoms */}
      <div className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Symptoms of Piles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.symptoms?.map((symptom, index) => {
              const IconComponent =
                IconMap[symptom.icon as keyof typeof IconMap];

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {symptom.title}
                  </h3>
                  <p className="text-gray-600">{symptom.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Common Causes */}
      <div className="mb-16">
        <h2 className="text-3xl font-onest text-gray-800 mb-6">
          Common Causes of Piles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.causes.map((cause, index) => {
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
      {/* Risk Factors */}
      <div className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Risk Factors for Piles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.riskFactors?.map((riskFactor, index) => {
              const IconComponent =
                IconMap[riskFactor.icon as keyof typeof IconMap];

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {riskFactor.title}
                  </h3>
                  <p className="text-gray-600">{riskFactor.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Complications if Left Untreated */}
      <div className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Complications if Piles are Left Untreated
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.complications?.map((complication, index) => {
              const IconComponent =
                IconMap[complication.icon as keyof typeof IconMap];

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {complication.title}
                  </h3>
                  <p className="text-gray-600">{complication.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Prevention and Non-Surgical Treatment */}
      <div className="mb-16">
        <h2 className="text-3xl font-onest text-gray-800 mb-6">
          Preventive Measures
        </h2>
        <div className="bg-blue-50 rounded-lg p-6">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
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

      {/* sugrical treatment */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Surgical Treatment Options"
            subtitle="Our advanced surgical procedures provide effective, long-term relief"
          />

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {data.treatments.surgical.map((treatment, index) => (
              <TreatmentCard
                key={index}
                name={treatment.name}
                description={treatment.description}
                benefits={treatment.benefits}
                recoveryTime={treatment.recoveryTime}
                anesthesia={treatment.anesthesia}
                isFeatured={index === 0} // First treatment is featured (typically laser)
              />
            ))}
          </div>
        </div>
      </section>

      <Diagnosis {...data.diagnosis} />
      <Types types={data.types} />
      <Treatment whyUs={data.whyChooseUs} />
    </div>
  );
}

// Example fetch function (replace with your own)
async function getDataFromSlug(slug: string) {
  try {
    const dataKey = slug.replace(/-([a-z])/g, (_, letter) =>
      letter.toUpperCase()
    );
    return allData[dataKey as keyof typeof allData] || null;
  } catch (error) {
    console.error(`Error fetching data for slug ${slug}:`, error);
    return null;
  }
}
