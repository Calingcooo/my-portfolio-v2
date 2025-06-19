import React from "react";
import { projectData } from "@/app/data/projectData";
import SectionHeader from "../SectionHeader";
import FeaturedProjectCard from "../ProjectHighlights/FeaturedProjectCard";

const Project = () => {
  return (
    <section id="project-highlights" className="text-white w-full">
      <div className="lg:mx-40 md:py-20">
        <SectionHeader title="Some Things I’ve Built" />
        <div className="flex flex-col">
          {projectData.map((proj, i) => (
            <FeaturedProjectCard project={proj} index={i+1} key={proj.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
