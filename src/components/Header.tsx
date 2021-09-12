import React from "react";
import NavLink from "./NavLink";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <NavLink href="/" label="SMU Heartcode" />
      <nav>
        <NavLink href="/partners" label="Partners" />
        <NavLink href="/past" label="Past Runs" /> 
      </nav>
    </header>
  );
};

export default Header;
