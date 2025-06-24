import React from "react";
import { socialLinks, SocialData } from "../../data/socialData";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-5">
      <div className="flex justify-center items-center lg:flex gap-4 mb-5 w-full">
        {socialLinks.map((social: SocialData) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition-colors duration-300 ease-in-out"
          >
            <social.icon className="md:w-4 md:h-4 lg:w-5 lg:h-5 text-slate-400 hover:text-[#64ffda]" />
          </a>
        ))}
      </div>

      <a
        href="https://v4.brittanychiang.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-slate-400 hover:text-[#64ffda] transition-colors duration-300 ease-in-out tracking-wider"
      >
        <p className="text-xs mb-1">
          Design inspired by Brittany Chiang's portfolio
        </p>
        <p className="text-xs">Built with Next.js, Typescript & Tailwind CSS</p>
      </a>
    </footer>
  );
};

export default Footer;
