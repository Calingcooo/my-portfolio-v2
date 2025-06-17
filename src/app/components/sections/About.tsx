import React from "react";
import Image from "next/image";
import MY_PIC from "@/app/assets/my_pic.jpg";
import SectionHeader from "../SectionHeader";

const About = () => {
  const technologies = [
    "JavaScript (ES6+)",
    "ReactJS",
    "NextJS",
    "Typescript",
    "NodeJS",
    "MySQL/PostgreSQL",
  ];

  return (
    <section className="flex flex-col text-white w-full">
      <div className="md:py-10 lg:mx-40 lg:py-20">
        <SectionHeader title="About me" />
        <div className="flex flex-col md:flex-row gap-10 md:gap-5 justify-between">
          <div className="lg:w-1/2">
            <p className="leading-relaxed text-lg text-slate-400 mb-5">
              Hello! My name is JanJan, and I enjoy building things for the web.
              My interest in web development began back in 2008 when I started
              customizing Friendster backgrounds. What began as a simple attempt
              to personalize my profile—like adding a custom gif background
              turned into a fascination with HTML and CSS. That early curiosity
              sparked a passion that continues to drive me today.
            </p>
            <p className="leading-relaxed text-lg text-slate-400 mb-5">
              Fast-forward to today, and I’ve had the privilege of working at an
              dermatology and aesthetic clinic, start-up, and a Research and
              Development (R&D). My main focus these days is building
              accessible, inclusive products and digital experiences at Arhika
              I.T Solutions for a variety of clients.
            </p>
            <p className="leading-relaxed text-lg text-slate-400 mb-5">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-y-1 gap-x-4">
              {technologies.map((tech, i) => (
                <li
                  key={i}
                  className="text-lg relative leading-6 pl-5 text-slate-400 before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex md:items-start lg:items-start justify-center w-full md:w-1/2">
            <div className="w-80 md:w-70 lg:w-80 relative group">
              {/* Overlay (moves with image, opacity fades on hover) */}
              <div
                className="absolute inset-0 rounded-md bg-[#27ecbe] opacity-50 
                group-hover:opacity-0 group-hover:-translate-2 
                transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
                z-20"
              />

              {/* Image (moves up on hover) */}
              <Image
                src={MY_PIC}
                alt="Jhon Edmir Calingco"
                placeholder="blur"
                className="relative z-10 rounded-md object-cover 
                transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
                group-hover:-translate-1.5"
              />

              {/* Border (moves down on hover) */}
              <div
                className="absolute -bottom-2.5 -right-2.5 w-full h-full rounded-md 
                border-2 border-[#64ffda] transition-transform duration-300 
                group-hover:translate-1.5 z-0"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
