import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ProjectItem } from "../data/projectData";
import LAW_FIRM from "@/app/assets/law_firm_2.png";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const FeaturedProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`grid grid-cols-12 gap-4 w-full mb-20 md:mb-40 rounded-md shadow-lg md:shadow-none relative overflow-hidden`}>

      <Image src={LAW_FIRM} alt="Project 1 background" fill className="opacity-5 md:hidden w-full h-full object-cover" /> 
      <div className="md:hidden bg-[#64ffda]/40 absolute z-15 w-full h-full mix-blend-multiply" />

      <div
        className={`flex flex-col px-5 py-5 justify-between z-20
        ${
          isEven
            ? "col-span-12 md:col-start-1 md:col-span-12 lg:col-span-7 md:text-start"
            : "col-span-12 md:col-start-5 lg:col-start-6 md:col-span-12 lg:col-span-12 md:text-end"
        }`}
      >
        <h1 className="text-[#64ffda] capitalize">featured project</h1>
        <h2 className="text-[#ccd6f6] capitalize text-2xl font-extrabold text-shadow-amber-50">
          {project.title}
        </h2>

        <div className="flex items-center justify-center z-20 md:bg-[#112240] text-slate-400 md:text-sm lg:text-lg text-wrap md:px-5 md:py-2 mt-5 rounded-md">
          <p>{project.description}</p>
        </div>

        <ul
          className={`flex flex-wrap gap-2 lg:gap-5 mt-5 md:mt-2 lg:mt-5 z-20 ${
            isEven ? "md:justify-start" : "md:justify-end"
          }`}
        >
          {project.tools.map((tool, i) => (
            <li key={i} className="text-sm text-slate-400">
              {tool}
            </li>
          ))}
        </ul>

        <div
          className={`flex items-center gap-3 mt-5 ${
            isEven ? "md:justify-start" : "md:justify-end"
          }`}
        >
          <a href="#">
            <FiGithub
              size={18}
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-200 ease-in-out"
            />
          </a>
          <a href="#">
            <FiExternalLink
              size={20}
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-200 ease-in-out"
            />
          </a>
        </div>
      </div>

      <div
        className={`z-10 rounded-lg absolute md:h-[250px] lg:h-full
        ${
          isEven
            ? "col-start-1 col-span-12 md:col-span-7 md:col-start-6"
            : "flex justify-center md:col-start-1 md:col-span-7"
        }
      `}
      >
        <div className="h-full relative group">
          <div className="bg-[#008080]/70 group-hover:bg-transparent w-full h-full absolute cursor-pointer transition-colors duration-300" />
          <Image src={LAW_FIRM} alt="Project 1" className="h-full hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;