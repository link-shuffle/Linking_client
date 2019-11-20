import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div>
        <a href="">Sidebar</a>
      </div>
      <ul>
        <li>
          <Link to={"/Search"}>Search</Link>
        </li>
        <li>
          <a href="">Setting</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
