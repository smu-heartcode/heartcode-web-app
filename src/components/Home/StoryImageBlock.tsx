import React from 'react'
import Image from 'next/image'
import media4 from "../../assets/media-4.jpeg"
import media5 from "../../assets/media-5.jpeg"


const StoryImageBlock: React.FC  = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
    <Image
      className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
      src={media4}
      alt=""
    />
    <Image
      className="object-cover w-full h-48 rounded shadow-lg"
      src={media5}
      alt=""
    />
    <Image
      className="object-cover w-full h-48 rounded shadow-lg"
      src={media4}
      alt=""
    />
  </div>
  )
}

export default StoryImageBlock
