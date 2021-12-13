import React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { IoMdHome, IoMdPeople, IoMdHeart } from "react-icons/io";

const links = [
  { id: 1, name: "Home", to: "/", icon: <IoMdHome size={25} />, color: "pink" },
  { id: 2, name: "Partners", to: "/partners", icon: <IoMdPeople size={25} />, color: "green" },
  { id: 3, name: "Previous Runs", to: "/year", icon: <IoMdHeart size={25} />, color: "blue"},
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
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
            className="flex flex-col h-1/3 justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            {links.map(({ id, name, to, icon, color }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                className={`hover:bg-${color}-200 transform duration-200 ease-in-out h-12 flex items-center justify-center`}
              >
                <Link href={to}>
                  <div className={`text-${color}-600 w-full pl-5 flex flex-row items-center cursor-pointer`}>
                    <div className="inline-flex items-center justify-center mr-3">{icon}</div>
                    <div className="text-sm font-bold">{name}</div>
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
