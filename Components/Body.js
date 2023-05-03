import Image from 'next/image'
import React from 'react'

export default function Body() {
  return (
    <>
      <form className='flex items-center justify-center flex-col mt-16'>
          <Image src="/gclone.png"
          width={180}
          height={180}
          style={{objectFit:"cover"}}
          alt='gclone'/>
          <div className='flex mt-6 p-2 w-3/4 hover:shadow-lg border focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl'>
            <img src="/search.png" alt="search" className='h-5 mr-2'/>

            <input type="text" name="" id="" placeholder="Search" className='flex-grow focus:outline-none'/>

            <img src="/mic.png" alt="voice search" className='h-5'/>
          </div>
          <button className='home-btn'>Google Search</button>
          <button className='home-btn'>I'm feeling lucky</button>
      </form>
    </>
  )
}
