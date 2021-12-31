import React from "react";
import Image from "next/image";
import NKW from "/public/static/MrNg.png";
import CDC from "/public/static/CDC_Logo.png";

const Sponsors: React.FC = () => {
  const partners = [
    {
      name: "Mr Ng Kai Wa",
      image: NKW,
      intro: "Chairman and CEO of InnoMedia Pte Ltd and Co-Founder/Independent Director of Creative Technology Ltd",
      description: "Mr Ng Kai Wa actively supports Project HeartCode not only by contributing to the project funds, but also through actively involving himself by advising each year's project leaders in the planning of the project",
    },
    {
      name: "Central Singapore CDC",
      image: CDC,
      intro: "Partner of the Singapore Management University Centre for Social Responsibility",
      description: "Central Singapore Community Development Counsil recognised Project HeartCode 2019's contribution to the Central Singapore district by involving beneficiaries from the district, and provided additional funding to support Project Heartcode in its efforts to upscale and improve the project",
    },
  ];

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-2">
        {partners.map((partner) => (
          <div key={partner.name} className="grid sm:grid-cols-3">
            <div className="relative w-full max-h-full sm:h-auto">
              <Image className="rounded-full" src={partner.image} />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-xl font-bold pb-1">{partner.name}</p>
              <p className="mb-4 text-sm font-bold pr-4 text-gray-500">{partner.intro}</p>
              <p className="mb-4 text-sm tracking-wide">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sponsors;
