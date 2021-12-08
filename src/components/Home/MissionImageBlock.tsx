import React from "react";
import Image from 'next/image'
import media1 from "../../assets/media-1.jpeg"
import media2 from "../../assets/media-2.jpeg"
import media3 from "../../assets/media-3.jpeg"

const MissionImageBlock: React.FC = () => {
  return (
    <div className="flex items-center justify-center -mx-4 lg:pl-8">
      <div className="flex flex-col space-y-10 gap-8 justify-between items-end px-3">
        <Image
          className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
          src={media1}
          alt=""
        />
        <Image
          className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
          src={media2}
          alt=""
        />
      </div>
      <div className="px-3">
        <Image
          className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
          src={media3}
          alt=""
        />
      </div>
    </div>
  );
};

export default MissionImageBlock;
