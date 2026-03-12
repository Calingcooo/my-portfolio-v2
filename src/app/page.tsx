"use client";

import { useState, useEffect } from "react";
import Header from "./components/sections/Header";
import Social from "./components/Social";
import Email from "./components/Email";
import ImageDrawingLoader from "./components/Loading";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Career from "./components/sections/Career";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="relative min-h-svh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <Header />

        <main className="flex flex-col items-center w-full">
          <Social />
          <Email />

          <Hero />
          <About />
          <Career />
          <Project />
          <Contact />

          <Footer />
        </main>
      </div>
    </div>
  );
}
