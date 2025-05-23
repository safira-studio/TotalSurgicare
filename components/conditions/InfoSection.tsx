import React from "react";
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
  images,
}: {
  title: string;
  description: string;
  images?: { src: string; alt: string }[];
}) => {
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
              <p className="text-gray-600 leading-relaxed">
                At higher stages of piles, such as Grade 3 or 4, an enlargement,
                pain, and bleeding is common, and a surgical solution is often
                needed to bring lasting relief.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Although piles are not a serious health risk, they can be
                irritating and uncomfortable. If you&apos;re ready to move
                forward with our team, we can guide you to the best treatment
                options for lasting relief.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Image
                width={100}
                height={100}
                src="/placeholder.svg"
                alt="Grade 1 Piles"
                className="rounded-xl shadow-md object-cover w-full h-42"
              />
              <Image
                width={100}
                height={100}
                src="/placeholder.svg"
                alt="Grade 2 Piles"
                className="rounded-xl shadow-md object-cover w-full h-42"
              />
              <Image
                width={100}
                height={100}
                src="/placeholder.svg"
                alt="Grade 3 Piles"
                className="rounded-xl shadow-md object-cover w-full h-42"
              />
              <Image
                width={100}
                height={100}
                src="/placeholder.svg"
                alt="Grade 4 Piles"
                className="rounded-xl shadow-md object-cover w-full h-42"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
