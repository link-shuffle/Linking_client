import React from "react";
import styled from "styled-components";

const Tag = ({ name }) => {
  return (
    <TagItem className="tag">
      <div>{name}</div>
    </TagItem>
  );
};

const TagItem = styled.div`
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  margin-right: 4px;
  padding: 6px 12px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 0.9rem;
`;

export default Tag;
