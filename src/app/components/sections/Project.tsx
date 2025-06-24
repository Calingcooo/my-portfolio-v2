import React from "react";
import { projectData } from "@/app/data/projectData";
import SectionHeader from "../SectionHeader";
import FeaturedProjectCard from "../ProjectHighlights/FeaturedProjectCard";

const Project = () => {
  return (
    <section className="w-full">
      <div className="mx-0 xl:mx-10 md:py-20">
        <SectionHeader sectionId="project-highlights" title="Some Things I’ve Built" />
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
