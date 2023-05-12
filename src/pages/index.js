import { useEffect, useState } from "react";

import Form from "../components/Form";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallBanner from "../components/SmallBanner";
import ContentEvent from "../components/ContentEvent";
import RainbowEventGroup from "../components/RainbowEventGroup";

import { fetchVideos } from "../api/file";

export default function Home() {
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

          <Form />
        </div>
        <SmallBanner />
        <div className="main-event py-6">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex">
            <ContentEvent />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex">
          <RainbowEventGroup />
        </div>
        <div className="team-section">
          <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-8 pb-16 ">
            <Team />
          </div>
        </div>

        <Footer />
        <div>
          {videoList.length > 0 &&
            videoList.map((res) => (
              <div className="text-red-500" key={res?.id}>
                <h1 className="text-red-600">{res.name}</h1>
                <video
                  src={`https://drive.google.com/uc?export=download&id=${res?.id}`}
                  width={250}
                  height={200}
                  controls
                ></video>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
