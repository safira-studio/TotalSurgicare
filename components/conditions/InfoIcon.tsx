import React from "react";

interface InfoIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoIcon = ({ icon, title, description }: InfoIconProps) => {
  return (
    <div className="flex flex-col items-center text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
      <div className="mb-2 text-white">{icon}</div>
      <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
      <p className="text-xs text-gray-200 leading-tight">{description}</p>
    </div>
  );
};

export default InfoIcon;
