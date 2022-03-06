import React from "react";
import Image from "next/image";
import SMU from "/public/static/smu.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiTwotoneMail,
} from "react-icons/ai";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="grid gap-8 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2">
            <div className="w-1/2 md:w-1/3 lg:w-1/4">
              <Image src={SMU} className="inline-flex items-center" alt="SMU Logo" />
            </div>
            <div className="mt-6 lg:max-w-sm tracking-wide">
              <p className="text-xs md:text-sm pb-1">
                SMU School of Computing and Information Systems
              </p>
              <p className="text-xs md:text-sm">
                SMU Centre for Social Responsibility (C4SR)
              </p>
              <p className="mt-4 text-xs md:text-sm text-gray-800">
                Singapore Management University <br />
                80 Stamford Road <br />
                Singapore 178902
              </p>
            </div>
          </div>
          <div>
            <div className="-mt-3 md:mt-0 text-sm pb-1 font-semibold tracking-wide text-gray-900">
              Social
            </div>
            <p className="text-sm text-gray-600">
              Find us on the following social media platforms
            </p>
            <div className="-ml-1 flex items-center mt-1 space-x-2">
              <a
                href="https://www.instagram.com/smuheartcode/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 transition-colors duration-300 hover:text-pink-400"
              >
                <AiFillInstagram size={30} />
              </a>
              <a
                href="https://www.facebook.com/SMUProjectHeartCode/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 transition-colors duration-300 hover:text-pink-400"
              >
                <AiFillFacebook size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/smu-project-heartcode/about/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 transition-colors duration-300 hover:text-pink-400"
              >
                <AiFillLinkedin size={30} />
              </a>
            </div>
            <div className="text-sm font-semibold tracking-wide text-gray-900 mt-5 md:mt-8">
              Contact Us
            </div>
            <p className="text-sm text-gray-600 flex items-center mt-1">
              <AiTwotoneMail size={20} className="inline mr-2" />
              <span className="inline-block">
                Get in touch with us via
                <a
                  href="mailto:ellipsis@sa.smu.edu.sg?subject=Project Heartcode"
                  className="ml-1 inline transition-colors duration-300 hover:text-pink-400"
                >
                  ellipsis@sa.smu.edu.sg
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-xs md:text-sm text-gray-600">
            © Copyright {new Date().getFullYear()} Singapore Management
            University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
