import { MedicalCondition } from "@/types";

export const fistulaTreatment: MedicalCondition = {
  id: "2",
  slug: "fistula-treatment",
  name: "Fistula",
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
