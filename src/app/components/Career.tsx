import React from "react";
import CareerNav from "./CareerHighlights/CareerNav";

const Career = () => {
  return (
    <div className="flex flex-col md:py-20 md:px-40 w-full">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="whitespace-nowrap text-[#ccd6f6] text-xl md:text-2xl tracking-widest font-bold">
          Where I've Worked
        </h1>
        <div className="w-[40%] h-px bg-[#233554]" />
      </div>
      <CareerNav />
    </div>
  );
};

export default Career;
