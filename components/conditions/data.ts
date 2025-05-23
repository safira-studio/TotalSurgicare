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

export const fissureCondition: MedicalCondition = {
  id: "3",
  slug: "fissure-treatment",
  overview: {
    title: "Fissure Treatment - Quick Relief with Laser Surgery",
    brief:
      "Anal fissure is a small tear in the skin lining the anus, causing pain and bleeding during bowel movements. Our advanced laser treatment ensures rapid healing, minimal discomfort, and faster recovery.",
    alternateNames: [
      { language: "Hindi", name: "शारीरिक दरार (एनल फिशर)" },
      { language: "Tamil", name: "குடல் கிழிவு (அனல் ஃபிஷர்)" },
    ],
  },
  aboutCondition: {
    title: "What is an Anal Fissure?",
    description:
      "An anal fissure is a small cut or tear in the skin of the anal canal, often caused by passing hard or large stools. It can cause sharp pain and bleeding during and after bowel movements. Fissures may be acute or chronic depending on their duration and severity.",
  },
  foodTriggers: [
    {
      name: "Low-Fiber Foods",
      description: "Cause hard stools and constipation, worsening fissures",
      bgColor: "bg-orange-100",
    },
    {
      name: "Spicy Foods",
      description: "May irritate the anal lining and intensify pain",
      bgColor: "bg-red-100",
    },
    {
      name: "Caffeinated Drinks",
      description: "Dehydrates the body and leads to hard stools",
      bgColor: "bg-green-100",
    },
    {
      name: "Processed Foods",
      description: "Lack fiber and promote constipation",
      bgColor: "bg-blue-100",
    },
    {
      name: "Dairy Products",
      description: "Excess intake may cause constipation in some people",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Alcohol",
      description: "Can dehydrate and affect bowel movement consistency",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Constipation",
      description:
        "Straining during bowel movements and passing hard stools can tear the anal lining",
      icon: "arrow-up",
    },
    {
      title: "Diarrhea",
      description: "Frequent loose stools can irritate and weaken anal tissues",
      icon: "clock",
    },
    {
      title: "Childbirth",
      description: "Pressure during delivery may cause fissures in women",
      icon: "syringe",
    },
    {
      title: "Anal Intercourse",
      description: "Can lead to trauma in the anal region",
      icon: "thermometer",
    },
    {
      title: "Poor Toilet Habits",
      description: "Delaying or rushing bowel movements can lead to strain",
      icon: "alert-circle",
    },
    {
      title: "Underlying Conditions",
      description: "Diseases like Crohn’s or tuberculosis may weaken anal skin",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Sharp Pain",
      description: "During and after bowel movements",
      icon: "thermometer",
    },
    {
      title: "Bright Red Blood",
      description: "Seen on toilet paper or in the stool",
      icon: "pill",
    },
    {
      title: "Itching or Irritation",
      description: "Around the anus",
      icon: "syringe",
    },
    {
      title: "Visible Tear or Crack",
      description: "Near the anal opening",
      icon: "image",
    },
    {
      title: "Skin Tag",
      description: "A small lump near the fissure in chronic cases",
      icon: "arrow-up",
    },
    {
      title: "Spasms in Anal Sphincter",
      description: "Tightening that increases pain and delays healing",
      icon: "clock",
    },
  ],
  riskFactors: [
    {
      title: "Low-Fiber Diet",
      description: "Leads to constipation and hard stools",
      icon: "pill",
    },
    {
      title: "Sedentary Lifestyle",
      description: "Poor bowel health and delayed digestion",
      icon: "clock",
    },
    {
      title: "Chronic Constipation or Diarrhea",
      description: "Irritates the anal lining",
      icon: "arrow-up",
    },
    {
      title: "Childbirth",
      description: "Especially after prolonged labor",
      icon: "syringe",
    },
    {
      title: "Anal Trauma",
      description: "From improper wiping or inserting objects",
      icon: "thermometer",
    },
    {
      title: "Age",
      description: "Common in both infants and elderly",
      icon: "alert-circle",
    },
  ],
  complications: [
    {
      title: "Chronic Fissure",
      description: "Lasts longer than 6 weeks with repeated symptoms",
      icon: "clock",
    },
    {
      title: "Anal Spasms",
      description: "Increased pain due to muscle tightness",
      icon: "thermometer",
    },
    {
      title: "Infection",
      description: "Tear may become infected and form abscess",
      icon: "syringe",
    },
    {
      title: "Fistula Formation",
      description: "Untreated fissures can form abnormal tracts",
      icon: "image",
    },
    {
      title: "Skin Tags",
      description: "May remain even after fissure heals",
      icon: "arrow-up",
    },
    {
      title: "Bleeding",
      description: "Recurrent bleeding can lead to anemia in rare cases",
      icon: "pill",
    },
  ],
  diagnosis: {
    description:
      "Anal fissure is diagnosed via physical examination and detailed history. The fissure is usually visible at the anal opening.",
    methods: [
      "Visual inspection of anal region",
      "Digital rectal examination (if tolerable)",
      "Anoscopy to view the anal canal",
      "Ruling out conditions like hemorrhoids or Crohn's disease",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Topical Ointments",
        description:
          "Nitroglycerin, calcium channel blockers, or lidocaine help reduce pain and promote healing.",
      },
      {
        name: "Sitz Baths",
        description:
          "Warm water soaks relieve pain, improve blood flow, and relax the sphincter.",
      },
      {
        name: "Stool Softeners",
        description:
          "Ease bowel movements and prevent strain on the fissure site.",
      },
      {
        name: "High-Fiber Diet",
        description: "Ensures soft, regular stools and avoids further damage.",
      },
    ],
    surgical: [
      {
        name: "Laser Fissure Surgery",
        description:
          "A painless procedure using laser energy to clean the fissure area and promote healing.",
        benefits: [
          "Quick and painless recovery",
          "Minimally invasive with no stitches",
          "Outpatient procedure",
          "No risk of incontinence",
        ],
        recoveryTime: "2-4 days",
        anesthesia: "Local with sedation",
      },
      {
        name: "Lateral Internal Sphincterotomy (LIS)",
        description:
          "A small cut is made in the anal sphincter muscle to reduce pressure and aid healing.",
        benefits: [
          "Highly effective for chronic fissures",
          "Quick symptom relief",
        ],
        recoveryTime: "1 week",
        anesthesia: "Spinal or general",
      },
    ],
  },
  types: [
    {
      type: "Acute Fissure",
      description: "Recent tear, usually heals within a few weeks.",
      procedure: "Managed with ointments, sitz baths, and dietary changes.",
    },
    {
      type: "Chronic Fissure",
      description:
        "Lasts more than 6 weeks, may have scar tissue and skin tags.",
      procedure: "Laser treatment or LIS is recommended for long-term healing.",
    },
    {
      type: "Posterior Fissure",
      description:
        "Located on the back side of the anal canal, most common type.",
      procedure: "Laser or LIS based on severity and duration.",
    },
    {
      type: "Anterior Fissure",
      description: "Occurs on the front side, more common in women.",
      procedure:
        "Usually managed conservatively; chronic ones may need laser surgery.",
    },
    {
      type: "Multiple Fissures",
      description: "May indicate underlying disease like IBD or TB.",
      procedure: "Requires full diagnostic workup and combined therapy.",
    },
  ],
  whyChooseUs: [
    {
      title: "Advanced Laser Treatment with Fast Recovery",
      description:
        "Our laser procedure offers precise, bloodless treatment for fissures with quick healing and minimal discomfort.",
    },
    {
      title: "Expert Surgeons with FREE Consultations",
      description:
        "Get a personalized evaluation and treatment plan from our experienced team at no initial consultation cost.",
    },
  ],
};

export const pilonidalSinusCondition: MedicalCondition = {
  id: "4",
  slug: "pilonidal-sinus-treatment",
  overview: {
    title: "Pilonidal Sinus Treatment – Permanent Cure with Laser Surgery",
    brief:
      "Pilonidal sinus is a small tunnel or cyst in the skin, usually near the tailbone, that may become infected and filled with pus. Our advanced laser surgery offers a quick, painless, and permanent solution with minimal downtime.",
    alternateNames: [
      { language: "Hindi", name: "पाइलोनिडल साइनस" },
      { language: "Tamil", name: "பைலோனிடல் சைனஸ்" },
    ],
  },
  aboutCondition: {
    title: "What is Pilonidal Sinus?",
    description:
      "A pilonidal sinus is a small hole or tunnel in the skin, often at the top of the buttocks, which may fill with pus or fluid and become infected, forming a cyst or abscess. It is commonly caused by ingrown hair, friction, or prolonged sitting.",
  },
  foodTriggers: [
    {
      name: "Oily and Fatty Foods",
      description: "Increase skin oil production and worsen inflammation",
      bgColor: "bg-orange-100",
    },
    {
      name: "Processed Foods",
      description: "Lack fiber and promote sedentary lifestyle weight gain",
      bgColor: "bg-red-100",
    },
    {
      name: "Sugary Items",
      description: "Can lead to bacterial overgrowth and infection",
      bgColor: "bg-green-100",
    },
    {
      name: "Low-Fiber Foods",
      description: "Contribute to constipation, indirectly increasing strain",
      bgColor: "bg-blue-100",
    },
    {
      name: "Excess Dairy",
      description: "May lead to skin breakouts in sensitive individuals",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Red Meat",
      description: "Can contribute to inflammation and poor digestion",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Ingrown Hair",
      description:
        "Hair grows back into the skin causing infection and abscess",
      icon: "arrow-up",
    },
    {
      title: "Friction or Sweating",
      description: "Common in people who sit for long hours",
      icon: "clock",
    },
    {
      title: "Poor Hygiene",
      description: "Build-up of sweat, bacteria, or debris in the area",
      icon: "syringe",
    },
    {
      title: "Tight Clothing",
      description: "Causes excessive friction around the tailbone",
      icon: "thermometer",
    },
    {
      title: "Genetic Predisposition",
      description: "Runs in families, especially those with coarse hair",
      icon: "alert-circle",
    },
    {
      title: "Sedentary Lifestyle",
      description: "Increases risk due to lack of movement",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Swelling or Lump",
      description: "Near the tailbone that may be painful",
      icon: "thermometer",
    },
    {
      title: "Discharge",
      description: "Pus or blood may ooze from the sinus",
      icon: "pill",
    },
    {
      title: "Pain while Sitting",
      description: "Especially on hard surfaces or during prolonged periods",
      icon: "syringe",
    },
    {
      title: "Fever",
      description: "Indicates infection or abscess formation",
      icon: "image",
    },
    {
      title: "Foul Smell",
      description: "Due to pus discharge from infected sinus",
      icon: "arrow-up",
    },
    {
      title: "Itching or Redness",
      description: "Around the affected area",
      icon: "clock",
    },
  ],
  riskFactors: [
    {
      title: "Male Gender",
      description: "More common in men than women",
      icon: "pill",
    },
    {
      title: "Young Age (15-35)",
      description: "Most common in this age group",
      icon: "clock",
    },
    {
      title: "Excess Body Hair",
      description: "Increases chances of hair embedding into skin",
      icon: "arrow-up",
    },
    {
      title: "Prolonged Sitting",
      description: "Truck drivers, office workers at higher risk",
      icon: "syringe",
    },
    {
      title: "Poor Hygiene",
      description: "May increase bacterial growth and infection",
      icon: "thermometer",
    },
    {
      title: "Obesity",
      description: "Causes more friction and sweating in the tailbone area",
      icon: "alert-circle",
    },
  ],
  complications: [
    {
      title: "Recurring Infections",
      description: "Chronic sinus may develop with repeated abscesses",
      icon: "clock",
    },
    {
      title: "Abscess Formation",
      description: "Painful collection of pus requiring drainage",
      icon: "thermometer",
    },
    {
      title: "Sinus Tract Formation",
      description: "Abnormal channels under the skin",
      icon: "syringe",
    },
    {
      title: "Cellulitis",
      description: "Infection spreads to nearby skin layers",
      icon: "image",
    },
    {
      title: "Scarring",
      description: "Multiple surgeries or healing may lead to scar tissue",
      icon: "arrow-up",
    },
    {
      title: "Rare Skin Cancer",
      description: "Long-standing untreated sinus may develop carcinoma",
      icon: "pill",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis of pilonidal sinus is clinical, based on physical exam and patient history. In recurrent or complex cases, imaging may be used.",
    methods: [
      "Visual and physical examination of the tailbone area",
      "Assessment of pus or discharge",
      "MRI or Ultrasound for deep sinus tracts",
      "Differential diagnosis to rule out abscesses or cysts",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Antibiotics",
        description: "Help control infection but do not cure the sinus itself",
      },
      {
        name: "Sitz Baths",
        description: "Reduce swelling and promote drainage of infected sinus",
      },
      {
        name: "Hair Removal",
        description: "Laser or shaving to prevent hair from entering sinus",
      },
      {
        name: "Proper Hygiene",
        description: "Keeping the area clean and dry to prevent recurrence",
      },
    ],
    surgical: [
      {
        name: "Laser Pilonidal Sinus Surgery",
        description:
          "Minimally invasive laser treatment to remove infected tissue and seal sinus tracts",
        benefits: [
          "Bloodless and painless procedure",
          "Quick recovery and minimal scarring",
          "Outpatient surgery",
        ],
        recoveryTime: "2-5 days",
        anesthesia: "Local or spinal",
      },
      {
        name: "Excision and Primary Closure",
        description:
          "Traditional open surgery to remove sinus followed by stitching",
        benefits: [
          "Suitable for complex or multiple sinuses",
          "Lower recurrence with proper wound care",
        ],
        recoveryTime: "2-3 weeks",
        anesthesia: "Spinal or general",
      },
    ],
  },
  types: [
    {
      type: "Simple Pilonidal Sinus",
      description: "Single tract with mild symptoms",
      procedure: "Laser treatment or minor excision is sufficient",
    },
    {
      type: "Complex Pilonidal Disease",
      description: "Multiple tracts or recurrent infections",
      procedure: "Advanced surgical removal or laser ablation is needed",
    },
    {
      type: "Acute Pilonidal Abscess",
      description: "Painful, pus-filled swelling requiring urgent care",
      procedure: "Incision and drainage followed by elective laser surgery",
    },
    {
      type: "Chronic Pilonidal Sinus",
      description: "Persistent sinus with or without active infection",
      procedure: "Laser or excision based on tract complexity",
    },
    {
      type: "Recurrent Pilonidal Sinus",
      description: "Sinus returns after previous surgery",
      procedure: "Laser revision surgery to minimize tissue damage",
    },
  ],
  whyChooseUs: [
    {
      title: "Latest Laser Technology for Fast Relief",
      description:
        "We offer scarless laser surgery for pilonidal sinus with minimal pain, quick discharge, and high success rate.",
    },
    {
      title: "Experienced Surgeons & Same-Day Discharge",
      description:
        "Our specialists provide effective, personalized treatment with a focus on fast recovery and patient comfort.",
    },
  ],
};

export const rectalProlapseCondition: MedicalCondition = {
  id: "5",
  slug: "rectal-prolapse-treatment",
  overview: {
    title: "Rectal Prolapse Treatment – Advanced Laser & Surgical Options",
    brief:
      "Rectal prolapse occurs when the rectum slips through the anus, causing discomfort and bowel issues. We offer effective laser-assisted and surgical treatments to restore normal function and improve quality of life.",
    alternateNames: [
      { language: "Hindi", name: "रेक्टल प्रोलैप्स" },
      { language: "Tamil", name: "குத புளிப்பு" },
    ],
  },
  aboutCondition: {
    title: "What is Rectal Prolapse?",
    description:
      "Rectal prolapse is a condition where the rectum, the final part of the large intestine, protrudes through the anus. It can happen during bowel movements or persist constantly. It's more common in older adults and women with a history of childbirth.",
  },
  foodTriggers: [
    {
      name: "Spicy Foods",
      description: "Can irritate the bowel and worsen symptoms",
      bgColor: "bg-orange-100",
    },
    {
      name: "Low-Fiber Diet",
      description: "Contributes to constipation, a key factor in prolapse",
      bgColor: "bg-red-100",
    },
    {
      name: "Caffeinated Beverages",
      description: "May lead to dehydration and harder stools",
      bgColor: "bg-green-100",
    },
    {
      name: "Processed Foods",
      description: "Lack essential nutrients and fiber",
      bgColor: "bg-blue-100",
    },
    {
      name: "Dairy in Excess",
      description: "Can slow bowel movements in some people",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Red Meat",
      description: "Hard to digest and may worsen constipation",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Chronic Constipation",
      description: "Straining during bowel movements weakens rectal support",
      icon: "arrow-up",
    },
    {
      title: "Pelvic Floor Weakness",
      description: "Due to aging or childbirth",
      icon: "clock",
    },
    {
      title: "Previous Surgeries",
      description: "Especially around the pelvis or abdomen",
      icon: "syringe",
    },
    {
      title: "Neurological Conditions",
      description: "Affect nerves that control bowel function",
      icon: "thermometer",
    },
    {
      title: "Chronic Diarrhea",
      description: "Frequent loose stools strain the rectum",
      icon: "alert-circle",
    },
    {
      title: "Rectal Damage",
      description: "From trauma or long-term hemorrhoids",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Rectal Bulge",
      description: "Protrusion of rectum through anus",
      icon: "thermometer",
    },
    {
      title: "Mucus Discharge",
      description: "Slimy fluid from rectum",
      icon: "pill",
    },
    {
      title: "Incontinence",
      description: "Loss of control over stool",
      icon: "syringe",
    },
    {
      title: "Bleeding",
      description: "Rectal bleeding or spotting",
      icon: "image",
    },
    {
      title: "Feeling of Incomplete Evacuation",
      description: "Sensation of not fully emptying bowels",
      icon: "arrow-up",
    },
    {
      title: "Anal Itching or Pain",
      description: "Due to prolapsed tissue irritation",
      icon: "clock",
    },
  ],
  riskFactors: [
    {
      title: "Older Age",
      description: "Tissue support weakens over time",
      icon: "pill",
    },
    {
      title: "Female Gender",
      description: "Especially after multiple childbirths",
      icon: "clock",
    },
    {
      title: "Chronic Constipation or Diarrhea",
      description: "Increases rectal strain",
      icon: "arrow-up",
    },
    {
      title: "Neurological Disorders",
      description: "Affect bowel control",
      icon: "syringe",
    },
    {
      title: "Previous Rectal Surgery",
      description: "Weaken rectal attachments",
      icon: "thermometer",
    },
    {
      title: "Connective Tissue Disorders",
      description: "Weaken ligaments and support",
      icon: "alert-circle",
    },
  ],
  complications: [
    {
      title: "Ulceration",
      description: "Prolapsed tissue may become ulcerated and painful",
      icon: "clock",
    },
    {
      title: "Rectal Bleeding",
      description: "Due to friction and exposure",
      icon: "thermometer",
    },
    {
      title: "Incontinence",
      description: "Loss of control over bowel movements",
      icon: "syringe",
    },
    {
      title: "Strangulation",
      description: "Blood supply cut off in severe prolapse",
      icon: "image",
    },
    {
      title: "Chronic Irritation",
      description: "May lead to itching, infection or discomfort",
      icon: "arrow-up",
    },
    {
      title: "Social Embarrassment",
      description: "Due to uncontrollable symptoms",
      icon: "pill",
    },
  ],
  diagnosis: {
    description:
      "Rectal prolapse is diagnosed via physical examination. Additional tests help assess muscle function and identify underlying conditions.",
    methods: [
      "Physical examination during straining",
      "Proctoscopy or sigmoidoscopy to assess rectum",
      "Defecography (X-ray during bowel movement)",
      "Anal manometry to test muscle pressure",
      "MRI for pelvic floor assessment",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Dietary Modifications",
        description: "High-fiber diet to ease bowel movements",
      },
      {
        name: "Stool Softeners",
        description: "To reduce straining and support healing",
      },
      {
        name: "Pelvic Floor Therapy",
        description: "Exercises to strengthen muscles and reduce prolapse",
      },
      {
        name: "Lifestyle Changes",
        description: "Avoid heavy lifting and improve bowel habits",
      },
    ],
    surgical: [
      {
        name: "Laser Rectopexy",
        description:
          "Minimally invasive surgery to lift and fix the rectum using laser energy",
        benefits: ["No major incisions", "Quick recovery", "Low recurrence"],
        recoveryTime: "3–5 days",
        anesthesia: "Spinal or general",
      },
      {
        name: "Abdominal Rectopexy",
        description:
          "Rectum is repositioned and secured with mesh via abdominal incision",
        benefits: ["Effective for complete prolapse", "Durable results"],
        recoveryTime: "1–2 weeks",
        anesthesia: "General",
      },
    ],
  },
  types: [
    {
      type: "Complete Rectal Prolapse",
      description: "Entire rectum protrudes through the anus",
      procedure: "Surgical rectopexy is recommended",
    },
    {
      type: "Partial Mucosal Prolapse",
      description: "Only rectal lining protrudes",
      procedure: "Can be managed conservatively or with minor surgery",
    },
    {
      type: "Internal Rectal Prolapse",
      description: "Rectum folds inward but doesn’t exit the anus",
      procedure: "Pelvic floor therapy or rectopexy",
    },
    {
      type: "Recurrent Prolapse",
      description: "Prolapse returns after treatment",
      procedure: "Re-evaluation and stronger surgical fix",
    },
    {
      type: "Strangulated Prolapse",
      description: "Blood flow cut off – requires emergency treatment",
      procedure: "Urgent surgery needed",
    },
  ],
  whyChooseUs: [
    {
      title: "Laser & Laparoscopic Rectal Repair",
      description:
        "We use the latest surgical techniques for faster recovery, minimal pain, and long-term relief from rectal prolapse.",
    },
    {
      title: "Experienced Colorectal Surgeons",
      description:
        "Our experts deliver personalized treatment and follow-up care to ensure the best outcomes.",
    },
  ],
};

export const herniaCondition: MedicalCondition = {
  id: "6",
  slug: "hernia-treatment",
  overview: {
    title: "Hernia Treatment – Advanced Laparoscopic & Laser Surgery",
    brief:
      "A hernia occurs when an organ or tissue pushes through a weak spot in the surrounding muscle. We offer minimally invasive laparoscopic and laser treatments for long-lasting relief.",
    alternateNames: [
      { language: "Hindi", name: "हर्निया" },
      { language: "Tamil", name: "மூளை வீக்கம்" },
    ],
  },
  aboutCondition: {
    title: "What is Hernia?",
    description:
      "A hernia is a medical condition where an internal organ or tissue protrudes through a weak area in the muscle or connective tissue. Common types include inguinal, umbilical, and incisional hernias. It often appears as a visible bulge and may cause discomfort or pain, especially when lifting or straining.",
  },
  foodTriggers: [
    {
      name: "Spicy Foods",
      description: "Can cause acid reflux and worsen discomfort",
      bgColor: "bg-orange-100",
    },
    {
      name: "Carbonated Drinks",
      description: "Increase bloating and abdominal pressure",
      bgColor: "bg-red-100",
    },
    {
      name: "Fatty Foods",
      description: "Delay stomach emptying and contribute to reflux",
      bgColor: "bg-green-100",
    },
    {
      name: "Citrus Fruits",
      description: "May irritate the stomach lining",
      bgColor: "bg-blue-100",
    },
    {
      name: "Onions and Garlic",
      description: "Trigger bloating in some individuals",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Caffeine",
      description: "Can relax the lower esophageal sphincter",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Weak Abdominal Wall",
      description: "Congenital or due to aging and strain",
      icon: "alert-circle",
    },
    {
      title: "Heavy Lifting",
      description: "Increases pressure on the abdominal wall",
      icon: "arrow-up",
    },
    {
      title: "Chronic Cough",
      description: "Persistent pressure can cause muscle tears",
      icon: "thermometer",
    },
    {
      title: "Obesity",
      description: "Excess weight strains the abdominal muscles",
      icon: "clock",
    },
    {
      title: "Pregnancy",
      description: "Weakens abdominal muscles",
      icon: "syringe",
    },
    {
      title: "Previous Surgery",
      description: "Can weaken the surgical site (incisional hernia)",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Visible Bulge",
      description:
        "In the abdomen or groin that may increase when standing or straining",
      icon: "image",
    },
    {
      title: "Pain or Discomfort",
      description: "Especially when lifting, coughing, or bending",
      icon: "pill",
    },
    {
      title: "Heaviness in the Abdomen",
      description: "A sensation of fullness or pressure",
      icon: "clock",
    },
    {
      title: "Burning or Aching Sensation",
      description: "Due to irritation of nearby nerves",
      icon: "thermometer",
    },
    {
      title: "Bowel Obstruction",
      description: "Severe cases may block intestinal flow",
      icon: "alert-circle",
    },
    {
      title: "Redness and Tenderness",
      description: "May indicate strangulation or inflammation",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Male Gender",
      description: "More prone to inguinal hernias",
      icon: "clock",
    },
    {
      title: "Old Age",
      description: "Muscle tissue weakens with age",
      icon: "thermometer",
    },
    {
      title: "Chronic Constipation",
      description: "Straining increases intra-abdominal pressure",
      icon: "arrow-up",
    },
    {
      title: "Obesity",
      description: "Adds pressure to the abdominal wall",
      icon: "pill",
    },
    {
      title: "Pregnancy",
      description: "Stretches and weakens abdominal muscles",
      icon: "syringe",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to weak tissue",
      icon: "image",
    },
  ],
  complications: [
    {
      title: "Strangulated Hernia",
      description: "Cuts off blood flow and requires emergency surgery",
      icon: "alert-circle",
    },
    {
      title: "Incarcerated Hernia",
      description: "Trapped tissue that can't be pushed back",
      icon: "clock",
    },
    {
      title: "Bowel Obstruction",
      description: "Hernia blocks intestinal contents",
      icon: "thermometer",
    },
    {
      title: "Pain and Inflammation",
      description: "Due to constant friction or strangulation",
      icon: "pill",
    },
    {
      title: "Recurrent Hernia",
      description: "May recur if not treated properly",
      icon: "image",
    },
    {
      title: "Surgical Infection",
      description: "Possible in open procedures",
      icon: "syringe",
    },
  ],
  diagnosis: {
    description:
      "Hernia is typically diagnosed through a physical exam. Imaging tests help confirm the type and severity.",
    methods: [
      "Physical Examination (detect bulge and discomfort)",
      "Ultrasound (especially for groin hernias)",
      "CT Scan or MRI (detailed view of internal hernia)",
      "X-ray (for suspected bowel obstruction)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Lifestyle Modifications",
        description:
          "Avoid lifting, maintain healthy weight, and eat high-fiber foods",
      },
      {
        name: "Hernia Belt or Truss",
        description: "Provides temporary support for small hernias",
      },
      {
        name: "Pain Management",
        description: "To manage symptoms in inoperable cases",
      },
    ],
    surgical: [
      {
        name: "Laparoscopic Hernia Repair",
        description:
          "Minimally invasive surgery using small incisions and mesh support",
        benefits: ["Quick recovery", "Minimal pain", "Low risk of recurrence"],
        recoveryTime: "3–7 days",
        anesthesia: "General",
      },
      {
        name: "Open Mesh Repair (Hernioplasty)",
        description:
          "Traditional surgery with a small incision to place a mesh",
        benefits: [
          "Effective for larger or complex hernias",
          "Long-lasting support",
        ],
        recoveryTime: "7–10 days",
        anesthesia: "Spinal or general",
      },
    ],
  },
  types: [
    {
      type: "Inguinal Hernia",
      description: "Occurs in the groin; most common type",
      procedure: "Laparoscopic or open mesh repair",
    },
    {
      type: "Umbilical Hernia",
      description: "Occurs near the navel",
      procedure: "Mesh or sutured repair",
    },
    {
      type: "Incisional Hernia",
      description: "At previous surgical incision site",
      procedure: "Mesh reinforcement via laparoscopy",
    },
    {
      type: "Femoral Hernia",
      description: "Below the groin; more common in women",
      procedure: "Emergency repair if strangulated",
    },
    {
      type: "Hiatal Hernia",
      description: "Stomach bulges into chest through diaphragm",
      procedure: "Laparoscopic repair if symptomatic",
    },
  ],
  whyChooseUs: [
    {
      title: "Minimally Invasive Hernia Repair",
      description:
        "We use advanced laparoscopic and laser techniques for safe and effective hernia treatment with minimal downtime.",
    },
    {
      title: "Experienced Surgeons",
      description:
        "Our surgical team has vast experience in handling complex and recurrent hernia cases with high success rates.",
    },
  ],
};

export const gallstoneCondition: MedicalCondition = {
  id: "7",
  slug: "gallstone-treatment",
  overview: {
    title: "Gallstone Treatment – Laparoscopic Gallbladder Surgery",
    brief:
      "Gallstones are hardened deposits that form in the gallbladder and can lead to severe abdominal pain. We offer safe, effective laparoscopic gallbladder removal surgery for long-term relief.",
    alternateNames: [
      { language: "Hindi", name: "पित्त की पथरी" },
      { language: "Tamil", name: "பித்த பாறைகள்" },
    ],
  },
  aboutCondition: {
    title: "What are Gallstones?",
    description:
      "Gallstones are solid particles that form in the gallbladder due to imbalances in bile components. They may be as small as grains of sand or as large as a golf ball and can cause pain, inflammation, or blockages in the bile ducts.",
  },
  foodTriggers: [
    {
      name: "Fatty Foods",
      description: "Stimulate excessive bile release, triggering pain",
      bgColor: "bg-orange-100",
    },
    {
      name: "Fried Foods",
      description: "Difficult to digest and can worsen gallstone symptoms",
      bgColor: "bg-red-100",
    },
    {
      name: "Processed Meats",
      description: "High in unhealthy fats that increase cholesterol in bile",
      bgColor: "bg-green-100",
    },
    {
      name: "Dairy Products",
      description: "High-fat dairy can exacerbate gallbladder symptoms",
      bgColor: "bg-blue-100",
    },
    {
      name: "Sugary Foods",
      description: "May raise triglyceride levels and risk of gallstones",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Carbonated Beverages",
      description: "Cause bloating and discomfort",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Cholesterol Imbalance",
      description: "Excess cholesterol in bile forms crystals",
      icon: "alert-circle",
    },
    {
      title: "Poor Gallbladder Emptying",
      description: "Leads to stagnant bile, increasing risk",
      icon: "arrow-up",
    },
    {
      title: "Obesity",
      description: "Increases cholesterol levels in bile",
      icon: "pill",
    },
    {
      title: "Rapid Weight Loss",
      description: "Alters bile composition quickly",
      icon: "thermometer",
    },
    {
      title: "Pregnancy",
      description: "Hormonal changes affect bile flow",
      icon: "syringe",
    },
    {
      title: "High-Fat Diet",
      description: "Stimulates bile saturation",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Severe Abdominal Pain",
      description: "Sudden pain in the upper right or middle abdomen",
      icon: "image",
    },
    {
      title: "Nausea and Vomiting",
      description: "Common during gallstone attacks",
      icon: "pill",
    },
    {
      title: "Jaundice",
      description: "Yellowing of skin and eyes if bile duct is blocked",
      icon: "clock",
    },
    {
      title: "Fever and Chills",
      description: "May indicate gallbladder infection",
      icon: "thermometer",
    },
    {
      title: "Back or Shoulder Pain",
      description: "Pain may radiate to back or right shoulder",
      icon: "arrow-up",
    },
    {
      title: "Indigestion and Bloating",
      description: "After eating fatty or large meals",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Female Gender",
      description: "More prone due to hormonal influences",
      icon: "thermometer",
    },
    {
      title: "Obesity",
      description: "Increases cholesterol in bile",
      icon: "pill",
    },
    {
      title: "Sedentary Lifestyle",
      description: "Slows digestion and bile flow",
      icon: "clock",
    },
    {
      title: "Age Over 40",
      description: "Risk increases with age",
      icon: "alert-circle",
    },
    {
      title: "Diabetes",
      description: "Alters fat metabolism",
      icon: "arrow-up",
    },
    {
      title: "High-Fat Diet",
      description: "Promotes gallstone formation",
      icon: "image",
    },
  ],
  complications: [
    {
      title: "Cholecystitis",
      description: "Inflammation of the gallbladder",
      icon: "alert-circle",
    },
    {
      title: "Pancreatitis",
      description: "Blockage of pancreatic duct by gallstones",
      icon: "thermometer",
    },
    {
      title: "Jaundice",
      description: "Due to bile duct obstruction",
      icon: "pill",
    },
    {
      title: "Bile Duct Infection",
      description: "Serious and requires prompt treatment",
      icon: "syringe",
    },
    {
      title: "Gallbladder Rupture",
      description: "Rare but life-threatening condition",
      icon: "clock",
    },
    {
      title: "Bowel Obstruction",
      description: "Large stone may block intestine",
      icon: "image",
    },
  ],
  diagnosis: {
    description:
      "Gallstones are diagnosed using imaging tests and clinical evaluation of symptoms.",
    methods: [
      "Ultrasound (most common and effective)",
      "CT Scan (for complications or unclear cases)",
      "MRCP (to evaluate bile ducts)",
      "Blood Tests (to detect infection or inflammation)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Dietary Changes",
        description: "Low-fat, high-fiber diet to reduce symptoms",
      },
      {
        name: "Medications",
        description: "To dissolve cholesterol gallstones (used rarely)",
      },
      {
        name: "Observation",
        description: "If asymptomatic, stones may not require treatment",
      },
    ],
    surgical: [
      {
        name: "Laparoscopic Cholecystectomy",
        description:
          "Minimally invasive removal of the gallbladder to prevent further stone formation",
        benefits: [
          "Quick recovery",
          "Low risk of complications",
          "Permanent solution",
        ],
        recoveryTime: "3–5 days",
        anesthesia: "General",
      },
      {
        name: "Open Cholecystectomy",
        description:
          "Used for complicated cases or when laparoscopic approach is not possible",
        benefits: ["Effective in high-risk cases", "Comprehensive treatment"],
        recoveryTime: "7–10 days",
        anesthesia: "General",
      },
    ],
  },
  types: [
    {
      type: "Cholesterol Gallstones",
      description: "Most common type, formed from excess cholesterol",
      procedure: "Laparoscopic cholecystectomy",
    },
    {
      type: "Pigment Gallstones",
      description: "Formed from excess bilirubin; smaller and darker",
      procedure: "Gallbladder removal if symptomatic",
    },
    {
      type: "Mixed Gallstones",
      description: "Combination of cholesterol and pigment components",
      procedure: "Surgical removal recommended",
    },
  ],
  whyChooseUs: [
    {
      title: "Expert Laparoscopic Surgeons",
      description:
        "Our team specializes in gallbladder surgeries using the latest techniques for optimal outcomes.",
    },
    {
      title: "Advanced Facilities",
      description:
        "State-of-the-art operation theaters and recovery care ensure a smooth treatment experience.",
    },
  ],
};

export const appendicitisCondition: MedicalCondition = {
  id: "8",
  slug: "appendicitis-treatment",
  overview: {
    title: "Appendicitis Treatment – Laparoscopic Appendectomy",
    brief:
      "Appendicitis is a medical emergency where the appendix becomes inflamed and painful. We provide quick and minimally invasive laparoscopic appendectomy to relieve pain and prevent complications.",
    alternateNames: [
      { language: "Hindi", name: "अपेंडिक्स की सूजन" },
      { language: "Tamil", name: "அப்பெண்டிசைட்டிஸ்" },
    ],
  },
  aboutCondition: {
    title: "What is Appendicitis?",
    description:
      "Appendicitis is the inflammation of the appendix, a small pouch attached to the large intestine. If untreated, it can rupture and lead to severe complications such as infection or peritonitis.",
  },
  foodTriggers: [
    {
      name: "Spicy Foods",
      description: "Can worsen abdominal discomfort",
      bgColor: "bg-orange-100",
    },
    {
      name: "Fatty Foods",
      description: "Slow digestion and may increase pain",
      bgColor: "bg-red-100",
    },
    {
      name: "Carbonated Drinks",
      description: "Cause bloating and discomfort",
      bgColor: "bg-green-100",
    },
    {
      name: "Processed Foods",
      description: "Low in fiber, increasing constipation risk",
      bgColor: "bg-blue-100",
    },
    {
      name: "Dairy Products",
      description: "Can cause bloating and cramps in some people",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Red Meat",
      description: "Takes longer to digest, increasing pressure",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Blockage in Appendix",
      description: "Usually by stool, foreign body, or cancer",
      icon: "alert-circle",
    },
    {
      title: "Infection",
      description: "Gastrointestinal infection can lead to swelling",
      icon: "thermometer",
    },
    {
      title: "Inflammation",
      description: "Can trigger swelling and blockage",
      icon: "pill",
    },
    {
      title: "Trauma",
      description: "Injury to the abdomen may cause inflammation",
      icon: "arrow-up",
    },
    {
      title: "Tumors",
      description: "Rare, but can block the appendix",
      icon: "syringe",
    },
    {
      title: "Lymphoid Hyperplasia",
      description: "Enlargement of lymph tissue inside the appendix",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Abdominal Pain",
      description: "Starts near the navel and shifts to the lower right side",
      icon: "image",
    },
    {
      title: "Nausea and Vomiting",
      description: "Common early symptom of appendicitis",
      icon: "pill",
    },
    {
      title: "Loss of Appetite",
      description: "Happens early in the course of appendicitis",
      icon: "clock",
    },
    {
      title: "Fever",
      description: "Low-grade initially, may increase with complications",
      icon: "thermometer",
    },
    {
      title: "Constipation or Diarrhea",
      description: "Bowel movement changes may occur",
      icon: "arrow-up",
    },
    {
      title: "Swollen Abdomen",
      description: "May be tender to touch",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Age Between 10–30",
      description: "Most common in this age group",
      icon: "alert-circle",
    },
    {
      title: "Male Gender",
      description: "Slightly more common in males",
      icon: "pill",
    },
    {
      title: "Low Fiber Diet",
      description: "Can increase risk of blockage",
      icon: "clock",
    },
    {
      title: "Family History",
      description: "Increased likelihood if relatives had it",
      icon: "arrow-up",
    },
    {
      title: "Infections",
      description: "Stomach or intestinal infections increase risk",
      icon: "thermometer",
    },
    {
      title: "Obstruction in Appendix",
      description: "Due to stool or foreign object",
      icon: "image",
    },
  ],
  complications: [
    {
      title: "Ruptured Appendix",
      description: "Can cause life-threatening infection",
      icon: "alert-circle",
    },
    {
      title: "Peritonitis",
      description: "Infection of abdominal cavity lining",
      icon: "thermometer",
    },
    {
      title: "Abscess Formation",
      description: "Pus-filled pocket around appendix",
      icon: "pill",
    },
    {
      title: "Bowel Obstruction",
      description: "Scar tissue or infection may block intestines",
      icon: "syringe",
    },
    {
      title: "Sepsis",
      description: "Severe infection spreading through bloodstream",
      icon: "clock",
    },
    {
      title: "Post-surgical Complications",
      description: "Infection or bleeding at incision site",
      icon: "image",
    },
  ],
  diagnosis: {
    description:
      "Appendicitis is diagnosed through a combination of physical exam, lab tests, and imaging.",
    methods: [
      "Physical Examination (tenderness in right lower abdomen)",
      "Blood Tests (elevated WBC count)",
      "Ultrasound (common for kids and pregnant women)",
      "CT Scan (most accurate imaging method)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Antibiotics",
        description: "Used in early or uncomplicated cases",
      },
      {
        name: "Observation",
        description: "For mild symptoms, patient may be monitored closely",
      },
    ],
    surgical: [
      {
        name: "Laparoscopic Appendectomy",
        description:
          "Minimally invasive removal of the appendix using small incisions",
        benefits: [
          "Short recovery time",
          "Minimal scarring",
          "Lower infection risk",
        ],
        recoveryTime: "2–5 days",
        anesthesia: "General",
      },
      {
        name: "Open Appendectomy",
        description:
          "Traditional surgery used for ruptured or complicated cases",
        benefits: [
          "Effective in severe infections",
          "Direct access for cleaning",
        ],
        recoveryTime: "7–10 days",
        anesthesia: "General",
      },
    ],
  },
  types: [
    {
      type: "Acute Appendicitis",
      description: "Sudden onset, requires immediate surgery",
      procedure: "Laparoscopic or Open Appendectomy",
    },
    {
      type: "Chronic Appendicitis",
      description: "Mild, recurring pain over weeks or months",
      procedure: "Elective appendectomy",
    },
    {
      type: "Ruptured Appendicitis",
      description: "Leads to peritonitis and abscess",
      procedure: "Emergency open appendectomy",
    },
  ],
  whyChooseUs: [
    {
      title: "Emergency Care Available",
      description:
        "We provide 24/7 care for emergency appendicitis cases with rapid diagnosis and surgery.",
    },
    {
      title: "Minimally Invasive Techniques",
      description:
        "Our laparoscopic approach ensures faster recovery and minimal discomfort.",
    },
  ],
};

export const inguinalHerniaCondition: MedicalCondition = {
  id: "9",
  slug: "inguinal-hernia-treatment",
  overview: {
    title: "Inguinal Hernia Treatment – Laparoscopic Hernia Repair",
    brief:
      "Inguinal hernia occurs when tissue pushes through a weak spot in the groin muscles. We offer advanced laparoscopic hernia repair for quick recovery and minimal discomfort.",
    alternateNames: [
      { language: "Hindi", name: "इंगुइनल हर्निया" },
      { language: "Tamil", name: "கசிவு விரைவு சிகிச்சை" },
    ],
  },
  aboutCondition: {
    title: "What is Inguinal Hernia?",
    description:
      "An inguinal hernia is a bulge that occurs in the groin region when tissue, such as part of the intestine, protrudes through a weak spot in the abdominal muscles. It can be painful, especially during coughing or lifting heavy objects.",
  },
  foodTriggers: [
    {
      name: "Heavy Meals",
      description: "Increase abdominal pressure and worsen symptoms",
      bgColor: "bg-orange-100",
    },
    {
      name: "Spicy Foods",
      description: "Can cause heartburn, irritating the hernia",
      bgColor: "bg-red-100",
    },
    {
      name: "Caffeinated Drinks",
      description: "May relax the esophageal sphincter and increase reflux",
      bgColor: "bg-green-100",
    },
    {
      name: "Carbonated Beverages",
      description: "Cause bloating and abdominal pressure",
      bgColor: "bg-blue-100",
    },
    {
      name: "Citrus Fruits",
      description: "May cause acid reflux and discomfort",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Fried Foods",
      description: "Slow digestion and increase bloating",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Weak Abdominal Wall",
      description: "Congenital or age-related weakness in groin area",
      icon: "alert-circle",
    },
    {
      title: "Heavy Lifting",
      description: "Can cause sudden strain in the groin",
      icon: "arrow-up",
    },
    {
      title: "Chronic Coughing",
      description: "Increases pressure in abdominal cavity",
      icon: "thermometer",
    },
    {
      title: "Obesity",
      description: "Increases strain on abdominal muscles",
      icon: "pill",
    },
    {
      title: "Straining During Bowel Movements",
      description: "Leads to excessive pressure on the abdomen",
      icon: "syringe",
    },
    {
      title: "Previous Surgery",
      description: "May weaken muscle or cause scar tissue",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Bulge in Groin",
      description: "Visible and possibly painful bulge in lower abdomen",
      icon: "image",
    },
    {
      title: "Pain When Bending or Lifting",
      description: "Discomfort during physical activity",
      icon: "pill",
    },
    {
      title: "Heaviness in Groin",
      description: "Feeling of dragging or heaviness",
      icon: "clock",
    },
    {
      title: "Swelling Around Testicles",
      description: "In men, hernia may extend into the scrotum",
      icon: "thermometer",
    },
    {
      title: "Burning or Aching Sensation",
      description: "At the bulge site, especially after standing",
      icon: "alert-circle",
    },
    {
      title: "Nausea or Vomiting",
      description: "If the hernia becomes strangulated",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Male Gender",
      description: "More common in men due to anatomy",
      icon: "pill",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to weak muscles",
      icon: "clock",
    },
    {
      title: "Chronic Constipation",
      description: "Frequent straining during bowel movements",
      icon: "arrow-up",
    },
    {
      title: "Smoking",
      description: "Leads to chronic coughing and muscle weakness",
      icon: "thermometer",
    },
    {
      title: "Premature Birth",
      description: "Underdeveloped muscles increase risk",
      icon: "image",
    },
    {
      title: "Heavy Physical Labor",
      description: "Jobs involving lifting and straining",
      icon: "alert-circle",
    },
  ],
  complications: [
    {
      title: "Strangulated Hernia",
      description: "Blood supply to herniated tissue is cut off",
      icon: "alert-circle",
    },
    {
      title: "Incarcerated Hernia",
      description: "Hernia becomes trapped and cannot be pushed back",
      icon: "thermometer",
    },
    {
      title: "Bowel Obstruction",
      description: "Trapped intestine may cause blockage",
      icon: "pill",
    },
    {
      title: "Infection",
      description: "Especially in strangulated cases",
      icon: "syringe",
    },
    {
      title: "Recurrence",
      description: "Can recur if not properly repaired",
      icon: "clock",
    },
    {
      title: "Testicular Damage",
      description: "In men if blood supply is affected",
      icon: "image",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis is usually clinical, confirmed by physical exam and imaging if needed.",
    methods: [
      "Physical Examination (detect bulge)",
      "Ultrasound (to confirm and check severity)",
      "MRI or CT Scan (in complex or recurrent cases)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Watchful Waiting",
        description:
          "For small hernias without symptoms, regular monitoring is an option",
      },
      {
        name: "Truss or Hernia Belt",
        description:
          "Supports the bulge temporarily but is not a permanent solution",
      },
    ],
    surgical: [
      {
        name: "Laparoscopic Hernia Repair",
        description:
          "Minimally invasive surgery using small incisions and mesh placement",
        benefits: ["Quick recovery", "Minimal pain", "Lower recurrence rate"],
        recoveryTime: "1–2 weeks",
        anesthesia: "General",
      },
      {
        name: "Open Hernia Repair (Hernioplasty)",
        description:
          "Traditional surgery involving larger incision and mesh placement",
        benefits: [
          "Suitable for large or complex hernias",
          "Effective in emergency cases",
        ],
        recoveryTime: "2–4 weeks",
        anesthesia: "Local/General",
      },
    ],
  },
  types: [
    {
      type: "Indirect Inguinal Hernia",
      description: "Congenital; follows the path of the inguinal canal",
      procedure: "Laparoscopic or open repair",
    },
    {
      type: "Direct Inguinal Hernia",
      description: "Develops over time due to weakened muscles",
      procedure: "Mesh-based hernioplasty",
    },
    {
      type: "Incarcerated Hernia",
      description: "Stuck in the groin, requires immediate surgery",
      procedure: "Open surgical repair",
    },
  ],
  whyChooseUs: [
    {
      title: "Experienced Surgeons",
      description:
        "Our specialists have performed hundreds of successful hernia repairs.",
    },
    {
      title: "Advanced Laparoscopy",
      description:
        "We use the latest minimally invasive techniques for faster recovery.",
    },
  ],
};

export const umbilicalHerniaCondition: MedicalCondition = {
  id: "10",
  slug: "umbilical-hernia-treatment",
  overview: {
    title: "Umbilical Hernia Treatment – Safe & Effective Repair",
    brief:
      "Umbilical hernia occurs when part of the intestine protrudes through the abdominal muscles near the navel. We provide advanced hernia repair with minimal discomfort and quick recovery.",
    alternateNames: [
      { language: "Hindi", name: "नाभि हर्निया" },
      { language: "Tamil", name: "தொப்புள் கசிவு சிகிச்சை" },
    ],
  },
  aboutCondition: {
    title: "What is Umbilical Hernia?",
    description:
      "An umbilical hernia is a condition where part of the intestine bulges through the abdominal wall near the belly button. It is common in infants but can also occur in adults due to increased abdominal pressure.",
  },
  foodTriggers: [
    {
      name: "Heavy Meals",
      description: "Can increase abdominal pressure",
      bgColor: "bg-orange-100",
    },
    {
      name: "Spicy Foods",
      description: "Can cause bloating or irritation",
      bgColor: "bg-red-100",
    },
    {
      name: "Caffeine",
      description: "May contribute to acid reflux",
      bgColor: "bg-green-100",
    },
    {
      name: "Fizzy Drinks",
      description: "Lead to gas buildup and abdominal distension",
      bgColor: "bg-blue-100",
    },
    {
      name: "Citrus Fruits",
      description: "May irritate digestive tract",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Fatty Foods",
      description: "Slow down digestion and worsen symptoms",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Incomplete Closure of Abdominal Wall",
      description: "Common in newborns due to incomplete development",
      icon: "alert-circle",
    },
    {
      title: "Obesity",
      description: "Puts extra pressure on the abdominal muscles",
      icon: "pill",
    },
    {
      title: "Pregnancy",
      description: "Increases abdominal pressure in women",
      icon: "thermometer",
    },
    {
      title: "Chronic Coughing",
      description: "Strains the abdominal wall over time",
      icon: "arrow-up",
    },
    {
      title: "Straining During Bowel Movements",
      description: "Leads to weakening of abdominal muscles",
      icon: "syringe",
    },
    {
      title: "Previous Abdominal Surgery",
      description: "Can weaken the area around the navel",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Bulge Near Belly Button",
      description: "Soft swelling near the navel",
      icon: "image",
    },
    {
      title: "Pain or Discomfort",
      description: "Especially when coughing, lifting, or bending",
      icon: "pill",
    },
    {
      title: "Swelling",
      description: "More noticeable when standing or straining",
      icon: "clock",
    },
    {
      title: "Nausea",
      description: "In cases of obstruction or strangulation",
      icon: "thermometer",
    },
    {
      title: "Vomiting",
      description: "Occurs if blood flow is restricted",
      icon: "alert-circle",
    },
    {
      title: "Constipation",
      description: "May result from bowel entrapment",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Premature Birth",
      description: "Increased chance due to underdeveloped abdominal wall",
      icon: "pill",
    },
    {
      title: "Obesity",
      description: "Higher risk due to excess weight",
      icon: "clock",
    },
    {
      title: "Multiple Pregnancies",
      description: "More strain on abdominal wall",
      icon: "arrow-up",
    },
    {
      title: "Chronic Constipation",
      description: "Frequent straining increases pressure",
      icon: "thermometer",
    },
    {
      title: "Abdominal Surgery",
      description: "Weakens muscle around the umbilicus",
      icon: "image",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to hernias",
      icon: "alert-circle",
    },
  ],
  complications: [
    {
      title: "Strangulation",
      description: "Cut-off blood supply to herniated tissue",
      icon: "alert-circle",
    },
    {
      title: "Incarceration",
      description: "Trapped hernia causing bowel obstruction",
      icon: "thermometer",
    },
    {
      title: "Bowel Obstruction",
      description: "Entrapped intestine causes blockage",
      icon: "pill",
    },
    {
      title: "Infection",
      description: "Can occur in case of tissue death",
      icon: "syringe",
    },
    {
      title: "Rupture",
      description: "Rare but serious tearing of herniated bowel",
      icon: "clock",
    },
    {
      title: "Recurrence",
      description: "Possible if not repaired properly",
      icon: "image",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis is made through a physical examination. Imaging is done in complex or unclear cases.",
    methods: [
      "Physical Exam (to detect bulge)",
      "Ultrasound (especially in infants or uncertain diagnosis)",
      "CT or MRI (for complications or surgical planning)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Observation",
        description:
          "In infants, many umbilical hernias close on their own by age 1–2",
      },
    ],
    surgical: [
      {
        name: "Umbilical Hernia Repair",
        description:
          "Surgery to push the bulge back and reinforce the abdominal wall",
        benefits: [
          "Prevents complications",
          "Provides permanent relief",
          "Short recovery time",
        ],
        recoveryTime: "1–2 weeks",
        anesthesia: "General or Local",
      },
      {
        name: "Laparoscopic Repair",
        description:
          "Minimally invasive approach for faster healing and less pain",
        benefits: ["Small incisions", "Quick recovery", "Low recurrence"],
        recoveryTime: "1 week",
        anesthesia: "General",
      },
    ],
  },
  types: [
    {
      type: "Congenital Umbilical Hernia",
      description: "Present at birth, often resolves on its own",
      procedure: "Surgical repair if persists beyond 2 years",
    },
    {
      type: "Acquired Umbilical Hernia",
      description: "Occurs in adults due to strain or weakness",
      procedure: "Open or laparoscopic surgical repair",
    },
    {
      type: "Incarcerated Umbilical Hernia",
      description: "Trapped tissue requiring emergency surgery",
      procedure: "Immediate open repair",
    },
  ],
  whyChooseUs: [
    {
      title: "Specialized Hernia Care",
      description:
        "Our surgeons are experienced in treating both pediatric and adult hernias with precision.",
    },
    {
      title: "Minimally Invasive Options",
      description:
        "We offer laparoscopic procedures with quick recovery and minimal scarring.",
    },
  ],
};

export const staplerCircumcision: MedicalCondition = {
  id: "11",
  slug: "stapler-circumcision",
  overview: {
    title: "Stapler Circumcision Treatment",
    brief:
      "Stapler circumcision is a modern surgical procedure offering faster healing and minimal pain compared to traditional circumcision methods.",
    alternateNames: [
      { language: "Hindi", name: "स्टेपलर खतना" },
      { language: "Tamil", name: "ஸ்டேப்பிளர் உருக்கணம்" },
    ],
  },
  aboutCondition: {
    title: "What is Stapler Circumcision?",
    description:
      "Stapler circumcision uses a specialized stapling device to remove the foreskin quickly and with minimal bleeding. This technique reduces operative time, pain, and promotes faster recovery.",
    images: [
      {
        src: "https://example.com/images/stapler-circumcision.jpg",
        alt: "Stapler circumcision surgical procedure",
      },
    ],
  },
  causes: [
    {
      title: "Phimosis",
      description:
        "A condition where the foreskin cannot be fully retracted over the glans, causing discomfort and hygiene issues.",
      icon: "warning",
    },
    {
      title: "Recurrent Infections",
      description:
        "Repeated infections of the foreskin or glans often necessitate circumcision.",
      icon: "medkit",
    },
  ],
  symptoms: [
    {
      title: "Tight foreskin",
      description: "Difficulty or pain while retracting the foreskin.",
      icon: "pain",
    },
    {
      title: "Inflammation",
      description: "Redness, swelling, and discomfort in the foreskin area.",
      icon: "inflammation",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves a physical examination by a urologist to assess foreskin tightness and any associated infections.",
    methods: ["Physical examination", "Patient history review"],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Topical Steroids",
        description: "Applied to loosen the foreskin in mild cases.",
      },
    ],
    surgical: [
      {
        name: "Stapler Circumcision",
        description:
          "A quick, minimally invasive procedure using a stapling device for circumcision.",
        benefits: [
          "Minimal bleeding",
          "Reduced operative time",
          "Faster recovery",
        ],
        recoveryTime: "7-10 days",
        anesthesia: "Local or general anesthesia",
      },
    ],
  },
  types: [
    {
      type: "Stapler Circumcision",
      description:
        "Circumcision using a stapler device for efficient foreskin removal.",
      procedure:
        "The stapler device is applied to the foreskin, staples are deployed to cut and close simultaneously, reducing bleeding.",
    },
    {
      type: "Conventional Circumcision",
      description:
        "Traditional surgical removal of the foreskin with a scalpel.",
      procedure: "Foreskin is manually excised and sutured.",
    },
  ],
  whyChooseUs: [
    {
      title: "Advanced Stapler Circumcision Technique",
      description:
        "We use state-of-the-art stapler devices ensuring minimal pain, less bleeding, and faster healing.",
    },
  ],
};

export const kidneyStoneCondition: MedicalCondition = {
  id: "11",
  slug: "kidney-stone-treatment",
  overview: {
    title: "Kidney Stone Treatment – Fast & Effective Relief",
    brief:
      "Kidney stones are hard deposits formed from minerals in the urine. We provide advanced treatment options to relieve pain and remove stones safely.",
    alternateNames: [
      { language: "Hindi", name: "गुर्दे की पथरी" },
      { language: "Tamil", name: "சிறுநீரகக் கல்" },
    ],
  },
  aboutCondition: {
    title: "What is a Kidney Stone?",
    description:
      "Kidney stones are solid mineral and salt deposits that form inside the kidneys. They can cause severe pain and urinary issues when they pass through the urinary tract.",
  },
  foodTriggers: [
    {
      name: "High Oxalate Foods",
      description: "Such as spinach, nuts, and chocolate increase stone risk",
      bgColor: "bg-green-100",
    },
    {
      name: "Excess Salt",
      description: "Raises calcium levels in urine, promoting stone formation",
      bgColor: "bg-yellow-100",
    },
    {
      name: "High Protein Diet",
      description: "Can increase stone-forming substances in urine",
      bgColor: "bg-orange-100",
    },
    {
      name: "Sugary Drinks",
      description: "Increase risk of stone formation and dehydration",
      bgColor: "bg-red-100",
    },
    {
      name: "Caffeine",
      description: "May cause dehydration if consumed excessively",
      bgColor: "bg-blue-100",
    },
  ],
  causes: [
    {
      title: "Dehydration",
      description: "Low fluid intake concentrates urine and promotes stones",
      icon: "thermometer",
    },
    {
      title: "High Mineral Levels",
      description: "Excess calcium, oxalate, or uric acid in urine",
      icon: "alert-circle",
    },
    {
      title: "Dietary Factors",
      description: "High salt, protein, or oxalate intake",
      icon: "pill",
    },
    {
      title: "Obesity",
      description: "Increases stone risk due to metabolic changes",
      icon: "arrow-up",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to kidney stones",
      icon: "image",
    },
    {
      title: "Certain Medical Conditions",
      description:
        "Like gout, hyperparathyroidism, or urinary tract infections",
      icon: "syringe",
    },
  ],
  symptoms: [
    {
      title: "Severe Flank Pain",
      description: "Sharp pain in the side and back, radiating to the groin",
      icon: "alert-circle",
    },
    {
      title: "Blood in Urine",
      description: "Urine may appear pink, red, or brown",
      icon: "thermometer",
    },
    {
      title: "Frequent Urination",
      description: "Urgency and discomfort while urinating",
      icon: "clock",
    },
    {
      title: "Nausea and Vomiting",
      description: "Common during intense pain episodes",
      icon: "pill",
    },
    {
      title: "Cloudy or Foul-Smelling Urine",
      description: "May indicate infection",
      icon: "syringe",
    },
    {
      title: "Fever and Chills",
      description: "Signs of a urinary tract infection",
      icon: "image",
    },
  ],
  riskFactors: [
    {
      title: "Dehydration",
      description: "Not drinking enough fluids",
      icon: "thermometer",
    },
    {
      title: "High Salt Diet",
      description: "Promotes calcium buildup",
      icon: "arrow-up",
    },
    {
      title: "Obesity",
      description: "Increases risk due to metabolic changes",
      icon: "pill",
    },
    {
      title: "Family History",
      description: "Genetic predisposition",
      icon: "image",
    },
    {
      title: "Certain Medical Conditions",
      description: "Including gout, diabetes, and renal tubular acidosis",
      icon: "syringe",
    },
  ],
  complications: [
    {
      title: "Urinary Tract Infection",
      description: "Infection due to blockage",
      icon: "syringe",
    },
    {
      title: "Hydronephrosis",
      description: "Swelling of a kidney due to urine buildup",
      icon: "clock",
    },
    {
      title: "Kidney Damage",
      description: "Long-term obstruction can cause damage",
      icon: "alert-circle",
    },
    {
      title: "Sepsis",
      description: "Serious infection spreading in the body",
      icon: "image",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves urine tests and imaging to detect stones and their location.",
    methods: [
      "Urinalysis (to check for blood and infection)",
      "Blood Tests (to assess kidney function)",
      "Ultrasound (to visualize stones)",
      "CT Scan (detailed imaging for stone size and position)",
      "X-rays (less commonly used)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Pain Management",
        description: "Using medications to relieve pain during stone passage",
      },
      {
        name: "Increased Hydration",
        description: "Drinking plenty of fluids to help pass stones",
      },
      {
        name: "Medical Expulsive Therapy",
        description:
          "Medications such as alpha-blockers to relax urinary tract muscles",
      },
    ],
    surgical: [
      {
        name: "Extracorporeal Shock Wave Lithotripsy (ESWL)",
        description:
          "Non-invasive treatment using shock waves to break stones into smaller pieces",
        benefits: [
          "Minimally invasive",
          "Outpatient procedure",
          "Quick recovery",
        ],
        recoveryTime: "Few days",
        anesthesia: "Sedation or general",
      },
      {
        name: "Ureteroscopy",
        description:
          "Endoscopic removal or fragmentation of stones through the urinary tract",
        benefits: [
          "Direct stone removal",
          "Effective for mid and lower urinary tract stones",
        ],
        recoveryTime: "1 week",
        anesthesia: "General",
      },
      {
        name: "Percutaneous Nephrolithotomy (PCNL)",
        description:
          "Surgical removal of large stones via a small incision in the back",
        benefits: [
          "Effective for large or complex stones",
          "Short hospital stay",
        ],
        recoveryTime: "1-2 weeks",
        anesthesia: "General",
      },
    ],
  },
  types: [
    {
      type: "Calcium Stones",
      description: "Most common type formed from calcium oxalate or phosphate",
      procedure:
        "Usually treated with hydration and pain management. Larger stones may require ESWL or ureteroscopy for removal.",
    },
    {
      type: "Struvite Stones",
      description: "Associated with urinary tract infections",
      procedure:
        "Treatment involves antibiotics for infection and removal via ESWL or percutaneous nephrolithotomy (PCNL).",
    },
    {
      type: "Uric Acid Stones",
      description: "Formed due to high uric acid levels",
      procedure:
        "Managed by dietary changes, medication to reduce uric acid, and sometimes ESWL or ureteroscopy for stone removal.",
    },
    {
      type: "Cystine Stones",
      description: "Rare stones caused by a genetic disorder",
      procedure:
        "Require specialized treatment including increased hydration, medications, and sometimes surgical removal via PCNL or ureteroscopy.",
    },
  ],

  whyChooseUs: [
    {
      title: "Expert Urologists",
      description: "Specialized in advanced kidney stone treatment",
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Equipped with latest imaging and minimally invasive surgical tools",
    },
  ],
};

export const enlargedProstateCondition: MedicalCondition = {
  id: "10",
  slug: "enlarged-prostate-treatment",
  overview: {
    title: "Enlarged Prostate (BPH) - Symptoms and Treatment Options",
    brief:
      "Enlarged prostate, or benign prostatic hyperplasia (BPH), is a common condition in older men causing urinary difficulties. Our expert treatments help relieve symptoms and improve quality of life.",
    alternateNames: [
      { language: "Hindi", name: "वृद्ध प्रोस्टेट" },
      { language: "Tamil", name: "நெருக்கமான பிறுதிப் பாகம்" },
    ],
  },
  aboutCondition: {
    title: "What is Enlarged Prostate?",
    description:
      "Enlarged prostate, medically known as benign prostatic hyperplasia (BPH), is the non-cancerous enlargement of the prostate gland that affects urinary function. It commonly occurs as men age, causing symptoms like difficulty urinating, frequent urination, and incomplete bladder emptying.",
  },
  foodTriggers: [
    {
      name: "Caffeine",
      description: "Can irritate the bladder and increase urinary urgency",
      bgColor: "bg-green-100",
    },
    {
      name: "Alcohol",
      description: "Acts as a diuretic and worsens urinary symptoms",
      bgColor: "bg-amber-100",
    },
    {
      name: "Spicy Foods",
      description: "May irritate the urinary tract and worsen symptoms",
      bgColor: "bg-orange-100",
    },
    {
      name: "Salty Foods",
      description: "Can cause water retention and bladder irritation",
      bgColor: "bg-red-100",
    },
    {
      name: "Carbonated Drinks",
      description: "May increase bladder irritation and frequency",
      bgColor: "bg-blue-100",
    },
  ],
  causes: [
    {
      title: "Age-Related Hormonal Changes",
      description:
        "Hormonal shifts with aging cause prostate cells to multiply, enlarging the gland.",
      icon: "clock",
    },
    {
      title: "Family History",
      description: "Genetics may increase susceptibility to BPH.",
      icon: "pill",
    },
    {
      title: "Lifestyle Factors",
      description:
        "Obesity, lack of exercise, and poor diet can contribute to BPH development.",
      icon: "arrow-up",
    },
    {
      title: "Medical Conditions",
      description:
        "Diabetes and heart disease are linked to increased BPH risk.",
      icon: "thermometer",
    },
  ],
  symptoms: [
    {
      title: "Frequent Urination",
      description: "Especially at night (nocturia)",
      icon: "thermometer",
    },
    {
      title: "Weak Urine Stream",
      description: "Reduced flow and dribbling after urination",
      icon: "arrow-up",
    },
    {
      title: "Difficulty Starting Urination",
      description: "Straining or hesitancy in beginning urine flow",
      icon: "pill",
    },
    {
      title: "Incomplete Bladder Emptying",
      description: "Feeling that the bladder is not fully emptied",
      icon: "clock",
    },
    {
      title: "Urgency to Urinate",
      description: "Sudden strong need to urinate",
      icon: "syringe",
    },
    {
      title: "Urinary Retention",
      description: "Inability to urinate, requiring medical emergency",
      icon: "alert-circle",
    },
  ],
  riskFactors: [
    {
      title: "Age Over 50",
      description: "Risk increases significantly with age",
      icon: "clock",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to BPH",
      icon: "pill",
    },
    {
      title: "Obesity",
      description: "Higher body weight is linked to BPH development",
      icon: "arrow-up",
    },
    {
      title: "Lack of Physical Activity",
      description: "Sedentary lifestyle increases risk",
      icon: "thermometer",
    },
    {
      title: "Diabetes",
      description: "Increases BPH risk due to hormonal imbalances",
      icon: "syringe",
    },
  ],
  complications: [
    {
      title: "Urinary Tract Infections",
      description: "Incomplete bladder emptying can cause infections",
      icon: "pill",
    },
    {
      title: "Bladder Stones",
      description: "Stagnant urine can lead to stone formation",
      icon: "arrow-up",
    },
    {
      title: "Bladder Damage",
      description: "Increased pressure can weaken bladder muscles",
      icon: "clock",
    },
    {
      title: "Kidney Damage",
      description: "Severe urinary retention can harm kidneys",
      icon: "thermometer",
    },
    {
      title: "Acute Urinary Retention",
      description: "Sudden inability to urinate requiring emergency care",
      icon: "alert-circle",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves physical exam including digital rectal exam (DRE), urine tests, ultrasound, and sometimes uroflowmetry or cystoscopy to assess the urinary tract and prostate size.",
    methods: [
      "Digital Rectal Examination (DRE)",
      "Urinalysis to detect infection or blood",
      "Prostate-Specific Antigen (PSA) blood test",
      "Ultrasound imaging of prostate and bladder",
      "Uroflowmetry to measure urine flow rate",
      "Cystoscopy to visualize the urethra and bladder",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Medications",
        description:
          "Alpha-blockers to relax prostate muscles and 5-alpha-reductase inhibitors to shrink the prostate.",
      },
      {
        name: "Lifestyle Changes",
        description:
          "Reducing fluid intake before bedtime, limiting caffeine and alcohol, and regular exercise.",
      },
      {
        name: "Bladder Training",
        description:
          "Techniques to improve bladder control and reduce urgency.",
      },
    ],
    surgical: [
      {
        name: "Transurethral Resection of the Prostate (TURP)",
        description:
          "A common surgery that removes prostate tissue through the urethra to relieve obstruction.",
        benefits: [
          "Effective symptom relief",
          "Widely performed with good success rates",
          "Improves urine flow",
        ],
        recoveryTime: "2-4 weeks",
        anesthesia: "General or spinal",
      },
      {
        name: "Laser Therapy",
        description:
          "Minimally invasive laser treatments to remove or shrink prostate tissue.",
        benefits: [
          "Less bleeding and faster recovery",
          "Daycare or short hospital stay",
        ],
        recoveryTime: "1-2 weeks",
        anesthesia: "Local or general",
      },
      {
        name: "Prostatectomy",
        description:
          "Surgical removal of part or all of the prostate in severe cases.",
        benefits: ["Effective for very large prostates or complicated cases"],
        recoveryTime: "4-6 weeks",
        anesthesia: "General",
      },
    ],
  },
  types: [
    {
      type: "Median Lobe Enlargement",
      description:
        "Enlargement of the middle part of the prostate pressing on the bladder neck.",
      procedure:
        "TURP or laser surgery to remove excess tissue and relieve bladder outlet obstruction.",
    },
    {
      type: "Lateral Lobe Enlargement",
      description:
        "Enlargement of the side lobes of the prostate affecting the urethra.",
      procedure:
        "Medications or surgical procedures like TURP based on severity.",
    },
    {
      type: "Peripheral Zone Enlargement",
      description:
        "Rarely causes obstruction but may be detected during exams.",
      procedure:
        "Usually monitored unless symptoms arise; biopsy may be done to rule out cancer.",
    },
  ],
  whyChooseUs: [
    {
      title: "Expert Urologists",
      description:
        "Our skilled urologists have years of experience treating BPH with personalized care.",
    },
    {
      title: "Advanced Diagnostic Tools",
      description:
        "We use the latest technology including ultrasound and uroflowmetry for accurate diagnosis.",
    },
    {
      title: "Comprehensive Treatment Options",
      description:
        "From medication to minimally invasive surgeries, we provide tailored treatments for every patient.",
    },
    {
      title: "Patient-Centered Care",
      description:
        "We prioritize comfort, education, and support throughout your treatment journey.",
    },
  ],
};

export const hysterectomyCondition: MedicalCondition = {
  id: "11",
  slug: "hysterectomy-procedure-treatment",
  overview: {
    title: "Hysterectomy - Procedure, Types & Recovery",
    brief:
      "Hysterectomy is a surgical procedure to remove the uterus, often used to treat various gynecological conditions. Learn about types, reasons, and recovery.",
    alternateNames: [
      { language: "Hindi", name: "गर्भाशय निष्कासन" },
      { language: "Tamil", name: "கருப்பைப் பாய் அகற்றல்" },
    ],
  },
  aboutCondition: {
    title: "What is a Hysterectomy?",
    description:
      "A hysterectomy is a surgical operation to remove the uterus partially or completely. It is performed for several medical reasons including fibroids, heavy bleeding, uterine prolapse, or cancer.",
  },
  foodTriggers: [
    {
      name: "Heavy or Spicy Foods",
      description: "Can increase inflammation and slow recovery after surgery.",
      bgColor: "bg-orange-100",
    },
    {
      name: "Caffeine",
      description: "May increase discomfort or dehydration post-surgery.",
      bgColor: "bg-green-100",
    },
    {
      name: "Alcohol",
      description: "Impairs healing and may interact with medications.",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Uterine Fibroids",
      description: "Noncancerous growths causing pain or heavy bleeding.",
      icon: "pill",
    },
    {
      title: "Endometriosis",
      description:
        "Tissue similar to uterine lining grows outside the uterus causing pain.",
      icon: "thermometer",
    },
    {
      title: "Uterine Prolapse",
      description:
        "Uterus descends into the vaginal canal due to weakened muscles.",
      icon: "arrow-up",
    },
    {
      title: "Cancer",
      description:
        "Cancer of the uterus, cervix, or ovaries may require hysterectomy.",
      icon: "alert-circle",
    },
    {
      title: "Chronic Pelvic Pain or Bleeding",
      description:
        "When other treatments fail, hysterectomy may be recommended.",
      icon: "clock",
    },
  ],
  symptoms: [
    {
      title: "Heavy or Prolonged Menstrual Bleeding",
      description: "Excessive bleeding interfering with daily life.",
      icon: "thermometer",
    },
    {
      title: "Pelvic Pain or Pressure",
      description: "Discomfort or fullness in the pelvic area.",
      icon: "arrow-up",
    },
    {
      title: "Frequent Urination",
      description: "Pressure on the bladder causing urgency.",
      icon: "pill",
    },
    {
      title: "Pain During Intercourse",
      description: "Discomfort affecting sexual activity.",
      icon: "syringe",
    },
    {
      title: "Uterine Prolapse Symptoms",
      description: "Feeling of something falling out of the vagina.",
      icon: "alert-circle",
    },
  ],
  riskFactors: [
    {
      title: "Age Over 35",
      description: "Most common in women aged 35 to 50.",
      icon: "clock",
    },
    {
      title: "History of Uterine Fibroids",
      description: "Fibroids increase risk for hysterectomy.",
      icon: "pill",
    },
    {
      title: "Endometriosis or Pelvic Infections",
      description: "Chronic conditions leading to surgery.",
      icon: "thermometer",
    },
    {
      title: "Previous Pelvic Surgery",
      description: "Scar tissue or complications may contribute.",
      icon: "arrow-up",
    },
  ],
  complications: [
    {
      title: "Infection",
      description: "Risk of wound or pelvic infection post-surgery.",
      icon: "alert-circle",
    },
    {
      title: "Bleeding",
      description: "Excessive bleeding during or after the procedure.",
      icon: "pill",
    },
    {
      title: "Damage to Nearby Organs",
      description:
        "Possible injury to bladder, bowel, or blood vessels during surgery.",
      icon: "thermometer",
    },
    {
      title: "Early Menopause",
      description:
        "If ovaries are removed, estrogen levels drop leading to menopause symptoms.",
      icon: "clock",
    },
    {
      title: "Blood Clots",
      description:
        "Risk of deep vein thrombosis or pulmonary embolism after surgery.",
      icon: "arrow-up",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves pelvic examination, ultrasound, MRI, blood tests, and biopsy if cancer is suspected.",
    methods: [
      "Pelvic Exam",
      "Ultrasound Imaging",
      "MRI Scan",
      "Blood Tests",
      "Endometrial Biopsy",
      "Hysteroscopy",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Medication",
        description:
          "Hormonal treatments or pain relievers to manage symptoms before surgery.",
      },
      {
        name: "Lifestyle Modifications",
        description:
          "Diet, exercise, and symptom tracking to delay surgery if possible.",
      },
    ],
    surgical: [
      {
        name: "Total Hysterectomy",
        description: "Removal of the entire uterus including the cervix.",
        benefits: [
          "Complete relief from uterine conditions",
          "Prevents uterine cancer",
        ],
        recoveryTime: "6-8 weeks",
        anesthesia: "General or spinal",
      },
      {
        name: "Subtotal (Partial) Hysterectomy",
        description:
          "Removal of the upper part of the uterus, leaving the cervix intact.",
        benefits: ["Shorter recovery time", "Preserves cervical support"],
        recoveryTime: "4-6 weeks",
        anesthesia: "General or spinal",
      },
      {
        name: "Radical Hysterectomy",
        description:
          "Removal of uterus, surrounding tissues, cervix, and upper vagina, mainly for cancer treatment.",
        benefits: ["Extensive removal for cancer control"],
        recoveryTime: "8-12 weeks",
        anesthesia: "General",
      },
      {
        name: "Approaches",
        description:
          "Hysterectomy can be performed via abdominal incision, vaginally, or laparoscopically (minimally invasive).",
        benefits: ["abcdef"],
        recoveryTime: "8-12 weeks",
        anesthesia: "General",
      },
    ],
  },
  types: [
    {
      type: "Total Hysterectomy",
      description: "Complete removal of uterus and cervix.",
      procedure:
        "Performed abdominally, vaginally, or laparoscopically depending on the case.",
    },
    {
      type: "Subtotal (Partial) Hysterectomy",
      description: "Removal of the uterus body, cervix remains.",
      procedure:
        "Often done laparoscopically or abdominally, shorter recovery.",
    },
    {
      type: "Radical Hysterectomy",
      description:
        "Complete removal including uterus, cervix, and surrounding tissues for cancer cases.",
      procedure: "Performed abdominally with possible lymph node removal.",
    },
  ],
  whyChooseUs: [
    {
      title: "Experienced Gynecologic Surgeons",
      description:
        "Our surgeons specialize in minimally invasive and complex hysterectomy procedures.",
    },
    {
      title: "Comprehensive Preoperative Care",
      description:
        "Detailed evaluation and counseling to prepare you for surgery and recovery.",
    },
    {
      title: "Advanced Surgical Technology",
      description:
        "Use of laparoscopic and robotic-assisted surgery for better outcomes and faster healing.",
    },
    {
      title: "Personalized Postoperative Support",
      description:
        "We provide ongoing care and rehabilitation to ensure optimal recovery.",
    },
  ],
};

export const myomectomyCondition: MedicalCondition = {
  id: "12",
  slug: "myomectomy-procedure-treatment",
  overview: {
    title: "Myomectomy - Procedure, Types & Recovery",
    brief:
      "Myomectomy is a surgical procedure to remove uterine fibroids while preserving the uterus. Learn about types, indications, and recovery.",
    alternateNames: [
      { language: "Hindi", name: "मायोमेक्टॉमी" },
      { language: "Tamil", name: "மயோமேக்டோமி" },
    ],
  },
  aboutCondition: {
    title: "What is Myomectomy?",
    description:
      "Myomectomy is a surgical operation to remove fibroids (noncancerous growths) from the uterus, aimed at relieving symptoms while maintaining fertility.",
  },
  foodTriggers: [
    {
      name: "High-fat Foods",
      description:
        "May increase estrogen levels, potentially worsening fibroids.",
      bgColor: "bg-orange-100",
    },
    {
      name: "Processed Foods",
      description: "Can promote inflammation and slow healing.",
      bgColor: "bg-green-100",
    },
    {
      name: "Caffeine",
      description:
        "May worsen symptoms like pain or discomfort pre- and post-surgery.",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Hormonal Imbalance",
      description:
        "Excess estrogen and progesterone can promote fibroid growth.",
      icon: "pill",
    },
    {
      title: "Genetic Factors",
      description: "Family history increases risk of developing fibroids.",
      icon: "thermometer",
    },
    {
      title: "Age and Reproductive History",
      description:
        "Common in women aged 30-40, especially those who have not had children.",
      icon: "arrow-up",
    },
    {
      title: "Obesity",
      description: "Higher body weight linked to increased risk.",
      icon: "alert-circle",
    },
  ],
  symptoms: [
    {
      title: "Heavy Menstrual Bleeding",
      description: "Excessive bleeding during periods.",
      icon: "thermometer",
    },
    {
      title: "Pelvic Pain or Pressure",
      description: "Discomfort or fullness in the lower abdomen.",
      icon: "arrow-up",
    },
    {
      title: "Frequent Urination",
      description: "Pressure on the bladder causing urgency.",
      icon: "pill",
    },
    {
      title: "Pain During Intercourse",
      description: "Discomfort affecting sexual activity.",
      icon: "syringe",
    },
    {
      title: "Enlarged Abdomen",
      description: "Fibroids causing noticeable swelling.",
      icon: "alert-circle",
    },
  ],
  riskFactors: [
    {
      title: "Age between 30-40 years",
      description: "Peak incidence of fibroids.",
      icon: "clock",
    },
    {
      title: "Family History",
      description: "Increased risk if close relatives have fibroids.",
      icon: "pill",
    },
    {
      title: "Obesity",
      description: "Increased estrogen levels from fat tissue.",
      icon: "thermometer",
    },
    {
      title: "African Descent",
      description: "Higher prevalence and severity among African women.",
      icon: "arrow-up",
    },
  ],
  complications: [
    {
      title: "Bleeding",
      description: "Risk of heavy bleeding during or after surgery.",
      icon: "alert-circle",
    },
    {
      title: "Infection",
      description: "Postoperative wound or pelvic infection.",
      icon: "pill",
    },
    {
      title: "Scar Tissue Formation",
      description: "May affect future fertility or cause pain.",
      icon: "thermometer",
    },
    {
      title: "Recurrence of Fibroids",
      description: "Fibroids can regrow, sometimes requiring repeat surgery.",
      icon: "clock",
    },
    {
      title: "Damage to Surrounding Organs",
      description: "Rare injury to bladder or bowel during surgery.",
      icon: "arrow-up",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves pelvic ultrasound, MRI, and sometimes hysteroscopy or biopsy.",
    methods: [
      "Pelvic Examination",
      "Ultrasound Imaging",
      "MRI Scan",
      "Hysteroscopy",
      "Blood Tests",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Medication",
        description:
          "Hormonal treatments or pain management to control symptoms before surgery.",
      },
      {
        name: "Uterine Artery Embolization",
        description:
          "Minimally invasive procedure to shrink fibroids by blocking blood flow.",
      },
    ],
    surgical: [
      {
        name: "Abdominal Myomectomy",
        description:
          "Open surgery through an abdominal incision to remove fibroids.",
        recoveryTime: "4-6 weeks",
        anesthesia: "General",
        benefits: [
          "Allows removal of large fibroids",
          "Good for multiple or deep fibroids",
          "Provides direct access to uterus",
        ],
      },
      {
        name: "Laparoscopic Myomectomy",
        description:
          "Minimally invasive removal of fibroids through small abdominal incisions.",
        recoveryTime: "2-4 weeks",
        anesthesia: "General",
        benefits: [
          "Less pain and scarring",
          "Faster recovery time",
          "Shorter hospital stay",
        ],
      },
      {
        name: "Hysteroscopic Myomectomy",
        description:
          "Removal of fibroids via the vagina and cervix using a hysteroscope for submucosal fibroids.",
        recoveryTime: "1-2 weeks",
        anesthesia: "General or local",
        benefits: [
          "No external incisions",
          "Quick recovery",
          "Effective for submucosal fibroids",
        ],
      },
    ],
  },
  types: [
    {
      type: "Abdominal Myomectomy",
      description: "Open surgery for large or multiple fibroids.",
      procedure:
        "Performed through a lower abdominal incision under general anesthesia.",
    },
    {
      type: "Laparoscopic Myomectomy",
      description:
        "Minimally invasive surgery using small incisions and a camera.",
      procedure:
        "Performed with laparoscopic instruments under general anesthesia.",
    },
    {
      type: "Hysteroscopic Myomectomy",
      description:
        "Removal of fibroids inside the uterus via the vagina and cervix.",
      procedure: "Uses a hysteroscope; no abdominal incisions needed.",
    },
  ],
  whyChooseUs: [
    {
      title: "Skilled Minimally Invasive Surgeons",
      description:
        "Expertise in laparoscopic and hysteroscopic myomectomy techniques.",
    },
    {
      title: "Preservation of Fertility",
      description:
        "Focus on uterine preservation for women planning future pregnancies.",
    },
    {
      title: "Comprehensive Care",
      description:
        "From diagnosis to postoperative rehabilitation, personalized care plans.",
    },
    {
      title: "Advanced Technology",
      description:
        "State-of-the-art surgical equipment ensuring safety and quick recovery.",
    },
  ],
};
