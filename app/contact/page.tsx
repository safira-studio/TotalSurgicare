import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    " At Total Surgicare, we connect patients with quality healthcare, offering expert consultations and advanced treatments for a smooth surgical journey.",
  openGraph: {
    title: "About Us - Total Surgicare",
    description:
      "Learn about Total Surgicare, a leading surgical care provider in Pune specializing in minimally invasive procedures for various conditions.",
    url: "https://totalsurgicare.com/aboutus",
    images: [
      {
        url: "https://totalsurgicare.com/logo.webp",
        width: 800,
        height: 600,
        alt: "Total Surgicare About Us",
      },
    ],
  },
};
export default function Contact() {
  return (
    <div className="min-h-screen bg-clinic-background overflow-x-hidden">
      {/* Hero Section */}
      <div className="bg-clinic-primary text-white py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with our medical experts. We&aposre here to help with
            your healthcare needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AppointmentForm formClass="space-y-4" />

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Get in Touch
                </CardTitle>
                <p className="text-gray-600">
                  Reach out to us through any of these channels
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-1">
                  <div className="bg-clinic-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      {siteConfig.contact.address.street},{" "}
                      {siteConfig.contact.address.city},{" "}
                      {siteConfig.contact.address.state} -{" "}
                      {siteConfig.contact.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="bg-clinic-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      {siteConfig.contact.phone.primary}
                      <br />
                      Emergency: 9665551711
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-1">
                  <div className="bg-clinic-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      {siteConfig.contact.email.primary}
                      <br />
                      {siteConfig.contact.email.support}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="shadow-lg bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-red-800 mb-2">
                  Medical Emergency?
                </h3>
                <p className="text-red-700 mb-4">
                  If you&aposre experiencing a medical emergency, please call{" "}
                  {siteConfig.contact.phone.primary} immediately or go to your
                  nearest emergency room.
                </p>
                <Link
                  href={`tel:${siteConfig.contact.phone.primary}`}
                  className="text-2xl "
                >
                  {siteConfig.contact.phone.primary}
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
