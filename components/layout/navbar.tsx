"use client";

import { usePathname } from "next/navigation";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";
import { CitySelect } from "./city-select";

export const Navbar = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // City landing pages share the main site's service navigation; the only
  // difference is the Book Appointment CTA they add on the right.
  const isCityPage =
    pathname?.startsWith("/pune") || pathname?.startsWith("/mumbai");
  const navItems = siteConfig.navItems;

  const handleMobileSectionToggle = (title: string) => {
    setOpenMobileSection(openMobileSection === title ? null : title);
  };

  return (
    <HeroUINavbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className="xl:px-10 transition-all duration-300"
    >
      <NavbarContent justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href="/">
            <Image
              alt="Total Surgicare"
              loading="eager"
              className="min-w-16 sm:min-w-24"
              height={43}
              src={"/logo.png"}
              width={90}
            />
          </NextLink>
        </NavbarBrand>

        <NavbarItem className="flex">
          <NextLink href="/prescription">
            <Button
              aria-label="Prescription"
              className="rounded-full bg-clinic-secondary hover:bg-clinic-secondaryDark text-white px-3 sm:px-5 h-9 text-xs sm:text-sm font-medium"
            >
              Prescription
            </Button>
          </NextLink>
        </NavbarItem>

        <NavbarItem className="flex">
          <CitySelect />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden 2xl:flex basis-1/5 sm:basis-2/3 2xl:basis-4/5 ml-2 gap-2"
        justify="end"
      >
          {navItems.map((item, index) => (
            <NavbarItem
              key={`${item.title}-${index}`}
              className="relative group"
            >
              <NextLink
                className="flex items-center cursor-pointer py-2"
                href={
                  item.items.length == 0
                    ? item.title === "Home"
                      ? "/"
                      : item.title === "About Us"
                        ? "/aboutus"
                        : item.title === "Contact Us"
                          ? "/contact"
                          : `/${item.title.toLowerCase().replace(/\s+/g, "-")}`
                    : "#"
                }
                onMouseEnter={() => setOpenDropdown(item.title)}
              >
                <span
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary text-sm data-[active=true]:font-medium hover:text-clinic-dark transition-colors duration-200"
                  )}
                >
                  {item.title}
                </span>
              </NextLink>

              {/* Dropdown Menu */}
              {item.items.length > 0 && (
                <div
                  className={clsx(
                    "absolute top-full left-0 min-w-64 bg-clinic-background rounded-md  z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden",
                    openDropdown === item.title ? "opacity-100 visible" : ""
                  )}
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.items.map((subItem, subIndex) => {
                    // Special routing for non-condition pages
                    const specialPages = ["Elderly Care", "Cardiology", "Post Surgery Care"];
                    const isSpecialPage = specialPages.includes(subItem);
                    const href = isSpecialPage
                      ? `/${subItem.toLowerCase().replace(/\s+/g, "-")}`
                      : `/treatment/${subItem
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}`;

                    return (
                      <NextLink
                        key={`${subItem}-${subIndex}`}
                        className="block px-4 py-2 text-sm hover:bg-clinic-accent/10 hover:text-clinic-dark transition-colors duration-200"
                        href={href}
                      >
                        {subItem}
                      </NextLink>
                    );
                  })}
                </div>
              )}
            </NavbarItem>
          ))}

        {isCityPage && (
          <NavbarItem className="hidden 2xl:flex">
            <NextLink href="/contact">
              <Button
                aria-label="Book Appointment"
                className="rounded-full bg-clinic-primary hover:bg-clinic-dark text-white px-5 h-9 text-sm font-medium whitespace-nowrap"
              >
                Book Appointment
              </Button>
            </NextLink>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="2xl:hidden basis-1 pl-2 sm:pl-4" justify="end">
        <NavbarItem>
          <LucideHamburger
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu id="main-navigation-menu">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {isCityPage && (
            <NavbarMenuItem className="mb-2">
              <NextLink href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button
                  aria-label="Book Appointment"
                  className="w-full rounded-full bg-clinic-primary hover:bg-clinic-dark text-white h-10 text-sm font-medium"
                >
                  Book Appointment
                </Button>
              </NextLink>
            </NavbarMenuItem>
          )}
          {navItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item.title}-${index}`}
              className="mb-2 block"
            >
              <Button
                aria-expanded={openMobileSection === item.title}
                aria-label={
                  item.items.length > 0
                    ? `${item.title} submenu`
                    : item.title
                }
                className="flex min-h-11 items-center justify-between hover:bg-transparent"
                variant={"ghost"}
                onClick={() => handleMobileSectionToggle(item.title)}
              >
                <NavbarMenuItem>
                  <NextLink
                    href={
                      item.items.length == 0
                        ? item.title === "Home"
                          ? "/"
                          : item.title === "About Us"
                            ? "/aboutus"
                            : item.title === "Contact Us"
                              ? "/contact"
                              : `/${item.title.toLowerCase().replace(/\s+/g, "-")}`
                        : "#"
                    }
                    onClick={() => {
                      item.items.length == 0 && setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    {item.title}
                  </NextLink>
                </NavbarMenuItem>
                {item.items.length > 0 && (
                  <ChevronDown
                    className={clsx(
                      "h-5 w-5 transition-transform",
                      openMobileSection === item.title ? "rotate-180" : ""
                    )}
                  />
                )}
              </Button>

              {/* Mobile Dropdown */}
              {item.items.length > 0 && openMobileSection === item.title && (
                <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-gray-200 pl-4">
                  {item.items.map((subItem, subIndex) => {
                    // Special routing for non-condition pages
                    const specialPages = ["Elderly Care", "Cardiology", "Post Surgery Care"];
                    const isSpecialPage = specialPages.includes(subItem);
                    const href = isSpecialPage
                      ? `/${subItem.toLowerCase().replace(/\s+/g, "-")}`
                      : `/treatment/${subItem
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}`;

                    return (
                      <NavbarMenuItem key={`${subItem}-${subIndex}`}>
                        <NextLink
                          className="text-sm"
                          href={href}
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                          {subItem}
                        </NextLink>
                      </NavbarMenuItem>
                    );
                  })}
                </div>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

const LucideHamburger = ({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <button
    aria-controls="main-navigation-menu"
    aria-expanded={isOpen}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    className="relative -m-2.5 grid h-11 w-11 place-items-center p-2.5 hover:text-clinic-dark"
    onClick={onToggle}
  >
    <Menu
      className={`absolute h-6 w-6 transition-all duration-300 ${isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
        }`}
    />
    <X
      className={`absolute h-6 w-6 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
        }`}
    />
  </button>
);
