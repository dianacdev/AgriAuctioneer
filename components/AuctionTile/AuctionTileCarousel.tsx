"use client";

import Image from "next/image";

const AuctionTileCarousel = () => {
  return (
    // Image/Video Section
    <div className="mx-6 my-8 w-full h-full">
    <div className=" aspect-video flex justify-center items-center bg-neutral-400 text-white object-cover border-2 border-agri-green-100 rounded-md">
      placeholder for image
    </div>
    {/* Carousel Section */}
    <div className="">
      <div className="absolute top-[40%] left-0 hover:scale-110 hover:bg-black/10 rounded-lg">
        <Image
          src="/icons/LeftArrowCircle.svg"
          width={36}
          height={36}
          alt="switch images"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-[40%] right-0 hover:scale-110 hover:bg-black/10 rounded-lg">
        <Image
          src="/icons/RightArrowCircle.svg"
          width={36}
          height={36}
          alt="switch images"
          className="w-full h-full"
        />
      </div>
    </div>
  </div>
  )
}

export default AuctionTileCarousel