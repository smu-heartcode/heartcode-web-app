import React from "react";
import Link from "next/link";

import Logo from "../assets/Logo.png";
import Menu from "./Menu/Menu";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <header className="fixed left-0 right-0 px-4 py-5 mx-auto md:px-24 lg:px-12 z-50">
        <div className=" flex items-center justify-between">
          <div>
            <Link href="/">
              <img
                className="h-12 cursor-pointer"
                src={Logo.src}
                alt="SMU Project Heartcode"
              />
            </Link>
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
