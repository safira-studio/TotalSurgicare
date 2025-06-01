import React from "react";
import { User, Mail, Phone, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface DoctorProps {
  name: string;
  specialty: string;
  image: string;
  education?: string;
  experience?: string;
  email?: string;
  phone?: string;
}

const DoctorCard = ({
  name,
  specialty,
  image,
  education,
  experience,
  email,
  phone,
}: DoctorProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg bg-white">
      <div className="aspect-[3/4] w-full relative overflow-hidden">
        <Image
          alt={`Dr. ${name}`}
          className="w-full h-full object-cover transition-transform hover:scale-105"
          height={100}
          src={image}
          width={100}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white text-lg font-semibold">{name}</h3>
          <p className="text-white/80 text-sm">{specialty}</p>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="space-y-3">
          {education && (
            <div className="flex items-start gap-2 text-sm">
              <User className="text-clinic-primary mt-0.5" size={18} />
              <span>{education}</span>
            </div>
          )}

          {experience && (
            <div className="flex items-start gap-2 text-sm">
              <Calendar className="text-clinic-primary mt-0.5" size={18} />
              <span>{experience}</span>
            </div>
          )}

          {email && (
            <div className="flex items-start gap-2 text-sm">
              <Mail className="text-clinic-primary mt-0.5" size={18} />
              <a
                className="hover:text-clinic-primary transition-colors"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </div>
          )}

          {phone && (
            <div className="flex items-start gap-2 text-sm">
              <Phone className="text-clinic-primary mt-0.5" size={18} />
              <a
                className="hover:text-clinic-primary transition-colors"
                href={`tel:${phone}`}
              >
                {phone}
              </a>
            </div>
          )}
        </div>

        <div className="mt-4">
          <Button
            className="w-full border-clinic-primary text-clinic-primary hover:bg-clinic-primary hover:text-white"
            variant="outline"
          >
            Book Appointment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const DoctorProfiles = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "/placeholder.svg",
      education: "MD, Harvard Medical School",
      experience: "15+ years of experience",
      email: "sarah.johnson@salvamedic.com",
      phone: "(123) 456-7890",
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Neurologist",
      image: "/placeholder.svg",
      education: "MD, Johns Hopkins University",
      experience: "12+ years of experience",
      email: "michael.brown@salvamedic.com",
      phone: "(123) 456-7891",
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      image: "/placeholder.svg",
      education: "MD, Stanford University",
      experience: "10+ years of experience",
      email: "emily.davis@salvamedic.com",
      phone: "(123) 456-7892",
    },
    {
      name: "Dr. David Wilson",
      specialty: "Dermatologist",
      image: "/placeholder.svg",
      education: "MD, Yale University",
      experience: "8+ years of experience",
      email: "david.wilson@salvamedic.com",
      phone: "(123) 456-7893",
    },
  ];

  return (
    <div className="w-full py-12 mb-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-clinic-primary mb-2">
            OUR TEAM
          </p>
          <h2 className="text-3xl font-bold">Meet Our Specialists</h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            Our team of highly qualified doctors with many years of experience
            in their fields.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-clinic-primary hover:bg-clinic-darkBlue">
            View All Doctors
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfiles;
