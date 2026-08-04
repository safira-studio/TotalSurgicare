// Server-side resolver for city treatment routes. Kept out of ./cities so that
// client components can import the link helpers without pulling the whole
// treatment catalogue into the browser bundle.
import allData from "./index";
import { metadataMap } from "./metadataMap";
import { mumbaiMetadataMap } from "./mumbaiMetadataMap";
import { SITE_URL, toBaseSlug, type CityKey } from "./cities";

type TreatmentMetadata = {
  title: string;
  description: string;
  keywords: string;
};

// Both maps are keyed by BASE slug, so no rekeying was needed for the new URLs.
const cityMetadata: Record<CityKey, Record<string, TreatmentMetadata>> = {
  pune: metadataMap,
  mumbai: mumbaiMetadataMap,
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
  const data = allData[dataKey as keyof typeof allData];

  if (!data) return null;

  return {
    data,
    baseSlug,
    meta: cityMetadata[city][baseSlug],
    canonical: `${SITE_URL}/${city}/treatment/${citySlug}`,
  };
}
