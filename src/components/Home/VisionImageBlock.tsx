import React from "react";
import Image from 'next/image'
import vision from "/public/static/vision.png"

const VisionImageBlock: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        className="object-cover w-full h-56 rounded shadow-lg"
        src={vision}
        alt="Our Story"
      />
    </div>
  );
};

export default VisionImageBlock;
