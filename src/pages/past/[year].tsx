import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import yearData from "../../components/Years/yearData";

import Layout from "../../components/Layout";

interface YearProps {}

const Year: NextPage<YearProps> = () => {
  const router = useRouter();
  const { year } = router.query;

  // const validRun = yearData.find((p) => p.year === year);

  return <Layout pageTitle={`Heartcode ${year}`}>{year}</Layout>;
};

export default Year;
