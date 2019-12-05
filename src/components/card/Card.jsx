import React from "react";
import Tag from "../tag/Tag";

import "./card.scss";

import styled from "styled-components";

function Card({ url, tags }) {
  const { title, desc, imgUrl } = getMetaData(url);

  return (
    <div className="card">
      <div className="card__read-state-container">
        <ReadState className="card__read-state"></ReadState>
      </div>
      <div className="card__link-data">
        <div className="card__meta-container">
          <div className="card__meta-text">
            <div className="card__meta-title">
              <h2>{title}</h2>
            </div>
            <p className="card__meta-desc">{desc}</p>
          </div>
          <div className="card__meta-img">
            <img src={imgUrl} title={title} alt="link thumbnail image" />
          </div>
        </div>
        <div className="card__link-url">
          <div>{url}</div>
        </div>
        <div className="card__user-desc">hello world</div>
        <ul className="card__tag-list">
          {tags.map((tagName, index) => (
            <li className="card__tag" key={index}>
              <Tag name={tagName} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const getMetaData = url => {
  return { title: "testTitle", desc: "testDesc", imgUrl: "testUrl" };
};

const ReadState = styled.div`
  background: #0091ff;
`;

export default Card;
