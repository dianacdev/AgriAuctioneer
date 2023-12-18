import AuctionTile from "@/components/AuctionTile"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full h-full">
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
      </div>
    </main>
  )
}
