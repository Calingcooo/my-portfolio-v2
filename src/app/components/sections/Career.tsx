import React from "react";
import SectionHeader from "../SectionHeader";
import CareerNav from "../CareerHighlights/CareerNav";

const Career = () => {
  return (
    <div className="flex flex-col lg:py-20 lg:px-40 w-full mt-15 md:mt-20 lg:mt-40">
      <SectionHeader title="Where I've Worked"/>
      <CareerNav />
    </div>
  );
};

export default Career;