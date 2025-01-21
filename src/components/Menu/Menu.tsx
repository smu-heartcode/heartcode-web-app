import React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import yearData from "../Data/yearData"
import { IoMdHome, IoMdPeople, IoMdSchool } from "react-icons/io";
import { RiArticleFill } from "react-icons/ri"
import { BsBookmarkHeartFill } from "react-icons/bs";

const links = [
  { 
    id: 1, 
    name: "Home", 
    to: "/", 
    icon: <IoMdHome size={25} />, 
    color: "pink"
  },
  {
    id: 2,
    name: "Partners",
    to: "/partners",
    icon: <IoMdPeople size={25} />,
    color: "green",
  },
  {
    id: 3,
    name: "Blog",
    to: "/blog",
    icon: <RiArticleFill size={25} />,
    color: "yellow"
  },
];

const years = Object.keys(yearData).reverse();

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

const Menu: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.4, duration: 0.3 } }}
          className="fixed top-0 left-0 w-full min-h-screen bg-black bg-opacity-50"
          onClick={() => toggleOpen()}
        />
      ) : null}
      {isOpen && (
        <motion.div
          key="menu"
          className="h-screen fixed top-0 right-0 z-50 shadow-sm rounded-l-md bg-gradient-to-r bg-white"
          initial={{ width: 0 }}
          animate={{
            width: 300,
          }}
          exit={{
            width: 0,
            transition: { delay: 0.4, duration: 0.3 },
          }}
        >
          <motion.div
            className="flex flex-col h-full justify-start mt-8"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            <div className="text-sm pl-5 h-8 font-light tracking-wide text-gray-500">
              Menu
            </div>
            {links.map(({ id, name, to, icon, color }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                className={`hover:bg-${color}-200 transform duration-200 ease-in-out h-12 flex items-center justify-start`}
              >
                <Link href={to} passHref>
                  <div
                    className={`text-${color}-700 w-full pl-5 flex flex-row items-center cursor-pointer`}
                    onClick={() => toggleOpen()}
                  >
                    <div className="inline-flex items-center justify-center mr-3">
                      {icon}
                    </div>
                    <div className="text-sm font-medium">{name}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="text-sm pl-5 py-3 font-light tracking-wide text-gray-700">
              Previous Runs
            </div>
            {years.map((year) => (
              <motion.div
                key={year}
                variants={itemVariants}
                className={`hover:bg-blue-200 transform duration-200 ease-in-out h-12 flex items-center justify-start`}
              >
                <Link href={`/runs/${year}`} passHref>
                  <div
                    className={`text-blue-700 w-full pl-5 flex flex-row items-center cursor-pointer`}
                    onClick={() => toggleOpen()}
                  >
                    <div className="inline-flex items-center justify-center mr-4">
                      <BsBookmarkHeartFill size={20} />
                    </div>
                    <div className="text-sm font-medium">{year} Run</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
      <div className="relative pt-2 z-50">
        <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Menu;