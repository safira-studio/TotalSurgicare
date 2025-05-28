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
import { ChevronDown, Minus } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const handleMobileSectionToggle = (title: string) => {
    setOpenMobileSection(openMobileSection === title ? null : title);
  };

  return (
    <HeroUINavbar
      maxWidth="2xl"
      position="sticky"
      className="lg:px-10"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent
        className="basis-1/5 sm:basis-1/3 lg:basis-1/5"
        justify="start"
      >
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href="/">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={90}
              height={90}
              className="min-w-24"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-2/3 lg:basis-4/5"
        justify="end"
      >
        <ul className="hidden lg:flex justify-end ml-2 gap-3">
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
                    ? `/${item.title.toLowerCase().replace(/\s+/g, "-")}`
                    : "#"
                }
              >
                <span
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary text-sm data-[active=true]:font-medium hover:text-clinic-primary transition-colors duration-200"
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
                  {item.items.map((subItem, subIndex) => (
                    <NextLink
                      key={`${subItem}-${subIndex}`}
                      href={`/conditions/${subItem
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}`}
                      className="block px-4 py-2 text-sm hover:bg-clinic-accent/10 hover:text-clinic-primary transition-colors duration-200"
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
        {/* <NavbarMenuToggle /> */}

        <LucideHamburger
          isOpen={isMenuOpen} // You'll need to track this state
          onToggle={() => setIsMenuOpen(!isMenuOpen)} // Your toggle function
        />
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
                        ? `/${item.title.toLowerCase().replace(/\s+/g, "-")}`
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
                        href={`/conditions/${subItem
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9-]/g, "")}`}
                        className="text-sm"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
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

import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const LucideHamburger = ({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <button
    onClick={onToggle}
    className="relative w-6 h-6 hover:text-clinic-primary"
  >
    <Menu
      className={`absolute inset-0 transition-all duration-300  ${
        isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
      }`}
    />
    <X
      className={`absolute inset-0 transition-all duration-300  ${
        isOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
      }`}
    />
  </button>
);
