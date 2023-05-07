import Form from "../components/Form";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Smallbanner from "../components/Smallbanner";
import Contentevent from "../components/Contentevent";
import Rainboweventgroup from "../components/Rainboweventgroup";
import Team from "../components/Team";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main
      className={``}
    >
      <div className="">
        <Header/>
        <div className="main-slider-part relative">
        <Banner />
        
        <Form/>
       
        </div>
        <Smallbanner />
        <div className="main-event py-6">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex">
            <Contentevent />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex">
        <Rainboweventgroup />
      </div>
      <div className="team-section">
        <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-8 pb-16 ">
          <Team />
        </div>
      </div>
      <Footer />
      </div>
    </main>
  )
}
