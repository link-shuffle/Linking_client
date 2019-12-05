import React from "react";
import NavBar from "../navbar/NavBar";

import "./layout.scss";

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="contents__container">
        <NavBar className="contents__navbar navbar" />
      </div>
      {children}
    </div>
  );
};

export default Layout;
