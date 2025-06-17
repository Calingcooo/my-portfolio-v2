import React from "react";
import SectionHeader from "../SectionHeader";
import CareerNav from "../CareerHighlights/CareerNav";

const Career = () => {
  return (
    <div className="flex flex-col justify-center min-h-[100svh] lg:py-20 lg:px-60 w-full">
      <SectionHeader title="Where I've Worked"/>
      <CareerNav />
    </div>
  );
};

export default Career;