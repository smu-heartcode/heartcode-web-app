import React from 'react'
import Image from 'next/image'
import hc11 from "../../assets/hc11.png"
import hc12 from "../../assets/hc12.png"


const StoryImageBlock: React.FC  = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
    <Image
      className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
      src={hc11}
      alt=""
    />
    <Image
      className="object-cover w-full h-48 rounded shadow-lg"
      src={hc12}
      alt=""
    />
    <Image
      className="object-cover w-full h-48 rounded shadow-lg"
      src={hc11}
      alt=""
    />
  </div>
  )
}

export default StoryImageBlock
