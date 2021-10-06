import React from "react";

import hero from "../../assets/hero.png";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-3/5 -mt-16">
        <img src={hero.src} className="object-cover h-1/3" alt="Hero" />
      </div>
      <div className="text-center">
        <h4 className="text-2xl">An Initiative by SMU Ellipsis</h4>
        <h2 className="text-6xl font-bold my-8">Project Heartcode</h2>
        <p className="text-lg px-72">
          A community service project organised by Singapore Management
          University, School of Information Systems. Project HeartCode serves to
          provide less privileged youths the opportunity to explore their
          interest in IT through solving real world problems with IT
          innovations.
        </p>
      </div>
    </div>
  );
};

export default Hero;
