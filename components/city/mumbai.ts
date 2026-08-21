import {
  Activity,
  GitBranch,
  Layers,
  Scissors,
  Stethoscope,
  Zap,
} from "lucide-react";

import type { CityConfig } from "./types";

const PAGE_TITLE = "Advanced Multispeciality Surgical Care in Mumbai";

export const mumbaiConfig: CityConfig = {
  key: "mumbai",
  name: "Mumbai",

  meta: {
    title: `${PAGE_TITLE} | Total Surgicare`,
    description:
      "Advanced surgical care in Mumbai from experienced specialists — general, laparoscopic and minimally invasive surgery, diagnostics and post-op care.",
    keywords: "Multispeciality Surgical Care in Mumbai",
  },

  hero: {
    title:
      "Advanced Multispeciality Surgical Care in Mumbai with Expert Surgeons",
    description:
      "Receive advanced surgical treatment from experienced specialists at Total Surgicare, a trusted multispeciality hospital in Mumbai. We provide general surgery, laparoscopic surgery, modern diagnostic services, minimally invasive procedures, expert consultations, and comprehensive post-surgical care under one roof.",
  },

  treatments: [
    {
      slug: "stapler-circumcision",
      name: "Circumcision",
      description:
        "Advanced ZSR stapler surgery for painless and quick recovery.",
      icon: Activity,
      colorClass: "bg-gradient-to-br from-blue-100 to-indigo-100",
      iconBgClass: "bg-white border-blue-50 group-hover:bg-blue-600",
    },
    {
      slug: "gallstone-surgery",
      name: "Gallstone",
      description:
        "Laparoscopic gallbladder surgery for safe gallstone removal.",
      icon: Stethoscope,
      colorClass: "bg-gradient-to-br from-emerald-100 to-teal-100",
      iconBgClass: "bg-white border-emerald-50 group-hover:bg-emerald-600",
    },
    {
      slug: "kidney-stone-treatment-rirspcnlursl",
      name: "Kidney Stone",
      description:
        "Modern laser lithotripsy (RIRS/URSL) for kidney stone removal.",
      icon: Zap,
      colorClass: "bg-gradient-to-br from-purple-100 to-fuchsia-100",
      iconBgClass: "bg-white border-purple-50 group-hover:bg-purple-600",
    },
    {
      slug: "piles-treatment",
      name: "Piles",
      description:
        "Laser treatment for piles (hemorrhoids) with minimal pain and quick recovery.",
      icon: Layers,
      colorClass: "bg-gradient-to-br from-orange-100 to-amber-100",
      iconBgClass: "bg-white border-orange-50 group-hover:bg-orange-500",
    },
    {
      slug: "fissure-treatment",
      name: "Fissure",
      description:
        "Advanced laser treatment for anal fissures with minimal downtime.",
      icon: Scissors,
      colorClass: "bg-gradient-to-br from-rose-100 to-pink-100",
      iconBgClass: "bg-white border-rose-50 group-hover:bg-rose-500",
    },
    {
      slug: "fistula-treatment",
      name: "Fistula",
      description:
        "Laser fistula treatment ensuring faster healing and no recurrence.",
      icon: GitBranch,
      colorClass: "bg-gradient-to-br from-cyan-100 to-sky-100",
      iconBgClass: "bg-white border-cyan-50 group-hover:bg-cyan-600",
    },
  ],

  whyChooseUsIntro:
    "Four reasons patients across Mumbai trust us with their surgery — from the first consultation right through to recovery.",

  testimonialsIntro:
    "Read genuine feedback from patients who trusted Total Surgicare for advanced surgical treatment, compassionate care, and successful recovery across multiple specialties in Mumbai.",

  reviews: [
    {
      author: "Sneha Kulkarni",
      rating: 5,
      treatment: "Laparoscopic Surgery",
      content:
        "I was quite nervous before my surgery, but the doctor explained everything clearly and made me feel comfortable. The staff was supportive throughout my treatment and recovery. Overall, I had a very good experience.",
    },
    {
      author: "Amol Jadhav",
      rating: 5,
      treatment: "Hernia Surgery",
      content:
        "From the first consultation to the follow-up, the entire process was smooth. The doctor answered all my questions patiently and the staff was helpful whenever I needed assistance. I am happy with the care I received.",
    },
    {
      author: "Pooja Deshmukh",
      rating: 5,
      treatment: "Piles Treatment",
      content:
        "I had been dealing with the problem for quite some time and was hesitant to get treatment. The doctor explained the available options properly and guided me throughout the process. The overall experience was comfortable and reassuring.",
    },
    {
      author: "Rohit Patil",
      rating: 5,
      treatment: "Gallbladder Surgery",
      content:
        "The consultation was detailed and the doctor explained the procedure in simple language. The staff was polite and responsive. My recovery went well and the follow-up support was also good.",
    },
    {
      author: "Neha Shinde",
      rating: 5,
      treatment: "Fissure Treatment",
      content:
        "I appreciated how patiently the doctor listened to my concerns. Everything was explained before starting the treatment, which gave me confidence. The staff was friendly and the overall experience was positive.",
    },
    {
      author: "Sachin Pawar",
      rating: 5,
      treatment: "Kidney Stone Treatment",
      content:
        "The consultation was professional and the treatment process was explained clearly. I also received proper guidance about the recovery and follow-up. The staff was cooperative and made the experience much easier.",
    },
    {
      author: "Vaishali More",
      rating: 5,
      treatment: "General Surgery",
      content:
        "Good experience overall. The doctors were approachable and took time to understand my concerns. The staff was courteous and the treatment process was well managed.",
    },
    {
      author: "Akshay Bhosale",
      rating: 5,
      treatment: "Laparoscopic Surgery",
      content:
        "I was looking for a reliable surgical team and had a good experience with Total Surgicare. The doctor explained the procedure and recovery process clearly. The staff was helpful and professional throughout.",
    },
    {
      author: "Priyanka Joshi",
      rating: 5,
      treatment: "Hernia Treatment",
      content:
        "The doctor was very patient while explaining my condition and treatment options. I felt comfortable asking questions and received proper guidance during the recovery period. Overall, a positive experience.",
    },
    {
      author: "Nikhil Chavan",
      rating: 5,
      treatment: "Piles Treatment",
      content:
        "The consultation was informative and the treatment was explained properly. The team was supportive and professional throughout my visit. I was especially happy with the way my questions were handled.",
    },
    {
      author: "Manish Sawant",
      rating: 5,
      treatment: "Gallstone Surgery",
      content:
        "The entire process was handled professionally, from consultation to follow-up. I received clear instructions before and after the procedure. The staff was cooperative and made me feel comfortable.",
    },
    {
      author: "Rutuja Deshpande",
      rating: 5,
      treatment: "Fistula Treatment",
      content:
        "I was initially worried about getting treatment, but the doctor explained everything patiently. The staff was kind and supportive. The follow-up guidance was also helpful during my recovery.",
    },
  ],

  // No published Mumbai clinic address yet — the location block renders as a
  // placeholder and the Hospital schema omits `address` rather than reusing
  // Pune's. Fill this in when the Mumbai address is confirmed.
  address: null,

  // No verified Google Business Profile for Mumbai yet. Leave null: the reviews
  // above are client-supplied testimonials, not Google reviews, so emitting an
  // aggregateRating from them would be fabricated review markup.
  rating: null,

  locationIntro:
    "Consultations and surgical care for patients across Mumbai, six days a week. Call us to confirm clinic timings and directions.",

  faqs: [
    {
      question:
        "What makes Total Surgicare one of the best providers of multispeciality surgical care in Mumbai?",
      answer:
        "Total Surgicare offers advanced surgical treatments, experienced specialists, modern operation theatres, and personalized patient care for various medical conditions.",
    },
    {
      question: "Which surgeries are available at Total Surgicare?",
      answer:
        "We provide treatments for piles, fissure, fistula, hernia, gallstones, appendicitis, kidney stones, gynecology, vascular conditions, urology, and many other surgical specialties.",
    },
    {
      question: "Do you provide minimally invasive surgery?",
      answer:
        "Yes. We specialize in advanced minimally invasive and laparoscopic procedures that help reduce pain, blood loss, and recovery time.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "Appointments can be booked online through our website or by calling our clinic directly.",
    },
    {
      question: "Do you provide post-surgical care?",
      answer:
        "Yes. Our dedicated team provides complete post-operative care to ensure a smooth and comfortable recovery.",
    },
    {
      question: "Are EMI facilities available?",
      answer: "Yes. We offer convenient EMI options on selected treatments.",
    },
    {
      question: "Do you accept medical insurance?",
      answer:
        "Our team assists patients with insurance support and claim guidance wherever applicable.",
    },
    {
      question: "Why should I choose a multispeciality surgical hospital?",
      answer:
        "A multispeciality surgical hospital provides expert care across multiple specialties under one roof, ensuring better coordination, quicker diagnosis, and comprehensive treatment.",
    },
  ],
};
