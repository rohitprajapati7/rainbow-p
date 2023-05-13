import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import call from "../../public/images/call.png";
import email from "../../public/images/email.png";
import location from "../../public/images/location.png";

function Footer() {
  return (
    <>
      <footer className="footer-main pt-14 pb-6 bg-[#333333]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex">
          <div className="logo text-center w-[100%] pb-12">
            <Link href="/">
              <Image className="mx-auto w-[120px]" src={Logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center items-center bg-shadowBlack">
            <Image src={location} className="" />
            <div>
              <p className="text-yellow text-xl">100 highland ave,</p>
              <p className="font-bold text-xl text-white">California, United State</p>
            </div>
          </div>
          <div className="flex justify-center items-center ml-[160px] bg-shadowBlack">
            <Image src={email} />
            <p className="text-yellow text-xl">rainboweventsus@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-shadowBlack mt-[50px] w-[600px] ml-auto mr-auto">
            <Image src={call} width={54} height={55}/>
            <p className="text-xl font-bold text-white">+91 9925899992, +91 9081999955</p>
            <br/>
            <p className="text-xl font-bold text-white">+1 2016474666</p>
        </div>
      </footer>
      <footer>
        
      </footer>
    </>
  );
}

export default Footer;
