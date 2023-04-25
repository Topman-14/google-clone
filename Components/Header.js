import React from 'react'
import Gapps from './Gapps'
import User from './User'

export default function Header() {
  return (
    <div>
        <ul className='flex w-full justify-end p-4 gap-7'>
            <li><a className='' href="http://">Gmail</a></li>
            <li><a href="http://">Images</a></li>
            <Gapps/>
            <User/>
        </ul>
    </div>
  )
}
