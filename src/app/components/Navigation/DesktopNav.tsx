import React from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { useThemeContext } from "@/app/contexts/ThemeProvider";

interface DesktopNavProps {
  navItems: Array<string>
}

const DesktopNav = ({ navItems }: DesktopNavProps) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ul className="hidden md:flex items-center gap-5 capitalize text-[#0f0f0f] dark:text-[#f4f4f4]">
      {navItems.map((item, i) => (
        <li
          className="cursor-pointer hover:text-[#64ffda] hover:-translate-y-1 tracking-wide text-sm transition-all duration-150"
          key={i}
        >
          {item}
        </li>
      ))}
      <a href="#" className="font-poppins outline-[#64ffda] outline-1 font-light tracking-wide rounded-sm px-3 py-1 cursor-pointer text-[#f4f4f4] dark:text-[#64ffda] bg-[#0f0f0f] dark:bg-transparent hover:-translate-1.5 hover:shadow-[5px_5px_0_0_#64ffda] transition-all duration-300 ease-in-out">
        resume
      </a>
      <li
        onClick={toggleTheme}
        className="cursor-pointer p-1 rounded-full transition-all"
      >
        {theme === "dark" ? (
          <CiLight
            size={26}
            className="text-yellow-300  
                        hover:rotate-12 transition-transform duration-700"
          />
        ) : (
          <CiDark
            size={26}
            className="text-blue-400
                        hover:-rotate-12 transition-transform duration-700"
          />
        )}
      </li>
    </ul>
  );
};

export default DesktopNav;
