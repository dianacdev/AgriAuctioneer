'use client'

import Image from "next/image";
import { useState } from "react"

interface AutionTileProps{
    lot: number;
    tag: string;
    dob: string;
    address: string;
    farmName: string;
    phoneNumber: string;
    species: string;
    subSpecies: string;
    moreInfo: string;
    animalsMom: string;
    animalsDad: string;
}

const AuctionTile: React.FC<AutionTileProps> = ({lot, dob, species, subSpecies, farmName, phoneNumber, tag, address, moreInfo, animalsMom, animalsDad}) => {
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
        <div className="
        text-center 
        m-2
        bg-agri-green-300 
        text-agri-green-100 
        rounded-xl 
        border-2 
        border-agri-green-100 
        shadow-md 
        shadow-agri-green-100
        flex flex-col
        ">
            {/* Image/Video, Favorite Section, Current Price Section, Carousel Section, and Timer Section */}
            <div className="relative flex justify-center">
                {/* Timer Section */}
                <div className="w-1/6 bg-agri-green-200 rounded-full border-2 border-agri-green-100 absolute p-1 top-[.75rem] font-medium text-xl">
                   Sold
                </div>
                {/* Favorite Section */}
                <div onClick={() => handleHeart()} className="absolute top-12 left-10 hover:scale-110">
                    <Image src={`${heartStatus ? '/icons/ActiveHeart.svg' : '/icons/DefaultHeart.svg'}`} width={36} height={36} alt="Click to favorite and unfavorite" />
                </div>
                {/* Image/Video Section */}
                <div className="mx-6 my-8 w-full h-full">
                    <div className=" aspect-video flex justify-center items-center bg-neutral-400 text-white object-cover border-2 border-agri-green-100 rounded-md">placeholder for image</div>
                    {/* Carousel Section */}
                    <div className="">
                        <div className="absolute top-[40%] left-0 hover:scale-110 hover:bg-black/10 rounded-lg">
                            <Image src="/icons/LeftArrowCircle.svg" width={36} height={36} alt="switch images" className="w-full h-full"/>
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
                <div className="flex justify-center items-center scale-110 hover:scale-125">
                    <Image src= {`${infoStatus ? '/icons/UpArrow.svg' : '/icons/DownArrow.svg'}`} width={36} height={36} alt="Click for more info"/>
                </div>
                <div className={`${infoStatus ? 'grid' : 'hidden'} p-8 text-amber-50 border-2 border-agri-green-100 m-6 rounded-lg `}>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Animal Specs Section */}
                        <div className="text-justify leading-relaxed">
                            <div className="grid grid-cols-2">
                                <ul>Lot: {lot}</ul>
                                <ul>Tag: {tag}</ul>
                            </div>
                            <div className="grid grid-cols-2">
                                <ul>{species}</ul>
                                <ul>{subSpecies}</ul>
                            </div>
                            <div>
                                <ul>{dob}</ul>
                                <ul>Father: {animalsDad}</ul>
                                <ul>Mother: {animalsMom}</ul>
                            </div>
                        </div>
                        {/* Farm Specs Section */}
                        <div className="text-right">
                            <ul>{farmName}</ul>
                            <ul>{phoneNumber}</ul>
                            <ul>{address}</ul>
                        </div>
                    </div>
                    {/* Additonal Info Section */}
                    <div className="py-8">
                        Additonal Information
                        {moreInfo}
                    </div>
                </div>
            </div>
            {/* Bidding Section */}
            <div className="grid grid-cols-2 gap-6 mx-12 text-amber-50">
                <div className="flex justify-center items-center ">
                    <Image src={"/icons/Minus.svg"} width={18} height={18} alt="Reduce Bid Amount" className=" w-full h-full hover:scale-110 "/>
                    <p className="font-semibold text-2xl m-[-.75rem] ">$5,000</p>
                    <Image src={"/icons/Plus.svg"} width={18} height={18} alt="Increase Bid Amount" className="w-full h-full hover:scale-110" />
                </div>
                <div className="flex justify-end items-center pl-6">
                    <button
                        className="
                        rounded-full
                        bg-scarlet-100
                        border-2
                        border-scarlet-200
                        text-4xl
                        font-semibold
                        w-full h-1/2
                        hover:scale-110 shadow-md">
                        Bid
                    </button>
                </div>
                <div className="flex justify-start items-center mb-4 ">
                    <div className="font-light text-sm">
                        Number of Bids: 01
                    </div>
                </div>
                <div className="flex justify-end items-center mb-4 ">
                    <div className="font-light text-sm underline hover:text-agri-blue-100">
                        Bid Settings
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AuctionTile;