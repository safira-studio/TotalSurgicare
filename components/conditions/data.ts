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
