"use client";

import Image from "next/image";

import FavoriteButton from "./FavoriteButton";
import AuctionInfoDropDown from "./AuctionInfoDropDown";
import AuctionTileCarousel from "./AuctionTileCarousel";

interface AutionTileProps {
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

const AuctionTile: React.FC<AutionTileProps> = ({
  lot,
  dob,
  species,
  subSpecies,
  farmName,
  phoneNumber,
  tag,
  address,
  moreInfo,
  animalsMom,
  animalsDad,
}) => {
  return (
    <div
      className={`
        text-center
        bg-agri-green-300 
        text-amber-50 
        rounded-xl 
        border-2 
        border-agri-green-100
        shadow-md 
        shadow-agri-green-100
        w-full
        `}
    >
      {/* Image/Video, Favorite Section, Current Price Section, Carousel Section, and Timer Section */}
      <div className="relative flex justify-center">
        {/* Timer Section */}
        <div
          className={`w-1/6 bg-agri-green-200 rounded-full border-2 border-agri-green-100 text-agri-green-100 absolute p-1 top-[.75rem] font-medium text-xl`}
        >
          10m 20s
        </div>
        {/* Favorite Section */}
        <FavoriteButton />
        {/* Image/Video Section & Carousel section*/}
        <AuctionTileCarousel/>
        {/* Price Section */}
        <div className=" font-semibold text-3xl text-amber-50 border-2 border-green-500 absolute rounded-md bottom-8 right-6 p-2 bg-black/75 shadow-md shadow-slate-800 ">
          $550
        </div>
      </div>
      {/* Information Section */}
      <AuctionInfoDropDown
        tag={tag}
        lot={lot}
        address={address}
        dob={dob}
        species={species}
        subSpecies={subSpecies}
        farmName={farmName}
        phoneNumber={phoneNumber}
        moreInfo={moreInfo}
        animalsDad={animalsDad}
        animalsMom={animalsMom}
      />
      {/* Bidding Section */}
      <div className="grid grid-cols-2 gap-6 mx-12 text-amber-50">
        <div className="flex justify-center items-center ">
          <Image
            src={"/icons/Minus.svg"}
            width={18}
            height={18}
            alt="Reduce Bid Amount"
            className=" w-full h-full hover:scale-110 "
          />
          <p className="font-semibold text-2xl m-[-.75rem] ">$5,000</p>
          <Image
            src={"/icons/Plus.svg"}
            width={18}
            height={18}
            alt="Increase Bid Amount"
            className="w-full h-full hover:scale-110"
          />
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
                        hover:scale-110 shadow-md"
          >
            Bid
          </button>
        </div>
        <div className="flex justify-start items-center mb-4 ">
          <div className="font-light text-sm">Number of Bids: 01</div>
        </div>
        <div className="flex justify-end items-center mb-4 ">
          <div className="font-light text-sm underline hover:text-agri-blue-100">
            Bid Settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionTile;
