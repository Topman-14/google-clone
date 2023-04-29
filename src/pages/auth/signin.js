import React from 'react'
import Header from '../../../Components/Header';
import {getProviders} from "next-auth/react"

export default function signIn({providers}) {
  return (
    <>
      <Header/>
      <div className=''>
        {Object.values(providers).map(provider =>(
          <div key={provider.name} className=''>
            <img src='public\img\glogo.png' alt=''></img>
          </div>
        ))}
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