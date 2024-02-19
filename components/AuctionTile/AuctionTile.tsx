"use client";

import Image from "next/image";
import { useState } from "react";

import FavoriteButton from "./FavoriteButton";
import AuctionTileCarousel from "./AuctionTileCarousel";
import AuctionBidPanel from "./AuctionBidPanel";

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
  const [infoStatus, setInfoStatus] = useState(false);

  const handleInfo = () => {
    console.log("info dropdown status updated!");
    if (infoStatus !== false) setInfoStatus(false);
    else setInfoStatus(true);
  };

  return (
    <div
      className={`${infoStatus ? "expandedbrick" : "brick"}
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
          className={`w-1/3 bg-agri-green-200 rounded-full border-2 border-agri-green-100 text-agri-green-100 absolute p-1 top-[.75rem] font-medium text-xl`}
        >
          10m 20s
        </div>
        {/* Favorite Section */}
        <FavoriteButton />
        {/* Image/Video Section & Carousel section*/}
        <AuctionTileCarousel />
        {/* Price Section */}
        <div className=" font-semibold text-3xl text-amber-50 border-2 border-green-500 absolute rounded-md bottom-8 right-6 p-2 bg-black/75 shadow-md shadow-slate-800 ">
          $550
        </div>
      </div>
      {/* Information Section */}
      <div onClick={() => handleInfo()}>
        <div className="flex justify-center items-center scale-110 hover:scale-125">
          <Image
            src={`${
              infoStatus ? "/icons/UpArrow.svg" : "/icons/DownArrow.svg"
            }`}
            width={36}
            height={36}
            alt="Click for more info"
          />
        </div>
        <div
          className={`${
            infoStatus ? "block" : "hidden"
          } p-8 text-amber-50 border-2 border-agri-green-100 m-6 rounded-lg`}
        >
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
                <ul>DOB: {dob}</ul>
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
      <AuctionBidPanel />
    </div>
  );
};

export default AuctionTile;
