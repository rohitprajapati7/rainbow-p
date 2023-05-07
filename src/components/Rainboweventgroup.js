import React from 'react'
import Image from 'next/image';
import Vector from '../../public/images/Vector.svg';
import Vector2 from '../../public/images/Vector2.svg';
import Vector3 from '../../public/images/Vector3.svg';


function Contentevent() {
  return (

    <>
    <div className='event-group pt-7 pb-12 w-[100%]'>
      <div className='flex justify-between items-center'>
        <div className='text'>
          <h6 className='text-[#878787] text-3xl mb-5'>Rainbow Event Group</h6>
          <p className='text-[#333333] text-2xl'>Beautiful & <strong> Unforgettable Times </strong></p>
        </div>
        <div className='listing-main'>
          <ul className='listing flex'>
            <li><a href='#' className='flex items-center'><Image className='mr-3' src={Vector} alt='Event' /> <strong> All </strong> Gallery </a></li>
            <li><a href='#' className='flex items-center'><Image className='mr-3' src={Vector2} alt='Event' /> <strong> Video </strong> Gallery </a></li>
            <li><a href='#' className='flex items-center'><Image className='mr-3' src={Vector3} alt='Event' /> <strong> Photo </strong> Gallery </a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  
  )
}

export default Contentevent