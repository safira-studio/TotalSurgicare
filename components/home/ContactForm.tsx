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
import { siteConfig } from "@/config/site";

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
                content={
                  <a
                    className="hover:text-clinic-primary transition-colors"
                    href="tel:+1234567890"
                  >
                    {siteConfig.contact.phone.primary}
                  </a>
                }
                icon={<Phone size={18} />}
                title="Phone Number"
              />

              <ContactInfo
                content={
                  <a
                    className="hover:text-clinic-primary transition-colors"
                    href="mailto:info@totalsurgicare.com"
                  >
                    {siteConfig.contact.email.primary}
                  </a>
                }
                icon={<Mail size={18} />}
                title="Email Address"
              />

              <ContactInfo
                content={
                  <>
                    Address: {siteConfig.contact.address.street},{" "}
                    {siteConfig.contact.address.city},{" "}
                    {siteConfig.contact.address.state} -{" "}
                    {siteConfig.contact.address.pincode},{" "}
                  </>
                }
                icon={<MapPin size={18} />}
                title="Office Location"
              />

              <ContactInfo
                content={
                  <div className="flex mt-1">
                    <Facebook className="mr-2" size={18} />
                    <Twitter className="mr-2" size={18} />
                    <Instagram className="mr-2" size={18} />
                  </div>
                }
                icon={<MessageSquare size={18} />}
                title="Social Media"
              />
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-8 border-2 border-clinic-primary">
              <h3 className="text-xl font-onest mb-6">Send us a Message</h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-700"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <Input required id="name" placeholder="Your name" />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-700"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <Input
                      required
                      id="email"
                      placeholder="Your email"
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <Input
                    required
                    id="subject"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <Textarea
                    required
                    id="message"
                    placeholder="Please share the details of your request..."
                    rows={5}
                  />
                </div>

                <div className="pt-2">
                  <Button
                    className="bg-clinic-primary hover:bg-clinic-dark w-full md:w-auto"
                    type="submit"
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
