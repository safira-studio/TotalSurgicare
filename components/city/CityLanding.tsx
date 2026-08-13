import React from "react";
import type { Metadata } from "next";

import AppointmentBooking from "@/components/home/AppointmentBooking";
import BlogSection from "@/components/home/BlogSection";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/Hero";
import { SITE_URL, type CityKey } from "@/components/data/cities";

import CityInternalLinks from "./CityInternalLinks";
import CityLocation from "./CityLocation";
import CityTestimonials from "./CityTestimonials";
import CityTreatments from "./CityTreatments";
import CityWhyChooseUs from "./CityWhyChooseUs";
import { cityConfigs } from "./index";
import { buildCityPageSchema } from "./schema";

/** Page metadata for a city landing route. */
export function buildCityMetadata(cityKey: CityKey): Metadata {
  const city = cityConfigs[cityKey];

  return {
    // `absolute` opts out of the root layout's "%s - <site name>" template,
    // which would otherwise append a second brand name to the title.
    title: { absolute: city.meta.title },
    description: city.meta.description,
    keywords: city.meta.keywords,
    alternates: { canonical: `${SITE_URL}/${cityKey}` },
  };
}

/**
 * Shared city landing page. Section order follows the SEO content brief:
 * hero → specialties → why choose us → testimonials → health articles →
 * FAQs → appointment → internal links → Google Business Profile.
 */
export default function CityLanding({ cityKey }: { cityKey: CityKey }) {
  const city = cityConfigs[cityKey];

  return (
    <>
      {/* Rendered as a text child (not dangerouslySetInnerHTML) since the schema
          is built entirely from static, developer-authored data — never user input. */}
      <script type="application/ld+json">
        {JSON.stringify(buildCityPageSchema(cityKey))}
      </script>

      <Hero description={city.hero.description} title={city.hero.title} />
      <CityTreatments city={city} />
      <CityWhyChooseUs city={city} />
      <CityTestimonials city={city} />

      <div className="scroll-mt-24" id="health-articles">
        <BlogSection />
      </div>

      <FAQSection
        description={`Answers to the questions patients most often ask about multispeciality surgical care at Total Surgicare ${city.name}.`}
        eyebrow={`${city.name.toUpperCase()} FAQS`}
        faqs={city.faqs}
        heading="Frequently Asked Questions"
      />

      <AppointmentBooking />
      <CityInternalLinks city={city} />
      <CityLocation city={city} />
    </>
  );
}
