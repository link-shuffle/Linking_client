import React, { useState } from "react";
import styled from "styled-components";

import { ExpandBtnIcon, SettingBtnIcon, ShareBtnIcon } from "../../iconSVG";
import ContextMenu from "../context-menu/ContextMenu";

import "./directory.scss";

const Directory = ({ children, dirName }) => {
  const [expand, setExpand] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [menuLocation, setMenuLocation] = useState({ x: 0, y: 0 });

  const rotateBtn = () => {
    setExpand(expand ? false : true);
  };

  const showOptionBtn = () => {
    setReveal(true);
  };

  const hideOptionBtn = () => {
    setReveal(false);
  };

  const toggleContextMenu = e => {
    setMenuLocation({ x: `${e.pageX}px`, y: `${e.pageY}px` });
    setMenuState(menuState ? false : true);
  };

  const removeContextMenu = e => {
    setMenuState(false);
  };

  const getSubDir = () =>
    expand ? (
      children.length ? (
        children
      ) : (
        <div className="directory__no-directory">No sub-directory</div>
      )
    ) : (
      ""
    );

  return (
    <li className="directory-container">
      <div className="directory">
        <div
          onMouseOver={showOptionBtn}
          onMouseOut={hideOptionBtn}
          className="directory-conatiner title-container"
        >
          <div className="title-container__title">
            <ExpandBtn expand={expand} onClick={rotateBtn}>
              <ExpandBtnIcon fill="#A8A8A8" />
            </ExpandBtn>
            <div>{dirName}</div>
          </div>
          <OptionBtnArea reveal={reveal} className="title-container__option">
            <button>
              <SettingBtnIcon fill="#797979" />
            </button>

            <button onClick={toggleContextMenu}>
              <ShareBtnIcon fill="#797979" />
              <ContextContainer
                menuState={menuState}
                onClick={removeContextMenu}
              >
                <ContextMenu
                  className="directory-context"
                  menuLocation={menuLocation}
                  menuState={menuState}
                >
                  <div className="context_item">
                    <div className="inner_item">New Directory</div>
                  </div>
                  <div className="context_item">
                    <div className="inner_item">Rename</div>
                  </div>
                  <div className="context_item">
                    <div className="inner_item">Duplicate</div>
                  </div>
                  <div className="context_item">
                    <div className="inner_item">Remove</div>
                  </div>
                  <div className="context_hr"></div>
                  <div className="context_item">
                    <div className="inner_item">Move to</div>
                  </div>
                </ContextMenu>
              </ContextContainer>
            </button>
          </OptionBtnArea>
        </div>
        <ul className="directory__sub-directory">{getSubDir()}</ul>
      </div>
    </li>
  );
};

const ExpandBtn = styled.button`
  & > svg {
    transform: ${({ expand }) => (expand ? "rotate(90deg)" : "rotate(0)")};
    transition: transform 100ms ease-out 0s;
  }
`;

const OptionBtnArea = styled.div`
  display: ${({ reveal }) => (reveal ? "flex" : "none")};
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

export default Directory;
