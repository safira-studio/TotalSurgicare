"use client";

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { MapPin, ChevronDown } from "lucide-react";
import clsx from "clsx";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cities, type CityKey } from "../data/cities";

// Driven off the city registry so a new city in cities.ts shows up here with no
// edit. cities.ts is import-light by design, so this stays cheap on the client.
const cityKeys = Object.keys(cities) as CityKey[];

/** City the user is currently browsing, from /pune, /mumbai/treatment/..., etc. */
const activeCityFrom = (pathname: string | null): CityKey | null =>
  cityKeys.find((city) => pathname?.startsWith(`/${city}`)) ?? null;

export const CitySelect = () => {
  const activeCity = activeCityFrom(usePathname());

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Select city"
        className="flex items-center gap-1.5 h-9 px-3 sm:px-4 rounded-full bg-clinic-accent text-white text-xs sm:text-sm font-medium transition-colors hover:bg-clinic-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-secondary focus-visible:ring-offset-1"
      >
        <MapPin className="h-4 w-4 shrink-0 text-clinic-secondary" />
        {/* Label drops below ~380px so the navbar's left group never overflows */}
        <span className="hidden min-[380px]:inline whitespace-nowrap">
          {activeCity ? cities[activeCity].name : "Select City"}
        </span>
        {/* Hidden alongside the label so the icon-only pill stays narrow at 320px */}
        <ChevronDown className="hidden min-[380px]:block h-3.5 w-3.5 shrink-0" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="min-w-40">
        {cityKeys.map((city) => (
          <DropdownMenuItem key={city} asChild>
            <NextLink
              className={clsx(
                "flex items-center gap-2 cursor-pointer",
                city === activeCity && "text-clinic-primary font-medium"
              )}
              href={`/${city}`}
            >
              <MapPin className="h-4 w-4 shrink-0" />
              {cities[city].name}
            </NextLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
