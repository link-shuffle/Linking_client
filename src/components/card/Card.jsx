import React, { useState } from "react";
import styled from "styled-components";

import "./card.scss";
import { baseUrl } from "../../config/base";

import Tag from "../tag/Tag";

function Card({ linkData }) {
  const {
    desc,
    link,
    meta_desc,
    meta_imgUrl,
    meta_title,
    read_status,
    tag,
    link_id
  } = linkData;

  const [readStatus, setReadStatus] = useState(read_status);

  const toggleReadStatus = async () => {
    await setReadStatus(readStatus ? 0 : 1);
    await fetch(`${baseUrl}/link/${link_id}/readchange`, {
      method: "POST"
    });
  };
  return (
    <a className="card" href={link} target="_blank" onClick={toggleReadStatus}>
      <div className="card__read-state-container">
        <ReadState
          className="card__read-state"
          readStatus={readStatus}
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
  background: ${({ readStatus }) => (readStatus ? "" : "#0091ff")};
`;

export default Card;
