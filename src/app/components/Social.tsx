import React from "react";
import { socialLinks, SocialData } from "../data/socialData";

const Social = () => {
  return (
    <div
      className="hidden md:flex flex-col items-center gap-5 fixed text-white md:left-5 lg:left-15 bottom-0 
               after:content-[''] after:block after:w-px after:lg:h-20 after:md:h-15
               after:bg-slate-400 after:mt-3"
    >
      {socialLinks.map((social: SocialData) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          <social.icon className="md:w-4 md:h-4 lg:w-5 lg:h-5 text-slate-400 hover:text-[#64ffda]" />
        </a>
      ))}
    </div>
  );
};

export default Social;
