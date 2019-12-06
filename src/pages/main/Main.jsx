import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    getInitDirList();
    readFromClipboard();
  }, []);

  const getInitDirList = async () => {
    const response = await fetch(
      "http://106.10.39.188:1024/directory/김정연/public",
      {
        method: "POST",
        redirect: "follow"
      }
    );
    console.log(response);
  };

  const readFromClipboard = async () => {
    const response = await navigator.clipboard.readText();
    console.log(response);
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
