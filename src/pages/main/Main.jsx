import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/sidebar/Sidebar";

import LinkList from "../../components/link-list/LinkList";
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
          <LinkList className="link-list" />
        </Layout>
      </SidebarContext.Provider>
    </div>
  );
};

export default Main;
