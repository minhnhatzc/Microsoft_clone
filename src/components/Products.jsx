import React from 'react'
import img1 from "../img/img1.png";
import list from "../../list.json";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Products() {
  return (
    <div className='max-w-[1160px] m-auto mb-20'>
    <div className='flex flex-wrap justify-between'>
        {list.map((item, i) => (
            <div className='"w-[260px] space-y-3'>
                <img src={img1} alt="" className="w-full h-40 object-cover"/>
                <div>
                    <h2 className='bg-[#ffb900] w-fit p-[2px] px-3 font-bold mb-1'>New</h2>
                    <h2 className="text-3xl">{item.text}</h2>
                </div>
                <p>HHHHHHHH</p>
                <div className="flex items-center text-[#0067b8]">
                    <a href='#' className="font-bold">Shop Now</a>
                    <MdOutlineKeyboardArrowRight className='h-6 w-6'/>
                </div>
            </div>

        )
        )
        }
    </div>
    </div>
  );
}

export default Products;
