import { MedicalCondition } from "@/types";

export const fissureTreatmentPune: MedicalCondition = {
  id: "pune-fissure-treatment",
  slug: "fissure-treatment",
  name: "Fissure",
  overview: {
    title: "Best Fissure Treatment in Pune – Painless Laser Surgery",
    brief:
      "Searching for the best fissure treatment in Pune? Total Surgicare's Wanowarie clinic offers advanced laser fissure surgery that heals painful tears in the anal lining with minimal downtime — most patients are back to normal life within a week.",
    alternateNames: [
      { language: "Hindi", name: "भगंदर की दरार" },
      { language: "Marathi", name: "गुदा विदार" },
    ],
    badges: [
      { title: "Minimally Invasive", description: "Precise laser technique" },
      { title: "Modern Technology", description: "Advanced surgical equipment" },
      { title: "Expert Proctologists", description: "Specialized fissure care" },
      { title: "Fast Healing", description: "Reduced recovery time" },
    ],
  },
  aboutCondition: {
    title: "What is an Anal Fissure?",
    description:
      "An anal fissure is a small tear in the lining of the anus, often caused by passing hard or large stools. It can cause sharp pain and bleeding during bowel movements and, if left untreated, may become a chronic, recurring problem.",
  },
  foodTriggers: [
    { name: "Spicy Foods", description: "Irritate the anal lining further", bgColor: "bg-orange-100" },
    { name: "Low-Fiber Processed Foods", description: "Worsen constipation", bgColor: "bg-amber-100" },
    { name: "Refined Flour (Maida) Products", description: "Slow digestion, hardening stool", bgColor: "bg-blue-100" },
    { name: "Excess Dairy", description: "Can cause constipation in some people", bgColor: "bg-green-100" },
    { name: "Caffeine & Alcohol", description: "Dehydrate the body, hardening stool", bgColor: "bg-yellow-100" },
    { name: "Red Meat in Excess", description: "Slower digestion increases straining risk", bgColor: "bg-red-100" },
  ],
  symptoms: [
    { title: "Sharp Pain During Bowel Movements", description: "Often severe and burning", icon: "thermometer" },
    { title: "Bleeding", description: "Bright red blood on stool or toilet paper", icon: "pill" },
    { title: "Visible Tear", description: "A crack visible around the anal opening", icon: "alert-circle" },
    { title: "Itching", description: "Around the fissure site", icon: "frown" },
    { title: "Muscle Spasm", description: "Anal sphincter spasm after passing stool", icon: "syringe" },
    { title: "Skin Tag Formation", description: "In chronic, long-standing fissures", icon: "image" },
  ],
  causes: [
    { title: "Chronic Constipation", description: "Straining tears the anal lining", icon: "alert-circle" },
    { title: "Chronic Diarrhea", description: "Repeated irritation of the anal canal", icon: "thermometer" },
    { title: "Childbirth", description: "Trauma during vaginal delivery", icon: "user" },
    { title: "Anal Sphincter Spasm", description: "Reduces blood flow, delaying healing", icon: "syringe" },
    { title: "Inflammatory Bowel Disease", description: "Crohn's disease increases risk", icon: "pill" },
    { title: "Reduced Blood Flow", description: "Poor circulation slows tissue repair", icon: "arrow-up" },
  ],
  riskFactors: [
    { title: "Low-Fiber Diet", description: "Leads to hard stools and straining", icon: "pill" },
    { title: "Sedentary Lifestyle", description: "Slower bowel motility", icon: "clock" },
    { title: "Pregnancy & Childbirth", description: "Increased pressure and trauma", icon: "user" },
    { title: "Age", description: "More common in middle-aged adults", icon: "clock" },
    { title: "Chronic Constipation History", description: "Repeated tearing risk", icon: "alert-circle" },
    { title: "Anal Intercourse", description: "Can increase mechanical trauma", icon: "arrow-up" },
  ],
  complications: [
    { title: "Chronic Fissure", description: "Lasting beyond 6 weeks, harder to treat", icon: "clock" },
    { title: "Sphincter Spasm & Scarring", description: "Reduced anal flexibility", icon: "syringe" },
    { title: "Skin Tags", description: "Persistent tissue growth (sentinel pile)", icon: "image" },
    { title: "Infection", description: "Open wound susceptibility", icon: "thermometer" },
    { title: "Fistula Formation", description: "In rare, long-neglected cases", icon: "alert-circle" },
    { title: "Persistent Pain", description: "Impacting quality of life", icon: "frown" },
  ],
  diagnosis: {
    description:
      "Diagnosis is typically made through a visual examination of the anal area. In chronic or unclear cases, further tests may be used to rule out other conditions.",
    methods: [
      "Visual examination of the anal region",
      "Digital rectal examination (if tolerated)",
      "Anoscopy for internal assessment",
      "Additional imaging for suspected IBD or complex fissures",
    ],
  },
  treatments: {
    surgical: [
      {
        name: "Laser Sphincterotomy",
        description:
          "A precise laser technique that relaxes the internal anal sphincter, improving blood flow and allowing the fissure to heal.",
        benefits: [
          "Minimal pain and bleeding",
          "Day-care procedure",
          "Low risk of incontinence",
          "Quick return to daily activities",
        ],
        recoveryTime: "5–7 days",
        anesthesia: "Local with sedation",
      },
      {
        name: "Lateral Internal Sphincterotomy (LIS)",
        description:
          "Traditional surgical division of a small portion of the internal sphincter muscle to relieve spasm and promote healing.",
        benefits: ["Highly effective for chronic fissures", "Long-term resolution"],
        recoveryTime: "1–2 weeks",
        anesthesia: "Local or general",
      },
      {
        name: "Fissurectomy",
        description:
          "Surgical removal of the fissure edge and any associated skin tag, often combined with sphincter-relaxing treatment.",
        benefits: ["Removes chronic, fibrosed tissue", "Effective for fissures unresponsive to medication"],
        recoveryTime: "1–2 weeks",
        anesthesia: "Local or general",
      },
    ],
    nonSurgical: [
      { name: "High-Fiber Diet", description: "Softens stool, reduces straining" },
      { name: "Stay Hydrated", description: "Prevents hard stools" },
      { name: "Avoid Prolonged Straining", description: "Respond promptly to urges" },
      { name: "Warm Sitz Baths", description: "Relax the anal sphincter" },
      { name: "Regular Exercise", description: "Improves bowel regularity" },
      { name: "Avoid Delaying Bowel Movements", description: "Prevents stool hardening" },
    ],
  },
  types: [
    {
      type: "Acute Fissure",
      description: "Recent tear, usually heals with diet changes and topical treatment within a few weeks.",
      procedure: "Medical Management - Fiber, stool softeners, topical nitroglycerin or calcium channel blockers.",
    },
    {
      type: "Chronic Fissure",
      description: "Persists beyond 6–8 weeks, often with a visible skin tag and sphincter spasm.",
      procedure: "Laser Sphincterotomy - Relieves spasm and promotes healing.",
    },
    {
      type: "Recurrent Fissure",
      description: "Fissures that heal and reopen repeatedly despite treatment.",
      procedure: "Lateral Internal Sphincterotomy - Long-term muscle relaxation for durable healing.",
    },
    {
      type: "Fissure with Skin Tag",
      description: "Chronic fissures accompanied by a sentinel skin tag at the edge.",
      procedure: "Fissurectomy - Removes fibrosed tissue and tag along with fissure repair.",
    },
  ],
  whyChooseUs: [
    {
      title: "Advanced Laser Sphincterotomy",
      description: "Fast, precise treatment completed within minutes, with same-day discharge.",
    },
    {
      title: "FREE Consultation with Experienced Proctologists",
      description: "8–15 years of specialized experience.",
    },
    { title: "Quick Recovery", description: "Most patients heal within a week." },
    {
      title: "End-to-End Insurance Assistance",
      description: "We manage claims and paperwork for you.",
    },
  ],
  faq: [
    {
      question: "Where is the best fissure treatment clinic in Pune?",
      answer:
        "Total Surgicare's clinic in Wanowarie, Pune offers advanced laser fissure treatment, serving patients across Kondhwa, Camp, Hadapsar, and East Pune.",
    },
    {
      question: "Can fissures be treated without surgery?",
      answer:
        "Mild, acute fissures often respond to dietary changes and topical medication. Chronic or recurring fissures usually require laser sphincterotomy for lasting relief.",
    },
    {
      question: "Is laser fissure surgery painful?",
      answer:
        "It is a minimally invasive, day-care procedure performed under local anesthesia with sedation, resulting in far less pain than traditional surgery.",
    },
    {
      question: "How long does it take to recover from fissure surgery?",
      answer: "Most patients recover within 5–7 days with laser sphincterotomy.",
    },
    {
      question: "Does Total Surgicare accept insurance for fissure treatment in Pune?",
      answer: "Yes, we assist with cashless and reimbursement claims and offer EMI options.",
    },
    {
      question: "How do I book a consultation for fissure treatment in Pune?",
      answer: "Call +91-9665551711 or book online for a free consultation with our proctologists.",
    },
  ],
};
