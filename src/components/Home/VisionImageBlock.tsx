import React from "react";
import Image from 'next/image'
import media1 from "../../assets/media-1.jpeg"

const VisionImageBlock: React.FC = () => {
  return (
    <div>
      <Image
        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
        src={media1}
        alt=""
      />
    </div>
  );
};

export default VisionImageBlock;
