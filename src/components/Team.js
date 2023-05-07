import React from 'react'
import Image from 'next/image';
import Teamimg from '../../public/images/team-member.png';


function Contentevent() {
  return (

    <>
    <div className='team flex'>
      <div className='content-part w-[53%]'>
    <h2 className='mb-0'>Our Team</h2>
        <p className='pt-2 text-2xl pr-24 text-[#333333]'>Lorem ipsum dollor site amet the best 
consectuer adipiscing elites sed diam
nonummy nibh euismod tincidunt ut
laoreet dolore magna aliquam erat
volutpat insignia the consectuer
adipiscing elit.</p>
      </div>
      <div className='images-part flex w-[47%] justify-between mb-6'>
        <div className='member-part'>
        <Image src={Teamimg} alt='Event' />
        </div>
        <div className='member-part'>
        <Image src={Teamimg} alt='Event' />
        </div>
      </div>
    </div>
    <div className='images-part flex justify-between'>
        <div className='member-part'>
        <Image src={Teamimg} alt='Event' />
        </div>
        <div className='member-part'>
        <Image src={Teamimg} alt='Event' />
        </div>
        <div className='member-part'>
        <Image src={Teamimg} alt='Event' />
        </div>
        <div className='member-part'>
        <Image src={Teamimg} alt='Event' />
        </div>
      </div>
    </>
  
  )
}

export default Contentevent