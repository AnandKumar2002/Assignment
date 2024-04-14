import React from 'react'
import FooterBottom from './FooterBottom'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo2 from '../photos/Logo2.png'

function Footer() {
    return (
        <div className='text-white bg-black lg:pr-24 '>
            <div className="grid grid-cols-12 border-b border-gray-600">
                <div className="col-span-2 border-r border-gray-600 flex flex-col justify-center items-center gap-5">
                    <div className="">
                        <img src={Logo2} alt="Logo2" />
                    </div>
                    <div className="text-gray-600 flex items-center justify-center gap-3 text-2xl">
                        <FaInstagram />
                        <FaFacebookF />
                        <FaLinkedinIn />
                    </div>
                </div>
                <div className="col-span-3 border-r border-gray-600 border-opacity-50 p-10">
                    <div className=" flex flex-col justify-center  gap-1 lg:ml-16 font-normal">
                        <p className='font-bold mb-3'>Expertise</p>
                        <p>Design</p>
                        <p>Specialist Expertise</p>
                        <p>Commercial Advice</p>
                        <p>Traffic & Transport</p>
                    </div>
                </div>
                <div className="col-span-3 border-r border-gray-600 p-10 gap-1">
                    <div className=" flex flex-col justify-center  lg:ml-20 gap-1 font-normal">
                        <p className='font-bold mb-3'>Sectors</p>
                        <p>Road</p>
                        <p>Tunner</p>
                        <p>Bridge</p>
                        <p>Other +</p>
                    </div>
                </div>
                <div className="col-span-4 flex justify-center  gap-20 p-5 mt-5 font-semibold">
                    <div className="flex flex-col gap-1">
                        <p>Our Business</p>
                        <p>Work With Us</p>
                        <p>Projects</p>
                        <p>News</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Our Capabilities</p>
                        <p>Engineers</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            <div>
                <FooterBottom />
            </div>
        </div>
    );
};

export default Footer