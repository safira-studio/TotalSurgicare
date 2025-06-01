import React from "react";
import Image from "next/image";

const InfoSection = ({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
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
            </div>

            {/* Image Grid */}

            <Image
              alt="Grade 1 Piles"
              className="rounded-xl shadow-md object-cover w-full "
              height={100}
              src={`/conditions/${slug}-1.webp`}
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
