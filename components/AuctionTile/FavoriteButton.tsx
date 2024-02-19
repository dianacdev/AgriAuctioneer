"use client";
import { useState } from "react";
import Image from "next/image";

const FavoriteButton = () => {
  const [heartStatus, setHeartStatus] = useState(false);
  const handleHeart = () => {
    console.log("heart status updated!");
    if (heartStatus !== false) setHeartStatus(false);
    else setHeartStatus(true);
  };

  return (
    <div
      onClick={() => handleHeart()}
      className="absolute top-12 left-10 hover:scale-110"
    >
      <Image
        src={`${
          heartStatus ? "/icons/ActiveHeart.svg" : "/icons/DefaultHeart.svg"
        }`}
        width={36}
        height={36}
        alt="Click to favorite and unfavorite"
      />
    </div>
  );
};

export default FavoriteButton;
