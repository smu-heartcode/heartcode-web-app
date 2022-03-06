import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 bg-milk mb-8">
      <div className="w-full lg:w-3/5 mb-8">
        <Image
          src="/static/hero.png"
          height={800}
          width={1200}
          priority={true}
          loading="eager"
          className="object-cover text-center"
          alt="Hero"
        />
      </div>
      <div className="text-center">
        <h4 className="text-lg md:text-xl xl:text-2xl text-pink-400">
          An Initiative by SMU Ellipsis
        </h4>
        <h2 className="text-4xl md:text-5xl xl::text-6xl font-semibold my-4 xl:my-8 text-pink-300">
          Project Heartcode
        </h2>
        <p className="text-md md:text-lg px-7 xl:px-72 mb-8">
          A community service project organised by Singapore Management
          University, School of Computing and Information Systems. Project
          HeartCode serves to provide less privileged youths the opportunity to
          explore their interest in IT through solving real world problems with
          IT innovations.
        </p>
      </div>
      <svg
        viewBox="0 0 224 12"
        fill="currentColor"
        className="w-full -mb-1 text-white"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
      </svg>
    </div>
  );
};

export default Hero;
