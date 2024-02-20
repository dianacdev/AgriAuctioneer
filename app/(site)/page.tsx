import AnimalForm from "@/components/AnimalForm"
import AuctionPreview from "@/components/AuctionPreview"
import AuctionTile from "@/components/AuctionTile/AuctionTile"

export default function Home() {
  return (
    <main className=" min-h-screen items-center justify-between p-20">
      <div>
        <AuctionPreview/>
      </div>
      {/* <div className="grid masonery gap-8">
        <AuctionTile
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
        <AuctionTile
          lot={1}
          tag="234"
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
        <AuctionTile
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
        <AuctionTile
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
        <AuctionTile
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
        <AuctionTile
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
      </div> */}
    </main>
  )
}
