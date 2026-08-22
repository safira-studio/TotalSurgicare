import React from "react";
import { Star, ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { googleMapsUrls } from "./index";
import type { CityConfig, CityReview } from "./types";

const Stars = ({ rating }: { rating: number }) => (
  <div
    aria-label={`Rated ${rating} out of 5`}
    className="flex items-center gap-0.5"
    role="img"
  >
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        aria-hidden="true"
        className={
          i < rating
            ? "w-4 h-4 fill-amber-400 text-amber-400"
            : "w-4 h-4 text-gray-200"
        }
      />
    ))}
  </div>
);

const ReviewCard = ({ author, rating, treatment, content }: CityReview) => (
  <Card className="h-full bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
    <CardContent className="p-7 flex flex-col h-full gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-11 w-11 border-2 border-clinic-primary/20">
            <AvatarFallback className="bg-clinic-primary/10 text-clinic-dark font-semibold">
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-gray-900 leading-tight">
              {author}
            </h3>
            {treatment && (
              <p className="text-xs text-clinic-dark font-medium mt-0.5">
                {treatment}
              </p>
            )}
          </div>
        </div>
        <Stars rating={rating} />
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
    </CardContent>
  </Card>
);

const CityTestimonials = ({ city }: { city: CityConfig }) => {
  // The "read more on Google" CTA needs a real profile to point at. Cities
  // without a published address have no Business Profile yet, so the link is
  // omitted rather than sending patients to an empty Maps search.
  const profileUrl = city.address
    ? googleMapsUrls(city.address).profile
    : null;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="w-full py-20 bg-gray-50/50"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-clinic-dark text-xs font-bold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2
            className="text-4xl md:text-5xl font-onest font-bold text-gray-900 mb-5"
            id="testimonials-heading"
          >
            What Our Patients Say
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            {city.testimonialsIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {city.reviews.map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </div>

        {profileUrl && (
          <div className="mt-12 flex justify-center">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 h-11 text-sm font-semibold text-clinic-dark shadow-sm transition-all hover:shadow-md hover:border-clinic-primary/40"
              href={profileUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              View More Reviews on Google
              <ExternalLink aria-hidden="true" className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CityTestimonials;
