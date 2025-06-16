import React from "react";

interface SectionHeaderProps {
    title: string
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h1 className="whitespace-nowrap text-[#ccd6f6] text-2xl md:text-2xl tracking-widest font-bold capitalize">
        { title }
      </h1>
      <div className="w-[40%] h-px bg-[#233554]" />
    </div>
  );
};

export default SectionHeader;
