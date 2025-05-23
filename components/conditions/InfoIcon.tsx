import React from "react";

interface InfoIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
      <div className="rounded-full bg-blue-100 p-3 mb-3 text-clinic-primary">
        {icon}
      </div>
      <h3 className="font-medium text-sm mb-1 text-center">{title}</h3>
      {/* <p className="text-gray-600 text-sm">{description}</p> */}
    </div>
  );
};

export default InfoIcon;
