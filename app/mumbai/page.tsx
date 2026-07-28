import AppointmentBooking from "@/components/home/AppointmentBooking";
import Hero from "@/components/home/Hero";
import MumbaiTreatments from "@/components/mumbai/MumbaiTreatments";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Surgical Care in Mumbai | Total Surgicare",
    description: "Expert surgical care in Mumbai featuring top specialized doctors and advanced technology.",
};

export default function MumbaiPage() {
    return (
        <>
            <Hero />
            <MumbaiTreatments />
            <WhyChooseUs />
            <AppointmentBooking />
        </>
    );
}
