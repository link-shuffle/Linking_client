import React, { useState } from "react";
import styled from "styled-components";
import { SettingBtnIcon } from "../../iconSVG";
import "./card.scss";
import { baseUrl } from "../../config/base";
import ContextMenu from "../context-menu/ContextMenu";
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
  const [menuState, setMenuState] = useState(false);
  const [menuLocation, setMenuLocation] = useState({ x: 0, y: 0 });

  const removeContextMenu = e => {
    setMenuState(menuState ? false : true);
  };

  const toggleReadStatus = async e => {
    await setReadStatus(readStatus ? 0 : 1);
    await fetch(`${baseUrl}/link/${link_id}/readchange`, {
      method: "POST"
    });
  };

  const toggleContextMenu = e => {
    setMenuState(menuState ? false : true);
    setMenuLocation({ x: `${e.pageX}`, y: `${e.pageY}` });
  };

  return (
    <div className="card">
      <div className="card__read-state-container">
        <ReadState
          className="card__read-state"
          readStatus={readStatus}
        ></ReadState>
      </div>
      <div className="card__link-data">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleReadStatus}
        >
          <div className="card__data-container">
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
        <div className="card__menu-btn-container" onClick={toggleContextMenu}>
          <div className="card__menu-btn">
            <SettingBtnIcon fill="#999" />
            <ContextContainer menuState={menuState} onClick={removeContextMenu}>
              <ContextMenu
                className="directory-context"
                menuLocation={menuLocation}
                menuState={menuState}
              >
                <div className="context_item">
                  <div className="inner_item">Favorite</div>
                </div>
                <div className="context_item">
                  <div className="inner_item">Edit</div>
                </div>
                <div className="context_hr"></div>
                <div className="context_item">
                  <div className="inner_item">Remove</div>
                </div>
              </ContextMenu>
            </ContextContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
const ReadState = styled.div`
  background: ${({ readStatus }) => (readStatus ? "" : "#0091ff")};
`;

const ContextContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  display: ${({ menuState }) => (menuState ? "block" : "none")};
`;

export default Card;
