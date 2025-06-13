"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header";
import Career from "./components/Career";
import Social from "./components/Social";
import Email from "./components/Email";
import ImageDrawingLoader from "./components/Loading";

export default function Home() {
  const [ isLoading, setIsLoading ] = useState(true);

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
      <main className="mt-20 flex flex-col justify-center items-center h-full">
        <Social />
        <Email />
        <Career />
      </main>
    </div>
  );
}