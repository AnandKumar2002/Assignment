import React from 'react';
import LeftWeBelieve from './LeftWeBelieve';
import RightWeBelieve from './RightWeBelieve';
import BottomWeBelieve from './BottomWeBelieve';

function WeBelieve() {
  return (
    <div id='BELIEVE_IN_ABOUT_US' className='w-full bg-[#112C41] text-white'>
        <div className='w-full flex flex-col lg:flex-row lg:p-32 p-16 gap-10'>
            <LeftWeBelieve />
            <RightWeBelieve />
        </div>
        <BottomWeBelieve />
    </div>
  );
};

export default WeBelieve;