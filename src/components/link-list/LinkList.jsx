import React, { useContext } from "react";

import Card from "../card/Card";
import "./linklist.scss";
import { LinkPlusBtnIcon } from "../../iconSVG";
import { SidebarContext } from "../../MyContext";

const LinkList = ({ className }) => {
  const { linkData } = useContext(SidebarContext);

  const detectScroll = e => {
    const container = document.querySelector(".link-list__container");
    console.log(container.scrollTop);
  };

  const getLinkList = () => {
    const linkList = linkData.linkList ? linkData.linkList : [];
    return linkList.map(link => (
      <li>
        <Card linkData={link} />
      </li>
    ));
  };

  return (
    <div className={className}>
      <ul className="link-list__container" onScroll={detectScroll}>
        {getLinkList()}
      </ul>
      <button className="new-link-btn">
        <LinkPlusBtnIcon fill="#fff" />
      </button>
    </div>
  );
};

export default LinkList;
