import React from "react";
import Image from "next/image";
import story from "../../assets/story.jpg";

const StoryImageBlock: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        className="object-cover w-full h-56 rounded shadow-lg"
        src={story}
        alt="Our Story"
      />
    </div>
  );
};

export default StoryImageBlock;
