// Server-side resolver for city treatment routes. Kept out of ./cities so that
// client components can import the link helpers without pulling the whole
// treatment catalogue into the browser bundle.
import allData from "./index";
import { mumbaiMetadataMap } from "./mumbaiMetadataMap";
import { puneMetadataMap } from "./puneMetadataMap";
import mumbaiTreatmentContent from "@/components/mumbai/treatments";
import puneTreatmentContent from "@/components/pune/treatments";
import { SITE_URL, toBaseSlug, type CityKey } from "./cities";
import type { MedicalCondition } from "@/types";

type TreatmentMetadata = {
  title: string;
  description: string;
  keywords: string;
};

// Both maps are keyed by BASE slug, so no rekeying was needed for the new URLs.
const cityMetadata: Record<CityKey, Record<string, TreatmentMetadata>> = {
  pune: puneMetadataMap,
  mumbai: mumbaiMetadataMap,
};

// City-specific content overrides. Pune and Mumbai both have rewritten copy;
// the generic /treatment pages keep reading from `allData`.
const cityContentOverrides: Partial<Record<CityKey, Record<string, MedicalCondition>>> = {
  pune: puneTreatmentContent,
  mumbai: mumbaiTreatmentContent,
};

/**
 * Resolves a city treatment URL to everything a route needs: the condition
 * data, its SEO metadata, and the BASE slug to hand to <Content> so image
 * paths keep resolving. Returns null for any slug outside the city's list.
 */
export function resolveCityTreatment(city: CityKey, citySlug: string) {
  const baseSlug = toBaseSlug(citySlug, city);

  if (!baseSlug) return null;

  const dataKey = baseSlug.replace(/-([a-z])/g, (_, letter: string) =>
    letter.toUpperCase()
  );
  const data =
    cityContentOverrides[city]?.[baseSlug] ?? allData[dataKey as keyof typeof allData];

  if (!data) return null;

  return {
    data,
    baseSlug,
    meta: cityMetadata[city][baseSlug],
    canonical: `${SITE_URL}/${city}/treatment/${citySlug}`,
  };
}
