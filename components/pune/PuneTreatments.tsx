"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Activity, Layers, Stethoscope, Zap } from "lucide-react";

interface TreatmentItemProps {
    name: string;
    link: string;
    description: string;
    icon: React.ReactNode;
    colorClass: string;
    iconBgClass: string;
}

const TreatmentItem = ({ name, link, description, icon, colorClass, iconBgClass }: TreatmentItemProps) => {
    return (
        <Link href={link} className="group block h-full">
            <div className="relative bg-white border border-gray-100 rounded-3xl p-8 h-full transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                {/* Background Decoration */}
                <div className={`absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 ease-in-out ${colorClass}`} />

                <div className="relative z-10 flex flex-col h-full">
                    <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl shadow-sm border text-clinic-primary group-hover:text-white transition-colors duration-300 ${iconBgClass}`}>
                        {icon}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-clinic-primary transition-colors">
                        {name}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        {description}
                    </p>

                    <div className="mt-auto flex items-center text-sm font-semibold text-clinic-primary">
                        <span className="mr-2">View Treatment</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

const PuneTreatments = () => {
    const treatments = [
        {
            name: "Circumcision",
            link: "/pune/stapler-circumcision",
            description: "Advanced ZSR stapler surgery for painless and quick recovery.",
            icon: <Activity className="w-7 h-7" />,
            colorClass: "bg-gradient-to-br from-blue-100 to-indigo-100",
            iconBgClass: "bg-white border-blue-50 group-hover:bg-blue-600",
        },
        {
            name: "Piles & Fissure",
            link: "/pune/piles-treatment",
            description: "Laser treatment for piles, fissures, and fistula with minimal downtime.",
            icon: <Layers className="w-7 h-7" />,
            colorClass: "bg-gradient-to-br from-orange-100 to-amber-100",
            iconBgClass: "bg-white border-orange-50 group-hover:bg-orange-500",
        },
        {
            name: "Kidney Stone",
            link: "/pune/kidney-stone-treatment-rirspcnlursl",
            description: "Modern laser lithotripsy (RIRS/URSL) for kidney stone removal.",
            icon: <Zap className="w-7 h-7" />,
            colorClass: "bg-gradient-to-br from-purple-100 to-fuchsia-100",
            iconBgClass: "bg-white border-purple-50 group-hover:bg-purple-600",
        },
        {
            name: "Gall Stone",
            link: "/pune/gallstone-surgery",
            description: "Laparoscopic cholecystectomy for safe gall bladder stone removal.",
            icon: <Stethoscope className="w-7 h-7" />,
            colorClass: "bg-gradient-to-br from-emerald-100 to-teal-100",
            iconBgClass: "bg-white border-emerald-50 group-hover:bg-emerald-600",
        },
    ];

    return (
        <div className="w-full py-20 bg-gray-50/50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-clinic-primary text-xs font-bold tracking-wider uppercase mb-4">
                        Our Specialties
                    </span>
                    <h2 className="text-4xl md:text-5xl font-onest font-bold text-gray-900 mb-6">
                        TotalSurgicare
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Experience world-class surgical care with our specialized treatments designed for your comfort and rapid recovery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {treatments.map((treatment, index) => (
                        <TreatmentItem key={index} {...treatment} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PuneTreatments;
