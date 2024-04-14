import React from 'react'
import WorldMap from '../photos/World.png'
import { FaArrowRight } from 'react-icons/fa';

function GlobalMap() {
  return (
    <div id='AU' className='bg-white flex flex-col justify-center items-center p-10 mt-10 gap-10'>
      <p className='text-4xl lg:w-[60%] w-[90%] text-center'>As a <span className='text-[#F36F2B]'>global business,</span> we encourage you to contact us no matter where you are located in the world.</p>
      <p className='text-sm font-semibold'>Browse our job opportunities across the globe.</p>
      <div className='flex justify-center items-center gap-5'>
        <p className='text-[#F36F2B] text-xl font-semibold'>OPEN ROLES</p>
        <div className="border border-gray-400 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer text-[#F36F2B]">
          <FaArrowRight />
        </div>
      </div>
      <div className='p-10'>
        <img src={WorldMap} alt="WorldMap" />
      </div>
    </div>
  );
};

export default GlobalMap