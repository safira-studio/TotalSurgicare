"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface SpecialtyItemProps {
  icon: string;
  name: string;
}

const SpecialtyItem = ({ icon, name }: SpecialtyItemProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 max-w-sm overflow-hidden">
      <div className="p-4 sm:p-6">
        <div className="flex items-start h-14 relative">
          <h3 className="text-base sm:text-lg font-thin text-slate-800 tracking-tight whitespace-normal pr-16 sm:pr-20 max-w-[calc(100%-4rem)] sm:max-w-[calc(100%-5rem)]">
            {name}
          </h3>
          <Image
            width={100}
            height={100}
            src={icon}
            alt={name}
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-md border border-slate-200 absolute top-0 right-0"
          />
        </div>
      </div>
      <div className="px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 flex justify-end">
        <button className="text-xs sm:text-sm font-medium text-clinic-primary hover:text-clinic-dark transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

const MedicalSpecialties = () => {
  const specialties = [
    { name: "Fissure", icon: "/images/specialties/Fissure.png" },
    { name: "Fistula", icon: "/images/specialties/Fistula.png" },
    { name: "Hernia", icon: "/images/specialties/Hernia.png" },
    { name: "Piles", icon: "/images/specialties/Piles.png" },
    { name: "Galstone", icon: "/images/specialties/Galstone.png" },
    { name: "Appendicitis", icon: "/images/specialties/Appendicitis.png" },
    { name: "PCOS-Pcod", icon: "/images/specialties/PcosPcod.png" },
    { name: "AV Fistula", icon: "/images/specialties/AVFistula.png" },
    { name: "Varicose Veins", icon: "/images/specialties/VaricoseVeins.png" },
    { name: "Vaginoplasty", icon: "/images/specialties/Vaginoplasty.png" },
    { name: "Hymenoplasty", icon: "/images/specialties/Hymenoplasty.png" },
    { name: "Labiaplasty", icon: "/images/specialties/Labiaplasty.png" },
    {
      name: "Vaginal wart removal",
      icon: "/images/specialties/VaginalWartRemoval.png",
    },
    {
      name: "Pilonidal sinus",
      icon: "/images/specialties/PilonidalSinus.png",
    },
    {
      name: "Enlarged Prostate",
      icon: "/images/specialties/EnlargedProstate.png",
    },
    {
      name: "Inguinal Hernia",
      icon: "/images/specialties/InguinalHernia.png",
    },
    {
      name: "Umbilical Hernia",
      icon: "/images/specialties/UmbilicalHernia.png",
    },
  ];

  // Function to get initial items based on screen size
  const getInitialItems = () => {
    if (typeof window === "undefined") return 9; // Default for SSR

    const width = window.innerWidth;
    if (width < 640) return 6; // mobile: < sm (640px)
    if (width < 1024) return 9; // tablet: sm to lg (640px - 1024px)
    return 12; // large: >= lg (1024px+)
  };

  const [initialItems, setInitialItems] = useState(getInitialItems);
  const [visibleItems, setVisibleItems] = useState(initialItems);
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = React.useRef(null);

  // Update initial items on window resize
  useEffect(() => {
    const handleResize = () => {
      const newInitialItems = getInitialItems();
      setInitialItems(newInitialItems);

      // If currently showing initial amount, update visible items too
      if (visibleItems <= initialItems) {
        setVisibleItems(newInitialItems);
      }
    };

    window.addEventListener("resize", handleResize);

    // Set initial values on client-side mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [visibleItems, initialItems]);

  const handleShowMore = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Calculate how many items to add in each batch
    const remainingItems = specialties.length - visibleItems;
    const batchSize = Math.min(6, remainingItems);
    const batches = Math.ceil(remainingItems / batchSize);
    let currentBatch = 0;

    const animateMore = () => {
      if (currentBatch < batches) {
        const itemsToAdd =
          currentBatch === batches - 1
            ? remainingItems - currentBatch * batchSize
            : batchSize;

        setVisibleItems((prev) => prev + itemsToAdd);
        currentBatch++;

        if (currentBatch < batches) {
          setTimeout(animateMore, 150);
        } else {
          setTimeout(() => setIsAnimating(false), 100);
        }
      }
    };

    animateMore();
  };

  const handleShowLess = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Calculate how many items to remove in each batch
    const itemsToRemove = visibleItems - initialItems;
    const batchSize = Math.min(6, itemsToRemove);
    const batches = Math.ceil(itemsToRemove / batchSize);
    let currentBatch = 0;

    const animateLess = () => {
      if (currentBatch < batches) {
        const itemsToRemoveNow =
          currentBatch === batches - 1
            ? itemsToRemove - currentBatch * batchSize
            : batchSize;

        setVisibleItems((prev) => prev - itemsToRemoveNow);
        currentBatch++;

        if (currentBatch < batches) {
          setTimeout(animateLess, 150);
        } else {
          // Scroll to keep buttons in view after animation completes
          setTimeout(() => {
            setIsAnimating(false);
            if (buttonRef.current) {
              (buttonRef.current as HTMLDivElement).scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }, 200);
        }
      }
    };

    animateLess();
  };

  return (
    <div className="w-full py-12 mb-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-clinic-primary mb-2">
            OUR SPECIALTIES
          </p>
          <h2 className="text-3xl font-onest">Medical Conditions We Treat</h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            Expert care for a wide range of medical conditions by our
            specialized doctors.
          </p>
        </div>

        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 transition-all duration-300 ease-in-out">
          {specialties.slice(0, visibleItems).map((specialty, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4 duration-300"
              style={{
                animationDelay: `${(index % 6) * 50}ms`,
                animationFillMode: "both",
              }}
            >
              <SpecialtyItem icon={specialty.icon} name={specialty.name} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8" ref={buttonRef}>
          {visibleItems < specialties.length && (
            <Button
              variant="ghost"
              className="text-sm font-medium text-clinic-primary hover:text-clinic-dark transition-colors disabled:opacity-50 hover:bg-transparent"
              onClick={handleShowMore}
              disabled={isAnimating}
            >
              {isAnimating ? "Loading..." : "Show More"}
            </Button>
          )}
          {visibleItems > initialItems && (
            <Button
              variant="ghost"
              className="text-sm font-medium text-clinic-primary hover:text-clinic-dark transition-colors ml-4 disabled:opacity-50 hover:bg-transparent"
              onClick={handleShowLess}
              disabled={isAnimating}
            >
              {isAnimating ? "Loading..." : "Show Less"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalSpecialties;
