import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/sidebar/Sidebar";
import LinkList from "../../components/link-list/LinkList";
import { MainContext } from "../../MyContext";

import "./main.scss";

const Main = ({ match }) => {
  sessionStorage.setItem("name", "vincentj");

  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);
  const [linkData, setLinkData] = useState([]);
  const [copiedLink, setCopiedLink] = useState("");

  const toggleSidebar = isVisibleSidebar => {
    setIsVisibleSidebar(isVisibleSidebar);
  };

  const setLinkDataList = linkData => {
    setLinkData(linkData);
  };

  useEffect(() => {
    readFromClipboard();
  }, []);

  const readFromClipboard = async () => {
    console.log(localStorage);
    const link = await window.navigator.clipboard.readText();
    if (link) {
      await setCopiedLink(link);
    }
  };

  return (
    <div className="main">
      <MainContext.Provider
        value={{
          isVisibleSidebar,
          toggleSidebar,
          linkData,
          setLinkDataList,
          copiedLink
        }}
      >
        <Sidebar />
        <Layout className="contents">
          <LinkList className="link-list" />
        </Layout>
      </MainContext.Provider>
    </div>
  );
};

export default Main;
