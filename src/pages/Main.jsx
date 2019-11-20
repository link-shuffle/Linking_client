import React from "react";
import Card from "../components/card/Card";
import Layout from "../components/layout/Layout";

function Main() {
  return (
    <div className="main">
      <Layout>
        <h1>Python</h1>
        <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
      </Layout>
    </div>
  );
}

export default Main;
