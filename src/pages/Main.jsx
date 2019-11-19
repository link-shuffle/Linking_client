import React, { Component } from "react";
import Card from "../components/card/Card";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
      </div>
    );
  }
}

export default Main;
