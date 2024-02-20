import React from 'react'
import AuctionTile from './AuctionTile/AuctionTile'
import PreviewAuctionTile from './AuctionTile/PreviewAuctionTile'

const AuctionPreview = () => {
  return (
    <div className='bg-neutral-950 w-full h-full rounded-xl pb-8 px-8'>
        <h1 className='text-agri-green-100 text-4xl font-semibold py-8 ml-4'>Auction Preview</h1>
        <div className='bg-neutral-900 w-full rounded-md p-4'>
            Auction Settings
        </div>
        <div className='grid masonery gap-8 mt-8'>
            <PreviewAuctionTile
                      lot={1}
                      tag="23"
                      dob="1/1/2024"
                      address="123w 400s SLC, UT"
                      farmName="Quasar Ranch"
                      phoneNumber="132-222-4568"
                      species="Boer Goat"
                      subSpecies="Wether"
                      moreInfo=""
                      animalsMom="Kahuna"
                      animalsDad="Maui"
            />
            <PreviewAuctionTile
                      lot={1}
                      tag="23"
                      dob="1/1/2024"
                      address="123w 400s SLC, UT"
                      farmName="Quasar Ranch"
                      phoneNumber="132-222-4568"
                      species="Boer Goat"
                      subSpecies="Wether"
                      moreInfo=""
                      animalsMom="Kahuna"
                      animalsDad="Maui"
            />
            <PreviewAuctionTile
                      lot={1}
                      tag="23"
                      dob="1/1/2024"
                      address="123w 400s SLC, UT"
                      farmName="Quasar Ranch"
                      phoneNumber="132-222-4568"
                      species="Boer Goat"
                      subSpecies="Wether"
                      moreInfo=""
                      animalsMom="Kahuna"
                      animalsDad="Maui"
            />
            <PreviewAuctionTile
                      lot={1}
                      tag="23"
                      dob="1/1/2024"
                      address="123w 400s SLC, UT"
                      farmName="Quasar Ranch"
                      phoneNumber="132-222-4568"
                      species="Boer Goat"
                      subSpecies="Wether"
                      moreInfo=""
                      animalsMom="Kahuna"
                      animalsDad="Maui"
            />
        </div>
    </div>
  )
}

export default AuctionPreview