import React from "react";
import SectionHeader from "../SectionHeader";
import CareerNav from "../CareerHighlights/CareerNav";

const Career = () => {
  return (
    <section className="w-full flex flex-col items-start justify-start md:items-center md:justify-center min-h-svh py-20 lg:px-30">
      <div className="w-full flex flex-col justify-center">
        <SectionHeader sectionId="career-highlights" title="Where I've Worked" />
        <CareerNav />
      </div>
    </section>
  );
};

export default Career;