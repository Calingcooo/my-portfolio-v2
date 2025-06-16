import React from "react";
import SectionHeader from "../SectionHeader";
import CareerNav from "../CareerHighlights/CareerNav";

const Career = () => {
  return (
    <div className="flex flex-col md:py-20 md:px-40 w-full mt-40">
      <SectionHeader title="Where I've Worked"/>
      <CareerNav />
    </div>
  );
};

export default Career;