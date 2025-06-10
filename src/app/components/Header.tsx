"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/assets/logo_colored.png";
import { CiLight, CiDark } from "react-icons/ci";
import { useThemeContext } from "../contexts/ThemeProvider";
import { useRouter } from "next/navigation";

const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [ isScrolled, setIsScrolled ] = useState<boolean>(false)
  const router = useRouter();

  const navItems = ["about", "career highlights", "project highlights", "hire me"]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 h-20 w-full flex justify-between items-center xl:px-10 xl:py-5 md:px-5 md:py-2 
      ${isScrolled 
        ? "backdrop-blur-md bg-opacity-80 dark:bg-[#020c1bb3] bg-[#f4f4f4b3] shadow-sm"
        : "bg-transparent" }`}>
      {/* LOGO */}
      <Image
        src={logo}
        alt="Logo"
        onClick={() => router.push("/")}
        className="w-12 rounded-full hover:-translate-1.5 hover:shadow-[5px_5px_0_0_#64ffda] cursor-pointer transition-all duration-100"
      />

      {/* NAV ITEMS */}
      <ul className="flex items-center gap-5 capitalize text-[#0f0f0f] dark:text-[#f4f4f4]">
        {navItems.map((item, i) => (
          <li
            className="cursor-pointer hover:text-[#64ffda] hover:-translate-y-1.5 tracking-wide text-sm transition-all duration-150"
            key={i}
          >
            {item}
          </li>
        ))}
        <li className="font-poppins outline-[#64ffda] outline-2 font-medium tracking-tighter rounded-sm px-3 py-1 cursor-pointer text-[#f4f4f4] dark:text-[#64ffda] bg-[#0f0f0f] dark:bg-transparent hover:-translate-1.5 hover:shadow-[5px_5px_0_0_#64ffda] transition-all duration-300">
            resume
            {/* TODO: Add shadow when the button translate */}
        </li>
        <li
          onClick={toggleTheme}
          className="cursor-pointer hover:text-[#b8b8b8] transition-all duration-150"
        >
          {theme === "dark" ? <CiLight size={28} /> : <CiDark size={28} /> }
        </li>
      </ul>
    </div>
  );
};

export default Header;
