import React, { useContext } from "react";
import { SidebarContext } from "../../MyContext";
import { MenuBtnIcon } from "../../iconSVG";

import styled from "styled-components";

import "./navbar.scss";

const NavBar = ({ className }) => {
  const { hidden, toggleSidebar, linkData } = useContext(SidebarContext);

  const openSidebar = () => {
    toggleSidebar(false);
  };

  return (
    <div className={className}>
      <SidebarBtn
        className="navbar__sidebar-btn"
        hidden={hidden}
        onClick={openSidebar}
      >
        <MenuBtnIcon fill="#333" />
      </SidebarBtn>
      <div className="navbar__directory-title">
        <h1>{linkData.dirName}</h1>
      </div>
    </div>
  );
};
const SidebarBtn = styled.button`
  display: ${({ hidden }) => (hidden ? "block" : "none")};
`;

export default NavBar;
