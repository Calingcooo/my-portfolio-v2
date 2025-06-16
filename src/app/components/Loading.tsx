import React, { useState, useEffect } from "react";
import logo from "@/app/assets/3d_logo.png";

const ImageDrawingLoader = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a192f]">
      <svg
        viewBox="0 0 78 90"
        className="w-64 h-64"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="polygonClip">
            <polygon points="39 0, 0 22, 0 67, 39 90, 78 68, 78 23" />
          </clipPath>
        </defs>

        {/* Group that will collapse toward the center */}
        <g className={loadingComplete ? "animate-suck" : "animate-reveal"}>
          <image
            href={logo.src}
            x="0"
            y="0"
            width="78"
            height="90"
            clipPath="url(#polygonClip)"
            preserveAspectRatio="xMidYMid slice"
            className={`${loadingComplete ? "" : "reveal-img"}`}
          />
          <polygon
            points="39 0, 0 22, 0 67, 39 90, 78 68, 78 23"
            stroke="#64ffda"
            strokeWidth="1"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};

export default ImageDrawingLoader;