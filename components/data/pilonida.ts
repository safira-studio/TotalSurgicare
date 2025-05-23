import { MedicalCondition } from "@/types";

export const pollonodalSinusTreatment: MedicalCondition = {
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
