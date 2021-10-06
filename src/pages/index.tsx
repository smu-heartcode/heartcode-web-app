import Layout from "../components/Layout";

import Hero from "../components/Home/Hero";
import Block from "../components/Home/Block";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <div className="p-28 mt-20 bg-gray-100">
        <Block title="Our Story" />
        <Block title="Our Mission" />
        <Block title="Our Vision" />
      </div>
    </Layout>
  );
};

export default Home;
