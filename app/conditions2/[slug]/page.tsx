import { notFound } from "next/navigation";
import React from "react";
import SectionTitle from "./SectionTitle";
import InfoIcon from "../../../components/conditions/InfoIcon";
import TreatmentCard from "./TreatmentCard";
import {
  Calendar,
  Check,
  CircleArrowDown,
  Image,
  Info,
  Link,
  Plus,
  Search,
} from "lucide-react";
import { pilesCondition } from "./data";
import AppointmentForm from "@/components/conditions/AppointmentForm";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ConditionsPage({ params }: Props) {
  const { slug } = params;

  // Fetch your data here
  const data = await getDataFromSlug(slug);
  // const [isLoaded, setIsLoaded] = useState(false);
  const isLoaded = true;
  // const [lastUpdated, setLastUpdated] = useState("");
  const lastUpdated = "recently";
  const condition = pilesCondition;

  if (!data) {
    notFound(); // shows 404 page
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with gradient overlay and background image */}
      <section className="relative h-auto md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')",
          }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-clinic-primary/90 via-clinic-primary/70 to-transparent z-0"
          aria-hidden="true"
        ></div>

        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-7/12 animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {condition.overview.title}
              </h1>

              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                {condition.overview.brief}
              </p>

              {/* Quick Info Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <InfoIcon
                  icon={<Calendar className="h-6 w-6" />}
                  title="Quick Recovery"
                  description="Return to normal activities fast"
                />
                <InfoIcon
                  icon={<Check className="h-6 w-6" />}
                  title="Minimally Invasive"
                  description="Advanced techniques with minimal pain"
                />
                <InfoIcon
                  icon={<Image className="h-6 w-6" />}
                  title="Modern Technology"
                  description="State-of-the-art equipment"
                />
                <InfoIcon
                  icon={<Info className="h-6 w-6" />}
                  title="Expert Doctors"
                  description="Specialized in treatment"
                />
              </div>

              {condition.overview.alternateNames &&
                condition.overview.alternateNames.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2 text-white">
                      Also Known As:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {condition.overview.alternateNames.map((item, index) => (
                        <span
                          key={index}
                          className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white"
                        >
                          {item.name}{" "}
                          <span className="text-xs text-white/70">
                            ({item.language})
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              <div className="hidden md:block">
                <CircleArrowDown className="h-8 w-8 text-white animate-bounce" />
                <span className="text-sm text-white/80">
                  Scroll for more information
                </span>
              </div>
            </div>

            <div className="w-full md:w-5/12 lg:w-4/12 md:ml-auto">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
      {/* What is the condition section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={`What are ${condition.overview.title.split("-")[0].trim()}?`}
            subtitle="Understanding the condition is the first step toward effective treatment"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-700">{condition.overview.brief}</p>

              {condition.symptoms.length > 0 && (
                <div>
                  <h3 className="text-xl font-medium text-clinic-dark mb-2">
                    Common Symptoms
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {condition.symptoms.map((symptom, index) => (
                      <li key={index} className="text-gray-700">
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div
              className="bg-gray-200 rounded-lg overflow-hidden h-64 lg:h-80"
              aria-label="Medical condition illustration"
            >
              {/* Placeholder for medical illustration - would be replaced with actual image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-clinic-light to-clinic-primary/30">
                <span className="text-clinic-primary opacity-50">
                  <Image className="h-12 w-12" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors to Avoid */}
      {condition.riskFactors && condition.riskFactors.length > 0 && (
        <section className="py-12 bg-clinic-light">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Important Factors to Avoid if You Have Piles"
              align="center"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {condition.riskFactors.map((factor, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border-l-4 border-clinic-primary transition-all duration-300 hover:shadow-md ${isLoaded ? "opacity-100" : "opacity-0"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-medium text-lg mb-2 text-clinic-dark">
                    Risk Factor
                  </h3>
                  <p className="text-gray-700">{factor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Common Causes */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Common Causes of Piles" align="center" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {condition.causes.slice(0, 6).map((cause, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-clinic-light rounded-full p-2 mr-3 mt-1">
                  <Plus className="h-4 w-4 text-clinic-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 text-clinic-dark">
                    {cause.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <p className="text-gray-600">{cause}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention and Non-Surgical Treatment */}
      {condition.treatments.nonSurgical &&
        condition.treatments.nonSurgical.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <SectionTitle
                title="Prevention and Non-Surgical Treatment"
                subtitle="Before considering surgery, these approaches can help manage symptoms"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {condition.treatments.nonSurgical.map((treatment, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <h3 className="text-xl font-medium text-clinic-primary mb-3">
                      {treatment.name}
                    </h3>
                    <p className="text-gray-700">{treatment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* Surgical Treatment Options */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Surgical Treatment Options"
            subtitle="Our advanced surgical procedures provide effective, long-term relief"
          />

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {condition.treatments.surgical.map((treatment, index) => (
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

      {/* Diagnosis */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Diagnosis"
            subtitle="Accurate diagnosis is essential for effective treatment planning"
          />

          <div className="space-y-6">
            {condition.diagnosis.methods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-clinic-secondary"
              >
                <h3 className="text-xl font-medium text-clinic-dark mb-2">
                  {method.name}
                </h3>
                <p className="text-gray-700">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Procedure"
            subtitle="Our step-by-step approach ensures safety and effectiveness"
          />

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-clinic-light"></div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-medium text-clinic-dark mb-2">
                    Evaluation
                  </h3>
                  <p className="text-gray-700">
                    Our specialists conduct a thorough examination to assess
                    your condition and determine the most appropriate treatment
                    approach.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 relative">
                  <div className="md:block absolute -left-6 top-0 w-12 h-12 rounded-full bg-clinic-light border-4 border-clinic-primary flex items-center justify-center">
                    <span className="text-clinic-primary font-bold">1</span>
                  </div>
                  <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-clinic-light to-clinic-primary/30">
                      <span className="text-clinic-primary opacity-50">
                        <Search className="h-12 w-12" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-clinic-light to-clinic-primary/30">
                      <span className="text-clinic-primary opacity-50">
                        <Image className="h-12 w-12" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-6 md:mb-0 md:relative">
                  <div className="md:block absolute -left-6 top-0 w-12 h-12 rounded-full bg-clinic-light border-4 border-clinic-primary flex items-center justify-center">
                    <span className="text-clinic-primary font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-medium text-clinic-dark mb-2">
                    Procedure
                  </h3>
                  <p className="text-gray-700">
                    Using advanced laser technology, we precisely target the
                    affected tissue with minimal impact on surrounding areas,
                    ensuring optimal results with minimal discomfort.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-medium text-clinic-dark mb-2">
                    Recovery
                  </h3>
                  <p className="text-gray-700">
                    Most patients experience minimal downtime and can return to
                    normal activities within days rather than weeks, with
                    significantly less pain than traditional surgical methods.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 relative">
                  <div className="md:block absolute -left-6 top-0 w-12 h-12 rounded-full bg-clinic-light border-4 border-clinic-primary flex items-center justify-center">
                    <span className="text-clinic-primary font-bold">3</span>
                  </div>
                  <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-clinic-light to-clinic-primary/30">
                      <span className="text-clinic-primary opacity-50">
                        <Calendar className="h-12 w-12" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-clinic-light">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Total MediCare for Piles Surgery?"
            align="center"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {condition.whyChooseUs.reasons.map((reason, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md border-t-4 border-clinic-primary ${isLoaded ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-medium text-clinic-dark mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Frequently Asked Questions" align="center" />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-clinic-dark mb-2">
                  Is laser treatment for piles painful?
                </h3>
                <p className="text-gray-700">
                  Laser treatment involves minimal pain compared to traditional
                  surgery. Most patients report only slight discomfort during
                  the procedure, which is performed under local anesthesia.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-clinic-dark mb-2">
                  How soon can I return to work after the procedure?
                </h3>
                <p className="text-gray-700">
                  Most patients can return to work within 2-3 days after laser
                  treatment. However, this depends on your occupation and
                  individual recovery process.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-clinic-dark mb-2">
                  Will the piles come back after treatment?
                </h3>
                <p className="text-gray-700">
                  The recurrence rate after laser treatment is very low.
                  However, maintaining a high-fiber diet, staying hydrated, and
                  avoiding prolonged sitting can help prevent recurrence.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-clinic-dark mb-4">
                Ready to Get Relief from Piles?
              </h3>
              <p className="text-gray-700 mb-6">
                Schedule a consultation with our specialists and take the first
                step toward a pain-free life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-clinic-primary hover:bg-clinic-dark text-white font-medium px-6 py-3 rounded-lg transition-colors">
                  Book an Appointment
                </button>
                <button className="bg-white border border-clinic-primary text-clinic-primary hover:bg-clinic-light font-medium px-6 py-3 rounded-lg transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with metadata */}
      <footer className="bg-gray-100 py-4 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          <p>
            Last updated: {lastUpdated} •
            {condition.meta.tags && (
              <span className="ml-2">
                Tags: {condition.meta.tags.join(", ")}
              </span>
            )}
          </p>
          <p className="mt-2">
            <Link className="inline-block mr-1 h-4 w-4" />
            <a
              href={condition.meta.pageUrl}
              className="hover:text-clinic-primary"
              rel="canonical"
            >
              {condition.meta.pageUrl}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

// Example fetch function (replace with your own)
async function getDataFromSlug(slug: string) {
  const mockData: { [key: string]: { title: string; content: string } } = {
    a: { title: "Example Post", content: "This is an example." },
  };
  return mockData[slug];
}
