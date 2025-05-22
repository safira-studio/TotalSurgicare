import React from "react";

interface StatCardProps {
  value: React.ReactNode;
  label: string;
  color?: string;
}

const StatCard = ({
  value,
  label,
  color = "text-clinic-blue",
}: StatCardProps) => {
  return (
    <div className="flex flex-col items-center mr-8">
      <span className={`text-2xl font-bold ${color}`}>{value}</span>
      <span className="text-xs text-gray-500 text-center max-w-[80px]">
        {label}
      </span>
    </div>
  );
};

export default StatCard;
