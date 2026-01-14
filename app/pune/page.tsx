import AppointmentBooking from "@/components/home/AppointmentBooking";
import Hero from "@/components/home/Hero";
import PuneTreatments from "@/components/pune/PuneTreatments";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Surgical Care in Pune | Total Surgicare",
    description: "Expert surgical care in Pune featuring top specialized doctors and advanced technology.",
};

export default function PunePage() {
    return (
        <>
            <Hero />
            <PuneTreatments />
            <WhyChooseUs />
            <AppointmentBooking />
        </>
    );
}
