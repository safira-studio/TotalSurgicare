import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cityTreatmentPath } from "@/components/data/cities";

import type { CityConfig, CityTreatmentCard } from "./types";

const TreatmentItem = ({
  name,
  slug,
  city,
  description,
  icon: Icon,
  colorClass,
  iconBgClass,
}: CityTreatmentCard & { city: CityConfig["key"] }) => (
  <Link className="group block h-full" href={cityTreatmentPath(slug, city)}>
    <div className="relative bg-white border border-gray-100 rounded-3xl p-8 h-full transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className={`absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 ease-in-out ${colorClass}`}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div
          className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl shadow-sm border text-clinic-primary group-hover:text-white transition-colors duration-300 ${iconBgClass}`}
        >
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-clinic-primary transition-colors">
          {name}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="mt-auto flex items-center text-sm font-semibold text-clinic-primary">
          <span className="mr-2">View Treatment</span>
          <ArrowRight
            aria-hidden="true"
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </div>
  </Link>
);

/** "Our Specialties" grid for a city landing page. */
const CityTreatments = ({ city }: { city: CityConfig }) => {
  // Seven cards read better on a 5-up grid; six divide evenly into three.
  const wideGrid = city.treatments.length > 6;

  return (
    <section
      aria-labelledby="specialties-heading"
      className="w-full py-20 bg-gray-50/50"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-clinic-primary text-xs font-bold tracking-wider uppercase mb-4">
            Our Specialties
          </span>
          <h2
            className="text-4xl md:text-5xl font-onest font-bold text-gray-900 mb-6"
            id="specialties-heading"
          >
            Total Surgicare
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Experience world-class surgical care with our specialized treatments
            designed for your comfort and rapid recovery.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${
            wideGrid ? "xl:grid-cols-5" : ""
          }`}
        >
          {city.treatments.map((treatment) => (
            <TreatmentItem
              key={treatment.slug}
              city={city.key}
              {...treatment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityTreatments;
