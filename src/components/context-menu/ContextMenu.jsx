import React, { useState } from "react";
import styled from "styled-components";
import "./context.scss";

const ContextMenu = ({ menuLocation, menuList }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisible = e => {
    e.stopPropagation();
    setIsVisible(isVisible ? false : true);
  };

  return (
    <ContextMenuContainer isVisible={isVisible} onClick={toggleVisible}>
      <ContextMenuBody className="context" menuLocation={menuLocation}>
        {() =>
          menuList.map(menuItem => (
            <div className="context_item">
              <div className="innerItem">{menuItem}</div>
            </div>
          ))
        }
      </ContextMenuBody>
    </ContextMenuContainer>
  );
};

const ContextMenuBody = styled.div`
  left: ${({ menuLocation }) => {
    const viewWidth = window.innerWidth;
    const menuX = parseInt(menuLocation.x);
    const contextWidth = 200;
    if (menuX + contextWidth > viewWidth) return viewWidth - contextWidth;
    return menuX;
  }}px;
  top: ${({ menuLocation }) => menuLocation.y}px;
`;

const ContextMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export default ContextMenu;
