import React from "react";
import SectionHeader from "../SectionHeader";
import CareerNav from "../CareerHighlights/CareerNav";

const Career = () => {
  return (
    <section id="career-highlights" className="w-full flex flex-col items-center justify-center min-h-svh py-20 lg:px-30">
      <div className="min-w-full flex flex-col justify-center">
        <SectionHeader title="Where I've Worked" />
        <CareerNav />
      </div>
    </section>
  );
};

export default Career;
