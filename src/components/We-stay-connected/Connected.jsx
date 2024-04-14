import React from 'react'
import LeftConnected from './LeftConnected'
import RightConnected from './RightConnected'

function Connected() {
  return (
    <div id='CONNECTED_EXPERTISE' className='flex h-screen'>
        <LeftConnected />
        <RightConnected />
    </div>
  )
}

export default Connected