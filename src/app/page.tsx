"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header";
import Social from "./components/Social";
import Email from "./components/Email";
import ImageDrawingLoader from "./components/Loading";
import Career from "./components/Career";
import Project from "./components/Project";
import Hero from "./components/Hero";

export default function Home() {
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ImageDrawingLoader />;
  }

  return (
    <div className="min-h-screen mx-5 md:mx-40 md:px-40 relative">
      <Header />
      <main className="md:mt-20 flex flex-col justify-center items-center h-full">
        <Social />
        <Email />
        <Hero />
        <Career />
        <Project />
      </main>
    </div>
  );
}