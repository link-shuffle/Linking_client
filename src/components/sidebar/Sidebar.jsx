import React, { useEffect, useContext, useState } from "react";

import Directory from "../directory/Directory";
import ContextMenu from "../context-menu/ContextMenu";
import EditForm from "../edit-form/EditForm";
import { FoldBtnIcon, PlusBtnIcon } from "../../iconSVG";
import { SidebarContext } from "../../MyContext";

import styled from "styled-components";
import { baseUrl } from "../../config/base";

import "./sidebar.scss";

const Sidebar = () => {
  const [privateDir, setPrivateDir] = useState([]);
  const [publicDir, setPublicDir] = useState([]);
  const [sharedDir, setSharedDir] = useState([]);
  const [menuState, setMenuState] = useState(false);
  const [menuLocation, setMenuLocation] = useState({ x: 0, y: 0 });
  const [menuList, setMenuList] = useState([]);
  const { hidden, toggleSidebar } = useContext(SidebarContext);

  useEffect(() => {
    fetch(`${baseUrl}/directory/김정연/private`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => setPrivateDir(data));
    fetch(`${baseUrl}/directory/김정연/show/shared`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => setSharedDir(data));
    fetch(`${baseUrl}/directory/김정연/public`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => setPublicDir(data));
  }, []);

  const toggleContextMenu = e => {
    switch (e.currentTarget.className) {
      case "user-btn":
        setMenuList(["Settings", "Help", "Logout"]);
        break;
      case "plus-btn":
        setMenuList("edit-mode");
        break;
    }
    setMenuLocation({ x: `${e.pageX}`, y: `${e.pageY}` });
    setMenuState(menuState ? false : true);
  };

  const removeContextMenu = e => {
    setMenuState(false);
  };

  const closeSidebar = () => {
    toggleSidebar(true);
  };

  const getMenuList = () => {
    if (menuList === "edit-mode") return <EditForm type="Add" />;
    return menuList.map(menu => (
      <div className="context_item">
        <div className="inner_item">{menu}</div>
      </div>
    ));
  };

  const expandDir = dirList => {
    return dirList.map(dirItem => (
      <Directory dirName={dirItem.name} dirId={dirItem.dir_id} />
    ));
  };

  return (
    <SidebarContainer hidden={hidden} className="sidebar">
      <ContextContainer menuState={menuState} onClick={removeContextMenu}>
        <ContextMenu menuState={menuState} menuLocation={menuLocation}>
          {getMenuList()}
        </ContextMenu>
      </ContextContainer>
      <div className="sidebar__navbar navbar">
        <div className="user-btn" onClick={toggleContextMenu}>
          <div className="user-btn__img"></div>
          <div className="user-btn__title">User Name</div>
        </div>
        <button className="fold-btn" onClick={closeSidebar}>
          <FoldBtnIcon fill="#A8A8A8" />
        </button>
      </div>
      <div className="sidebar__directory directory">
        <div className="directory__type">
          <div>Private</div>
          <button className="plus-btn" onClick={toggleContextMenu}>
            <PlusBtnIcon fill="#A8A8A8" />
          </button>
        </div>
        <div className="directory__list">
          <ul>{expandDir(privateDir)}</ul>
        </div>
      </div>
      <div className="sidebar__directory directory">
        <div className="directory__type">
          <div>Shared</div>
        </div>
        <div className="directory__list">
          <ul>{expandDir(sharedDir)}</ul>
        </div>
      </div>
      <div className="sidebar__directory directory">
        <div className="directory__type">
          <div>Public</div>
        </div>
        <div className="directory__list">
          <ul>{expandDir(publicDir)}</ul>
        </div>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: ${({ hidden }) => {
    return hidden ? "0px" : "240px";
  }}};
  display: ${({ hidden }) => {
    return hidden ? "none" : "flex";
  }}};
`;

const ContextContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  display: ${({ menuState }) => (menuState ? "block" : "none")};
`;

export default Sidebar;
