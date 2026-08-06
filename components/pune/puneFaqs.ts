import type { FAQItem } from "@/components/home/FAQSection";

/**
 * Single source for the Pune landing page FAQs. Rendered by FAQSection and
 * serialised into the page's FAQPage JSON-LD, so the two can never drift.
 */
export const puneFaqs: FAQItem[] = [
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
];
