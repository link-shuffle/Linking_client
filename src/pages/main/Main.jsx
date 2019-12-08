import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/sidebar/Sidebar";

import LinkList from "../../components/link-list/LinkList";
import { SidebarContext } from "../../MyContext";

import "./main.scss";

const Main = ({ match }) => {
  const [hidden, setHidden] = useState(false);
  const [linkData, setLinkData] = useState([]);
  const toggleSidebar = hidden => {
    setHidden(hidden);
  };

  const setLinkDataList = linkData => {
    setLinkData(linkData);
  };

  useEffect(() => {
    readFromClipboard();
  }, []);

  const readFromClipboard = async () => {
    const response = await navigator.clipboard.readText();
  };

  return (
    <div className="main">
      <SidebarContext.Provider
        value={{ hidden, toggleSidebar, linkData, setLinkDataList }}
      >
        <Sidebar />
        <Layout className="contents">
          <LinkList className="link-list" />
        </Layout>
      </SidebarContext.Provider>
    </div>
  );
};

export default Main;
