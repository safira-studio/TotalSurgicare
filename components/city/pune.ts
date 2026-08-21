import {
  Activity,
  CircleDot,
  Droplets,
  Layers,
  Scissors,
  Stethoscope,
  Zap,
} from "lucide-react";

import type { CityConfig } from "./types";

const PAGE_TITLE = "Advanced Multispeciality Surgical Care in Pune";

export const puneConfig: CityConfig = {
  key: "pune",
  name: "Pune",

  meta: {
    title: `${PAGE_TITLE} | Total Surgicare`,
    description:
      "Advanced surgical care in Pune from experienced specialists — general, laparoscopic and minimally invasive surgery, diagnostics and post-op care.",
    keywords: "Multispeciality Surgical Care in Pune",
  },

  hero: {
    title:
      "Advanced Multispeciality Surgical Care in Pune with Expert Surgeons",
    description:
      "Advanced surgical treatment from experienced specialists at Total Surgicare, a trusted multispeciality hospital in Pune — general surgery, laparoscopic and minimally invasive procedures, modern diagnostics and complete post-surgical care under one roof.",
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
      slug: "kidney-stone-treatment-rirspcnlursl",
      name: "Kidney Stone",
      description:
        "Modern laser lithotripsy (RIRS/URSL) for kidney stone removal.",
      icon: Zap,
      colorClass: "bg-gradient-to-br from-purple-100 to-fuchsia-100",
      iconBgClass: "bg-white border-purple-50 group-hover:bg-purple-600",
    },
    {
      slug: "gallstone-surgery",
      name: "Gall Stone",
      description:
        "Laparoscopic cholecystectomy for safe gall bladder stone removal.",
      icon: Stethoscope,
      colorClass: "bg-gradient-to-br from-emerald-100 to-teal-100",
      iconBgClass: "bg-white border-emerald-50 group-hover:bg-emerald-600",
    },
    {
      slug: "lipoma",
      name: "Lipoma",
      description:
        "Painless surgical removal of lipoma (fatty lumps) with minimal scarring.",
      icon: CircleDot,
      colorClass: "bg-gradient-to-br from-cyan-100 to-sky-100",
      iconBgClass: "bg-white border-cyan-50 group-hover:bg-cyan-600",
    },
    {
      slug: "gall-bladder-surgery",
      name: "Gall Bladder",
      description:
        "Advanced laparoscopic gall bladder removal surgery with quick recovery.",
      icon: Droplets,
      colorClass: "bg-gradient-to-br from-lime-100 to-green-100",
      iconBgClass: "bg-white border-lime-50 group-hover:bg-lime-600",
    },
  ],

  whyChooseUsIntro:
    "Four reasons patients across Pune trust us with their surgery — from the first consultation right through to recovery.",

  testimonialsIntro:
    "Read genuine feedback from patients who trusted Total Surgicare for advanced surgical treatment, compassionate care, and successful recovery across multiple specialties.",

  reviews: [
    {
      author: "Rahat Sayyed",
      rating: 5,
      content:
        "The medical team provided exceptional care during my treatment. I felt like I was in safe hands throughout the whole process.",
    },
    {
      author: "Akash Patil",
      rating: 5,
      content:
        "The doctors were professional and attentive to my needs. The clinic facilities are modern and clean.",
    },
    {
      author: "Om Gupta",
      rating: 4,
      content:
        "I've been a patient for 3 years and the quality of care has always been excellent. Highly recommended!",
    },
    {
      author: "Faizan Shaikh",
      rating: 5,
      content:
        "The staff is friendly and the wait times are minimal. I appreciate how efficiently the clinic is run.",
    },
    {
      author: "Manisha Deshmukh",
      rating: 5,
      content:
        "My experience with the specialists was outstanding. They took the time to explain everything clearly.",
    },
  ],

  address: {
    street:
      "One Place, 501 B, 5th Floor, Cabin No. 2, Kimaya Clinic, Wanowrie",
    locality: "Pune",
    region: "Maharashtra",
    postalCode: "411040",
    country: "IN",
  },

  rating: {
    value: "5.0",
    reviewCount: "69",
    best: "5",
    worst: "1",
  },

  locationIntro:
    "Find us in Wanowrie, Pune — easy to reach, with consultations and surgical care available six days a week.",

  faqs: [
    {
      question:
        "What makes Total Surgicare one of the best providers of multispeciality surgical care in Pune?",
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
