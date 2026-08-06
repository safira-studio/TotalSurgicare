// Location + reviews data for the Pune landing page. Shared by PuneTestimonials,
// PuneLocation and the page's JSON-LD so the displayed rating and the structured
// data can never disagree.

export const PUNE_ADDRESS = {
  street: "One Place, 501 B, 5th Floor, Cabin No. 2, Kimaya Clinic, Wanowrie",
  locality: "Pune",
  region: "Maharashtra",
  postalCode: "411040",
  country: "IN",
} as const;

export const PUNE_ADDRESS_LINE = `${PUNE_ADDRESS.street}, ${PUNE_ADDRESS.locality}, ${PUNE_ADDRESS.region} ${PUNE_ADDRESS.postalCode}`;

export const PUNE_RATING = {
  value: "5.0",
  reviewCount: "69",
  best: "5",
  worst: "1",
} as const;

const MAP_QUERY = encodeURIComponent(
  `Total Surgicare, ${PUNE_ADDRESS_LINE}`
);

/** Keyless Google Maps embed — no Maps JavaScript API key required. */
export const GOOGLE_MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;

export const GOOGLE_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

export const GOOGLE_PROFILE_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export interface PuneReview {
  author: string;
  rating: number;
  /**
   * Procedure the patient was treated for. Left unset until the real Google
   * review data is supplied — do not guess a treatment for a named patient.
   */
  treatment?: string;
  content: string;
}

/** Patient feedback already published on the site. */
export const GOOGLE_REVIEWS: PuneReview[] = [
  {
    author: "Rahat Sayyed",
    rating: 5,
    content:
      "The medical team provided exceptional care during my treatment. I felt like I was in safe hands throughout the whole process.",
  },
  {
    author: "Akash Patil",
    rating: 5,
    content:
      "The doctors were professional and attentive to my needs. The clinic facilities are modern and clean.",
  },
  {
    author: "Om Gupta",
    rating: 4,
    content:
      "I've been a patient for 3 years and the quality of care has always been excellent. Highly recommended!",
  },
  {
    author: "Faizan Shaikh",
    rating: 5,
    content:
      "The staff is friendly and the wait times are minimal. I appreciate how efficiently the clinic is run.",
  },
  {
    author: "Manisha Deshmukh",
    rating: 5,
    content:
      "My experience with the specialists was outstanding. They took the time to explain everything clearly.",
  },
];
