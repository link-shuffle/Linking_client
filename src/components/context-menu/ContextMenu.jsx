import React from "react";
import styled from "styled-components";
import "./context.scss";

const ContextMenu = ({ className, menuLocation, children }) => {
  return (
    <ContextMenuBody
      className={className + " context"}
      menuLocation={menuLocation}
    >
      {children}
    </ContextMenuBody>
  );
};

const ContextMenuBody = styled.div`
  left: ${({ menuLocation }) => menuLocation.x};
  top: ${({ menuLocation }) => menuLocation.y};
`;

export default ContextMenu;
