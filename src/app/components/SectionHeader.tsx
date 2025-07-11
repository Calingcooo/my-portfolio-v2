import React from "react";

interface SectionHeaderProps {
    sectionId: string;
    title: string;
}

const SectionHeader = ({ title, sectionId }: SectionHeaderProps) => {
  return (
    <div id={sectionId} className="flex items-center gap-4 mb-7 lg:mb-9">
      <h1 className="whitespace-nowrap font-mono text-slate-200 text-2xl font-bold capitalize">
        { title }
      </h1>
      <div className="w-[40%] h-px bg-[#233554]" />
    </div>
  );
};

export default SectionHeader;