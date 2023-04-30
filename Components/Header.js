import React from 'react'
import Gapps from './Gapps'
import User from './User'

export default function Header() {
  return (
    <div>
        <ul className='flex w-full justify-end items-center p-4 gap-5 text-sm font-sans'>
            <li><a className='hover:underline' href="https://www.google.com/gmail/about/">Gmail</a></li>
            <li><a href="https://www.google.com.ng/imghp?hl=en&ogbl" className='hover:underline'>Images</a></li>
            <Gapps/>
            <User/>
        </ul>
    </div>
  )
}
