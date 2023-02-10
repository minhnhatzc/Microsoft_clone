import React from 'react'
import img2 from "../img/img2.jpg";

function Shop() {
  return (
    <div className='max-w-[1160px] mx-auto mb-20'>
    <div className='relative bg-gray-300 h-[540px] w-full'>
        <img src={img2} alt="" className='w-full h-full object-cover'/>
        <div className='absolute top-16 left-16 space-y-5'>
            <h2 className='text-3xl font-bold text-white'>Do more with Window</h2>
            <p className='text-white'>Shop tables, latops, all-in-ones, gaming PCs, and more</p>
            <button className='w-60 h-10 bg-[#0067b8] font-bold text-white text-md border-black border rounded'>Find your next</button>
        </div>
    </div>

    </div>
  )
}

export default Shop;

