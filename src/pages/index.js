import Form from "../components/Form";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallBanner from "../components/SmallBanner";
import ContentEvent from "../components/ContentEvent";
import VideoGallery from "../components/VideoGallery";
import RainbowEventGroup from "../components/RainbowEventGroup";

export default function Home() {
  return (
    <main>
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
        <div>
          {/* will ad it later */}
          {/* <VideoGallery /> */}
        </div>
        <div className="team-section">
          <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-8 pb-16 ">
            <Team />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
