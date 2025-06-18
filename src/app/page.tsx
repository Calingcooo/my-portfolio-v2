"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header";
import Social from "./components/Social";
import Email from "./components/Email";
import ImageDrawingLoader from "./components/Loading";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Career from "./components/sections/Career";
import Project from "./components/sections/Project";

export default function Home() {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ImageDrawingLoader />;
  }

  return (
    <div className="min-h-svh mx-5 md:mx-10 md:px-10 lg:mx-40 lg:px-40 relative">
      <Header />
      <main className="flex flex-col justify-center items-center h-full mt-10 lg:mt-0">
        <Social />
        <Email />
        <Hero />
        <About />
        <Career />
        <Project />
      </main>
    </div>
  );
}