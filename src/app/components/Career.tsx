import React from "react";
import CareerNav from "./CareerHighlights/CareerNav";

const Career = () => {
  return (
    <div className="flex flex-col text-slate-400 border-2">
      <div className="flex  items-center gap-4 mb-6">
        <h1 className="whitespace-nowrap text-2xl font-extrabold">
          Where I've Worked
        </h1>
        <div className="w-full h-px bg-slate-400" />
      </div>
      <div className="flex">
        <CareerNav />
      </div>
    </div>
  );
};

export default Career;
