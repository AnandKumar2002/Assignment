import React, { useState } from 'react';
import { Logo } from '../photos/index';
import { RiMenu3Line } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="text-white fixed w-full h-28 top-0 left-0 z-50 flex justify-between items-center border-b-[1px] border-color-[#cccccc] px-5 lg:px-20">
            <div className="flex mr-4 lg:gap-20 gap-5 w-[40%] hidden lg:flex">
                <a href="#HOME_PROJECTS">PROJECTS</a>
                <a href="#CONNECTED_EXPERTISE">EXPERTISE</a>
                <a href="#BELIEVE_IN_ABOUT_US">ABOUT US</a>
                <a href="#PEOPLE">PEOPLE</a>
            </div>
            <div className="flex items-center justify-center w-[10%]">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="flex justify-end w-[40%] hidden lg:flex">
                <a href="#CAREERS" className="mr-4">
                    CAREERS
                </a>
                <a href="#AU" className="mr-0">
                    AU
                </a>
            </div>
            <span
                onClick={() => setShowMenu(!showMenu)}
                className="text-2xl font-bold lg:hidden bg-black w-14 h-14 inline-flex items-center justify-center rounded-full text-white cursor-pointer"
            >
                {showMenu ? <MdClose /> : <RiMenu3Line />}
            </span>
            {showMenu && (
                <div
                    className="w-[85%] h-screen absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide z-50 text-5xl"
                    data-aos="fade-right"
                >
                    <div className="flex flex-col gap-8 py-2 relative justify-center items-center h-full text-center">
                        <ul className="flex flex-col gap-10 text-[#F36F2B] list-none">
                            <a href="#HOME_PROJECTS">⁕ PROJECTS</a>
                            <a href="#CONNECTED_EXPERTISE">⁕ EXPERTISE</a>
                            <a href="#BELIEVE_IN_ABOUT_US">⁕ ABOUT US</a>
                            <a href="#PEOPLE">⁕ PEOPLE</a>
                            <a href="#CAREERS">⁕ CAREERS</a>
                            <a href="#AU">⁕ AU</a>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
