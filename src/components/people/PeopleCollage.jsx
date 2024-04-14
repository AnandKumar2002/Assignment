import React from 'react';
import Photo1 from '../photos/Photo1.png';
import Photo2 from '../photos/Photo2.png';
import Photo3 from '../photos/Photo3.png';
import Photo4 from '../photos/Photo4.png';
import Photo5 from '../photos/Photo5.png';
import Photo6 from '../photos/Photo6.png';
import Photo7 from '../photos/Photo7.png';
import Photo8 from '../photos/Photo8.png';

function PeopleCollage() {
  return (
    <div id='PEOPLE' className='grid grid-cols-12 gap-3 py-20'>
      <div className='col-span-5'>
        <img src={Photo1} alt="" className='object-cover w-full h-full' />
      </div>
      <div className='col-span-4'>
        <img src={Photo2} alt="" className='object-cover w-full h-full' />
      </div>
      <div className='col-span-3 row-span-2'>
        <img src={Photo3} alt="" className='object-cover w-full h-full' />
      </div>
      <div className='col-span-4 row-span-2'>
        <img src={Photo4} alt="" className='object-cover w-full h-full' />
      </div>
      <div className='col-span-5 p-10 flex flex-col my-auto'>
        <div className='px-10 flex flex-col gap-10'>
          <p className='text-5xl font-titleFont'>We celebrate <span className='text-[#F36F2B]'>success</span></p>
          <p className='text-[#515151]'>At CaSE we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in celebrating these moments because they underscore the commitment and effort put into each project.
          </p>
          <p className='text-[#515151]'>Some of our favourite events on the calendar include our coveted Melbourne Cup event and our always amazing Christmas Party. In-between, our team celebrate together during team cycling events, regular team dinners and social morning teas to celebrate milestones and special days. Taking the time to celebrate wins is our way of showing gratitude and ensuring everyone knows their efforts make a difference.
          </p>
        </div>
      </div>
      <div className='col-span-8'>
        <img src={Photo5} alt="" className='object-cover w-full h-full' />
      </div>
      <div className='col-span-6 flex my-auto px-20'>
        <div className=' flex flex-col gap-10'>
          <p className='text-5xl font-titleFont'>Employee <span className='text-[#F36F2B]'>Appreciation Program</span></p>
          <p className='text-[#515151]'>Our Employee Appreciation Program is tailored to honor the ongoing commitment and efforts of our long-serving team members. Our 5 Year Club and 10 Year Club are special milestones within this program, celebrating employees who have dedicated half a decade or a full decade to our company mission. Each year, members of these clubs are invited to annual events held at select, memorable locations, reflecting our gratitude and recognition of their unwavering dedication. It's our way of saying thank you and ensuring that every significant chapter in our collective journey is celebrated with the grandeur it deserves
          </p>
        </div>
      </div>
      <div className='col-span-6'>
        <img src={Photo6} alt="" className='object-cover w-full h-full' />
      </div>
      <div className='col-span-7'>
        <img src={Photo7} alt="" className='object-cover w-full h-full' />
      </div>
      <div className='col-span-5'>
        <img src={Photo8} alt="" className='object-cover w-full h-full' />
      </div>
    </div>
  );
}

export default PeopleCollage;
