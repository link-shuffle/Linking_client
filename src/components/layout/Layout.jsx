import React from "react";
import NavBar from "../navbar/NavBar";

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <NavBar className={`navbar-${className}`} />
      {children}
    </div>
  );
};

export default Layout;
