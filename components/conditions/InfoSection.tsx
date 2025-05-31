"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Pill,
  Clock,
  Image as ImageIcon,
  ArrowUp,
  Thermometer,
  Syringe,
} from "lucide-react";

const IconMap = {
  pill: Pill,
  clock: Clock,
  image: ImageIcon,
  "arrow-up": ArrowUp,
  thermometer: Thermometer,
  syringe: Syringe,
  "alert-circle": Pill, // Using Pill as a fallback for alert-circle
};

const InfoSection = ({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) => {
  const imageExtensions = ["webp", "avif", "png", "jpg", "jpeg", "gif"];
  const [extIndex, setExtIndex] = useState(0);
  const [errorFallback, setErrorFallback] = useState(false);

  const handleError = () => {
    if (extIndex < imageExtensions.length - 1) {
      setExtIndex(extIndex + 1);
    } else {
      // All extensions failed, show placeholder
      setErrorFallback(true);
    }
  };

  const imgSrc = errorFallback
    ? "/placeholder.svg"
    : `/conditions/${slug}-1.${imageExtensions[extIndex]}`;

  return (
    <div className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl font-onest text-gray-800 mb-10">
                {title}
              </h2>

              {/* Text Content */}
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            {/* Image Grid */}

            <Image
              width={100}
              height={100}
              src={imgSrc}
              onError={handleError}
              alt="Grade 1 Piles"
              className="rounded-xl shadow-md object-cover w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
