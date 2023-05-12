import React from "react";
import Link from "next/link";
import Image from "next/image";
import Arrowcircle from "../../public/images/arrow-circle-right.svg";
import Logo from "../../public/images/logo.svg";

function Header() {
  return (
    <div>
      <nav className="uppercase">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center py-10 border-b-[1px] border-white">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href="/"
                    className="bg-gray-900 active link-nav text-white rounded-[10px] px-4 py-1 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    href="/gallery"
                    className="text-white link-nav rounded-[10px] px-4 py-1 text-sm font-medium"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link href="/" className="drop-link text-white mr-1">
                Contact
              </Link>
              <Image src={Arrowcircle} alt="Arrowcircle" />
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Team
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Calendar
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
