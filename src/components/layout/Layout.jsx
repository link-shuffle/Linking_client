import React from "react";
import NavBar from "../navbar/NavBar";

function Layout(props) {
  return (
    <div className="layout">
      <NavBar />
      {props.children}
    </div>
  );
}

export default Layout;
