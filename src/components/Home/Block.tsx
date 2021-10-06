import React from "react";
import Icon from "../UI/Icon";

import { RiBook2Fill } from "react-icons/ri";

interface BlockProps {
  title: string
}

const Block: React.FC<BlockProps> = ({ title }) => {
  return (
    <div className="mb-24">
      <Icon from="from-pink-300" to="to-blue-300">
        <RiBook2Fill size={24} />
      </Icon>
      <h2 className="text-6xl font-bold my-8 text-green-600">{title}</h2>
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Block;
