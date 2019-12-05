import React, { useContext } from "react";
import { SidebarContext } from "../../MyContext";

const NavBar = ({ className }) => {
  const { hidden, toggleSidebar } = useContext(SidebarContext);

  const openSidebar = () => {
    console.log(hidden);
    toggleSidebar(false);
  };
  return (
    <div className={className}>
      <button onClick={openSidebar}>open</button>
    </div>
  );
};

export default NavBar;
