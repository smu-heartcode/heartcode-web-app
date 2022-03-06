import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import partnerData from "../components/Data/partnerData";

interface partnerProps {}

const Partners: React.FC<partnerProps> = () => {
  const { partners, pastPartners } = partnerData;

  return (
    <Layout pageTitle="Partners">
      <div className="min-h-screen px-6 md:px-20 pt-20 md:pt-28 pb-8 bg-milk">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-medium tracking-tight text-pink-400 sm:text-5xl sm:leading-none">
          Our{" "}
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-pink-500" />
            <span className="relative inline-block">Partners</span>
          </span>
        </h2>
        <p className="text-md md:text-lg pt-4 pb-8">
          These are our current partners supporting Project HeartCode.
        </p>

        <div className="grid gap-10 lg:grid-cols-2 text-center md:text-left">
          {partners.map((partner) => (
            <div key={partner.name} className="grid sm:grid-cols-3">
              <div className="relative w-full max-h-full sm:h-auto">
                <Image
                  className="rounded-full bg-white"
                  alt="Logo of partner/beneficiary"
                  src={`/static/${partner.image}`}
                  height="250"
                  width="250"
                />
              </div>
              <div className="flex flex-col justify-center mt-1 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-xl font-medium pb-1">{partner.name}</p>
                <p className="mb-2 text-sm font-medium pr-4 text-gray-500">
                  {partner.intro}
                </p>
                <p className="mb-4 text-sm tracking-wide">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="max-w-lg mb-6 font-sans text-3xl font-medium tracking-tight text-pink-400 sm:text-5xl sm:leading-none mt-12">
          Past{" "}
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-pink-500" />
            <span className="relative inline-block">Partners</span>
          </span>
        </h2>
        <p className="text-md md:text-lg pt-4 pb-8">
          Partners that have worked with and supported Project HeartCode in the past.
        </p>

        <div className="grid gap-10 lg:grid-cols-2 text-center">
          {pastPartners.map((partner) => (
            <div key={partner.name} className="grid sm:grid-cols-3">
              <div className="relative w-full max-h-full sm:h-auto">
                <Image
                  className="rounded-full"
                  src={`/static/${partner.image}`}
                  alt="Logo of past partner/beneficiary"
                  height="250"
                  width="250"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-xl font-medium pb-1">{partner.name}</p>
                <p className="mb-4 text-sm font-medium pr-4 text-gray-500">
                  {partner.intro}
                </p>
                <p className="mb-4 text-sm tracking-wide">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
