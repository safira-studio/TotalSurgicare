import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { metadataMap } from "@/components/data/metadataMap";
import { cities, cityTreatmentPath, type CityKey } from "@/components/data/cities";

const PUNE: CityKey = "pune";

/** First keyword phrase doubles as the anchor text — already written for search. */
const labelFor = (slug: string) =>
  metadataMap[slug]?.keywords.split(",")[0].trim() ?? slug;

const otherCities = (Object.keys(cities) as CityKey[]).filter(
  (city) => city !== PUNE
);

const sitePages = [
  { href: "/aboutus", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/contact", label: "Book an Appointment" },
  { href: "#health-articles", label: "Health Articles" },
  { href: "/diagnostic", label: "Diagnostic Services" },
  { href: "/cardiology", label: "Cardiology" },
  { href: "/orthopaedic", label: "Orthopaedic Care" },
  { href: "/post-surgery-care", label: "Post Surgery Care" },
  { href: "/elderly-care", label: "Elderly Care" },
];

const LinkList = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
      {heading}
    </h3>
    <ul className="space-y-2.5">{children}</ul>
  </div>
);

const listItemClass =
  "text-sm text-gray-500 hover:text-clinic-primary transition-colors";

const PuneInternalLinks = () => {
  const allTreatmentSlugs = Object.keys(metadataMap);

  return (
    <section
      aria-labelledby="explore-heading"
      className="w-full py-16 bg-gray-50/50 border-t border-gray-100"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2
          id="explore-heading"
          className="text-2xl md:text-3xl font-onest font-bold text-gray-900 mb-10"
        >
          Explore Total Surgicare
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <LinkList heading="Treatments in Pune">
            {cities[PUNE].treatments.map((slug) => (
              <li key={slug}>
                <Link
                  className={listItemClass}
                  href={cityTreatmentPath(slug, PUNE)}
                >
                  {labelFor(slug)}
                </Link>
              </li>
            ))}
          </LinkList>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              All Treatments
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {allTreatmentSlugs.map((slug) => (
                <li key={slug}>
                  <Link className={listItemClass} href={`/treatment/${slug}`}>
                    {labelFor(slug)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <LinkList heading="Quick Links">
              {sitePages.map((page) => (
                <li key={page.label}>
                  <Link className={listItemClass} href={page.href}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </LinkList>

            <LinkList heading="Other Locations">
              {otherCities.map((city) => (
                <li key={city}>
                  <Link
                    className={`flex items-center gap-1.5 ${listItemClass}`}
                    href={`/${city}`}
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    Total Surgicare {cities[city].name}
                  </Link>
                </li>
              ))}
            </LinkList>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PuneInternalLinks;
