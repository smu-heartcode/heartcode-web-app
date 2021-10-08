import Layout from "../components/Layout";

import Hero from "../components/Home/Hero";
import Carousel from "../components/Carousel/Carousel";
import Block from "../components/Home/Block";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <Carousel />  
      <div className="p-28 mt-20 bg-gray-100">
        <Block title="Our Story" />
        <Block title="Our Mission" />
        <Block title="Our Vision" />
      </div>
    </Layout>
  );
};

export default Home;
