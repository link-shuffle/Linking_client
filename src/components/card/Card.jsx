import React from "react";
import Tag from "../tag/Tag";

import "./card.scss";

import styled from "styled-components";

function Card({ linkData }) {
  const {
    desc,
    link,
    meta_desc,
    meta_imgUrl,
    meta_title,
    read_status,
    tag
  } = linkData;
  console.log(linkData);
  return (
    <a className="card" href={link} target="_blank">
      <div className="card__read-state-container">
        <ReadState
          className="card__read-state"
          readStatus={read_status}
        ></ReadState>
      </div>
      <div className="card__link-data">
        <div className="card__meta-container">
          <div className="card__meta-text">
            <div className="card__meta-title">
              <h2>{meta_title}</h2>
            </div>
            <p className="card__meta-desc">{meta_desc}</p>
          </div>
          <div className="card__meta-img">
            <img
              src={meta_imgUrl ? meta_imgUrl : ""}
              title={meta_title}
              alt="link thumbnail image"
            />
          </div>
        </div>
        <div className="card__link-url">
          <div>{link}</div>
        </div>
        <div className="card__user-desc">{desc}</div>
        <ul className="card__tag-list">
          {tag.map((tagName, index) => (
            <li className="card__tag" key={index}>
              <Tag name={tagName} />
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
const ReadState = styled.div`
  background: ${({ readStatus }) => (readStatus ? "#0091ff" : "")};
`;

export default Card;
