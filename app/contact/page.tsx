"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";

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
    // console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-clinic-background">
      {/* Hero Section */}
      <div className="bg-clinic-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with our medical experts. We&apos;re here to help with
            your healthcare needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
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
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-clinic-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      123 Medical Center Drive
                      <br />
                      Healthcare City, HC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-clinic-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main: (555) 123-4567
                      <br />
                      Emergency: (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-clinic-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@medicalcenter.com
                      <br />
                      appointments@medicalcenter.com
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
                  If you&apos;re experiencing a medical emergency, please call
                  112 immediately or go to your nearest emergency room.
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
