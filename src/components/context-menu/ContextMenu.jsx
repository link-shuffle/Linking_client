import React, { useState } from "react";
import styled from "styled-components";
import "./context.scss";

const ContextMenu = ({ menuLocation, children }) => {
  return (
    <ContextMenuBody className="context" menuLocation={menuLocation}>
      {children}
    </ContextMenuBody>
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

export default ContextMenu;
