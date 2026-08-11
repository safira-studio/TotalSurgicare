import { MedicalCondition } from "@/types";

export const gallBladderSurgeryPune: MedicalCondition = {
  id: "pune-gall-bladder-surgery",
  slug: "gall-bladder-surgery",
  name: "Gall Bladder",
  overview: {
    title: "Best Gall Bladder Surgery in Pune – Laparoscopic Cholecystectomy",
    brief:
      "Need gall bladder surgery in Pune? Total Surgicare's Wanowarie clinic specializes in laparoscopic cholecystectomy — the safe, minimally invasive removal of a diseased gallbladder — performed by experienced surgeons with fast, comfortable recovery.",
    alternateNames: [
      { language: "Hindi", name: "पित्ताशय की सर्जरी" },
      { language: "Marathi", name: "पित्ताशयाची शस्त्रक्रिया" },
    ],
    badges: [
      { title: "Keyhole Surgery", description: "Small incisions, minimal scarring" },
      { title: "Advanced Laparoscopic Tech", description: "Camera-guided precision" },
      { title: "Expert Surgeons", description: "Specialized in hepatobiliary surgery" },
      { title: "Fast Recovery", description: "Normal diet and routine within a week" },
    ],
  },
  aboutCondition: {
    title: "What is Gall Bladder Surgery?",
    description:
      "Gall bladder surgery, or cholecystectomy, is the surgical removal of the gallbladder — a small organ that stores bile for digestion. It's most commonly performed to treat gallstones, gallbladder inflammation, or polyps, and the body functions normally afterward without it.",
  },
  foodTriggers: [
    { name: "Fried and Greasy Foods", description: "Can trigger painful gallbladder attacks", bgColor: "bg-orange-100" },
    { name: "High-Fat Dairy", description: "May worsen symptoms pre-surgery", bgColor: "bg-amber-100" },
    { name: "Spicy Foods", description: "Can aggravate digestive discomfort", bgColor: "bg-blue-100" },
    { name: "Processed Snacks", description: "High fat, low nutrition", bgColor: "bg-green-100" },
    { name: "Excess Red Meat", description: "Harder to digest, strains the gallbladder", bgColor: "bg-yellow-100" },
    { name: "Carbonated Drinks", description: "Can worsen bloating and discomfort", bgColor: "bg-red-100" },
  ],
  symptoms: [
    { title: "Recurring Abdominal Pain", description: "Especially after fatty meals", icon: "thermometer" },
    { title: "Gallbladder Attacks", description: "Sudden, intense pain episodes", icon: "alert-circle" },
    { title: "Jaundice", description: "Yellowing skin/eyes from bile duct blockage", icon: "frown" },
    { title: "Chronic Nausea", description: "Persistent digestive discomfort", icon: "pill" },
    { title: "Fever with Abdominal Pain", description: "Sign of gallbladder infection", icon: "syringe" },
    { title: "Gallbladder Polyps", description: "Growths detected on imaging", icon: "image" },
  ],
  causes: [
    { title: "Symptomatic Gallstones", description: "Most common reason for removal", icon: "pill" },
    { title: "Acute Cholecystitis", description: "Gallbladder inflammation/infection", icon: "thermometer" },
    { title: "Biliary Colic", description: "Recurrent pain from stone blockage", icon: "alert-circle" },
    { title: "Gallbladder Polyps", description: "Especially larger or suspicious growths", icon: "image" },
    { title: "Pancreatitis from Gallstones", description: "Stones affecting the pancreas", icon: "syringe" },
    { title: "Porcelain Gallbladder", description: "Calcified gallbladder wall, cancer risk factor", icon: "alert-circle" },
  ],
  riskFactors: [
    { title: "Female Gender", description: "Higher incidence, especially during pregnancy", icon: "user" },
    { title: "Age Over 40", description: "Increased risk of gallbladder disease", icon: "clock" },
    { title: "Obesity", description: "Strong link to gallbladder problems", icon: "weight" },
    { title: "Family History", description: "Genetic predisposition to gallstones", icon: "user" },
    { title: "Rapid Weight Loss", description: "Can trigger stone formation", icon: "weight" },
    { title: "Diabetes", description: "Associated with higher complication risk", icon: "pill" },
  ],
  complications: [
    { title: "Gallbladder Rupture", description: "Rare, life-threatening emergency", icon: "alert-circle" },
    { title: "Spreading Infection", description: "Can progress to sepsis", icon: "syringe" },
    { title: "Bile Duct Injury from Delayed Treatment", description: "Higher complexity later", icon: "thermometer" },
    { title: "Pancreatitis", description: "From migrated gallstones", icon: "pill" },
    { title: "Chronic Pain", description: "Ongoing discomfort affecting daily life", icon: "frown" },
    { title: "Increased Surgical Risk", description: "Inflammation makes later surgery harder", icon: "arrow-up" },
  ],
  diagnosis: {
    description:
      "Diagnosis combines imaging to visualize the gallbladder and any stones or polyps, along with blood tests to check for infection or bile duct involvement.",
    methods: [
      "Abdominal ultrasound",
      "Blood tests (liver function, infection markers)",
      "HIDA scan for gallbladder function assessment",
      "CT/MRCP for complex or unclear cases",
    ],
  },
  treatments: {
    surgical: [
      {
        name: "Laparoscopic Cholecystectomy",
        description: "Keyhole surgery using 3–4 small incisions and a camera to remove the gallbladder with precision.",
        benefits: ["Minimal scarring", "Shorter hospital stay", "Faster return to normal activity"],
        recoveryTime: "5–7 days",
        anesthesia: "General",
      },
      {
        name: "Single-Incision Laparoscopic Surgery (SILS)",
        description:
          "An advanced technique using a single small incision, often at the navel, for an even less visible scar.",
        benefits: ["Virtually scarless outcome", "Suitable for straightforward cases"],
        recoveryTime: "5–7 days",
        anesthesia: "General",
      },
      {
        name: "Open Cholecystectomy",
        description: "Traditional surgery through a larger incision, reserved for complicated or high-risk cases.",
        benefits: ["Necessary for severe inflammation or scarring", "Allows full surgical access"],
        recoveryTime: "3–4 weeks",
        anesthesia: "General",
      },
    ],
    nonSurgical: [
      { name: "Maintain a Healthy Weight", description: "Reduces surgical risk" },
      { name: "Eat a Low-Fat Diet Pre-Surgery", description: "Minimizes symptom flare-ups" },
      { name: "Stay Hydrated", description: "Supports overall recovery" },
      { name: "Follow Pre-Op Fasting Instructions", description: "As advised by your surgical team" },
      { name: "Disclose All Medications", description: "To your surgeon before the procedure" },
      { name: "Arrange Post-Op Support", description: "Help at home for the first few days" },
    ],
  },
  types: [
    {
      type: "Symptomatic Gallstones",
      description: "Recurrent pain from stones without complications.",
      procedure: "Laparoscopic Cholecystectomy - standard first-line treatment.",
    },
    {
      type: "Acute Cholecystitis",
      description: "Inflamed, infected gallbladder requiring prompt treatment.",
      procedure: "Laparoscopic Cholecystectomy - ideally within 72 hours of onset.",
    },
    {
      type: "Complicated/Scarred Gallbladder",
      description: "Severe inflammation or prior surgery causing dense scar tissue.",
      procedure: "Open Cholecystectomy - for safe, complete removal.",
    },
    {
      type: "Gallbladder Polyps",
      description: "Growths on the gallbladder wall, monitored or removed based on size.",
      procedure: "Laparoscopic Cholecystectomy - if polyps are large or symptomatic.",
    },
  ],
  whyChooseUs: [
    {
      title: "Advanced Laparoscopic & SILS Techniques",
      description: "Minimal scarring with faster recovery.",
    },
    {
      title: "FREE Consultation with Experienced Surgeons",
      description: "8–15 years of hepatobiliary surgery experience.",
    },
    { title: "Quick Recovery", description: "Most patients return to normal diet and routine within a week." },
    {
      title: "End-to-End Insurance Assistance",
      description: "We manage claims and paperwork for you.",
    },
  ],
  faq: [
    {
      question: "Where can I get gall bladder surgery in Pune?",
      answer:
        "Total Surgicare's clinic in Wanowarie, Pune offers laparoscopic and SILS gall bladder surgery, serving patients across Kondhwa, Camp, Hadapsar, and East Pune.",
    },
    {
      question: "Can I live a normal life without a gallbladder?",
      answer:
        "Yes. The liver continues to produce bile directly to the intestine, and most patients adjust to normal digestion within a few weeks after surgery.",
    },
    {
      question: "How long does gall bladder surgery take?",
      answer: "Laparoscopic cholecystectomy typically takes 45 minutes to an hour, with most patients going home the same or next day.",
    },
    {
      question: "Is gall bladder surgery covered by insurance in Pune?",
      answer: "Yes, we assist with cashless and reimbursement claims across major insurers, and offer 0% interest EMI options.",
    },
    {
      question: "What is the difference between gallstone surgery and gall bladder surgery?",
      answer:
        "Gallstone surgery refers to removing the stones by removing the gallbladder; gall bladder surgery is the broader procedure itself, which may also address inflammation, polyps, or other gallbladder conditions beyond just stones.",
    },
    {
      question: "How do I book a consultation for gall bladder surgery in Pune?",
      answer: "Call +91-9665551711 or book online for a free consultation with our surgical team.",
    },
  ],
};
