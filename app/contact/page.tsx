"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submission
  };

  return (
    <div className="min-h-screen bg-clinic-background overflow-x-hidden">
      {/* Hero Section */}
      <div className="bg-clinic-primary text-white py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with our medical experts. We're here to help with your
            healthcare needs.
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
                      Emergency: 112
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
                  If you're experiencing a medical emergency, please call 112
                  immediately or go to your nearest emergency room.
                </p>
                <Button
                  variant="destructive"
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => window.open("tel:112")}
                >
                  Call 112
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
