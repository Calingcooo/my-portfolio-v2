import React from "react";
import { projectData } from "@/app/data/projectData";
import SectionHeader from "../SectionHeader";
import FeaturedProjectCard from "../FeaturedProjectCard";

const Project = () => {
  return (
    <section className="text-white w-full min-h-svh">
      <div className="lg:mx-40">
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
