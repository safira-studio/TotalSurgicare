import { MedicalCondition } from "@/types";

export const pilesTreatment: MedicalCondition = {
  id: "1",
  slug: "piles-treatment",
  name: "Piles",
  overview: {
    title: "Piles Treatment - Laser Surgery Procedure",
    brief:
      "Piles (hemorrhoids) are swollen veins in the lower rectum and anus. They can cause discomfort, pain, and bleeding. Our advanced laser treatment provides quick relief with minimal recovery time.",
    alternateNames: [
      { language: "Hindi", name: "बवासीर" },
      { language: "Marathi", name: "बवासीर" },
    ],
  },
  aboutCondition: {
    title: "What are Piles?",
    description:
      "Piles, also known as hemorrhoids, are a common condition that affects many people globally. They are cushions of tissue filled with blood vessels located at the end of the rectum or anus. While they are normal parts of the human anatomy, they can become inflamed and enlarged, causing discomfort.",
  },
  foodTriggers: [
    {
      name: "Spicy Foods",
      description: "Can irritate the digestive system and worsen symptoms",
      bgColor: "bg-orange-100",
    },
    {
      name: "Alcohol",
      description: "Contributes to dehydration, worsening piles discomfort",
      bgColor: "bg-amber-100",
    },
    {
      name: "Processed Foods",
      description: "Low in fiber and can cause constipation",
      bgColor: "bg-blue-100",
    },
    {
      name: "Caffeine",
      description: "Acts as a diuretic and can contribute to dehydration",
      bgColor: "bg-green-100",
    },
    {
      name: "Dairy Products",
      description: "Can cause constipation in some individuals",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Fried Foods",
      description: "Difficult to digest and can exacerbate symptoms",
      bgColor: "bg-red-100",
    },
  ],
  causes: [
    {
      title: "Chronic Constipation",
      description:
        "Straining during bowel movements creates pressure in the rectal veins",
      icon: "alert-circle",
    },
    {
      title: "Pregnancy",
      description:
        "Increased pressure from the growing uterus and hormonal changes",
      icon: "image",
    },
    {
      title: "Aging",
      description: "Tissues supporting the veins in the rectum weaken with age",
      icon: "clock",
    },
    {
      title: "Obesity",
      description: "Excess weight increases pressure on the lower rectum",
      icon: "arrow-up",
    },
    {
      title: "Prolonged Sitting",
      description:
        "Especially on the toilet, increases pressure on the veins in the rectum",
      icon: "thermometer",
    },
    {
      title: "Heavy Lifting",
      description:
        "Straining and holding your breath can lead to increased pressure",
      icon: "syringe",
    },
  ],
  symptoms: [
    {
      title: "Bleeding",
      description: "Bright red blood during or after bowel movements",
      icon: "pill",
    },
    {
      title: "Pain and Discomfort",
      description: "Especially when sitting or during bowel movements",
      icon: "thermometer",
    },
    {
      title: "Itching and Irritation",
      description: "Around the anal area",
      icon: "clock",
    },
    {
      title: "Swelling",
      description: "Lumps around the anus",
      icon: "arrow-up",
    },
    {
      title: "Mucus Discharge",
      description: "Clear or yellowish discharge",
      icon: "image",
    },
    {
      title: "Incomplete Evacuation",
      description: "Feeling of incomplete bowel movement",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Age Over 50",
      description: "Tissues supporting veins weaken with age",
      icon: "clock",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to developing piles",
      icon: "pill",
    },
    {
      title: "Chronic Diarrhea",
      description: "Frequent loose stools can irritate the area",
      icon: "thermometer",
    },
    {
      title: "Low-Fiber Diet",
      description: "Can lead to constipation and straining",
      icon: "image",
    },
    {
      title: "Sedentary Lifestyle",
      description: "Lack of physical activity",
      icon: "arrow-up",
    },
    {
      title: "Anal Intercourse",
      description: "May increase risk of hemorrhoids",
      icon: "syringe",
    },
  ],
  complications: [
    {
      title: "Anemia",
      description: "Chronic blood loss can lead to iron deficiency",
      icon: "pill",
    },
    {
      title: "Strangulated Hemorrhoid",
      description: "Blood supply cut off, causing severe pain",
      icon: "thermometer",
    },
    {
      title: "Blood Clots",
      description: "Thrombosed hemorrhoids can be extremely painful",
      icon: "clock",
    },
    {
      title: "Infection",
      description: "Open wounds can become infected",
      icon: "arrow-up",
    },
    {
      title: "Incontinence",
      description: "Difficulty controlling bowel movements",
      icon: "image",
    },
    {
      title: "Prolapse",
      description: "Internal hemorrhoids may protrude outside",
      icon: "syringe",
    },
  ],
  diagnosis: {
    description:
      "The proper diagnosis requires a physical examination of the anal area, including the use of a proctoscope. This allows the doctor to look inside the anal canal to identify internal hemorrhoids as well as determine their grade and stage.",
    methods: [
      "Detailed physical examination and medical history",
      "Digital rectal examination to locate internal openings",
      "Proctoscopy or Anoscopy to assess internal tracts",
      "MRI Fistulography or Endoanal Ultrasound for complex cases",
    ],
  },

  treatments: {
    nonSurgical: [
      {
        name: "High-Fiber Diet",
        description:
          "Include plenty of fruits, vegetables, and whole grains to soften stool and reduce straining.",
      },
      {
        name: "Stay Hydrated",
        description:
          "Drink plenty of water throughout the day to prevent constipation and hardened stools.",
      },
      {
        name: "Regular Exercise",
        description:
          "Physical activity helps stimulate bowel function and reduces pressure on veins.",
      },
      {
        name: "Don't Delay Bowel Movements",
        description:
          "Respond promptly to the urge to have a bowel movement to prevent straining.",
      },
      {
        name: "Limit Toilet Time",
        description:
          "Avoid sitting on the toilet for long periods which increases pressure on rectal veins.",
      },
      {
        name: "Maintain Healthy Weight",
        description:
          "Keeping an appropriate weight reduces pressure on the pelvic floor and lower rectum.",
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
  types: [
    {
      type: "Internal Piles",
      description:
        "Located inside the rectum, usually painless but may cause bleeding during bowel movements.",
      procedure:
        "Rubber Band Ligation - A band is placed around the base of the hemorrhoid to cut off blood supply, causing it to shrink and fall off.",
    },
    {
      type: "External Piles",
      description:
        "Develop under the skin around the anus and can be painful, especially when thrombosed.",
      procedure:
        "Excision - Surgical removal of the thrombosed hemorrhoid under local anesthesia for quick relief.",
    },
    {
      type: "Thrombosed Piles",
      description:
        "Blood clot forms inside external hemorrhoids, causing severe pain, swelling, and inflammation.",
      procedure:
        "Thrombectomy - Minor surgery to remove the clot and relieve pain.",
    },
    {
      type: "Prolapsed Piles",
      description:
        "Internal hemorrhoids that protrude outside the anus, especially during straining.",
      procedure:
        "Stapled Hemorrhoidopexy - Hemorrhoidal tissue is repositioned and blood flow is restricted, causing shrinkage.",
    },
    {
      type: "Grade I Hemorrhoids",
      description:
        "Small internal piles that do not prolapse and are often asymptomatic.",
      procedure:
        "Diet & Medication - High-fiber diet, stool softeners, and topical treatments.",
    },
    {
      type: "Grade II Hemorrhoids",
      description: "Prolapse during straining but retract spontaneously.",
      procedure:
        "Infrared Coagulation (IRC) - A quick, non-surgical treatment using infrared light to shrink the hemorrhoid.",
    },
    {
      type: "Grade III Hemorrhoids",
      description:
        "Prolapse during straining and require manual repositioning.",
      procedure:
        "Doppler-Guided Hemorrhoidal Artery Ligation - Ties off blood vessels feeding the hemorrhoid using ultrasound guidance.",
    },
    {
      type: "Grade IV Hemorrhoids",
      description: "Permanently prolapsed and cannot be pushed back inside.",
      procedure:
        "Hemorrhoidectomy - Surgical removal of severe or large hemorrhoids.",
    },
  ],

  whyChooseUs: [
    {
      title: "Advanced Treatment Through Laser Surgery",
      description:
        "At Total Surgicare, you can avoid conventional piles treatment surgery and opt to treat it within 15 minutes through our quick and laser treatment, which is painless and effective. After the procedure, you can go home on the same day.",
    },
    {
      title: "FREE Appointment with Experienced Proctologist",
      description:
        "At Total Surgicare, we have expert proctologists with 8-15 years of experience who provide personalized piles treatment surgery and properly guide you through the pre and post-surgery process.",
    },
    {
      title: "Quick Recovery With Effective Results",
      description:
        "Total Surgicare treatment delivers effective results in less than a day after surgery. Our patients can forget about piles completely and live their normal day-to-day routine in just 1 week or less.",
    },
    {
      title: "End-to-End Process Assistance",
      description:
        "Total Surgicare provides best-in-class insurance handling for all patients. We handle everything right from the paperwork to claim settlement with insurers so that you focus completely on the recovery process.",
    },
  ],
};
