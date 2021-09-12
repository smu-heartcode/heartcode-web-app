import React from "react";
import Link, { LinkProps } from "next/link";

interface NavLinkProps extends LinkProps {
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a>{label}</a>
    </Link>
  );
};

export default NavLink;
