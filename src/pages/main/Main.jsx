import React, { useState } from "react";
import Card from "../../components/card/Card";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/sidebar/Sidebar";

import { SidebarContext } from "../../MyContext";

import "./main.scss";

const Main = () => {
  const [hidden, setHidden] = useState(false);

  const toggleSidebar = hidden => {
    setHidden(hidden);
  };

  return (
    <div className="main">
      <SidebarContext.Provider value={{ hidden, toggleSidebar }}>
        <Sidebar />
        <Layout className="contents">
          <h1>Python</h1>
          <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
        </Layout>
      </SidebarContext.Provider>
    </div>
  );
};

export default Main;
