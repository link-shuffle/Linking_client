import React, { useContext } from "react";
import { SidebarContext } from "../../MyContext";
import { MenuBtnIcon } from "../../iconSVG";

import "./navbar.scss";

const NavBar = ({ className }) => {
  const { hidden, toggleSidebar } = useContext(SidebarContext);

  const openSidebar = () => {
    toggleSidebar(false);
  };

  return (
    <div className={className}>
      <button className="navbar__sidebar-btn" onClick={openSidebar}>
        <MenuBtnIcon fill="#333" />
      </button>
      <div className="navbar__directory-title">
        <h1>Python</h1>
      </div>
    </div>
  );
};

export default NavBar;
