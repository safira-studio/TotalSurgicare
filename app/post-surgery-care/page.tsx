import EnhancingPatientExperience from "@/components/PostSurgeryCare/EnhancingPatientExperience";
import KeyComponentsCare from "@/components/PostSurgeryCare/KeyComponentsCare";
import PostOpCareOverview from "@/components/PostSurgeryCare/PostOpCareOverview";
import RemotePatientMonitoring from "@/components/PostSurgeryCare/RemotePatientMonitoring";
import TwentyFourSevenAssistance from "@/components/PostSurgeryCare/TwentyFourSevenAssistance";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Post Surgery Care",
  description:
    "Our Postoperative Care Services ensure a smooth and safe recovery. We provide expert wound care to prevent infection, effective pain management for comfort, and careful medication monitoring. Our team also offers mobility assistance and ensures timely follow-up appointments to track healing and adjust care as needed.",
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

const PostSurgeryCare = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-clinic-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-onest mb-6">
            Post Surgery Care
          </h1>
          <p className="md:text-xl max-w-3xl mx-auto">
            Comprehensive post-operative care with 24/7 monitoring, specialized
            nursing support, and advanced remote patient monitoring to ensure
            your complete recovery.
          </p>
        </div>
      </section>

      <PostOpCareOverview />
      <KeyComponentsCare />
      <TwentyFourSevenAssistance />
      <RemotePatientMonitoring />
      <EnhancingPatientExperience />
    </div>
  );
};

export default PostSurgeryCare;
