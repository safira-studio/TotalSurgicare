"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null
  );

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const handleMobileSectionToggle = (title: string) => {
    setOpenMobileSection(openMobileSection === title ? null : title);
  };

  return (
    <HeroUINavbar maxWidth="2xl" position="sticky" className="lg:px-10">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ul className="hidden  lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem
              key={`${item.title}-${index}`}
              className="relative group"
            >
              <NextLink
                className="flex items-center cursor-pointer py-2"
                onMouseEnter={() => setOpenDropdown(item.title)}
                href={
                  item.items.length == 0
                    ? `/conditions/${item.title.toLowerCase().replace(/\s+/g, "-")}`
                    : "#"
                }
              >
                <span
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium hover:text-clinic-primary transition-colors duration-200"
                  )}
                >
                  {item.title}
                </span>
              </NextLink>

              {/* Dropdown Menu */}
              {item.items.length > 0 && (
                <div
                  className={clsx(
                    "absolute top-full left-0 min-w-64 bg-white rounded-md  z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden",
                    openDropdown === item.title ? "opacity-100 visible" : ""
                  )}
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.items.map((subItem, subIndex) => (
                    <NextLink
                      key={`${subItem}-${subIndex}`}
                      href={`/conditions/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-clinic-primary transition-colors duration-200"
                    >
                      {subItem}
                    </NextLink>
                  ))}
                </div>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <div key={`${item.title}-${index}`} className="mb-2">
              <div
                className="flex items-center justify-between"
                role="button"
                onClick={() => handleMobileSectionToggle(item.title)}
              >
                <NavbarMenuItem>
                  <NextLink
                    href={
                      item.items.length == 0
                        ? `/conditions/${item.title.toLowerCase().replace(/\s+/g, "-")}`
                        : "#"
                    }
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
              </div>

              {/* Mobile Dropdown */}
              {item.items.length > 0 && openMobileSection === item.title && (
                <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-gray-200 pl-4">
                  {item.items.map((subItem, subIndex) => (
                    <NavbarMenuItem key={`${subItem}-${subIndex}`}>
                      <NextLink
                        href={`/conditions/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm"
                      >
                        {subItem}
                      </NextLink>
                    </NavbarMenuItem>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
