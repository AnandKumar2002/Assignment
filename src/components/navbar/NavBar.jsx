import React from 'react';
import { Logo } from '../photos/index';

function NavBar() {
    return (
        <nav className="text-white fixed w-full h-28 top-0 left-0 z-50 flex justify-between items-center border-b-[1px] border-color-[#cccccc] px-5 lg:px-20">
            <div className="flex mr-4 lg:gap-20 gap-5 w-[40%]">
                <a href="#HOME_PROJECTS">PROJECTS</a>
                <a href="#CONNECTED_EXPERTISE">EXPERTISE</a>
                <a href="#BELIEVE_IN_ABOUT_US">ABOUT US</a>
                <a href="#PEOPLE">PEOPLE</a>
            </div>
            <div className="flex items-center justify-center w-[10%]">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="flex justify-end w-[40%]">
                <a href="#CAREERS" className='mr-4'>CAREERS</a>
                <a href="#AU" className='mr-0'>AU</a>
            </div>
        </nav>
    );
};

export default NavBar;
