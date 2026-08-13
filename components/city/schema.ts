import { SITE_URL, type CityKey } from "@/components/data/cities";
import { siteConfig } from "@/config/site";
import type { MedicalCondition } from "@/types";

import { cityConfigs } from "./index";
import type { CityAddress } from "./types";

const postalAddress = (address: CityAddress) => ({
  "@type": "PostalAddress",
  streetAddress: address.street,
  addressLocality: address.locality,
  addressRegion: address.region,
  postalCode: address.postalCode,
  addressCountry: address.country,
});

/**
 * JSON-LD for a city landing page: Organization + Hospital + WebPage + FAQPage.
 *
 * `address` and `aggregateRating` are emitted only when the city config
 * actually has them. A city without a verified Google Business Profile gets
 * neither — fabricated review markup is a structured-data violation and can
 * cost the whole domain its rich results.
 */
export function buildCityPageSchema(cityKey: CityKey) {
  const city = cityConfigs[cityKey];
  const pageUrl = `${SITE_URL}/${cityKey}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Total Surgicare",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
        image: `${SITE_URL}/logo.png`,
        email: `mailto:${siteConfig.contact.email.primary}`,
        telephone: siteConfig.contact.phone.primary,
        sameAs: [
          "https://www.facebook.com/TotalSurgicare/",
          "https://www.instagram.com/total_surgicare/",
        ],
      },
      {
        "@type": "Hospital",
        "@id": `${pageUrl}/#hospital`,
        name: `Total Surgicare ${city.name}`,
        url: pageUrl,
        telephone: siteConfig.contact.phone.primary,
        areaServed: { "@type": "City", name: city.name },
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: { "@id": `${pageUrl}/#webpage` },
        ...(city.address ? { address: postalAddress(city.address) } : {}),
        ...(city.rating
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: city.rating.value,
                reviewCount: city.rating.reviewCount,
                bestRating: city.rating.best,
                worstRating: city.rating.worst,
              },
            }
          : {}),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: city.meta.title,
        description: city.meta.description,
        inLanguage: "en-IN",
        about: { "@id": `${pageUrl}/#hospital` },
        mainEntity: { "@id": `${pageUrl}/#hospital` },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: city.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

interface TreatmentSchemaInput {
  cityKey: CityKey;
  /** City-suffixed slug, e.g. "piles-treatment-in-mumbai". */
  citySlug: string;
  treatmentName: string;
  pageTitle: string;
  pageDescription: string;
  procedureName: string;
  faq: MedicalCondition["faq"];
}

/**
 * Builds the MedicalClinic + MedicalWebPage + BreadcrumbList + FAQPage graph
 * shared by every city treatment page. The FAQPage entries mirror the FAQ
 * accordion rendered on the page itself, so schema and UI can't drift.
 */
export function buildTreatmentSchema({
  cityKey,
  citySlug,
  treatmentName,
  pageTitle,
  pageDescription,
  procedureName,
  faq,
}: TreatmentSchemaInput) {
  const city = cityConfigs[cityKey];
  const pageUrl = `${SITE_URL}/${cityKey}/treatment/${citySlug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_URL}/#organization`,
        name: "Total Surgicare",
        image: `${SITE_URL}/logo.webp`,
        telephone: siteConfig.contact.phone.primary,
        email: siteConfig.contact.email.primary,
        url: `${SITE_URL}/${cityKey}`,
        priceRange: "$$",
        areaServed: { "@type": "City", name: city.name },
        ...(city.address ? { address: postalAddress(city.address) } : {}),
        sameAs: [
          "https://www.facebook.com/TotalSurgicare",
          "https://www.instagram.com/total_surgicare",
        ],
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: "en-IN",
        about: {
          "@type": "MedicalProcedure",
          name: procedureName,
        },
        medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: city.name,
            item: `${SITE_URL}/${cityKey}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: treatmentName,
            item: pageUrl,
          },
        ],
      },
      ...(faq && faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}/#faq`,
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ]
        : []),
    ],
  };
}
