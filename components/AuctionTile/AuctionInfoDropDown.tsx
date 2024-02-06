"use client";

import { useState } from "react";
import Image from "next/image";

interface AutionInfoProps {
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

const AuctionInfoDropDown: React.FC<AutionInfoProps> = ({
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
    <div onClick={() => handleInfo()}>
      <div className="flex justify-center items-center scale-110 hover:scale-125">
        <Image
          src={`${infoStatus ? "/icons/UpArrow.svg" : "/icons/DownArrow.svg"}`}
          width={36}
          height={36}
          alt="Click for more info"
        />
      </div>
      <div
        className={`${
          infoStatus ? "grid" : "hidden"
        } p-8 text-amber-50 border-2 border-agri-green-100 m-6 rounded-lg `}
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
  );
};

export default AuctionInfoDropDown;
