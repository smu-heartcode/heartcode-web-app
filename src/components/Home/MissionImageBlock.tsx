import React from "react";
import Image from 'next/image'
import mission from "../../assets/mission.jpg"

const MissionImageBlock: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        className="object-cover w-full h-56 rounded shadow-lg"
        src={mission}
        alt="Our Story"
      />
    </div>
  );
};

export default MissionImageBlock;
