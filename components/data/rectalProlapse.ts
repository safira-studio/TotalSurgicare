import { MedicalCondition } from "@/types";

export const rectalProlapse: MedicalCondition = {
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
      {
        name: "Perineal Rectosigmoidectomy (Altemeier Procedure)",
        description:
          "Surgery through the perineum to remove the prolapsed rectum and reconnect the bowel.",
        benefits: [
          "Preferred for elderly or high-risk patients",
          "No abdominal incision needed",
          "Shorter hospital stay",
        ],
        recoveryTime: "5–7 days",
        anesthesia: "Spinal or general",
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
