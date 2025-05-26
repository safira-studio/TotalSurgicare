import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <div
      className={`mb-8 ${
        align === "center"
          ? "text-center"
          : align === "right"
            ? "text-right"
            : "text-left"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-medical-dark text-center">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-center">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
