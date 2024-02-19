import Image from "next/image"

const AuctionBidPanel = () => {
  return (
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
  )
}

export default AuctionBidPanel