import React from "react";
import logo from "@/app/assets/3d_logo.png";

const ImageDrawingLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a192f]">
      <svg
        viewBox="0 0 78 90"
        className="animate-reveal w-64 h-64"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="polygonClip">
            <polygon points="39 0, 0 22, 0 67, 39 90, 78 68, 78 23" />
          </clipPath>
        </defs>

        <image
          href={logo.src}
          width="80"
          height="110"
          clipPath="url(#polygonClip)"
          preserveAspectRatio="xMidYMid slice"
          className="reveal-img"
        />

        <polygon
          points="39 0, 0 22, 0 67, 39 90, 78 68, 78 23"
          stroke="#64ffda"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ImageDrawingLoader;
