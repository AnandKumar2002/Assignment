import React, { useState } from 'react';
import {Connected, BannerPhoto, Photo1, Photo2, Photo8, VectorRight, VectorLeft} from '../photos/index';


function RightConnected() {
    const images = [Connected, BannerPhoto, Photo1, Photo2, Photo8];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='relative w-full lg:w-[50%] lg:h-full h-auto'>
            <img src={images[currentImageIndex]} alt="Connected" className='w-full h-full object-cover' />
            <div className="absolute bottom-5 right-10 left-0 flex justify-end px-4 py-2 gap-2 text-white">
                <button onClick={goToPreviousImage} className='border rounded-full border-color-white h-10 w-10 flex justify-center items-center'>
                    <img src={VectorLeft} alt="Vector" />
                </button>
                <button onClick={goToNextImage} className='border rounded-full border-color-white h-10 w-10 flex justify-center items-center'>
                    <img src={VectorRight} alt="Vector" />
                </button>
            </div>
        </div>
    );
};

export default RightConnected;
