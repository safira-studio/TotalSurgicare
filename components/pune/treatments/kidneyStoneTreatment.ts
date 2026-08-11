import { MedicalCondition } from "@/types";

export const kidneyStoneTreatmentPune: MedicalCondition = {
  id: "pune-kidney-stone-treatment",
  slug: "kidney-stone-treatment-rirspcnlursl",
  name: "Kidney Stone",
  overview: {
    title: "Best Kidney Stone Treatment in Pune – RIRS, PCNL & URSL",
    brief:
      "Suffering from kidney stones and searching for the best treatment in Pune? Total Surgicare's Wanowarie clinic offers advanced laser-based stone removal — RIRS, PCNL, and URSL — performed by experienced urologists with scarless techniques and fast recovery.",
    alternateNames: [
      { language: "Hindi", name: "गुर्दे की पथरी" },
      { language: "Marathi", name: "मूतखडा" },
    ],
    badges: [
      { title: "Scarless Procedures", description: "No large incisions" },
      { title: "Advanced Laser Technology", description: "Holmium laser lithotripsy" },
      { title: "Expert Urologists", description: "Specialized in endourology" },
      { title: "Quick Recovery", description: "Return to routine within days" },
    ],
  },
  aboutCondition: {
    title: "What are Kidney Stones?",
    description:
      "Kidney stones are hard mineral and salt deposits that form inside the kidneys when urine becomes concentrated, allowing minerals to crystallize and stick together. They can range from tiny grains to large stones that block the urinary tract, causing severe pain.",
  },
  foodTriggers: [
    { name: "Low Water Intake", description: "Concentrates urine, promoting crystal formation", bgColor: "bg-orange-100" },
    { name: "High-Sodium Foods", description: "Increases calcium in urine", bgColor: "bg-amber-100" },
    { name: "Excess Oxalate-Rich Foods", description: "Spinach, nuts, and chocolate in excess", bgColor: "bg-blue-100" },
    { name: "Animal Protein Overload", description: "Red meat and shellfish in excess", bgColor: "bg-green-100" },
    { name: "High-Sugar Beverages", description: "Linked to higher stone risk", bgColor: "bg-yellow-100" },
    { name: "Excess Vitamin C Supplements", description: "Can increase oxalate levels", bgColor: "bg-red-100" },
  ],
  symptoms: [
    { title: "Severe Flank Pain", description: "Sharp pain in the back or side", icon: "thermometer" },
    { title: "Blood in Urine", description: "Pink, red, or brown urine", icon: "alert-circle" },
    { title: "Painful Urination", description: "Burning sensation while passing urine", icon: "frown" },
    { title: "Nausea and Vomiting", description: "Often accompanying severe pain", icon: "pill" },
    { title: "Frequent Urge to Urinate", description: "Especially as the stone nears the bladder", icon: "clock" },
    { title: "Fever and Chills", description: "Sign of possible infection", icon: "syringe" },
  ],
  causes: [
    { title: "Dehydration", description: "Concentrated urine promotes stone formation", icon: "thermometer" },
    { title: "Diet High in Salt and Protein", description: "Increases mineral excretion", icon: "pill" },
    { title: "Family History", description: "Genetic predisposition", icon: "user" },
    { title: "Obesity", description: "Linked to higher stone risk", icon: "arrow-up" },
    { title: "Certain Medical Conditions", description: "Gout, hyperparathyroidism", icon: "alert-circle" },
    { title: "Urinary Tract Infections", description: "Can contribute to certain stone types", icon: "syringe" },
  ],
  riskFactors: [
    { title: "Family History of Stones", description: "Increases likelihood significantly", icon: "user" },
    { title: "Chronic Dehydration", description: "Common in hot climates like Pune", icon: "thermometer" },
    { title: "Sedentary Lifestyle", description: "Reduces overall metabolic health", icon: "clock" },
    { title: "Digestive Diseases", description: "IBD and gastric bypass surgery", icon: "pill" },
    { title: "Recurrent UTIs", description: "Can promote struvite stone formation", icon: "syringe" },
    { title: "High Sodium/Protein Diet", description: "Common risk in urban diets", icon: "arrow-up" },
  ],
  complications: [
    { title: "Urinary Tract Obstruction", description: "Blocks normal urine flow", icon: "alert-circle" },
    { title: "Kidney Damage", description: "Chronic obstruction can impair function", icon: "thermometer" },
    { title: "Infection/Sepsis", description: "Blocked, infected urine is a medical emergency", icon: "syringe" },
    { title: "Recurrent Stones", description: "Untreated stones increase recurrence risk", icon: "clock" },
    { title: "Hydronephrosis", description: "Kidney swelling from urine backup", icon: "arrow-up" },
    { title: "Chronic Kidney Disease", description: "In severe, repeated cases", icon: "pill" },
  ],
  diagnosis: {
    description:
      "Diagnosis typically involves imaging to confirm stone size, location, and number, alongside urine and blood tests to assess kidney function and stone composition risk.",
    methods: [
      "Ultrasound of the kidney, ureter, and bladder (KUB)",
      "CT scan (KUB) for precise stone mapping",
      "Urine analysis and culture",
      "Blood tests for kidney function and metabolic panel",
    ],
  },
  treatments: {
    surgical: [
      {
        name: "RIRS (Retrograde Intrarenal Surgery)",
        description:
          "A scarless procedure using a flexible scope passed through the urinary tract to reach and laser the stone into fragments, which are then removed or pass naturally.",
        benefits: ["No external incision", "Effective for stones up to 2cm", "Day-care procedure in most cases"],
        recoveryTime: "3–5 days",
        anesthesia: "Spinal or general",
      },
      {
        name: "PCNL (Percutaneous Nephrolithotomy)",
        description:
          "A small keyhole incision in the back is used to directly access and remove large kidney stones using specialized instruments.",
        benefits: ["Best for large or complex stones (>2cm)", "High single-session clearance rate"],
        recoveryTime: "1–2 weeks",
        anesthesia: "General",
      },
      {
        name: "URSL (Ureteroscopic Lithotripsy)",
        description: "A thin scope is passed through the urinary tract to locate and laser-fragment stones lodged in the ureter.",
        benefits: ["No incisions required", "Effective for mid and lower ureteric stones"],
        recoveryTime: "2–4 days",
        anesthesia: "Spinal or general",
      },
    ],
    nonSurgical: [
      { name: "Drink Plenty of Water", description: "At least 2.5–3 litres daily" },
      { name: "Limit Sodium Intake", description: "Reduces calcium excretion" },
      { name: "Moderate Animal Protein", description: "Reduce excess red meat and shellfish" },
      { name: "Balanced Calcium Intake", description: "Adequate dietary calcium (not excess supplements)" },
      { name: "Regular Health Checkups", description: "Especially with family history" },
      { name: "Treat UTIs Promptly", description: "Prevents struvite stone formation" },
    ],
  },
  types: [
    {
      type: "Calcium Oxalate Stones",
      description: "The most common stone type, often linked to dehydration and high-oxalate diets.",
      procedure: "RIRS or URSL - depending on size and location.",
    },
    {
      type: "Uric Acid Stones",
      description: "Form in acidic urine, often linked to high-protein diets and gout.",
      procedure: "RIRS - combined with dietary and medical management.",
    },
    {
      type: "Struvite Stones",
      description: "Associated with chronic urinary tract infections, can grow rapidly and large.",
      procedure: "PCNL - for large staghorn stones.",
    },
    {
      type: "Cystine Stones",
      description: "Rare, hereditary stones formed due to a genetic amino acid disorder.",
      procedure: "PCNL or RIRS - combined with long-term metabolic management.",
    },
    {
      type: "Large/Staghorn Stones",
      description: "Stones larger than 2cm that fill the kidney's collecting system.",
      procedure: "PCNL - most effective for complete stone clearance.",
    },
  ],
  whyChooseUs: [
    {
      title: "Advanced Laser & Scarless Techniques",
      description: "RIRS, PCNL, and URSL performed with the latest holmium laser technology.",
    },
    {
      title: "FREE Consultation with Experienced Urologists",
      description: "8–15 years of specialized endourology experience.",
    },
    { title: "Quick Recovery", description: "Most patients resume normal activity within days." },
    {
      title: "End-to-End Insurance Assistance",
      description: "We handle paperwork and claims for you.",
    },
  ],
  faq: [
    {
      question: "Where can I get the best kidney stone treatment in Pune?",
      answer:
        "Total Surgicare's clinic in Wanowarie, Pune offers RIRS, PCNL, and URSL kidney stone treatments, serving patients across Kondhwa, Camp, Hadapsar, and East Pune.",
    },
    {
      question: "Which treatment is best for kidney stones — RIRS, PCNL, or URSL?",
      answer:
        "It depends on stone size and location. RIRS and URSL suit smaller stones with no incisions, while PCNL is recommended for larger stones above 2cm. Our urologists recommend the right option after imaging.",
    },
    {
      question: "Is kidney stone surgery painful?",
      answer:
        "These are minimally invasive, scarless procedures performed under anesthesia, with most patients experiencing only mild discomfort during recovery.",
    },
    {
      question: "How long is the hospital stay for kidney stone surgery?",
      answer:
        "RIRS and URSL are often day-care procedures, while PCNL may require a 1–2 day hospital stay depending on stone complexity.",
    },
    {
      question: "Does Total Surgicare accept insurance for kidney stone treatment?",
      answer: "Yes, we assist with cashless and reimbursement insurance claims and offer 0% interest EMI options.",
    },
    {
      question: "How do I book a consultation for kidney stone treatment in Pune?",
      answer: "Call +91-9665551711 or book online for a free consultation with our urology team.",
    },
  ],
};
