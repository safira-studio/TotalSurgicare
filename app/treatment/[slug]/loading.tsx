import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="relative p-8 rounded-3xl">
        {/* Loader with increased size */}
        <div className="w-32 h-32 flex justify-center items-center gap-1.5">
          <span className="w-1 h-12 bg-clinic-primary animate-scale [animation-delay:-0.9s]" />
          <span className="w-1 h-12 bg-clinic-secondary animate-scale [animation-delay:-0.8s]" />
          <span className="w-1 h-12 bg-clinic-accent animate-scale [animation-delay:-0.7s]" />
          <span className="w-1 h-12 bg-clinic-secondaryDark animate-scale [animation-delay:-0.6s]" />
          <span className="w-1 h-12 bg-clinic-dark animate-scale [animation-delay:-0.5s]" />
        </div>
      </div>
    </div>
  );
}
