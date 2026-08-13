import type { CityKey } from "@/components/data/cities";

import { mumbaiConfig } from "./mumbai";
import { puneConfig } from "./pune";
import type { CityAddress, CityConfig } from "./types";

export const cityConfigs: Record<CityKey, CityConfig> = {
  pune: puneConfig,
  mumbai: mumbaiConfig,
};

export const formatAddress = (address: CityAddress) =>
  `${address.street}, ${address.locality}, ${address.region} ${address.postalCode}`;

/**
 * Keyless Google Maps links derived from the clinic address — no Maps
 * JavaScript API key required, so nothing to leak or rotate.
 */
export const googleMapsUrls = (address: CityAddress) => {
  const query = encodeURIComponent(
    `Total Surgicare, ${formatAddress(address)}`
  );

  return {
    embed: `https://maps.google.com/maps?q=${query}&z=16&output=embed`,
    directions: `https://www.google.com/maps/dir/?api=1&destination=${query}`,
    profile: `https://www.google.com/maps/search/?api=1&query=${query}`,
  };
};

export type {
  CityAddress,
  CityConfig,
  CityRating,
  CityReview,
  CityTreatmentCard,
} from "./types";
