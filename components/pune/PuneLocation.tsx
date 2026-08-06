import React from "react";
import { Star, MapPin, Navigation, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  PUNE_ADDRESS_LINE,
  PUNE_RATING,
  GOOGLE_MAP_EMBED_URL,
  GOOGLE_DIRECTIONS_URL,
  GOOGLE_PROFILE_URL,
} from "./puneLocationData";

const PuneLocation = () => {
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
            id="location-heading"
            className="text-4xl md:text-5xl font-onest font-bold text-gray-900 mb-5"
          >
            Total Surgicare Pune
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Find us in Wanowrie, Pune — easy to reach, with consultations and
            surgical care available six days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-gray-100 shadow-sm min-h-[320px]">
            <iframe
              allowFullScreen
              className="w-full h-full min-h-[320px] border-0"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={GOOGLE_MAP_EMBED_URL}
              title="Total Surgicare Pune location on Google Maps"
              width="600"
            />
          </div>

          {/* Business details */}
          <div className="lg:col-span-2 bg-gray-50/70 border border-gray-100 rounded-3xl p-8 flex flex-col gap-6">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-onest font-bold text-gray-900">
                  {PUNE_RATING.value}
                </span>
                <div
                  aria-label={`Rated ${PUNE_RATING.value} out of 5 on Google`}
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
                href={GOOGLE_PROFILE_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Based on {PUNE_RATING.reviewCount} Google reviews
              </a>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-clinic-primary" />
                <address className="not-italic text-gray-600 leading-relaxed">
                  {PUNE_ADDRESS_LINE}
                </address>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0 text-clinic-primary" />
                <a
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                  href={`tel:${siteConfig.contact.phone.primary}`}
                >
                  {siteConfig.contact.phone.primary}
                </a>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 shrink-0 text-clinic-primary" />
                <span className="text-gray-600">
                  Monday to Saturday, 9:00 AM – 6:00 PM
                </span>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <a
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-clinic-primary hover:bg-clinic-dark text-white h-11 px-5 text-sm font-medium transition-colors"
                href={GOOGLE_DIRECTIONS_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Navigation className="w-4 h-4" />
                Directions
              </a>
              <a
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-clinic-primary/30 bg-white text-clinic-primary h-11 px-5 text-sm font-medium transition-colors hover:bg-clinic-primary/5"
                href={`tel:${siteConfig.contact.phone.primary}`}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PuneLocation;
