"use client";
import React from "react";
import {
  MessageSquare,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TwitterIcon } from "../icons";

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="h-10 w-10 rounded-full bg-clinic-primary flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <div className="text-gray-600 text-sm">{content}</div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="w-full py-12 mb-6 ">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-10 ">
          <p className="text-sm font-medium text-clinic-primary mb-2">
            CONTACT US
          </p>
          <h2 className="text-3xl font-onest">Get In Touch</h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            We&apos;d love to hear from you. Please fill out the form below or
            reach out using the contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="lg:col-span-1 ">
            <Card className="p-8 h-full border-2 border-clinic-primary">
              <h3 className="text-xl font-onest mb-6">Contact Information</h3>

              <ContactInfo
                icon={<Phone size={18} />}
                title="Phone Number"
                content={
                  <a
                    href="tel:+1234567890"
                    className="hover:text-clinic-primary transition-colors"
                  >
                    (123) 456-7890
                  </a>
                }
              />

              <ContactInfo
                icon={<Mail size={18} />}
                title="Email Address"
                content={
                  <a
                    href="mailto:info@salvamedic.com"
                    className="hover:text-clinic-primary transition-colors"
                  >
                    info@salvamedic.com
                  </a>
                }
              />

              <ContactInfo
                icon={<MapPin size={18} />}
                title="Office Location"
                content={
                  <>
                    <p>Majokhpyi Avenue, S.A.L.O.W</p>
                    <p>Open Mon-Fri, 9AM-5PM</p>
                  </>
                }
              />

              <ContactInfo
                icon={<MessageSquare size={18} />}
                title="Social Media"
                content={
                  <div className="flex mt-1">
                    <Facebook size={18} className="mr-2" />
                    <Twitter size={18} className="mr-2" />
                    <Instagram size={18} className="mr-2" />
                  </div>
                }
              />
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-8 border-2 border-clinic-primary">
              <h3 className="text-xl font-onest mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please share the details of your request..."
                    rows={5}
                    required
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="bg-clinic-primary hover:bg-clinic-dark w-full md:w-auto"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
