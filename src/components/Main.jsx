import React from 'react'
import img1 from '../img/img1.png';

function Main
() {
  return (
    <div className='w-full h-[540px] bg-gray-100 flex justify-between items-center'>
    <div className='h-full'>
    <img src={img1} alt="" className='h-full object-contain w-[450px] h-[400px] pt-20 pl-20'/>
    </div>
    <div className='h-60 flex flex-col gap-3 pr-20'>
        <h2 className='text-3xl' >Microsoft Clone</h2>
        <p className='w-[400px]'>HHHhhhhhhhhHhhhhhhhhhhhhhhhhh
        hhhhhhhhhhhhhh
        hhhhhhhhhhhhhh
        hhhhhhhhhhhhhh
        hhhhhhhhhhhhhhhh
        hhhhhhhhhhhhhhhh
        </p>
    <button className="w-60 h-10 bg-[#0067b8] font-bold text-white text-md  border-black border rounded-sm">Shop Devices</button>
    </div>
    </div>
  )
}

export default Main;

