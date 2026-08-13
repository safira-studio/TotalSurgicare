import React from "react";
import { Star, MapPin, Navigation, Phone, Clock } from "lucide-react";

import { siteConfig } from "@/config/site";

import { formatAddress, googleMapsUrls } from "./index";
import type { CityConfig } from "./types";

const OPENING_HOURS = "Monday to Saturday, 9:00 AM – 6:00 PM";

/**
 * Google Business Profile block: map, rating, address and the call/directions
 * actions. Cities without a published address render a reserved placeholder in
 * place of the map and drop the rating, address and directions — filling in
 * `address` and `rating` on the city config lights the full block up.
 */
const CityLocation = ({ city }: { city: CityConfig }) => {
  const { address, rating } = city;
  const maps = address ? googleMapsUrls(address) : null;
  const phone = siteConfig.contact.phone.primary;

  return (
    <section
      aria-labelledby="location-heading"
      className="w-full py-20 bg-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-clinic-primary text-xs font-bold tracking-wider uppercase mb-4">
            Visit Us
          </span>
          <h2
            className="text-4xl md:text-5xl font-onest font-bold text-gray-900 mb-5"
            id="location-heading"
          >
            Total Surgicare {city.name}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {city.locationIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Map, or a reserved slot until the profile exists */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-gray-100 shadow-sm min-h-[320px]">
            {maps ? (
              <iframe
                allowFullScreen
                className="w-full h-full min-h-[320px] border-0"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={maps.embed}
                title={`Total Surgicare ${city.name} location on Google Maps`}
                width="600"
              />
            ) : (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 bg-gray-50/70 px-8 text-center">
                <MapPin aria-hidden="true" className="h-8 w-8 text-gray-300" />
                <p className="text-sm font-semibold text-gray-600">
                  Clinic location coming soon
                </p>
                <p className="max-w-sm text-sm text-gray-500 leading-relaxed">
                  Our {city.name} address and map will appear here shortly. Call
                  us in the meantime and our team will share directions and
                  consultation timings.
                </p>
              </div>
            )}
          </div>

          {/* Business details */}
          <div className="lg:col-span-2 bg-gray-50/70 border border-gray-100 rounded-3xl p-8 flex flex-col gap-6">
            {rating && maps && (
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-onest font-bold text-gray-900">
                    {rating.value}
                  </span>
                  <div
                    aria-label={`Rated ${rating.value} out of 5 on Google`}
                    className="flex items-center gap-0.5"
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        aria-hidden="true"
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <a
                  className="text-sm text-gray-500 hover:text-clinic-primary transition-colors"
                  href={maps.profile}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Based on {rating.reviewCount} Google reviews
                </a>
              </div>
            )}

            <div className="space-y-4 text-sm">
              {address && (
                <div className="flex gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="w-5 h-5 shrink-0 text-clinic-primary"
                  />
                  <address className="not-italic text-gray-600 leading-relaxed">
                    {formatAddress(address)}
                  </address>
                </div>
              )}
              <div className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="w-5 h-5 shrink-0 text-clinic-primary"
                />
                <a
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                  href={`tel:${phone}`}
                >
                  {phone}
                </a>
              </div>
              <div className="flex gap-3">
                <Clock
                  aria-hidden="true"
                  className="w-5 h-5 shrink-0 text-clinic-primary"
                />
                <span className="text-gray-600">{OPENING_HOURS}</span>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              {maps && (
                <a
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-clinic-primary hover:bg-clinic-dark text-white h-11 px-5 text-sm font-medium transition-colors"
                  href={maps.directions}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Navigation aria-hidden="true" className="w-4 h-4" />
                  Directions
                </a>
              )}
              <a
                className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full h-11 px-5 text-sm font-medium transition-colors ${
                  maps
                    ? "border border-clinic-primary/30 bg-white text-clinic-primary hover:bg-clinic-primary/5"
                    : "bg-clinic-primary text-white hover:bg-clinic-dark"
                }`}
                href={`tel:${phone}`}
              >
                <Phone aria-hidden="true" className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityLocation;
