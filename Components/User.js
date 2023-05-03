import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'



export default function User() {
  const { data:session } = useSession()
  if(session){
    console.log(session.user.image)
    return(
      <>
        <img src={session.user.image} alt="user-image" className='h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1' onClick={() => signOut()}/>
      </>
    )
  }
  else{
    return (
      <>
        <button className='bg-blue-600 text-white px-6 py-2 font-medium rounded hover:bg-blue-700 hover:shadow-md' onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
}
