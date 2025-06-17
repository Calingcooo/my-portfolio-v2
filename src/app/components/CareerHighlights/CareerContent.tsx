import React from "react";
import { CareerItem } from "@/app/data/careerData";
import { motion } from "framer-motion";

interface CareerContentProps {
  career: CareerItem;
}

const CareerContent = ({ career }: CareerContentProps) => {
  return (
    <div className="mt-5 md:mt-0 md:ml-10 md:px-2 py-1 min-h-[500px] w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 0.5 }}
        key={career.id}
      >
        <h2 className="mb-1">
          <span className="text-[#ccd6f6] text-2xl font-bold ">{career.role}</span>
        </h2>
        <p className="text-sm text-slate-400 mb-6">{career.period}</p>

        <ul>
          {career.responsibilities.map((item, index) => (
            <li
              key={index}
              className="relative text-md leading-6 mb-2 pl-5 text-slate-400 before:content-['▹'] before:absolute before:left-0 
                before:text-[#64ffda]"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default CareerContent;
