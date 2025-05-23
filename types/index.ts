import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface MedicalCondition {
  id: string; // Unique identifier (e.g., UUID or auto-incremented ID)
  slug: string; // URL-friendly identifier (e.g., "piles", "inguinal-hernia-surgery")
  title: string; // Page title (e.g., "Piles Treatment", "Inguinal Hernia Surgery")
  overview: {
    description: string; // Brief description of the condition
    alternateNames?: {
      // Optional translations or alternate names
      language: string; // e.g., "Hindi", "Tamil"
      name: string; // e.g., "पाइलोनिडल साइनस" for Pilonidal Sinus in Hindi
    }[];
    riskFactors?: string[]; // List of risk factors (e.g., ["Sedentary lifestyle", "Obesity"])
    complications?: string[]; // List of complications if untreated
  };

  symptoms: string[]; // List of symptoms (e.g., ["Pain", "Bleeding"])
  causes: string[]; // List of causes (e.g., ["Constipation", "Prolonged sitting"])
  diagnosis: {
    methods: {
      name: string; // e.g., "Physical Examination", "Ultrasound"
      description: string; // Description of the diagnostic method
    }[];
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
  whyChooseUs: {
    reasons: {
      title: string; // e.g., "Advanced Treatment Through Laser Surgery"
      description: string;
    }[];
  };
  meta: {
    pageUrl: string; // Full URL (e.g., "https://totalsurgicare.com/piles/")
    lastUpdated: string; // ISO date string (e.g., "2025-05-21T18:13:00Z")
    tags?: string[]; // Keywords for SEO or filtering (e.g., ["anorectal", "laser surgery"])
  };
}
