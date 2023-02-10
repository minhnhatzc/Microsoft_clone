import React from 'react'
import { BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';

function Socials() {
  return (
    <div className='h-60 max-w-[1160px] flex items-center m-auto'>
        <div className='flex justify-between w-72'>
        <h2 text-md>Follow Microsoft</h2>
        <BsFacebook className='h-6 w-6'/>
        <BsLinkedin className='h-6 w-6'/>
        <BsTwitter className='h-6 w-6'/>
        </div>

    </div>
  )
}

export default Socials;

