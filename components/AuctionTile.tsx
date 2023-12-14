'use client'

import Image from "next/image";
import { useState } from "react"

const AuctionTile = () => {
    const [infoStatus, setInfoStatus] = useState(false);
    const [heartStatus, setHeartStatus] = useState(false);

    const handleInfo = () =>{
        console.log('info dropdown status updated!');
        if(infoStatus !== false) setInfoStatus(false);
        else setInfoStatus(true);
    }
    const handleHeart = () =>{
        console.log('heart status updated!');
        if(heartStatus !== false) setHeartStatus(false);
        else setHeartStatus(true);
    }
    return ( 
        <div className="text-center w-1/2 min-h-1/2 bg-emerald-950 text-green-500 rounded-xl border-2 border-green-500 shadow-md shadow-green-500">
            {/* Image/Video, Favorite Section, Current Price Section, Carousel Section, and Timer Section */}
            <div className="relative flex justify-center">
                {/* Timer Section */}
                <div className="w-1/6 bg-emerald-900 rounded-full border-2 border-green-500 absolute p-1 top-[.75rem] font-medium text-xl">
                   Sold
                </div>
                {/* Favorite Section */}
                <div onClick={() => handleHeart()} className="absolute top-12 left-10 hover:scale-110">
                    <Image src={`${heartStatus ? '/icons/ActiveHeart.svg' : '/icons/DefaultHeart.svg'}`} width={36} height={36} alt="Click to favorite and unfavorite" />
                </div>
                {/* Image/Video Section */}
                <div className="mx-6 my-8 rounded-md border-2 border-green-500 w-full h-full">
                    <div className=" aspect-video flex justify-center items-center bg-neutral-400 text-white">placeholder for image</div>
                    {/* Carousel Section */}
                    <div className="">
                        <div className="absolute top-[40%] left-0 hover:scale-110 hover:bg-black/10 rounded-lg">
                            <Image src="/icons/LeftArrowCircle.svg" width={48} height={48} alt="switch images" className="w-full h-full"/>
                        </div>
                        <div className="absolute top-[40%] right-0 hover:scale-110 hover:bg-black/10 rounded-lg">
                            <Image src="/icons/RightArrowCircle.svg" width={36} height={36} alt="switch images" className="w-full h-full"/>
                        </div>
                    </div>
                </div>
                {/* Price Section */}
                <div className=" font-semibold text-3xl text-amber-50 border-2 border-green-500 absolute rounded-md bottom-8 right-6 p-2 bg-black/75 shadow-md shadow-slate-800 ">
                    $550
                </div>
            </div>
            {/* Information Section */}
            <div  onClick={() => handleInfo()} >
                <div className="flex justify-center items-center scale-110 hover:scale-125 ">
                    <Image src= {`${infoStatus ? '/icons/UpArrow.svg' : '/icons/DownArrow.svg'}`} width={36} height={36} alt="Click for more info"/>
                </div>
                <div className={`${infoStatus ? 'grid' : 'hidden'} p-8 text-amber-50 border-2 border-green-500 m-6 rounded-lg `}>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Animal Specs Section */}
                        <div className="text-justify">
                            <div className="grid grid-cols-2">
                                <ul>Lot Number</ul>
                                <ul>Tag Number</ul>
                            </div>
                            <div className="grid grid-cols-2">
                                <ul>Species</ul>
                                <ul>Species Sub Type</ul>
                            </div>
                            <div>
                                <ul>Date of Birth</ul>
                                <ul>Animals Father</ul>
                                <ul>Animals Mother</ul>
                            </div>
                        </div>
                        {/* Farm Specs Section */}
                        <div className="text-right">
                            <ul>Farm Name</ul>
                            <ul>Contact Number</ul>
                            <ul>Address</ul>
                        </div>
                    </div>
                    {/* Additonal Info Section */}
                    <div className="py-8">
                        Additonal Information
                    </div>
                </div>
            </div>
            {/* Bidding Section */}
            <div className="grid grid-cols-2 gap-4 m-6 text-amber-50">
                <div className="flex">
                    <button className="mx-4">Minus Icon</button>
                    <p className="font-semibold text-2xl">$500</p>
                    <button className="mx-4">Plus Icon</button>
                </div>
                <div className="flex justify-end">
                    <button className="rounded-full bg-rose-500 border-2 border-rose-800 text-3xl font-semibold w-1/2">Bid</button>
                </div>
            </div>
        </div>
     );
}
 
export default AuctionTile;