import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import yearData from "../../components/Years/yearData";

import Layout from "../../components/Layout";

interface YearProps {}

const Year: NextPage<YearProps> = () => {
  const router = useRouter();
  const { year } = router.query;

  const { description, orgComm, projects } = yearData[String(year)] 

  return (
    <Layout pageTitle={`${year} HeartCode Run`}>
      <div className="min-h-screen px-20 py-24 bg-milk">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-pink-400 sm:text-5xl sm:leading-none">
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-yellow-500" />
            <span className="relative inline-block">{year}</span>
          </span>{" "}
          HeartCode Run
        </h2>
      </div>
    </Layout>
  );
};

export default Year;

export async function getStaticPaths() {
  const paths = Object.keys(yearData).map((p) => ({ params: { year: p } }));
  return { paths, fallback: false };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
