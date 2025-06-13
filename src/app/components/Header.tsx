"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/app/assets/logo_colored.png";
import DesktopNav from "./Navigation/DesktopNav";
import MobileNav from "./Navigation/MobileNav";


const Header = () => {
  const [ isScrolled, setIsScrolled ] = useState<boolean>(false)
  const router = useRouter();

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
    <div className={`fixed top-0 left-0 h-20 w-full flex justify-between items-center px-5 py-2 
      ${isScrolled 
        ? "backdrop-blur-md bg-opacity-80 dark:bg-[#020c1bb3] bg-[#f4f4f4b3] shadow-sm"
        : "bg-transparent" }`}>
      {/* LOGO */}
      <Image
        src={logo}
        alt="Logo"
        onClick={() => router.push("/")}
        className="w-12 rounded-full hover:-translate-1.5 hover:shadow-[5px_5px_0_0_#64ffda] cursor-pointer transition-all duration-100 ease-in-out"
      />

        <DesktopNav />
        <MobileNav />
    </div>
  );
};

export default Header;
