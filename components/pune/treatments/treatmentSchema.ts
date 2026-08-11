import { SITE_URL } from "@/components/data/cities";
import { PUNE_ADDRESS } from "@/components/pune/puneLocationData";
import { siteConfig } from "@/config/site";
import type { MedicalCondition } from "@/types";

interface TreatmentSchemaInput {
  citySlug: string;
  treatmentName: string;
  pageTitle: string;
  pageDescription: string;
  procedureName: string;
  faq: MedicalCondition["faq"];
}

/**
 * Builds the MedicalClinic + MedicalWebPage + BreadcrumbList + FAQPage graph
 * shared by every Pune treatment page. The FAQPage entries mirror the FAQ
 * accordion rendered on the page itself, so schema and UI can't drift.
 */
export function buildTreatmentSchema({
  citySlug,
  treatmentName,
  pageTitle,
  pageDescription,
  procedureName,
  faq,
}: TreatmentSchemaInput) {
  const pageUrl = `${SITE_URL}/pune/treatment/${citySlug}`;

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
        url: `${SITE_URL}/pune`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: PUNE_ADDRESS.street,
          addressLocality: PUNE_ADDRESS.locality,
          addressRegion: PUNE_ADDRESS.region,
          postalCode: PUNE_ADDRESS.postalCode,
          addressCountry: PUNE_ADDRESS.country,
        },
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
          { "@type": "ListItem", position: 2, name: "Pune", item: `${SITE_URL}/pune` },
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
