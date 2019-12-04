import React, { useState } from "react";
import styled from "styled-components";
import { ExpandBtnIcon, SettingBtnIcon, ShareBtnIcon } from "../../iconSVG";
import "./directory.scss";

const Directory = ({ children, dirName }) => {
  const [expand, setExpand] = useState(false);
  const [reveal, setReveal] = useState(false);

  const rotateBtn = () => {
    setExpand(expand ? false : true);
  };

  const showOptionBtn = () => {
    setReveal(true);
  };
  const hideOptionBtn = () => {
    setReveal(false);
  };

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
              <ExpandBtnIcon />
            </ExpandBtn>
            <div>{dirName}</div>
          </div>
          <OptionBtnArea reveal={reveal} className="title-container__option">
            <button>
              <SettingBtnIcon />
            </button>
            <button>
              <ShareBtnIcon />
            </button>
          </OptionBtnArea>
        </div>
        <ul className="directory__sub-directory">{expand ? children : ""}</ul>
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

export default Directory;
