import { useState } from "react";
import { Tab } from "@headlessui/react";
import Layout from "../components/Layout";

import Hero from "../components/Home/Hero";
import Carousel from "../components/Carousel/Carousel";
import StoryImageBlock from "../components/Home/StoryImageBlock";
import MissionImageBlock from "../components/Home/MissionImageBlock";
import VisionImageBlock from "../components/Home/VisionImageBlock";

import Icon from "../components/UI/Icon";
import { RiBook2Fill, RiFlag2Fill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";

const classNames = (...classes: String[]) => {
  return classes.filter(Boolean).join(" ");
};

const Home = () => {
  let [categories] = useState({
    "Our Story": [
      {
        id: 1,
        title: "Story",
        icon: <RiBook2Fill size={24} />,
        image: <StoryImageBlock />,
        color: "green",
        description:
          "First started by two alumni of the Singapore Management University (SMU) School of Computing and Information Systems (SCIS), Zul Yang Guo Qiang and Manfred Loh Pei En, Project HeartCode was an idea born from identifying the need to provide equal opportunity for individuals to learn about technology and programming, especially among underprivileged youths in Singapore. Project HeartCode recognises the ever increasing difficulties faced by families from underprivileged backgrounds, especially when raising their children. Although basic education is relatively accessible in Singapore, students from lower income backgrounds might have less exposure to various extra-curricular education as compared to their more fortunate counterparts.",
      },
    ],
    "Our Mission": [
      {
        id: 2,
        title: "Mission",
        icon: <RiFlag2Fill size={24} />,
        image: <MissionImageBlock />,
        color: "blue",
        description:
          "To engage youths through interactive hands-on workshops and problem-based learning, where youths will be exposed to real social problems and be challenged to ideate and prototype their innovative IT solutions.",
      },
    ],
    "Our Vision": [
      {
        id: 3,
        title: "Vision",
        icon: <FaLightbulb size={24} />,
        image: <VisionImageBlock />,
        color: "yellow",
        description:
          "To maintain a long-term sustainable framework to equip underprivileged youths with basic programming skills through knowledge transfer and hence igniting their passion in information technology and closing the opportunity gap that faces the underprivileged community in Singapore.",
      },
    ],
  });

  return (
    <Layout pageTitle="Home">
      <Hero />
      <Carousel />
      <div className="px-7 xl:px-28 py-8 mt-20 bg-gray-100">
        <div className="lg:w-full px-2 -mt-14 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 max-w-3xl mx-auto space-x-1 bg-pink-100 rounded-xl">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm lg:text-xl leading-5 font-bold text-pink-500 rounded-lg",
                      "transition transform duration-200 ease-in-out",
                      selected
                        ? "bg-pink-200 shadow"
                        : "hover:bg-pink-200 hover:text-pink-700"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel key={idx} className={classNames("p-3")}>
                  {posts.map((post, i) => (
                    <div
                      key={i}
                      className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20"
                    >
                      <Icon
                        from={`from-${post.color}-${200}`}
                        to={`to-${post.color}-300`}
                      >
                        {post.icon}
                      </Icon>
                      <div className="grid gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-start md:pr-8 xl:pr-0 lg:max-w-lg">
                          <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-pink-400 sm:text-5xl sm:leading-none">
                              Our{" "}
                              <span className="relative px-1">
                                <div
                                  className={`absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-${post.color}-400`}
                                />
                                <span className="relative inline-block">
                                  {post.title}
                                </span>
                              </span>
                            </h2>
                            <p className="font-black leading-loose md:text-md">
                              {post.description}
                            </p>
                          </div>
                        </div>
                        <div className="hidden md:block">{post.image}</div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
