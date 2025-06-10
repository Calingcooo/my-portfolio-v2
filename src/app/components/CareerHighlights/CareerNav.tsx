"use client";

import { useState } from "react";
import CareerContent from "./CareerContent";

const CareerNav = () => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>(
    "digeco tchnologies inc."
  );

  const careerItems = ["digeco technologies inc.", "skin manila inc."];

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        {careerItems.map((item, i) => (
          <button
            className={`${
              selectedNavItem === item
                ? "border-l-3 border-[#64ffda] text-[#64ffda] bg-slate-800"
                : "border-l-3 text-slate-400  border-slate-800"
            } font-light capitalize text-start hover:text-[#64ffda] dark:hover:bg-slate-800 px-5 py-2 cursor-pointer transition-colors duration-300 ease-in-out ${
              selectedNavItem === item ? "delay-100" : "delay-0"
            }`}
            onClick={() => setSelectedNavItem(item)}
            aria-current={selectedNavItem === item ? "true" : "false"}
            key={i}
          >
            {item}
          </button>
        ))}
      </div>
      <CareerContent />
    </div>
  );
};

export default CareerNav;
