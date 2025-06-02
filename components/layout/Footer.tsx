import React from "react";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-clinic-accent/90 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section with Logo and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4 w-2/3 lg:w-full">
            <Image
              alt="Logo"
              className="min-w-24"
              height={100}
              src={"/logo.png"}
              width={200}
            />
            <p className="text-gray-300 text-sm">
              Providing quality healthcare services with advanced technology and
              experienced professionals.
            </p>{" "}
            <div className="flex space-x-3">
              <Link
                href="https://www.facebook.com/TotalSurgicare?mibextid=ZbWKwL"
                aria-label="Facebook"
                target="_blank"
              >
                <Button
                  className="rounded-full hover:bg-clinic-primary hover:text-white"
                  size="icon"
                  variant="ghost"
                >
                  <Facebook size={18} />
                </Button>
              </Link>

              <Link
                href="https://www.instagram.com/total_surgicare?igsh=aXVwNTVlM2NpdWs1"
                aria-label="Instagram"
                target="_blank"
              >
                <Button
                  className="rounded-full hover:bg-clinic-primary hover:text-white"
                  size="icon"
                  variant="ghost"
                >
                  <Instagram size={18} />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center items-center gap-8">
            {/* Quick Links */}
            <div className="space-y-4 w-1/2 self-center">
              <h3 className="text-lg font-onest text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                    href="/aboutus"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                    href="/terms-conditions"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="space-y-4 w-1/2">
              <h3 className="text-lg font-onest text-white">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                    href="/conditions/fissure-treatment"
                  >
                    Fissure Treatment
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                    href="/conditions/hernia-surgery"
                  >
                    Hernia Surgery
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                    href="/conditions/piles-treatment"
                  >
                    Piles Treatment
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                    href="/cardiology"
                  >
                    Cardiology
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                    href="/diagnostic"
                  >
                    Diagnostic
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-onest text-white">Contact Us</h3>
            <div className="space-y-3 text-sm ">
              <div className="sm:flex lg:block gap-2 max-sm:space-y-2 lg:space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="bg-clinic-primary p-2 rounded-full">
                    <Phone size={16} />
                  </div>
                  <span className="text-gray-300">
                    {siteConfig.contact.phone.primary}
                    <br />
                    {siteConfig.contact.phone.secondary}{" "}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-clinic-primary p-2 rounded-full">
                    <Mail size={16} />
                  </div>
                  <span className="text-gray-300">
                    {siteConfig.contact.email.primary}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 pt-2">
                Address: {siteConfig.contact.address.street},{" "}
                {siteConfig.contact.address.city},{" "}
                {siteConfig.contact.address.state} -{" "}
                {siteConfig.contact.address.pincode},{" "}
                <br className="max-lg:hidden" />
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-clinic-primary my-6" />

        {/* Copyright Section */}
        <div className="text-center pt-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Total Surgicare. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
