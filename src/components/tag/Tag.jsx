import React from "react";

import "./tag.scss";

const Tag = ({ name, children }) => {
  return (
    <div className="tag">
      <div className="tag__title">{name}</div>
      <div className="tag__btn">{children}</div>
    </div>
  );
};

export default Tag;
