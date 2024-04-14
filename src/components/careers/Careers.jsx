import React, { useState } from 'react';
import { StoryPhoto, BannerPhoto, Photo1, Photo2, Photo8, VectorRight, VectorLeft, Connected } from '../photos/index';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa';

function Careers() {
    const images = [StoryPhoto, Connected, BannerPhoto, Photo1, Photo2, Photo8];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div id='CAREERS' className="w-full h-auto bg-[#112C41] flex p-10 text-white">
            <div className="w-[40%] px-10 lg:p-20">
                <img src={images[currentImageIndex]} alt="StoryImg" className="lg:w-[80%] h-60 lg:h-96 m-auto object-contain" />
            </div>
            <div className="w-[60%] lg:w-[45%] lg:my-auto">
                <RiDoubleQuotesL className="text-[#F36F2B] text-4xl" />
                <div className="flex flex-col ml-14 lg:gap-3 mb-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.
                    </p>
                    <p>Title</p>
                    <p>Name</p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="border border-white h-10 w-10 flex items-center justify-center rounded-full">
                        <FaArrowRight />
                    </div>
                    <p>Read my story</p>

                    <div className="absolute lg:right-32 right-10 flex justify-end px-4 py-2 gap-2 text-white ">
                        <button onClick={goToPreviousImage} className="border rounded-full border-color-white h-10 w-10 flex justify-center items-center">
                            <img src={VectorLeft} alt="Vector" />
                        </button>
                        <button onClick={goToNextImage} className="border rounded-full border-color-white h-10 w-10 flex justify-center items-center">
                            <img src={VectorRight} alt="Vector" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
