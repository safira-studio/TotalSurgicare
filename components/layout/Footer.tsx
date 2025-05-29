import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-clinic-dark text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section with Logo and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4 w-2/3 lg:w-full">
            <h2 className="text-xl font-onest text-white">Total Surgicare</h2>
            <p className="text-gray-300 text-sm">
              Providing quality healthcare services with advanced technology and
              experienced professionals.
            </p>
            <div className="flex space-x-3">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-clinic-primary hover:text-white"
              >
                <Facebook size={18} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-clinic-primary hover:text-white"
              >
                <Instagram size={18} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-clinic-primary hover:text-white"
              >
                <Twitter size={18} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-clinic-primary hover:text-white"
              >
                <Linkedin size={18} />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center items-center gap-8">
            {/* Quick Links */}
            <div className="space-y-4 w-1/2 self-center">
              <h3 className="text-lg font-onest text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Our Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Blog
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
                    href="/"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Fissure Treatment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Hernia Surgery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Piles Treatment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Gallstone Surgery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    PCOS-Pcod Care
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
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-clinic-primary p-2 rounded-full">
                    <Mail size={16} />
                  </div>
                  <span className="text-gray-300">
                    contact@Total Surgicare.com
                  </span>
                </div>
              </div>
              <p className="text-gray-300 pt-2">
                123 Healthcare Street <br className="max-lg:hidden" />
                {" Medical District, MD 12345"}
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
