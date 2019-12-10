import React from "react";
import { useMainContext } from "../../MyContext";
import { MenuBtnIcon } from "../../iconSVG";

import { Icon } from "semantic-ui-react";

import styled from "styled-components";

import "./navbar.scss";

const NavBar = ({ className }) => {
  const { isVisibleSidebar, toggleSidebar, linkData } = useMainContext();

  const openSidebar = () => {
    toggleSidebar(false);
  };

  return (
    <div className={className}>
      <SidebarBtn
        className="navbar__sidebar-btn"
        isVisibleSidebar={isVisibleSidebar}
        onClick={openSidebar}
      >
        <MenuBtnIcon fill="#333" />
      </SidebarBtn>
      <div className="navbar__directory-title">
        <h1>{linkData.dirName}</h1>
      </div>
      <div className="navbar__search-icon">
        <a href="/search">
          <Icon name="search" />
        </a>
      </div>
    </div>
  );
};
const SidebarBtn = styled.button`
  display: ${({ isVisibleSidebar }) => (isVisibleSidebar ? "block" : "none")};
`;

export default NavBar;
