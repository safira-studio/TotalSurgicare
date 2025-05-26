import { MedicalCondition } from "@/types";

export const fissureTreatment: MedicalCondition = {
  id: "3",
  slug: "fissure-treatment",
  name: "Fissure",
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
      {
        name: "Anal Advancement Flap Surgery",
        description:
          "A procedure where healthy tissue is used to cover the fissure, promoting faster healing in chronic or non-healing cases.",
        benefits: [
          "Effective for non-healing fissures",
          "Preserves anal function",
          "Promotes rapid tissue regeneration",
        ],
        recoveryTime: "1-2 weeks",
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
