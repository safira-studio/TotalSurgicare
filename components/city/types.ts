// Shape of a city landing page's content. One config per city drives the
// shared <City*> components, the page metadata and the JSON-LD, so the copy,
// the rendered UI and the structured data can never drift apart.
import type { LucideIcon } from "lucide-react";
import type { FAQItem } from "@/components/home/FAQSection";
import type { CityKey } from "@/components/data/cities";

export interface CityAddress {
  street: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
}

/**
 * Google rating for the city's Business Profile. Only set this when a real
 * verified profile exists — it is emitted as `aggregateRating` structured data,
 * and inventing values there is a Google structured-data violation.
 */
export interface CityRating {
  value: string;
  reviewCount: string;
  best: string;
  worst: string;
}

export interface CityReview {
  author: string;
  rating: number;
  /** Procedure the patient was treated for. Omitted when not on record. */
  treatment?: string;
  content: string;
}

export interface CityTreatmentCard {
  /** BASE slug from components/data/cities.ts — the link is derived from it. */
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  iconBgClass: string;
}

export interface CityConfig {
  key: CityKey;
  /** Display name, e.g. "Mumbai". */
  name: string;

  /** Page <title>/<meta description>, already brand-suffixed. */
  meta: { title: string; description: string; keywords: string };

  /** Hero H1 + intro paragraph. */
  hero: { title: string; description: string };

  treatments: CityTreatmentCard[];

  /** Lead paragraph under the "Why Choose Total Surgicare" heading. */
  whyChooseUsIntro: string;

  /** Lead paragraph under the "What Our Patients Say" heading. */
  testimonialsIntro: string;

  reviews: CityReview[];

  /**
   * Null until the clinic has a published address. A null address renders the
   * location block as a placeholder and omits `address` from the Hospital
   * schema rather than borrowing another city's.
   */
  address: CityAddress | null;

  /** Null until a verified Google Business Profile exists. See CityRating. */
  rating: CityRating | null;

  /** Sentence under the location heading, e.g. "Find us in Wanowrie, Pune…". */
  locationIntro: string;

  faqs: FAQItem[];
}
