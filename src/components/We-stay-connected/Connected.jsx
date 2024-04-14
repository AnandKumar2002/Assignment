import React from 'react'
import LeftConnected from './LeftConnected'
import RightConnected from './RightConnected'

function Connected() {
  return (
    <div id='CONNECTED_EXPERTISE' className='flex flex-col lg:flex-row lg:h-screen h-full'>
        <LeftConnected />
        <RightConnected />
    </div>
  )
}

export default Connected