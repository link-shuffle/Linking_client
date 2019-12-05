import React from "react";

import Card from "../card/Card";
import "./linklist.scss";
import { LinkPlusBtnIcon } from "../../iconSVG";

const LinkList = ({ className }) => {
  return (
    <div className={className}>
      <ul className="link-list__container">
        <li>
          <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
        </li>
        <li>
          <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
        </li>
        <li>
          <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
        </li>
        <li>
          <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
        </li>
        <li>
          <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
        </li>
        <li>
          <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
        </li>
        <li>
          <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
        </li>
        <li>
          <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
        </li>
        <li>
          <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
        </li>
        <li>
          <Card url="https://ogp.me" tags={["abc", "def", "dsdsd"]} />
        </li>
      </ul>
      <button className="new-link-btn">
        <LinkPlusBtnIcon fill="#fff" />
      </button>
    </div>
  );
};

export default LinkList;
