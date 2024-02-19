import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='grid grid-cols-2 bg-[#202020]'>
      <a href="/">
      <Image           
          src="/logos/AgriLogo.svg"
          width={32}
          height={32}
          alt="Home"
          className='w-1/4 m-4 hover:scale-105 rounded-md'
          />
      </a>
      <div>Home</div>
    </div>
  )
}

export default Navbar