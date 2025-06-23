"use client";

import { useState } from "react";
import { CareerItem, careerData } from "@/app/data/careerData";
import CareerContent from "./CareerContent";

const CareerNav = () => {
  const [selectedCareer, setSelectedCareer] = useState<CareerItem>(
    careerData[0]
  );

  return (
    <div className="flex flex-col w-full md:flex-row md:mx-0">
      <div className="w-full md:min-w-max md:w-auto overflow-hidden overflow-x-auto md:overflow-x-visible md:overflow-y-auto career-nav">
        <div className="flex flex-row md:items-start md:flex-col min-w-max">
          {careerData.map((item) => (
            <button
              className={`${
                selectedCareer.id === item.id
                  ? "delay-200 border-b-2 md:border-b-0 md:border-l-2 border-[#64ffda] text-[#64ffda] dark:bg-slate-800"
                  : "delay-0 border-b-2 md:border-b-0 md:border-l-2 border-slate-800 text-slate-400"
              } text-sm md:w-full flex-auto md:flex-none font-light capitalize text-center md:text-start hover:text-[#64ffda] dark:hover:bg-slate-800 px-2 py-2 cursor-pointer transition-colors duration-300 ease-in-out `}
              onClick={() => setSelectedCareer(item)}
              aria-current={selectedCareer.id === item.id ? "true" : "false"}
              key={item.id}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <CareerContent career={selectedCareer} />
    </div>
  );
};

export default CareerNav;