import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-5">
      <a
        href="https://v4.brittanychiang.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-slate-400 hover:text-[#64ffda] transition-colors duration-300 ease-in-out"
      >
        <p className="text-sm mb-1">
          Design inspired by Brittany Chiang's portfolio
        </p>
        <p className="text-sm">
          Built with Next.js & Tailwind CSS
        </p>
      </a>
    </footer>
  );
};

export default Footer;
