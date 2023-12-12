
const AuctionTile = () => {
    return ( 
        <div className="text-center w-1/2 min-h-1/2 bg-emerald-950 text-green-500 rounded-xl border-2 border-green-500 shadow-md shadow-green-500">
            {/* Image/Video Section */}
            <div className="mx-6 my-8 rounded-md border-2 border-green-500">
                <div className=" aspect-video">placeholder for image</div>
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
                    <p className="font-semibold text-2xl"><span>$</span>500</p>
                    <button className="mx-4">Plus Icon</button>
                </div>
                <button className="rounded-full bg-red-600 border-2 border-rose-800 text-4xl font-semibold ">Bid</button>
            </div>
        </div>
     );
}
 
export default AuctionTile;