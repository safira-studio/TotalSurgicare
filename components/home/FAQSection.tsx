import React from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQItem[] = [
    {
      question: "What insurance plans do you accept?",
      answer:
        "We accept most major insurance plans, including Medicare, Blue Cross Blue Shield, Aetna, Cigna, and United Healthcare. Please contact our office to verify if we accept your specific insurance plan.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling our office during business hours, using our online appointment booking system on our website, or using our patient portal if you&apos;re an existing patient.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring your photo ID, insurance card, a list of current medications, medical records if available, and any relevant imaging or test results. It&apos;s also helpful to arrive 15 minutes early to complete paperwork.",
    },
    {
      question: "Do you offer telehealth services?",
      answer:
        "Yes, we offer telehealth appointments for certain types of visits. Please call our office to determine if your medical concern is appropriate for a telehealth consultation.",
    },
    {
      question: "What are your office hours?",
      answer:
        "Our regular office hours are Monday through Friday from 8:00 AM to 5:00 PM. We also offer limited weekend hours for urgent care needs on Saturdays from 9:00 AM to 1:00 PM.",
    },
    {
      question: "How do I get prescription refills?",
      answer:
        "The fastest way to request prescription refills is through our patient portal. Alternatively, you can contact your pharmacy and ask them to send us a refill request. Please allow 48-72 hours for processing.",
    },
  ];

  const emergencyContacts = [
    { label: "Emergency Services", value: "911" },
    { label: "Main Clinic Number", value: "(123) 456-7890" },
    { label: "After Hours Nurse Line", value: "(123) 456-7899" },
  ];

  return (
    <div className="w-full py-12 mb-6 ">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-clinic-primary mb-2">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl font-onest">Common Questions</h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            Find answers to the most common questions about our services and
            medical care.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="lg:w-2/3 px-3">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-0"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="text-left font-medium hover:text-clinic-blue transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="lg:w-1/3 mx-auto">
            <Card className="p-6 bg-gradient-to-br from-clinic-primary to-clinic-dark text-white">
              <div className="flex items-center mb-4">
                <HelpCircle className="mr-2" size={24} />
                <h3 className="text-xl font-semibold">Need Help?</h3>
              </div>
              <p className="text-white/90 mb-6">
                If you can&apos;t find the answer to your question, please
                don&apos;t hesitate to contact our customer support team.
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-medium">Emergency Contacts</h4>
                <div className="space-y-2">
                  {emergencyContacts.map((contact, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-white/80">{contact.label}:</span>
                      <span className="font-semibold">{contact.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 mt-4 border-t border-white/20">
                  <h4 className="text-lg font-medium mb-2">Email Support</h4>
                  <a
                    href="mailto:support@salvamedic.com"
                    className="text-white underline hover:no-underline"
                  >
                    support@salvamedic.com
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
