// City registry for location landing pages and their treatment sub-routes.
//
// URL shape: /<city>/treatment/<base-slug>-in-<city>
//   e.g. /pune/treatment/piles-treatment-in-pune
//
// `treatments` holds BASE slugs — the same keys used by components/data/index.ts
// (camelCased) and by the metadata maps. The base slug is also the image key
// (`/treatment/<base>-1.webp`), so routes must resolve a city slug back to its
// base before rendering. See resolveCityTreatment in ./cityTreatment.
//
// Deliberately free of heavy imports: client components import this for link
// building, so pulling in allData or the metadata maps here would ship the
// entire treatment catalogue to the browser.

export const cities = {
  pune: {
    name: "Pune",
    treatments: [
      "stapler-circumcision",
      "piles-treatment",
      "fissure-treatment",
      "kidney-stone-treatment-rirspcnlursl",
      "gallstone-surgery",
      "lipoma",
      "gall-bladder-surgery",
    ],
  },
  mumbai: {
    name: "Mumbai",
    treatments: [
      "stapler-circumcision",
      "gallstone-surgery",
      "kidney-stone-treatment-rirspcnlursl",
      "piles-treatment",
      "fissure-treatment",
      "fistula-treatment",
    ],
  },
} as const;

export type CityKey = keyof typeof cities;

export const SITE_URL = "https://totalsurgicare.com";

export const toCitySlug = (baseSlug: string, city: CityKey) =>
  `${baseSlug}-in-${city}`;

export const cityTreatmentPath = (baseSlug: string, city: CityKey) =>
  `/${city}/treatment/${toCitySlug(baseSlug, city)}`;

/**
 * Reverse of toCitySlug. Returns null unless the slug carries the city suffix
 * AND names a treatment curated for that city, so unlisted treatments 404
 * instead of rendering with fallback metadata.
 */
export const toBaseSlug = (citySlug: string, city: CityKey): string | null => {
  const suffix = `-in-${city}`;

  if (!citySlug.endsWith(suffix)) return null;

  const baseSlug = citySlug.slice(0, -suffix.length);

  return (cities[city].treatments as readonly string[]).includes(baseSlug)
    ? baseSlug
    : null;
};
