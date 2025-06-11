"use client";

import { useState } from "react";
import { CareerItem, careerData } from "@/app/data/careerData";
import CareerContent from "./CareerContent";

const CareerNav = () => {
  const [selectedCareer, setSelectedCareer] = useState<CareerItem>(careerData[0]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        {careerData.map((item) => (
          <button
            className={`${
              selectedCareer.id === item.id
                ? "border-l-3 border-[#64ffda] text-[#64ffda] bg-slate-900"
                : "border-l-3 text-slate-400 border-slate-800"
            } font-light capitalize text-start hover:text-[#64ffda] dark:hover:bg-slate-800 px-5 py-2 cursor-pointer transition-colors duration-300 ease-in-out ${
              selectedCareer.id === item.id ? "delay-200" : "delay-0"
            }`}
            onClick={() => setSelectedCareer(item)}
            aria-current={selectedCareer.id === item.id ? "true" : "false"}
            key={item.id}
            >
              {item.title}
          </button>
        ))}
      </div>
      <CareerContent career={selectedCareer}/>
    </div>
  );
};

export default CareerNav;
