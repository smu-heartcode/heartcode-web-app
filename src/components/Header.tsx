import React from "react";
import Link from "next/link";

import Logo from "/public/static/Logo.png";
import Menu from "./Menu/Menu";
import Image from "next/image";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <header className="fixed left-0 right-0 px-4 py-4 mx-auto md:px-24 lg:px-12 z-50 bg-milk">
        <div className=" flex items-center justify-between">
          <div>
            <Link href="/" passHref>
              <div className="w-1/4 flex justify-center items-center">
                <Image
                  className="cursor-pointer"
                  src={Logo}
                  alt="SMU Project Heartcode"
                />
              </div>
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
