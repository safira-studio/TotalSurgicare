import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Award, Target, Shield, Clock } from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Total Surgicare, a leading surgical care provider in Pune specializing in minimally invasive procedures for various conditions.",
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

const About = () => {
  return (
    <div className="min-h-screen bg-clinic-primary/80">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-onest text-white mb-6 max-sm:text-4xl">
            About TotalSurgicare
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto  max-sm:text-md">
            Dedicated to providing exceptional healthcare services with
            compassion, expertise, and innovation. We are committed to improving
            lives through advanced medical care and personalized treatment.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className=" py-12 px-14 bg-white max-sm:px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver comprehensive, patient-centered healthcare services
                that combine cutting-edge medical technology with compassionate
                care. We strive to make quality healthcare accessible and
                affordable for all our patients, ensuring the highest standards
                of medical excellence in every aspect of our practice.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading healthcare provider recognized for excellence
                in medical care, innovation in treatment approaches, and
                unwavering commitment to patient satisfaction. We envision a
                future where advanced healthcare is within reach of every
                individual in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-10 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-clinic-primary mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-clinic-primary mx-auto mb-4" />
                <CardTitle className="text-clinic-primary">
                  Compassionate Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We treat every patient with empathy, respect, and dignity,
                  understanding that behind every medical case is a human being
                  deserving of our best care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-clinic-primary mx-auto mb-4" />
                <CardTitle className="text-clinic-primary">
                  Medical Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We maintain the highest standards of medical practice,
                  continuously updating our knowledge and skills to provide the
                  most effective treatments available.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-clinic-primary mx-auto mb-4" />
                <CardTitle className="text-clinic-primary">
                  Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We believe quality healthcare should be accessible to all,
                  offering flexible scheduling, transparent pricing, and
                  comprehensive support throughout your care journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-clinic-primary mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Founded with a vision to transform healthcare delivery,
                TotalSurgicare began as a small practice with a big dream: to
                provide world-class medical care that puts patients first. Over
                the years, we have grown from a single clinic to a comprehensive
                healthcare facility, but our core values remain unchanged.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our journey has been marked by continuous innovation, from
                adopting the latest medical technologies to developing
                patient-centered care protocols that ensure every individual
                receives personalized attention. We have built a reputation for
                excellence in cardiac care, diagnostic services, and
                post-surgical support.
              </p>
              <p className="text-lg leading-relaxed">
                Today, TotalSurgicare stands as a testament to what healthcare
                can be when expertise meets compassion. We continue to expand
                our services and capabilities, always guided by our commitment
                to improving the health and well-being of the communities we
                serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-clinic-primary mb-12">
            Why Choose TotalSurgicare?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            <div className="text-center">
              <div className="text-white bg-clinic-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-clinic-primary mb-2">
                Years of Experience
              </h3>
              <p className="text-gray-600">
                Serving the community with dedication and expertise
              </p>
            </div>

            <div className="text-center">
              <div className="text-white bg-clinic-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-clinic-primary mb-2">
                Medical Specialists
              </h3>
              <p className="text-gray-600">
                Expert doctors across multiple specializations
              </p>
            </div>

            <div className="text-center">
              <div className="text-white bg-clinic-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-clinic-primary mb-2">
                Emergency Care
              </h3>
              <p className="text-gray-600">
                Round-the-clock emergency medical services
              </p>
            </div>

            <div className="text-center">
              <div className="text-white bg-clinic-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">98%</span>
              </div>
              <h3 className="text-xl font-semibold text-clinic-primary mb-2">
                Patient Satisfaction
              </h3>
              <p className="text-gray-600">
                Consistently high ratings from our patients
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
