import React, { useContext } from "react";
import { SidebarContext } from "../../MyContext";
import { MenuBtnIcon } from "../../iconSVG";

import "./navbar.scss";

const NavBar = ({ className }) => {
  const { hidden, toggleSidebar } = useContext(SidebarContext);

  const openSidebar = () => {
    console.log(hidden);
    toggleSidebar(false);
  };

  return (
    <div className={className}>
      <button className="navbar__sidebar-btn" onClick={openSidebar}>
        <MenuBtnIcon fill="#333" />
      </button>
    </div>
  );
};

export default NavBar;
