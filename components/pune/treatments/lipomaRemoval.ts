import { MedicalCondition } from "@/types";

export const lipomaRemovalPune: MedicalCondition = {
  id: "pune-lipoma-removal",
  slug: "lipoma",
  name: "Lipoma",
  overview: {
    title: "Best Lipoma Removal Surgery in Pune – Painless & Scarless",
    brief:
      "Have a lipoma and looking for the best removal surgery in Pune? Total Surgicare's Wanowarie clinic offers safe, precise lipoma excision with minimal scarring, performed by experienced surgeons — most procedures are completed within 30 minutes.",
    badges: [
      { title: "Minimal Scarring", description: "Precise excision technique" },
      { title: "Day-Care Procedure", description: "No hospital stay required" },
      { title: "Expert Surgeons", description: "Specialized in soft tissue removal" },
      { title: "Quick Recovery", description: "Back to routine within days" },
    ],
  },
  aboutCondition: {
    title: "What is a Lipoma?",
    description:
      "A lipoma is a soft, benign growth of fatty tissue that develops just beneath the skin. Most are harmless and slow-growing, but many patients choose removal for comfort, cosmetic reasons, or to rule out other causes when a lump appears.",
  },
  causes: [
    { title: "Genetic Predisposition", description: "Family history increases likelihood", icon: "user" },
    { title: "Obesity", description: "Higher body fat can be associated with lipoma development", icon: "weight" },
    { title: "Minor Trauma", description: "Some lipomas develop after injury to an area", icon: "alert-circle" },
    { title: "Hormonal Changes", description: "Can influence fat tissue growth", icon: "pill" },
    { title: "Certain Genetic Conditions", description: "Such as familial multiple lipomatosis", icon: "syringe" },
    { title: "Age", description: "More common between 40–60 years", icon: "clock" },
  ],
  symptoms: [
    { title: "Soft, Movable Lump", description: "Easily shifts under the skin with finger pressure", icon: "image" },
    { title: "Painless Growth", description: "Usually not tender unless pressing on a nerve", icon: "pill" },
    { title: "Slow Growth", description: "Develops gradually over months or years", icon: "clock" },
    { title: "Doughy Texture", description: "Distinctly soft compared to harder growths", icon: "frown" },
    { title: "Round or Oval Shape", description: "Well-defined edges", icon: "arrow-up" },
    { title: "Size Variation", description: "Ranges from pea-sized to several centimeters", icon: "alert-circle" },
  ],
  riskFactors: [
    { title: "Family History", description: "Strongest known risk factor", icon: "user" },
    { title: "Age 40–60", description: "Peak age range for development", icon: "clock" },
    { title: "Obesity", description: "Some association with higher fat mass", icon: "weight" },
    { title: "Genetic Syndromes", description: "Gardner syndrome, familial multiple lipomatosis", icon: "syringe" },
    { title: "Liver Disease", description: "Occasionally associated with lipoma formation", icon: "pill" },
    { title: "Diabetes", description: "Mild association in some studies", icon: "alert-circle" },
  ],
  complications: [
    { title: "Continued Growth", description: "Can become large and cosmetically bothersome", icon: "arrow-up" },
    { title: "Nerve Compression", description: "Pain if pressing on nearby nerves", icon: "thermometer" },
    { title: "Restricted Movement", description: "If located near joints", icon: "alert-circle" },
    { title: "Difficulty Distinguishing from Liposarcoma", description: "Rare cancerous look-alike", icon: "syringe" },
    { title: "Skin Irritation", description: "From friction against clothing", icon: "frown" },
    { title: "Psychological Discomfort", description: "Cosmetic concerns affecting confidence", icon: "user" },
  ],
  diagnosis: {
    description:
      "Diagnosis typically starts with a physical examination, with imaging used for larger or deeper lipomas and biopsy reserved for cases where malignancy needs to be ruled out.",
    methods: [
      "Physical examination and palpation",
      "Ultrasound for depth and composition assessment",
      "MRI for large or deep-seated lipomas",
      "Biopsy if malignancy is suspected",
    ],
  },
  treatments: {
    surgical: [
      {
        name: "Surgical Excision",
        description:
          "The lipoma is removed through a small incision, with the entire fatty lump taken out to prevent recurrence.",
        benefits: ["Complete removal reduces recurrence risk", "Minimal scarring with precise technique", "Day-care procedure"],
        recoveryTime: "5–7 days",
        anesthesia: "Local",
      },
      {
        name: "Liposuction Technique",
        description:
          "A minimally invasive method using a small incision and suction to remove fatty tissue, suitable for larger, soft lipomas.",
        benefits: ["Smaller incision than traditional excision", "Less scarring"],
        recoveryTime: "3–5 days",
        anesthesia: "Local",
      },
      {
        name: "Minimal Excision Extraction",
        description:
          "A combination technique using a small incision to squeeze out lipoma tissue, ideal for smaller, well-defined lipomas.",
        benefits: ["Very small scar", "Fast procedure"],
        recoveryTime: "2–4 days",
        anesthesia: "Local",
      },
    ],
    nonSurgical: [
      { name: "Maintain Healthy Weight", description: "May reduce risk in some individuals" },
      { name: "Regular Self-Examination", description: "Detect new lumps early" },
      { name: "Monitor Family History", description: "Increased vigilance if lipomas run in the family" },
      { name: "Avoid Repeated Trauma to an Area", description: "Where possible" },
      { name: "Routine Health Checkups", description: "Especially with genetic conditions" },
      { name: "Prompt Evaluation of New Lumps", description: "Rule out other causes early" },
    ],
  },
  types: [
    {
      type: "Subcutaneous Lipoma",
      description: "Most common type, located just beneath the skin.",
      procedure: "Surgical Excision - straightforward removal with minimal scarring.",
    },
    {
      type: "Deep-Seated Lipoma",
      description: "Located within muscle tissue, may be larger and less mobile.",
      procedure: "Surgical Excision - with imaging guidance for precise removal.",
    },
    {
      type: "Multiple Lipomas (Lipomatosis)",
      description: "Presence of numerous lipomas across the body, often hereditary.",
      procedure: "Staged Excision - removing lipomas in planned sessions based on size and priority.",
    },
    {
      type: "Angiolipoma",
      description: "A lipoma variant containing blood vessels, sometimes tender to touch.",
      procedure: "Surgical Excision - with careful vessel management.",
    },
  ],
  whyChooseUs: [
    {
      title: "Precise, Minimal-Scar Technique",
      description: "Complete removal in a quick day-care procedure.",
    },
    {
      title: "FREE Consultation with Experienced Surgeons",
      description: "Accurate assessment before any procedure.",
    },
    { title: "Quick Recovery", description: "Most patients resume routine activity within days." },
    {
      title: "End-to-End Insurance Assistance",
      description: "We manage claims and paperwork for you.",
    },
  ],
  faq: [
    {
      question: "Where can I get lipoma removal surgery in Pune?",
      answer:
        "Total Surgicare's clinic in Wanowarie, Pune offers safe, scarless lipoma removal, serving patients across Kondhwa, Camp, Hadapsar, and East Pune.",
    },
    {
      question: "Is lipoma removal surgery painful?",
      answer: "No, it's typically performed under local anesthesia as a day-care procedure with minimal discomfort.",
    },
    {
      question: "Will the lipoma grow back after removal?",
      answer:
        "Complete surgical excision has a low recurrence rate. Our surgeons ensure the entire lipoma capsule is removed to minimize this risk.",
    },
    {
      question: "How long does lipoma removal surgery take?",
      answer: "Most lipoma removal procedures are completed within 30 minutes to an hour, depending on size and location.",
    },
    {
      question: "Does Total Surgicare accept insurance for lipoma removal?",
      answer: "Yes, we assist with cashless and reimbursement claims where applicable, and offer 0% interest EMI options.",
    },
    {
      question: "How do I book a consultation for lipoma removal in Pune?",
      answer: "Call +91-9665551711 or book online for a free consultation with our surgical team.",
    },
  ],
};
