import React from 'react'
import Header from '../../../Components/Header';
import {getProviders, signIn} from "next-auth/react"

export default function signin({providers}) {
  return (
    <>
      <Header/>
      <div className='flex flex-col items-center'>
        {Object.values(providers).map(provider => (
            <div key={provider.name} className=''>
              <img src="/google.png" alt="" className='w-32 object-cover'/>
              <p>This site is a clone of Google.com 
              </p>
              <button onClick={()=>signIn(provider.id, {callbackUrl: "/"})}> Sign in with {provider.name}</button>
            </div>
        ))}
        <img src='public\img\glogo.png' alt=''></img>
      </div>
    </>
  )
  }

export async function getServerSideProps(){
  const providers = await getProviders();
  return{
    props:{providers},
  };
}