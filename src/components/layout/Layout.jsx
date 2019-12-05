import React from "react";
import NavBar from "../navbar/NavBar";

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <NavBar className={`${className}-navbar`} />
      {children}
    </div>
  );
};

export default Layout;
