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
    readFromClipboard();
  }, []);

  const readFromClipboard = async () => {
    const response = await navigator.clipboard.readText();
    console.log(response);
    // .then(result => {
    //   console.log("Successfully retrieved text from clipboard", result);
    //   return Promise.resolve(result);
    // })
    // .catch(err => {
    //   console.log("Error! read text from clipbaord", err);
    // });
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
