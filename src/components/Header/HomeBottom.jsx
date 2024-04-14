import React from 'react'
import VectorWhite from '../photos/VectorWhite.png';

function HomeBottom() {
    return (
        <div className='grid grid-cols-3'>
            <div className="flex flex-col justify-center w-full h-20 bg-[#112C41] border border-black lg:px-20 px-8">
                <h2 className="text-[#6B6B6B]">01</h2>
                <div className="flex justify-between items-center lg:text-lg text-[12px]" >
                    <h2 className="text-white">We stay connected</h2>
                    <div className='border rounded-full lg:w-10 lg:h-10 h-8 w-8 flex justify-center items-center'>
                        <img src={VectorWhite} alt="VectorWhite" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center w-full h-20 bg-[#112C41] border border-black lg:px-20 px-8">
                <h2 className="text-[#6B6B6B]">02</h2>
                <div className="flex justify-between items-center lg:text-lg text-[12px]" >
                    <h2 className="text-white">We believe in diversity & inclusion</h2>
                    <div className='border rounded-full lg:w-10 lg:h-10 h-8 w-8 flex justify-center items-center'>
                        <img src={VectorWhite} alt="VectorWhite" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center w-full h-20 bg-[#112C41] border border-black lg:px-20 px-8">
                <h2 className="text-[#6B6B6B]">03</h2>
                <div className="flex justify-between items-center lg:text-lg text-[12px]" >
                    <h2 className="text-white">We celebrate success</h2>
                    <div className='border rounded-full lg:w-10 lg:h-10 h-8 w-8 flex justify-center items-center'>
                        <img src={VectorWhite} alt="VectorWhite" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBottom
