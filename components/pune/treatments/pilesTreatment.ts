import { MedicalCondition } from "@/types";

export const pilesTreatmentPune: MedicalCondition = {
  id: "pune-piles-treatment",
  slug: "piles-treatment",
  name: "Piles",
  overview: {
    title: "Best Piles Treatment in Pune – Laser & Painless Piles Surgery",
    brief:
      "Looking for piles treatment in Pune? Total Surgicare's Wanowarie clinic offers advanced laser piles surgery, a painless, daycare procedure with no cuts or stitches performed by experienced proctology surgeons with quick recovery and minimal downtime.",
    alternateNames: [
      { language: "Hindi", name: "बवासीर का इलाज" },
      { language: "Marathi", name: "मूळव्याध उपचार" },
    ],
    badges: [
      { title: "Laser Technology", description: "No cuts, no stitches" },
      { title: "Painless Procedure", description: "Minimal post-op discomfort" },
      { title: "Expert Surgeons", description: "Specialized in proctology" },
      { title: "Same-Day Discharge", description: "Back home within hours" },
    ],
  },
  aboutCondition: {
    title: "What is Piles Surgery?",
    description:
      "Piles surgery, or hemorrhoidectomy/laser hemorrhoidoplasty, is the surgical treatment of swollen blood vessels in and around the anus and lower rectum. It's most commonly performed to treat chronic bleeding, prolapse, or pain that hasn't responded to diet and medication, and normal bowel function returns afterward.",
  },
  foodTriggers: [
    { name: "Spicy Foods", description: "Can trigger irritation and burning", bgColor: "bg-orange-100" },
    { name: "Fried and Oily Foods", description: "Slow digestion, worsen constipation", bgColor: "bg-amber-100" },
    { name: "Red Meat", description: "Low fiber, harder to digest", bgColor: "bg-blue-100" },
    { name: "Refined Carbs (white bread, maida)", description: "Contribute to constipation", bgColor: "bg-green-100" },
    { name: "Caffeinated Drinks", description: "Can cause dehydration and straining", bgColor: "bg-yellow-100" },
    { name: "Alcohol", description: "Dehydrates and irritates the digestive tract", bgColor: "bg-red-100" },
  ],
  symptoms: [
    { title: "Rectal Bleeding", description: "Bright red blood during or after bowel movements", icon: "pill" },
    { title: "Anal Pain or Discomfort", description: "Especially while sitting or passing stool", icon: "thermometer" },
    { title: "Itching Around the Anus", description: "Persistent irritation", icon: "frown" },
    { title: "A Lump Near the Anus", description: "Swollen, sometimes painful tissue", icon: "alert-circle" },
    { title: "Mucus Discharge", description: "Accompanying bowel movements", icon: "image" },
    { title: "Feeling of Incomplete Evacuation", description: "Even after passing stool", icon: "clock" },
  ],
  causes: [
    { title: "Grade III/IV Hemorrhoids", description: "Prolapsed piles not responding to conservative care", icon: "alert-circle" },
    { title: "Chronic Bleeding", description: "Leading to anemia if untreated", icon: "pill" },
    { title: "Recurring Pain", description: "Affecting daily activities", icon: "thermometer" },
    { title: "Thrombosed Piles", description: "Painful clotted external hemorrhoids", icon: "syringe" },
    { title: "Failed Medical Management", description: "No relief from diet, medication, or home care", icon: "frown" },
    { title: "Prolapse", description: "Piles that protrude and don't retract on their own", icon: "arrow-up" },
  ],
  riskFactors: [
    { title: "Chronic Constipation", description: "Straining increases pressure on rectal veins", icon: "alert-circle" },
    { title: "Prolonged Sitting", description: "Common in desk jobs and long commutes", icon: "clock" },
    { title: "Pregnancy", description: "Increased pelvic pressure", icon: "user" },
    { title: "Low-Fiber Diet", description: "Leads to harder stools and straining", icon: "pill" },
    { title: "Obesity", description: "Added pressure on pelvic and rectal veins", icon: "weight" },
    { title: "Family History", description: "Genetic predisposition to hemorrhoids", icon: "user" },
  ],
  complications: [
    { title: "Chronic Anemia", description: "From ongoing blood loss", icon: "pill" },
    { title: "Thrombosis", description: "Painful clot formation in external piles", icon: "syringe" },
    { title: "Strangulated Hemorrhoids", description: "Blood supply cut off, requiring urgent care", icon: "alert-circle" },
    { title: "Infection", description: "Ulceration and infection of prolapsed tissue", icon: "thermometer" },
    { title: "Chronic Pain", description: "Ongoing discomfort affecting daily life", icon: "frown" },
    { title: "Increased Surgical Risk", description: "Advanced grades are harder to treat later", icon: "arrow-up" },
  ],
  diagnosis: {
    description:
      "Diagnosis is usually clinical, based on a physical and rectal examination, with additional tests used to rule out other causes of bleeding or confirm the grade of piles.",
    methods: [
      "Digital rectal examination",
      "Proctoscopy/anoscopy",
      "Colonoscopy (to rule out other conditions, if indicated)",
      "Blood tests (to check for anemia)",
    ],
  },
  treatments: {
    surgical: [
      {
        name: "Laser Piles Surgery (LHP)",
        description: "A minimally invasive procedure using laser energy to shrink and seal hemorrhoidal tissue without cuts or stitches.",
        benefits: ["No cuts or stitches", "Minimal bleeding and pain", "Quick return to daily activities"],
        recoveryTime: "2–3 days",
        anesthesia: "Local/Spinal",
      },
      {
        name: "Stapled Hemorrhoidopexy (MIPH)",
        description: "A stapling technique that repositions prolapsed hemorrhoidal tissue and cuts off its blood supply.",
        benefits: ["Less pain than conventional surgery", "Suitable for prolapsed (Grade III/IV) piles"],
        recoveryTime: "1 week",
        anesthesia: "Spinal/General",
      },
      {
        name: "Conventional Hemorrhoidectomy",
        description: "Traditional surgical removal of hemorrhoidal tissue, reserved for severe or complex cases.",
        benefits: ["Effective for large or recurrent piles", "Allows complete tissue removal"],
        recoveryTime: "2–3 weeks",
        anesthesia: "Spinal/General",
      },
    ],
    nonSurgical: [
      { name: "Increase Fiber Intake", description: "Softens stool, reduces straining" },
      { name: "Stay Hydrated", description: "Supports easier bowel movements" },
      { name: "Avoid Prolonged Sitting", description: "Take regular movement breaks" },
      { name: "Follow Pre-Op Fasting Instructions", description: "As advised by your surgical team" },
      { name: "Disclose All Medications", description: "To your surgeon before the procedure" },
      { name: "Arrange Post-Op Support", description: "Help at home for the first few days" },
    ],
  },
  types: [
    {
      type: "Grade I/II Piles",
      description: "Early-stage piles with minimal prolapse, often managed conservatively first.",
      procedure: "Laser Piles Surgery - if symptoms persist despite medical management.",
    },
    {
      type: "Grade III Piles",
      description: "Piles that prolapse and require manual reduction.",
      procedure: "Laser Surgery or Stapled Hemorrhoidopexy - depending on presentation.",
    },
    {
      type: "Grade IV Piles",
      description: "Permanently prolapsed piles that cannot be pushed back in.",
      procedure: "Stapled Hemorrhoidopexy or Conventional Hemorrhoidectomy - for complete resolution.",
    },
    {
      type: "Thrombosed External Piles",
      description: "Painful, clotted external hemorrhoids requiring prompt attention.",
      procedure: "Urgent Evaluation - with surgical or laser intervention as needed.",
    },
  ],
  whyChooseUs: [
    {
      title: "Advanced Laser & Stapler Techniques",
      description: "Minimal pain with faster recovery.",
    },
    {
      title: "FREE Consultation with Experienced Surgeons",
      description: "Years of dedicated proctology/colorectal surgery experience.",
    },
    { title: "Quick Recovery", description: "Most patients return to normal diet and routine within days." },
    {
      title: "End-to-End Insurance Assistance",
      description: "We manage claims and paperwork for you.",
    },
  ],
  faq: [
    {
      question: "Where can I get piles treatment in Pune?",
      answer:
        "Total Surgicare's clinic in Wanowarie, Pune offers laser and stapler piles surgery, serving patients across Kondhwa, Camp, Hadapsar, and East Pune.",
    },
    {
      question: "Is laser piles surgery painful?",
      answer:
        "Laser piles surgery is minimally invasive with little to no cutting, so most patients experience significantly less pain than with conventional surgery.",
    },
    {
      question: "How long does piles surgery take?",
      answer: "Laser piles surgery typically takes 20–30 minutes, with most patients discharged the same day.",
    },
    {
      question: "Is piles treatment covered by insurance in Pune?",
      answer: "Yes, we assist with cashless and reimbursement claims across major insurers, and offer 0% interest EMI options.",
    },
    {
      question: "Can piles be treated without surgery?",
      answer:
        "Mild (Grade I/II) piles can often be managed with diet, lifestyle changes, and medication; surgery is generally recommended for more advanced or persistent cases.",
    },
    {
      question: "How do I book a consultation for piles treatment in Pune?",
      answer: "Call +91-9665551711 or book online for a free consultation with our surgical team.",
    },
  ],
};
