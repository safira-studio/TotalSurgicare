import { MedicalCondition } from "@/types";

export const staplerCircumcisionPune: MedicalCondition = {
  id: "pune-stapler-circumcision",
  slug: "stapler-circumcision",
  name: "Stapler Circumcision",
  overview: {
    title: "Best Stapler Circumcision in Pune – Stitchless ZSR Surgery",
    brief:
      "Looking for painless, stitchless circumcision in Pune? Total Surgicare uses the advanced ZSR stapler technique at our Wanowarie clinic — a bloodless, suture-free procedure that takes under 15 minutes and lets most patients return to normal activity within 2–3 days.",
    alternateNames: [
      { language: "Hindi", name: "सुन्नत / खतना" },
      { language: "Marathi", name: "सुंता" },
    ],
    badges: [
      { title: "No Stitches", description: "Stapler technique eliminates the need for sutures" },
      { title: "Bloodless Procedure", description: "Minimal bleeding during and after surgery" },
      { title: "15-Minute Surgery", description: "Fast, day-care procedure" },
      { title: "Quick Recovery", description: "Back to routine activity in 2–3 days" },
    ],
  },
  aboutCondition: {
    title: "What is Stapler Circumcision?",
    description:
      "Stapler circumcision is a modern surgical technique that removes the foreskin using a specialized circular stapling device instead of traditional cutting and stitching. The ZSR stapler simultaneously cuts and seals the tissue, resulting in a cleaner, faster, and virtually bloodless procedure compared to conventional circumcision.",
  },
  causes: [
    { title: "Phimosis", description: "Tight foreskin that cannot be retracted normally", icon: "alert-circle" },
    { title: "Recurrent Infections", description: "Frequent balanitis or urinary tract infections", icon: "thermometer" },
    { title: "Religious or Cultural Practice", description: "Elective circumcision by choice", icon: "user" },
    { title: "Paraphimosis", description: "Foreskin stuck behind the glans, causing swelling", icon: "arrow-up" },
    { title: "Hygiene Concerns", description: "Difficulty maintaining cleanliness under the foreskin", icon: "syringe" },
    { title: "Diabetic Patients", description: "Reduced infection risk in diabetics prone to balanitis", icon: "pill" },
  ],
  symptoms: [
    { title: "Pain During Retraction", description: "Difficulty or pain pulling back the foreskin", icon: "thermometer" },
    { title: "Swelling", description: "Redness or swelling around the tip", icon: "arrow-up" },
    { title: "Recurrent Infection", description: "Repeated balanitis episodes", icon: "syringe" },
    { title: "Discomfort During Urination", description: "Ballooning of foreskin while urinating", icon: "pill" },
    { title: "Foul Discharge", description: "Smegma build-up and odor", icon: "image" },
    { title: "Scarring", description: "Tight, fibrous foreskin from repeated inflammation", icon: "alert-circle" },
  ],
  riskFactors: [
    { title: "Untreated Phimosis", description: "Long-standing tight foreskin", icon: "clock" },
    { title: "Poor Hygiene", description: "Increases infection risk", icon: "syringe" },
    { title: "Diabetes", description: "Higher susceptibility to balanitis", icon: "pill" },
    { title: "Chronic Skin Conditions", description: "Lichen sclerosus and similar conditions", icon: "alert-circle" },
    { title: "Recurrent UTIs", description: "Especially in young boys", icon: "thermometer" },
    { title: "Family History", description: "Some anatomical predispositions run in families", icon: "user" },
  ],
  complications: [
    { title: "Recurrent Infections", description: "Ongoing balanitis or UTIs", icon: "thermometer" },
    { title: "Paraphimosis Emergency", description: "Can cut off blood supply to the glans", icon: "alert-circle" },
    { title: "Scarring & Narrowing", description: "Worsens over time without treatment", icon: "image" },
    { title: "Painful Intercourse", description: "In adults with chronic phimosis", icon: "frown" },
    { title: "Difficulty Urinating", description: "Due to foreskin ballooning", icon: "pill" },
    { title: "Increased Cancer Risk", description: "Long-term poor hygiene is a minor risk factor", icon: "syringe" },
  ],
  diagnosis: {
    description:
      "A simple physical examination is usually sufficient to assess foreskin tightness, signs of infection, or scarring, and to confirm suitability for stapler circumcision.",
    methods: [
      "Physical examination of the foreskin and glans",
      "Assessment for signs of infection or scarring",
      "Blood sugar check for diabetic patients",
      "Pre-surgery fitness assessment",
    ],
  },
  treatments: {
    surgical: [
      {
        name: "ZSR Stapler Circumcision",
        description:
          "A circular stapling device removes the foreskin and seals the edges simultaneously — no manual stitching required.",
        benefits: [
          "Virtually bloodless procedure",
          "No stitches or dressing changes",
          "Day-care procedure, home same day",
          "Minimal post-op pain",
        ],
        recoveryTime: "2–3 days",
        anesthesia: "Local",
      },
      {
        name: "Conventional Surgical Circumcision",
        description:
          "Traditional method using surgical excision and manual sutures, reserved for complex anatomical cases.",
        benefits: ["Suitable for irregular or scarred foreskin", "Allows precise tissue correction"],
        recoveryTime: "7–10 days",
        anesthesia: "Local or general",
      },
      {
        name: "Laser Circumcision",
        description: "Uses a laser device to remove foreskin with precision and cauterize as it cuts.",
        benefits: ["Reduced bleeding", "Precise, controlled incision"],
        recoveryTime: "4–5 days",
        anesthesia: "Local",
      },
    ],
    nonSurgical: [
      { name: "Keep the Area Dry", description: "Avoid moisture build-up during healing" },
      { name: "Wear Loose Clothing", description: "Reduces friction on the healing site" },
      { name: "Avoid Strenuous Activity", description: "For at least a week post-surgery" },
      { name: "Follow Hygiene Instructions", description: "As advised by your surgeon" },
      { name: "Attend Follow-Up", description: "Ensure proper healing is confirmed" },
      { name: "Avoid Sexual Activity", description: "Until fully healed, as advised" },
    ],
  },
  whyChooseUs: [
    {
      title: "Advanced ZSR Stapler Technique",
      description: "Stitchless, bloodless surgery completed in 15 minutes, with same-day discharge.",
    },
    {
      title: "FREE Consultation with Experienced Surgeons",
      description: "Our urologists and surgeons have years of experience in stapler and laser circumcision.",
    },
    {
      title: "Quick, Comfortable Recovery",
      description: "Most patients resume routine activity within 2–3 days.",
    },
    {
      title: "End-to-End Insurance Assistance",
      description: "We manage paperwork and claims so you can focus on recovery.",
    },
  ],
  faq: [
    {
      question: "Where can I get stapler circumcision in Pune?",
      answer:
        "Total Surgicare's clinic is located in Wanowarie, Pune, at Kimaya Clinic, One Place, 501 B, 5th Floor. We serve patients from across Pune including Kondhwa, Camp, Hadapsar, and Fatima Nagar.",
    },
    {
      question: "Is stapler circumcision painful?",
      answer:
        "No. The ZSR stapler technique is performed under local anesthesia and is largely painless during the procedure, with only mild discomfort during recovery, managed with medication.",
    },
    {
      question: "How long does recovery take after circumcision?",
      answer:
        "Most patients recover within 2–3 days with the stapler method, compared to 7–10 days for conventional surgery.",
    },
    {
      question: "Is stapler circumcision safe for diabetic patients?",
      answer:
        "Yes, with proper pre-surgical evaluation. Our surgeons assess blood sugar control before recommending the procedure.",
    },
    {
      question: "Does Total Surgicare offer EMI or insurance support for circumcision in Pune?",
      answer: "Yes, we offer 0% interest EMI options and assist with insurance claims and paperwork.",
    },
    {
      question: "How much does stapler circumcision cost in Pune?",
      answer: "Cost depends on age, technique, and anesthesia required. Book a free consultation for an accurate quote.",
    },
  ],
};
