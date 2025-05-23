import { MedicalCondition } from "@/types";

export const pilesCondition: MedicalCondition = {
  id: "1",
  slug: "piles-treatment",
  title: "Piles Treatment - Laser Surgery Procedure",
  overview: {
    description:
      "Piles (hemorrhoids) are swollen veins in the lower rectum and anus. They can cause discomfort, pain, and bleeding. Our advanced laser treatment provides quick relief with minimal recovery time.",
    alternateNames: [
      { language: "Hindi", name: "बवासीर" },
      { language: "Tamil", name: "மூலம்" },
    ],
    riskFactors: [
      "Chronic constipation or diarrhea",
      "Sitting for long periods",
      "Obesity",
      "Pregnancy",
      "Straining during bowel movements",
    ],
    complications: [
      "Anemia (due to chronic blood loss)",
      "Blood clots",
      "Infection",
      "Strangulated hemorrhoid",
    ],
  },
  symptoms: [
    "Painless bleeding during bowel movements",
    "Itching or irritation in the anal region",
    "Pain or discomfort",
    "Swelling around the anus",
    "A lump near the anus, which may be sensitive or painful",
    "Leakage of feces",
  ],
  causes: [
    "Straining during bowel movements",
    "Sitting for long periods on the toilet",
    "Chronic constipation or diarrhea",
    "Low-fiber diet",
    "Pregnancy",
    "Aging",
    "Heavy lifting",
  ],
  diagnosis: {
    methods: [
      {
        name: "Digital Rectal Examination",
        description:
          "The doctor inserts a gloved, lubricated finger into the rectum to feel for abnormalities.",
      },
      {
        name: "Visual Inspection",
        description:
          "External piles can be diagnosed through visual inspection of the anal area.",
      },
      {
        name: "Proctoscopy",
        description:
          "A hollow tube with a light is inserted into the rectum to examine the anal canal.",
      },
      {
        name: "Colonoscopy",
        description:
          "A long, flexible tube is used to examine the entire colon, usually recommended for patients over 45 to rule out other causes of rectal bleeding.",
      },
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Dietary Changes",
        description:
          "Increasing fiber intake and drinking more fluids can help soften stools and reduce pressure and straining.",
      },
      {
        name: "Topical Treatments",
        description:
          "Over-the-counter creams, ointments, and suppositories can provide temporary relief from pain and itching.",
      },
      {
        name: "Sitz Baths",
        description:
          "Sitting in a warm bath for 15-20 minutes several times a day can help reduce pain and inflammation.",
      },
      {
        name: "Medications",
        description:
          "Pain relievers and anti-inflammatory drugs may help reduce discomfort.",
      },
    ],
    surgical: [
      {
        name: "Laser Hemorrhoidoplasty",
        description:
          "A minimally invasive procedure where laser energy is used to shrink the hemorrhoidal tissue with precision, causing minimal damage to surrounding areas.",
        benefits: [
          "Minimal pain compared to conventional surgery",
          "Day-care procedure (no hospital stay required)",
          "Quick recovery time",
          "Low risk of complications",
          "Precise treatment with minimal tissue damage",
        ],
        recoveryTime: "3-7 days",
        anesthesia: "Local with sedation",
      },
      {
        name: "Hemorrhoidectomy",
        description:
          "Traditional surgical removal of hemorrhoids, typically used for large, severe cases that haven't responded to other treatments.",
        benefits: [
          "Effective for severe or recurring piles",
          "Long-term solution with low recurrence rate",
          "Can address external and internal hemorrhoids simultaneously",
        ],
        recoveryTime: "2-3 weeks",
        anesthesia: "General or spinal",
      },
      {
        name: "Stapled Hemorrhoidopexy",
        description:
          "A procedure that uses a stapling device to reposition the hemorrhoidal tissue and cut off blood supply to the hemorrhoids.",
        benefits: [
          "Less painful than traditional hemorrhoidectomy",
          "Shorter recovery period",
          "Effective for internal hemorrhoids",
        ],
        recoveryTime: "1-2 weeks",
        anesthesia: "General",
      },
    ],
  },
  whyChooseUs: {
    reasons: [
      {
        title: "Advanced Treatment Through Laser Surgery",
        description:
          "Our clinic specializes in state-of-the-art laser procedures that offer faster healing and minimal discomfort compared to traditional surgical methods.",
      },
      {
        title: "Experienced Specialists",
        description:
          "Our team consists of board-certified surgeons with extensive experience in proctology and colorectal surgery.",
      },
      {
        title: "Comprehensive Care",
        description:
          "We provide holistic treatment plans that include pre-operative evaluation, minimally invasive procedures, and post-operative care.",
      },
      {
        title: "Patient-Centered Approach",
        description:
          "We prioritize patient comfort, privacy, and satisfaction throughout the treatment journey.",
      },
    ],
  },
  meta: {
    pageUrl: "https://example-clinic.com/conditions/piles-treatment",
    lastUpdated: "2025-05-21T18:13:00Z",
    tags: [
      "piles",
      "hemorrhoids",
      "laser surgery",
      "proctology",
      "minimally invasive",
    ],
  },
};
