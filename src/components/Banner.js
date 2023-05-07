import React from 'react'
import Image from 'next/image';
import Slider from "react-slick";

import BannerImage from '../../public/images/banner.png';
import BannerImage2 from '../../public/images/banner2f.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:false,
        loop: true,
        fade:true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='main-slider container relative z-10'>
        <Slider {...settings}>
      <div className='slider-item'>
      <Image className='min-w-full' src={BannerImage} alt='Banner' />
      </div>
      <div className='slider-item'>
      <Image className='min-w-full' src={BannerImage2} alt='Banner' />
      </div>

    </Slider>
    </div>
  )
}

export default Banner