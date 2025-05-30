import { MedicalCondition } from "@/types";

export const appendectomy: MedicalCondition = {
  id: "8",
  slug: "appendicitis-treatment",
  name: "Appendicitis",
  overview: {
    title: "Appendicitis Treatment – Laparoscopic Appendectomy",
    brief:
      "Appendicitis is a medical emergency where the appendix becomes inflamed and painful. We provide quick and minimally invasive laparoscopic appendectomy to relieve pain and prevent complications.",
    alternateNames: [
      { language: "Hindi", name: "अपेंडिक्स की सूजन" },
      { language: "Marathi", name: "अपेंडिक्सची सूज" },
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
      {
        name: "Antibiotic Therapy",
        description:
          "Treatment with intravenous and oral antibiotics to reduce infection and inflammation",
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
      {
        name: "Laparoscopic Appendectomy",
        description:
          "Minimally invasive removal of the appendix using small incisions and a camera",
        benefits: [
          "Faster recovery",
          "Less postoperative pain",
          "Minimal scarring",
        ],
        recoveryTime: "2–4 days",
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
