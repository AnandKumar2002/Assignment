import React from 'react';
import FooterBottom from './FooterBottom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Logo2 from '../photos/Logo2.png';

function Footer() {
    return (
        <div className='text-white bg-black lg:pr-24'>
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-600">
                <div className="lg:col-span-2 border-r border-gray-600 flex flex-col lg:justify-center lg:items-center gap-5">
                    <div className="ml-5 mt-5">
                        <img src={Logo2} alt="Logo2" />
                    </div>
                    <div className="text-gray-600 flex items-center lg:justify-center ml-5 gap-3 text-2xl">
                        <a
                            className='hover:text-[#F36F2B]'
                            href="https://www.instagram.com/__.anand._______/" target="_blank">
                            <FaInstagram />
                        </a>
                        <a
                            className='hover:text-[#F36F2B]'
                            href="https://www.facebook.com/profile.php?id=100026761293686" target="_blank">
                            <FaFacebookF />
                        </a>
                        <a
                            className='hover:text-[#F36F2B]'
                            href="https://www.linkedin.com/in/01anand-kumar/" target="_blank">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-3 border-r border-gray-600 border-opacity-50 p-5 lg:p-10">
                    <div className="flex flex-col justify-center gap-1 lg:ml-16 font-normal">
                        <p className='font-bold mb-3'>Expertise</p>
                        <p>Design</p>
                        <p>Specialist Expertise</p>
                        <p>Commercial Advice</p>
                        <p>Traffic & Transport</p>
                    </div>
                </div>
                <div className="lg:col-span-3 border-r border-gray-600 p-5 lg:p-10 gap-1">
                    <div className="flex flex-col justify-center lg:ml-20 gap-1 font-normal">
                        <p className='font-bold mb-3'>Sectors</p>
                        <p>Road</p>
                        <p>Tunnel</p>
                        <p>Bridge</p>
                        <p>Other +</p>
                    </div>
                </div>
                <div className="lg:col-span-4 flex flex-col lg:flex-row justify-center lg:justify-between gap-5 lg:gap-20 p-5 mt-5 font-semibold">
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

export default Footer;
