import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface MedicalCondition {
  id: string; // Unique identifier (e.g., UUID or auto-incremented ID)
  slug: string; // URL-friendly identifier (e.g., "piles", "inguinal-hernia-surgery")
  name: string;
  overview: {
    title: string; // Page title (e.g., "Piles Treatment", "Inguinal Hernia Surgery")
    brief: string; // Brief description of the condition
    alternateNames?: {
      // Optional translations or alternate names
      language: string; // e.g., "Hindi", "Tamil"
      name: string; // e.g., "पाइलोनिडल साइनस" for Pilonidal Sinus in Hindi
    }[];
  };
  aboutCondition: {
    title: string; // e.g., "What are Piles?"
    description: string; // Detailed description of the condition
    images?: {
      src: string; // URL of the image
      alt: string; // Alternate text for the image
    }[];
  };
  foodTriggers?: { name: string; description: string; bgColor: string }[]; // List of food triggers (e.g., ["Spicy food", "Caffeine"])
  causes?: {
    title: string; // e.g., "Chronic Constipation"
    description: string;
    icon: string; // Icon name (e.g., "pill", "clock", "image")
  }[]; // List of causes (e.g., ["Constipation", "Prolonged sitting"])
  indications?: { title: string; description: string; icon: string }[];
  riskFactors?: { title: string; description: string; icon: string }[]; // List of risk factors (e.g., ["Sedentary lifestyle", "Obesity"])
  complications?: { title: string; description: string; icon: string }[]; // List of complications if untreated
  symptoms?: { title: string; description: string; icon: string }[]; // List of symptoms (e.g., ["Pain", "Bleeding"])
  diagnosis: {
    description: string; // e.g., "The proper diagnosis requires a physical examination of the anal area, including the use of a proctoscope."
    methods: string[];
  };

  treatments: {
    nonSurgical?: {
      name: string; // e.g., "Dietary Changes", "Sitz Baths"
      description: string;
    }[];
    surgical: {
      name: string; // e.g., "Laser Surgery", "Laparoscopic Surgery"
      description: string;
      benefits: string[]; // e.g., ["Minimally invasive", "Quick recovery"]
      recoveryTime?: string; // e.g., "1-2 weeks"
      anesthesia?: string; // e.g., "General", "Local"
    }[];
  };
  types?: { type: string; description: string; procedure: string }[]; // e.g., ["Internal", "External"]
  whyChooseUs: {
    title: string; // e.g., "Advanced Treatment Through Laser Surgery"
    description: string;
  }[];
}
