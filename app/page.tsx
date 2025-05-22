import AppointmentBooking from "@/components/home/AppointmentBooking";
import BlogSection from "@/components/home/BlogSection";
import ContactForm from "@/components/home/ContactForm";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/Hero";
import MedicalSpecialties from "@/components/home/MedicalSpecialties";
import Services from "@/components/home/Services";
import { TestimonialMarquee } from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <AppointmentBooking />
      <TestimonialMarquee />
      <MedicalSpecialties />
      <BlogSection />
      <FAQSection />
      <ContactForm />
    </>
  );
}
