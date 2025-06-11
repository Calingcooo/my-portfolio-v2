import React from "react";

const Email = () => {
  return (
    <div className="fixed right-8 bottom-0 hidden md:flex flex-col items-center gap-6 
                   after:content-[''] after:block after:w-px after:h-40 
                   after:bg-slate-400 after:mt-3">
      <a
        href="mailto:calingco.je@gmail.com"
        className="[writing-mode:vertical-rl] text-sm text-slate-400 hover:text-[#64ffda] 
                  hover:translate-y-[-3px] transition-all duration-300 tracking-widest"
      >
        calingco.je@gmail.com
      </a>
    </div>
  );
};

export default Email;