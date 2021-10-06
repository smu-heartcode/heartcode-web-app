import React from "react";

interface IconProps {
  from: string;
  to: string;
}

const Icon: React.FC<IconProps> = ({ from, to, children }) => {
  return (
    <div
      className={`w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 ${from} ${to}`}
    >
      {children}
    </div>
  );
};

export default Icon;
