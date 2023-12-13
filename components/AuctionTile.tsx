
const AuctionTile = () => {
    return ( 
        <div className="text-center w-1/2 min-h-1/2 bg-emerald-950 text-green-500 rounded-xl border-2 border-green-500 shadow-md shadow-green-500">
            {/* Image/Video, Favorite Section, Current Price Section, Carousel Section, and Timer Section */}
            <div className="relative flex justify-center ">
                {/* Timer Section */}
                <div className="w-1/6 bg-emerald-900 rounded-full border-2 border-green-500 absolute p-1 top-[.75rem] font-medium text-xl">
                   Sold
                </div>
                {/* Favorite Section */}
                <div className="absolute top-10 left-8 ">
                    Heart Icon
                </div>
                {/* Image/Video Section */}
                <div className="mx-6 my-8 rounded-md border-2 border-green-500 w-full h-full ">
                    <div className=" aspect-video flex justify-center items-center bg-white">placeholder for image</div>
                    {/* Carousel Section */}
                    <div className="">
                        <div className="absolute top-1/2 left-10">
                            Left Arrow
                        </div>
                        <div className="absolute top-1/2 right-10">
                            Right Arrow
                        </div>

                    </div>
                </div>
                {/* Price Section */}
                <div className=" font-semibold text-3xl text-amber-50 border-2 border-green-500 absolute rounded-md bottom-8 right-6 p-2 bg-black/75 shadow-md shadow-slate-800 ">
                    $550
                </div>
            </div>
            {/* Information Section */}
            <div className="group">Arrow dropdown for more info...
                <div className="group-hover:grid hidden p-8 text-amber-50 border-2 border-green-500 m-6 rounded-lg">
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
                        Additonal Information Section
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