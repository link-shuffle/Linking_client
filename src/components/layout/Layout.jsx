import React from "react";
import NavBar from "../navbar/NavBar";

import "./layout.scss";

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="contents__container">
        <div className="white-layer">
          <NavBar className="contents__navbar navbar" />
          <div className="contents__directory-title">
            <h1>Python</h1>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
