import React from "react";
import CareerNav from "./CareerHighlights/CareerNav";

const Career = () => {
  return (
    <div className="flex flex-col border-2 py-20 px-40 w-full">
      <div className="flex  items-center gap-4 mb-6">
        <h1 className="whitespace-nowrap text-[#ccd6f6] text-4xl tracking-widest font-bold">
          Where I've Worked
        </h1>
        <div className="w-full h-px bg-slate-400" />
      </div>
      <CareerNav />
    </div>
  );
};

export default Career;
