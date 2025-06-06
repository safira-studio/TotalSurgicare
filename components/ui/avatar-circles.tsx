"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./button";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            key={index}
            alt={`Avatar ${index + 1}`}
            className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800"
            height={30}
            src={url.imageUrl}
            width={30}
          />
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <Button
          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          variant="ghost"
        >
          +{numPeople}
        </Button>
      )}
    </div>
  );
};
