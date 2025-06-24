"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DesktopNav from "../Navigation/DesktopNav";
import MobileNav from "../Navigation/MobileNav";
import logo from "../../../../public/assets/logo_colored.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();

  const navItems = [
    { name: "about", href: "#about" },
    { name: "career highlights", href: "#career-highlights" },
    { name: "project highlights", href: "#project-highlights" },
    { name: "contact", href: "#contact" },
  ];

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
    <div
      className={`fixed top-0 left-0 h-24 z-50 w-full flex justify-between items-center px-5 lg:px-16
      ${isScrolled ? "backdrop-blur-md dark:bg-[#0a192f]/80 bg-[#f4f4f4b3]" : "bg-transparent"}`}
    >
      {/* LOGO */}
      <Image
        src={logo}
        alt="Logo"
        onClick={() => router.push("/")}
        className="w-12 rounded-full hover:-translate-1.5 hover:shadow-[5px_5px_0_0_#64ffda] cursor-pointer transition-all duration-100 ease-in-out z-50"
      />

      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
};

export default Header;
