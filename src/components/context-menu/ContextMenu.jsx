import React from "react";
import styled from "styled-components";
import "./context.scss";

const ContextMenu = ({ className, menuLocation }) => {
  return (
    <ContextMenuBody className={className} menuLocation={menuLocation}>
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
    </ContextMenuBody>
  );
};

const ContextMenuBody = styled.div`
  left: ${({ menuLocation }) => menuLocation.x};
  top: ${({ menuLocation }) => menuLocation.y};
`;

export default ContextMenu;
