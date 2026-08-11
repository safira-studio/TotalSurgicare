import { MedicalCondition } from "@/types";

export const gallstoneSurgeryPune: MedicalCondition = {
  id: "pune-gallstone-surgery",
  slug: "gallstone-surgery",
  name: "Gallstone",
  overview: {
    title: "Best Gallstone Surgery in Pune – Laparoscopic Treatment",
    brief:
      "Dealing with gallstones and looking for the best surgical care in Pune? Total Surgicare's Wanowarie clinic offers advanced laparoscopic gallstone surgery — a minimally invasive procedure with small incisions, less pain, and a faster return to daily life.",
    alternateNames: [
      { language: "Hindi", name: "पित्ताशय की पथरी" },
      { language: "Marathi", name: "पित्ताशयातील खडे" },
    ],
    badges: [
      { title: "Minimally Invasive", description: "Small keyhole incisions" },
      { title: "Modern Technology", description: "Advanced laparoscopic equipment" },
      { title: "Expert Surgeons", description: "Specialized in gallbladder surgery" },
      { title: "Fast Recovery", description: "Return to routine within a week" },
    ],
  },
  aboutCondition: {
    title: "What are Gallstones?",
    description:
      "Gallstones are hardened deposits of digestive fluid that form in the gallbladder, a small organ beneath the liver. They can be as small as a grain of sand or as large as a golf ball, and often cause pain when they block bile flow.",
  },
  foodTriggers: [
    { name: "Fried and Fatty Foods", description: "Trigger gallbladder contractions and pain", bgColor: "bg-orange-100" },
    { name: "High-Cholesterol Foods", description: "Contribute to stone formation", bgColor: "bg-amber-100" },
    { name: "Refined Carbohydrates", description: "Linked to higher stone risk", bgColor: "bg-blue-100" },
    { name: "Excess Sugar", description: "Associated with increased gallstone risk", bgColor: "bg-green-100" },
    { name: "Full-Fat Dairy", description: "Can trigger symptoms in sensitive individuals", bgColor: "bg-yellow-100" },
    { name: "Processed & Fast Foods", description: "Low fiber, high fat combination", bgColor: "bg-red-100" },
  ],
  symptoms: [
    { title: "Sudden Upper Abdominal Pain", description: "Especially after fatty meals", icon: "thermometer" },
    { title: "Pain Radiating to the Back", description: "Between the shoulder blades", icon: "arrow-up" },
    { title: "Nausea and Vomiting", description: "Often accompanying an attack", icon: "pill" },
    { title: "Bloating and Indigestion", description: "Persistent digestive discomfort", icon: "frown" },
    { title: "Jaundice", description: "Yellowing of skin and eyes if bile duct is blocked", icon: "alert-circle" },
    { title: "Fever with Chills", description: "Sign of possible infection (cholecystitis)", icon: "syringe" },
  ],
  causes: [
    { title: "Excess Cholesterol in Bile", description: "Forms hard cholesterol stones", icon: "pill" },
    { title: "Excess Bilirubin", description: "Leads to pigment stone formation", icon: "alert-circle" },
    { title: "Poor Gallbladder Emptying", description: "Bile becomes concentrated", icon: "clock" },
    { title: "Obesity", description: "Significantly increases risk", icon: "arrow-up" },
    { title: "Rapid Weight Loss", description: "Disrupts normal bile composition", icon: "weight" },
    { title: "Hormonal Factors", description: "Pregnancy and estrogen therapy increase risk", icon: "user" },
  ],
  riskFactors: [
    { title: "Female Gender", description: "Women are at higher risk, especially during pregnancy", icon: "user" },
    { title: "Age Over 40", description: "Risk increases with age", icon: "clock" },
    { title: "Obesity", description: "Strongly linked to gallstone formation", icon: "weight" },
    { title: "Family History", description: "Genetic predisposition", icon: "user" },
    { title: "Diabetes", description: "Associated with higher gallstone risk", icon: "pill" },
    { title: "Sedentary Lifestyle", description: "Reduces gallbladder motility", icon: "clock" },
  ],
  complications: [
    { title: "Acute Cholecystitis", description: "Painful gallbladder inflammation", icon: "thermometer" },
    { title: "Bile Duct Blockage", description: "Can cause jaundice and infection", icon: "alert-circle" },
    { title: "Pancreatitis", description: "Stones blocking the pancreatic duct", icon: "syringe" },
    { title: "Gallbladder Infection", description: "Can become a surgical emergency", icon: "thermometer" },
    { title: "Gallbladder Rupture", description: "Rare but life-threatening", icon: "alert-circle" },
    { title: "Gallbladder Cancer Risk", description: "Slightly elevated with chronic stones", icon: "pill" },
  ],
  diagnosis: {
    description:
      "Diagnosis usually starts with an ultrasound to detect stones, followed by blood tests to check for infection or bile duct involvement if symptoms are severe.",
    methods: [
      "Abdominal ultrasound",
      "Blood tests for liver function and infection markers",
      "CT scan for complex or unclear cases",
      "MRCP for suspected bile duct stones",
    ],
  },
  treatments: {
    surgical: [
      {
        name: "Laparoscopic Cholecystectomy",
        description:
          "Minimally invasive keyhole surgery to remove the gallbladder using small incisions and a camera-guided approach.",
        benefits: ["Small scars, minimal pain", "Day-care or overnight stay", "Quick return to normal diet and activity"],
        recoveryTime: "5–7 days",
        anesthesia: "General",
      },
      {
        name: "Open Cholecystectomy",
        description: "Traditional surgery through a larger abdominal incision, used for complex or complicated cases.",
        benefits: ["Suitable for severe inflammation or scarring", "Allows direct surgical access"],
        recoveryTime: "3–4 weeks",
        anesthesia: "General",
      },
      {
        name: "ERCP (for Bile Duct Stones)",
        description:
          "An endoscopic procedure to remove stones blocking the common bile duct, often performed alongside gallbladder removal.",
        benefits: ["Clears duct obstruction without large incisions", "Reduces risk of pancreatitis"],
        recoveryTime: "2–3 days",
        anesthesia: "Sedation",
      },
    ],
    nonSurgical: [
      { name: "Maintain a Healthy Weight", description: "Avoid rapid weight loss or gain" },
      { name: "Eat a Balanced, Fiber-Rich Diet", description: "Supports healthy digestion" },
      { name: "Limit Fried and Fatty Foods", description: "Reduces gallbladder strain" },
      { name: "Stay Physically Active", description: "Improves gallbladder motility" },
      { name: "Eat Regular Meals", description: "Avoid long gaps that concentrate bile" },
      { name: "Stay Hydrated", description: "Supports healthy bile composition" },
    ],
  },
  types: [
    {
      type: "Cholesterol Stones",
      description: "The most common type, forming when bile contains too much cholesterol.",
      procedure: "Laparoscopic Cholecystectomy - standard treatment.",
    },
    {
      type: "Pigment Stones",
      description: "Dark stones formed from excess bilirubin, often linked to liver disease or blood disorders.",
      procedure: "Laparoscopic Cholecystectomy - with evaluation of underlying cause.",
    },
    {
      type: "Bile Duct Stones (Choledocholithiasis)",
      description: "Stones that migrate into and block the common bile duct.",
      procedure: "ERCP - followed by cholecystectomy.",
    },
    {
      type: "Complicated Gallstones (Cholecystitis)",
      description: "Inflamed, infected gallbladder due to stone blockage.",
      procedure: "Laparoscopic or Open Cholecystectomy - depending on severity.",
    },
  ],
  whyChooseUs: [
    {
      title: "Advanced Laparoscopic Technique",
      description: "Small-incision surgery with faster healing and minimal scarring.",
    },
    {
      title: "FREE Consultation with Experienced Surgeons",
      description: "8–15 years of specialized experience.",
    },
    { title: "Quick Recovery", description: "Most patients resume normal activity within a week." },
    {
      title: "End-to-End Insurance Assistance",
      description: "We handle claims and paperwork for you.",
    },
  ],
  faq: [
    {
      question: "Where can I get the best gallstone surgery in Pune?",
      answer:
        "Total Surgicare's clinic in Wanowarie, Pune offers laparoscopic gallstone surgery, serving patients across Kondhwa, Camp, Hadapsar, and East Pune.",
    },
    {
      question: "Is laparoscopic gallstone surgery safe?",
      answer:
        "Yes, it's a well-established, minimally invasive procedure with a high success rate and low complication risk when performed by experienced surgeons.",
    },
    {
      question: "How long is the hospital stay for gallbladder removal?",
      answer: "Most laparoscopic cases involve a day-care or one-night stay, with recovery in about 5–7 days.",
    },
    {
      question: "Can gallstones be treated without surgery?",
      answer:
        "Small, asymptomatic stones may be monitored, but symptomatic gallstones typically require surgical removal of the gallbladder for lasting relief.",
    },
    {
      question: "Does Total Surgicare accept insurance for gallstone surgery?",
      answer: "Yes, we assist with cashless and reimbursement claims and offer 0% interest EMI options.",
    },
    {
      question: "How do I book a consultation for gallstone surgery in Pune?",
      answer: "Call +91-9665551711 or book online for a free consultation with our surgical team.",
    },
  ],
};
