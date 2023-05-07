import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Logo from '../../public/images/logo.svg';

function Footer() {
  return (

    <>
        <footer className='footer-main pt-14 pb-6 bg-[#333333]'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex'>
                <div className='logo text-center w-[100%] pb-12'>
                    <Link href="/"><Image className='mx-auto w-[120px]' src={Logo} alt='logo' /></Link>
                </div>

            </div>
        </footer>
    </>
  
  )
}

export default Footer