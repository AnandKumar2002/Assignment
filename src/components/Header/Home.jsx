import React, { useState } from 'react';
import { BannerPhoto, Photo1, Photo2, Photo5, Photo8, VectorLeft, VectorRight } from '../photos/index';

function Home() {
    const images = [
        {
            src: BannerPhoto,
            text1: 'Home / Why work with us',
            text2: 'Headline #1',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            src: Photo8,
            text1: 'Home / Why work with us',
            text2: 'Headline #2',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            src: Photo2,
            text1: 'Home / Why work with us',
            text2: 'Headline #3',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            src: Photo1,
            text1: 'Home / Why work with us',
            text2: 'Headline #4',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            src: Photo5,
            text1: 'Home / Why work with us',
            text2: 'Headline #5',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },

    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div id='HOME_PROJECTS' className="relative h-screen flex items-center justify-center">
            <img
                className="h-full w-screen object-cover"
                src={images[currentImageIndex].src}
                alt="Group"
            />
            <div className="absolute bottom-0 right-0 left-0 flex justify-center">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-[33.3333%] rounded-r-sm ${index <= currentImageIndex ? 'bg-[#F36F2B]' : 'bg-transparent'
                            }`}
                    ></div>
                ))}
            </div>
            <div className="absolute bottom-5 right-10 left-0 flex justify-end px-4 py-2 gap-2 text-white">
                <button onClick={goToPreviousImage} className='border rounded-full border-color-white h-10 w-10 flex justify-center items-center'>
                    <img src={VectorLeft} alt="Vector" />
                </button>
                <button onClick={goToNextImage}
                    className='border rounded-full border-color-white h-10 w-10 flex justify-center items-center'>
                    <img src={VectorRight} alt="Vector" />
                </button>
            </div>
            <div className="absolute bottom-28 left-10 text-white flex flex-col justify-center items-start text-base leading-[36px]">
                <p>{images[currentImageIndex].text1}</p>
                <p className="text-6xl font-titleFont">{images[currentImageIndex].text2}</p>
                <p>{images[currentImageIndex].text3}</p>
            </div>
        </div>
    );
};

export default Home;
