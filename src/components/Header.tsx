import React, { useState } from "react";
import Link from "next/link";

import Logo from "../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="flex items-center py-2 px-10 flex-wrap bg-white text-black">
        <div
          className="lg:text-xl py-2 inline-flex items-center font-bold"
        >
          <Link href="/">
            <img className="h-12" src={Logo.src} alt="SMU Project Heartcode" />
          </Link>
        </div>
        <button
          onClick={() => setShowNav(!showNav)}
          type="button"
          className="inline-flex p-3 text-black rounded-md transition duration-400 ease-in-out hover:bg-gray-300 lg:hidden ml-auto"
        >
          <GiHamburgerMenu />
        </button>
        <div className="w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto">
          <div
            className={
              "lg:inline-flex lg:flex-row lg:ml-auto flex flex-col " +
              (showNav ? "" : "hidden")
            }
          >
            <Link href="/partners">
              <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded transition duration-400 ease-in-out hover:bg-gray-300">
                Our Partners
              </a>
            </Link>

            {/* <Link href="/year">
              <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded transition duration-400 ease-in-out hover:bg-gray-300">
                Previous Runs
              </a>
            </Link> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
