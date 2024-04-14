import React from 'react'
import { HiComputerDesktop } from "react-icons/hi2";
import { LuMessagesSquare } from "react-icons/lu";
import { FaAddressBook } from "react-icons/fa";

function LeftConnected() {
    return (
        <div className='w-full lg:w-[50%] lg:px-32 px-10 py-10 flex flex-col lg:gap-10 gap-5'>
            <p className='lg:text-6xl font-titleFont text-4xl'>We <span className='text-[#F36F2B]'>stay connected</span></p>
            <div className='flex flex-col '>
                <div className='flex items-center gap-6 font-bold mb-4'>
                    <HiComputerDesktop />
                    <p>Quarterly Business Updates</p>
                </div>
                <p className='ml-10 lg:text-lg text-base'>
                    We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
                    member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential.
                </p>
            </div>
            <div className='flex items-center gap-6'>
                <LuMessagesSquare />
                <p className='font-bold'>Industry Events & Networking</p>
            </div>
            <div className='flex items-center gap-6'>
                <FaAddressBook />
                <p className='font-bold'>Associations Memberships</p>
            </div>
        </div>
    );
};

export default LeftConnected
