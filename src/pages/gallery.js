import { useEffect, useState } from "react";
import Image from 'next/image';

import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";

import Vector from '../../public/images/Vector.svg';
import Vector2 from '../../public/images/Vector2.svg';
import Vector3 from '../../public/images/Vector3.svg';

import { fetchVideos } from "../api/file";

export default function Gallery() {
  const [videoList, setVideoList] = useState([]);

  const getVideos = async () => {
    try {
      const data = await fetchVideos();
      setVideoList(data?.files);
    } catch (error) {
      console.log("error while fetching videos =", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <main className={``}>
      <div className="">
        <Header />
        <div className="main-slider-part relative">
          <Banner />
        </div>
        {/* <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex"> */}
        <div className='listing-main'>
          <ul className='listing flex'>
            <li><a href='#' className='flex items-center'><Image className='mr-3' src={Vector} alt='Event' /> <strong> All </strong> Gallery </a></li>
            <li><a href='#' className='flex items-center'><Image className='mr-3' src={Vector2} alt='Event' /> <strong> Video </strong> Gallery </a></li>
            <li><a href='#' className='flex items-center'><Image className='mr-3' src={Vector3} alt='Event' /> <strong> Photo </strong> Gallery </a></li>
          </ul>
        </div>
        </div>
        <Footer />
      {/* </div> */}
    </main>
  );
}
