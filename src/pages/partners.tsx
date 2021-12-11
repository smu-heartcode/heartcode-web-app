import React from "react";
import Layout from "../components/Layout";
import Sponsors from "../components/Partners/Sponsors";

interface partnerProps {}

const Partners: React.FC<partnerProps> = () => {
  return (
    <Layout pageTitle="Partners">
      <div className="min-h-screen px-24 py-12 bg-milk">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-pink-400 sm:text-5xl sm:leading-none">
          Our{" "}
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-pink-500" />
            <span className="relative inline-block">Partners</span>
          </span>
        </h2>
        <p className="font-bold text-lg pt-4 pb-8">
          These are our partners that have helped support Project Heartcode.
        </p>

        <div>
          <Sponsors />
        </div>

      </div>
    </Layout>
  );
};

export default Partners;
