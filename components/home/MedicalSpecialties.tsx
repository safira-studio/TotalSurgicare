import React from "react";

interface SpecialtyItemProps {
  icon: string;
  name: string;
}

const SpecialtyItem = ({ icon, name }: SpecialtyItemProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 max-w-sm overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start h-14">
          <h3 className="text-lg font-thin text-slate-800 tracking-tight">
            {name}
          </h3>
          <img
            src={icon}
            alt={name}
            className="w-14 h-14 object-contain rounded-md border border-slate-200"
          />
        </div>
      </div>
      <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 flex justify-end">
        <button className="text-sm font-medium text-clinic-primary hover:text-clinic-dark transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

const MedicalSpecialties = () => {
  const specialties = [
    { name: "Fissure", icon: "/images/specialties/Fissure.png" },
    { name: "Fistula", icon: "/images/specialties/Fistula.png" },
    { name: "Hernia", icon: "/images/specialties/Hernia.png" },
    { name: "Piles", icon: "/images/specialties/Piles.png" },
    { name: "Galstone", icon: "/images/specialties/Galstone.png" },
    { name: "Appendicitis", icon: "/images/specialties/Appendicitis.png" },
    { name: "PCOS-Pcod", icon: "/images/specialties/PcosPcod.png" },
    { name: "AV Fistula", icon: "/images/specialties/AVFistula.png" },
    { name: "Varicose Veins", icon: "/images/specialties/VaricoseVeins.png" },
    { name: "Vaginoplasty", icon: "/images/specialties/Vaginoplasty.png" },
    { name: "Hymenoplasty", icon: "/images/specialties/Hymenoplasty.png" },
    { name: "Labiaplasty", icon: "/images/specialties/Labiaplasty.png" },
    {
      name: "Vaginal wart removal",
      icon: "/images/specialties/VaginalWartRemoval.png",
    },
    {
      name: "Pilonidal sinus",
      icon: "/images/specialties/PilonidalSinus.png",
    },
    {
      name: "Enlarged Prostate",
      icon: "/images/specialties/EnlargedProstate.png",
    },
    {
      name: "Inguinal Hernia",
      icon: "/images/specialties/InguinalHernia.png",
    },
    {
      name: "Umbilical Hernia",
      icon: "/images/specialties/UmbilicalHernia.png",
    },
  ];

  return (
    <div className="w-full py-12 mb-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-clinic-blue mb-2">
            OUR SPECIALTIES
          </p>
          <h2 className="text-3xl font-onest">Medical Conditions We Treat</h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            Expert care for a wide range of medical conditions by our
            specialized doctors.
          </p>
        </div>

        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {specialties.map((specialty, index) => (
            <SpecialtyItem
              key={index}
              icon={specialty.icon}
              name={specialty.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalSpecialties;
