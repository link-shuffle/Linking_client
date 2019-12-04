import React from "react";
import Card from "../../components/card/Card";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/sidebar/Sidebar";

import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <Layout className="contents">
        <h1>Python</h1>
        <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
      </Layout>
    </div>
  );
};

export default Main;
