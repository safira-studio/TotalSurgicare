import { MedicalCondition } from "@/types";

export const pilesCondition: MedicalCondition = {
  id: "1",
  slug: "piles-treatment",
  overview: {
    title: "Piles Treatment - Laser Surgery Procedure",
    brief:
      "Piles (hemorrhoids) are swollen veins in the lower rectum and anus. They can cause discomfort, pain, and bleeding. Our advanced laser treatment provides quick relief with minimal recovery time.",
    alternateNames: [
      { language: "Hindi", name: "बवासीर" },
      { language: "Tamil", name: "மூலம்" },
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
      type: "Intersphincteric Fistula",
      description:
        "Passes through the internal sphincter and exits between internal and external sphincter.",
      procedure:
        "Fistulotomy - A surgical procedure where the fistula tract is opened up, tissue is cleaned, and left to heal.",
    },
    {
      type: "Trans-sphincteric Fistula",
      description:
        "Crosses through both the internal and external anal sphincter muscles.",
      procedure:
        "Seton Procedure - A surgical thread placed through the fistula tract to help drain it before final repair.",
    },
    {
      type: "Suprasphincteric Fistula",
      description:
        "Crosses over the top of the puborectalis muscle then passes between the internal and external sphincter.",
      procedure:
        "LIFT Procedure - Ligation of Intersphincteric Fistula Tract to close connections while preserving sphincter function.",
    },
    {
      type: "Extrasphincteric Fistula",
      description:
        "Originates from the rectum or another pelvic organ and passes through the levator muscles to skin.",
      procedure:
        "Endorectal Flap - Creates a flap to cover the internal opening after cleaning the tract.",
    },
    {
      type: "Submucosal Fistula",
      description:
        "Confined to the submucosal layer of the rectum, does not involve sphincter muscles.",
      procedure:
        "Laser Surgery - Precise laser treatment sealing the tract with minimal tissue damage.",
    },
    {
      type: "Complex Fistula",
      description:
        "Multiple tracts, recurrent, or associated with inflammatory bowel disease.",
      procedure:
        "Combined approaches - Often requires staged procedures and multidisciplinary care.",
    },
  ],
  whyChooseUs: [
    {
      title: "Advanced Treatment Through Laser Surgery",
      description:
        "At Total MediCare, you can avoid conventional piles treatment surgery and opt to treat it within 15 minutes through our quick and laser treatment, which is painless and effective. After the procedure, you can go home on the same day.",
    },
    {
      title: "FREE Appointment with Experienced Proctologist",
      description:
        "At Total MediCare, we have expert proctologists with 8-15 years of experience who provide personalized piles treatment surgery and properly guide you through the pre and post-surgery process.",
    },
    {
      title: "Quick Recovery With Effective Results",
      description:
        "Total MediCare treatment delivers effective results in less than a day after surgery. Our patients can forget about piles completely and live their normal day-to-day routine in just 1 week or less.",
    },
    {
      title: "End-to-End Process Assistance",
      description:
        "Total MediCare provides best-in-class insurance handling for all patients. We handle everything right from the paperwork to claim settlement with insurers so that you focus completely on the recovery process.",
    },
  ],
};

export const fistulaCondition: MedicalCondition = {
  id: "2",
  slug: "fistula-treatment",
  overview: {
    title: "Fistula Treatment - Advanced Laser Surgery Procedure",
    brief:
      "Fistula is an abnormal tunnel-like connection between the anal canal and the skin near the anus. It can lead to pain, swelling, and discharge. Our advanced laser treatment offers a safe, minimally invasive solution with faster recovery.",
    alternateNames: [
      { language: "Hindi", name: "भगंदर" },
      { language: "Tamil", name: "குடல் fistula" },
    ],
  },
  aboutCondition: {
    title: "What is a Fistula?",
    description:
      "An anal fistula is a small tunnel that develops between the end of the bowel and the skin near the anus. It usually occurs due to an infection in an anal gland that forms an abscess and fails to heal properly. Fistulas often cause pain, discharge, and skin irritation.",
  },
  foodTriggers: [
    {
      name: "Spicy Foods",
      description: "May worsen inflammation and irritation in the anal area",
      bgColor: "bg-orange-100",
    },
    {
      name: "Caffeinated Beverages",
      description: "Can irritate the digestive tract and worsen symptoms",
      bgColor: "bg-green-100",
    },
    {
      name: "Processed Meats",
      description: "Low in fiber, may cause constipation and strain",
      bgColor: "bg-blue-100",
    },
    {
      name: "Fried and Fatty Foods",
      description: "Hard to digest and may aggravate digestive issues",
      bgColor: "bg-red-100",
    },
    {
      name: "Alcohol",
      description: "Can cause dehydration and inflammation",
      bgColor: "bg-amber-100",
    },
    {
      name: "Dairy Products",
      description: "Can slow digestion and contribute to constipation",
      bgColor: "bg-yellow-100",
    },
  ],
  causes: [
    {
      title: "Anal Abscess",
      description:
        "A collection of pus that forms near the anus and can lead to fistula if untreated",
      icon: "alert-circle",
    },
    {
      title: "Crohn’s Disease",
      description:
        "Inflammatory bowel disease increases the risk of developing anal fistulas",
      icon: "image",
    },
    {
      title: "Tuberculosis",
      description: "Can cause chronic inflammation and fistula formation",
      icon: "clock",
    },
    {
      title: "Radiation Therapy",
      description: "Can damage anal tissues and lead to fistulas",
      icon: "arrow-up",
    },
    {
      title: "Surgery Complications",
      description: "Post-operative infections may lead to fistulas",
      icon: "thermometer",
    },
    {
      title: "Trauma or Injury",
      description:
        "Physical damage around the anus or rectum can result in abnormal tracts",
      icon: "syringe",
    },
  ],
  symptoms: [
    {
      title: "Persistent Pain",
      description: "Especially during bowel movements or sitting",
      icon: "thermometer",
    },
    {
      title: "Swelling and Redness",
      description: "Around the anus",
      icon: "arrow-up",
    },
    {
      title: "Discharge of Pus or Blood",
      description: "May stain undergarments and cause discomfort",
      icon: "image",
    },
    {
      title: "Recurrent Abscesses",
      description: "Frequent infections in the anal area",
      icon: "clock",
    },
    {
      title: "Foul Smell",
      description: "Due to infection and discharge",
      icon: "pill",
    },
    {
      title: "Fever or Fatigue",
      description: "Indicates underlying infection",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Inflammatory Bowel Disease",
      description: "Conditions like Crohn’s increase risk",
      icon: "image",
    },
    {
      title: "Previous Anal Surgery",
      description: "Can leave scars or weak tissues",
      icon: "pill",
    },
    {
      title: "HIV/AIDS",
      description: "Weakens immunity and healing process",
      icon: "thermometer",
    },
    {
      title: "Smoking",
      description: "Slows tissue repair and increases risk",
      icon: "arrow-up",
    },
    {
      title: "Poor Hygiene",
      description: "Increases infection risk around anus",
      icon: "clock",
    },
    {
      title: "Sedentary Lifestyle",
      description: "Leads to poor blood circulation",
      icon: "syringe",
    },
  ],
  complications: [
    {
      title: "Recurrent Infections",
      description: "Fistulas can repeatedly get infected",
      icon: "thermometer",
    },
    {
      title: "Anal Stricture",
      description: "Narrowing of the anal canal due to scar tissue",
      icon: "arrow-up",
    },
    {
      title: "Fecal Incontinence",
      description: "May occur if sphincter muscles are damaged",
      icon: "image",
    },
    {
      title: "Sepsis",
      description: "Untreated infections can spread systemically",
      icon: "pill",
    },
    {
      title: "Chronic Pain",
      description: "Long-term discomfort due to inflammation",
      icon: "clock",
    },
    {
      title: "Malignancy (Rare)",
      description: "Chronic fistulas can rarely lead to cancer",
      icon: "syringe",
    },
  ],
  diagnosis: {
    description:
      "Diagnosing a fistula requires a thorough physical examination and imaging studies. A fistula tract is located, and its complexity is evaluated to plan the treatment.",
    methods: [
      "Visual and physical examination by a proctologist",
      "Probing under anesthesia to trace the tract",
      "MRI Fistulography for complex tracts",
      "Endoanal Ultrasound to assess sphincter involvement",
      "CT Scan in cases involving deep or multiple tracts",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Antibiotics",
        description:
          "Prescribed to control infection and reduce inflammation before surgery.",
      },
      {
        name: "Sitz Baths",
        description:
          "Warm water baths several times a day to ease pain and keep the area clean.",
      },
      {
        name: "High-Fiber Diet",
        description:
          "Prevents constipation and reduces pressure on the anal area.",
      },
      {
        name: "Probiotics",
        description:
          "Supports gut health and reduces flare-ups in IBD-related cases.",
      },
    ],
    surgical: [
      {
        name: "Laser Fistula Treatment",
        description:
          "Minimally invasive technique using laser energy to seal the fistula tract with minimal damage to surrounding tissues.",
        benefits: [
          "Painless and bloodless procedure",
          "Quick recovery with minimal downtime",
          "Preserves sphincter function",
          "Outpatient procedure",
          "Lower recurrence rate",
        ],
        recoveryTime: "3-5 days",
        anesthesia: "Local with sedation",
      },
      {
        name: "Fistulotomy",
        description:
          "The fistula tract is surgically opened and cleaned to allow it to heal from inside out.",
        benefits: [
          "Effective for simple fistulas",
          "Reduces chances of recurrence",
        ],
        recoveryTime: "1-2 weeks",
        anesthesia: "Spinal or general",
      },
      {
        name: "LIFT Procedure",
        description:
          "Ligation of Intersphincteric Fistula Tract to treat complex fistulas without affecting continence.",
        benefits: [
          "Preserves anal sphincter function",
          "Ideal for trans-sphincteric fistulas",
        ],
        recoveryTime: "1-2 weeks",
        anesthesia: "Spinal",
      },
    ],
  },
  types: [
    {
      type: "Intersphincteric Fistula",
      description:
        "Passes through internal sphincter, exits between internal and external sphincter.",
      procedure:
        "Fistulotomy or LIFT depending on tract complexity and continence needs.",
    },
    {
      type: "Trans-sphincteric Fistula",
      description:
        "Passes through both internal and external sphincter muscles.",
      procedure:
        "Seton placement or LIFT procedure to gradually close and heal tract.",
    },
    {
      type: "Suprasphincteric Fistula",
      description:
        "Tract passes above the puborectalis muscle and exits externally.",
      procedure:
        "Advanced laser procedure or LIFT for minimal risk to sphincter muscles.",
    },
    {
      type: "Extrasphincteric Fistula",
      description:
        "Begins in rectum and passes through levator ani muscles to the skin.",
      procedure:
        "Endorectal flap or staged surgical treatment based on tract complexity.",
    },
    {
      type: "Submucosal Fistula",
      description: "Confined to mucosal layer without muscle involvement.",
      procedure:
        "Laser treatment or minor fistulotomy with quick healing time.",
    },
    {
      type: "Complex Fistula",
      description:
        "Multiple branches, often in IBD patients or recurrent cases.",
      procedure:
        "Combination of imaging, staged surgery, and multidisciplinary care.",
    },
  ],
  whyChooseUs: [
    {
      title: "Expert Laser Surgery by Proctology Specialists",
      description:
        "We use state-of-the-art laser technology to treat fistulas safely and effectively with minimal pain, scarring, or downtime. Most patients return home the same day.",
    },
    {
      title: "FREE Consultation with Experienced Surgeons",
      description:
        "Book a no-cost consultation with our expert team to evaluate your condition and explore the best treatment options tailored to your needs.",
    },
  ],
};
