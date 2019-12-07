import React, { useEffect, useContext, useState } from "react";

import Directory from "../directory/Directory";
import ContextMenu from "../context-menu/ContextMenu";
import { FoldBtnIcon, PlusBtnIcon } from "../../iconSVG";
import { SidebarContext } from "../../MyContext";

import styled from "styled-components";

import "./sidebar.scss";

const Sidebar = () => {
  const { hidden, toggleSidebar } = useContext(SidebarContext);
  const [menuState, setMenuState] = useState(false);
  const [menuLocation, setMenuLocation] = useState({ x: 0, y: 0 });

  const testDir = [
    { name: "Programming", dirTree: [] },
    { name: "Game", dirTree: [] },
    {
      name: "Videos3123123123123123",
      dirTree: [
        {
          name: "Test",
          dirTree: [
            { name: "Videos3123123123123123", dirTree: [] },
            {
              name: "232423423",
              dirTree: [
                { name: "12312321312312", dirTree: [] },
                { name: "12451241234123123", dirTree: [] }
              ]
            }
          ]
        },
        {
          name: "Test",
          dirTree: [
            { name: "Videos3123123123123123", dirTree: [] },
            {
              name: "232423423",
              dirTree: [
                { name: "12312321312312", dirTree: [] },
                { name: "12451241234123123", dirTree: [] }
              ]
            }
          ]
        },
        {
          name: "Test",
          dirTree: [
            { name: "Videos3123123123123123", dirTree: [] },
            {
              name: "232423423",
              dirTree: [
                { name: "12312321312312", dirTree: [] },
                { name: "12451241234123123", dirTree: [] }
              ]
            }
          ]
        },
        { name: "test2", dirTree: [] }
      ]
    }
  ];

  useEffect(() => {
    getInitDirList();
  }, []);

  const getInitDirList = async () => {
    const response = await fetch(
      "http://106.10.39.188:1024/directory/김정연/public",
      {
        method: "POST",
        redirect: "follow"
      }
    );

    console.log(response.json());
  };

  const toggleContextMenu = e => {
    setMenuLocation({ x: `${e.pageX}px`, y: `${e.pageY}px` });
    setMenuState(menuState ? false : true);
  };

  const removeContextMenu = e => {
    setMenuState(false);
  };

  const closeSidebar = () => {
    toggleSidebar(true);
  };
  const expandDir = dirList => {
    return dirList.map(dirItem => (
      <Directory dirName={dirItem.name}>{expandDir(dirItem.dirTree)}</Directory>
    ));
  };

  return (
    <SidebarContainer hidden={hidden} className="sidebar">
      <div className="sidebar__navbar navbar">
        <div className="user-btn" onClick={toggleContextMenu}>
          <div className="user-btn__img"></div>
          <div className="user-btn__title">User Name</div>
          <ContextContainer menuState={menuState} onClick={removeContextMenu}>
            <ContextMenu
              className="user-context"
              menuState={menuState}
              menuLocation={menuLocation}
            >
              <div className="context_item">
                <div className="inner_item">Settings</div>
              </div>
              <div className="context_item">
                <div className="inner_item">Help</div>
              </div>
              <div className="context_hr"></div>
              <div className="context_item">
                <div className="inner_item">Log out</div>
              </div>
            </ContextMenu>
          </ContextContainer>
        </div>
        <button className="fold-btn" onClick={closeSidebar}>
          <FoldBtnIcon fill="#A8A8A8" />
        </button>
      </div>

      <div className="sidebar__directory directory">
        <div className="directory__type">
          <div>Private</div>
          <button>
            <PlusBtnIcon fill="#A8A8A8" />
          </button>
        </div>
        <div className="directory__list">
          <ul>{expandDir(testDir)}</ul>
        </div>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: ${({ hidden }) => {
    return hidden ? "0px" : "240px";
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
