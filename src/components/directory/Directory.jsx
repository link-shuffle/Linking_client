import React, { useState, useContext } from "react";
import styled from "styled-components";

import { ExpandBtnIcon, SettingBtnIcon, ShareBtnIcon } from "../../iconSVG";
import { useMainContext } from "../../MyContext";
import { Button, Modal, Input, Icon, List } from "semantic-ui-react";

import { baseUrl } from "../../config/base";
import "./directory.scss";

const Directory = ({ dirName, dirId, index }) => {
  const userName = sessionStorage.getItem("name");

  const [expand, setExpand] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [subDirList, setSubDirList] = useState([]);
  const { setLinkDataList } = useMainContext();
  const [modalClose, setModalClose] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [targetUser, setTargetUser] = useState("");

  const toggleModal = e => {
    setModalClose(modalClose ? false : true);
  };

  const rotateBtn = e => {
    e.stopPropagation();
    setExpand(expand ? false : true);
    if (!expand) getSubDirList();
  };

  const getSubDirList = async () => {
    const response = await fetch(`${baseUrl}/directory/${userName}/${dirId}`, {
      method: "POST"
    });

    const data = await response.json();
    await setSubDirList(data);
  };

  const toggleOptionBtn = () => {
    setReveal(reveal ? false : true);
  };

  const handleClickTarget = async e => {
    const targetUser = e.currentTarget.dataset.targetuser;
    await fetch(`${baseUrl}/mail/${userName}/${targetUser}/0`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dir_id: dirId })
    });
    await toggleModal();
  };

  const handleSearch = async e => {
    const response = await fetch(
      `${baseUrl}/search/${userName}/${e.target.value}`,
      {
        method: "GET"
      }
    );
    const data = await response.json();
    setSearchResult(data);
  };

  const showUserList = ({ userList }) => {
    return userList.map(user => (
      <List.Item
        data-targetUser={user.display_name}
        onClick={handleClickTarget}
      >
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header>{user.display_name}</List.Header>
          <List.Description>{user.name}</List.Description>
        </List.Content>
        <List.Icon verticalAlign="middle">
          <Button>{() => (user.following_status ? "팔로잉" : "팔로우")}</Button>
        </List.Icon>
      </List.Item>
    ));
  };

  const getLinkData = async e => {
    e.stopPropagation();
    const response = await fetch(`${baseUrl}/link/${dirId}/read`, {
      method: "POST"
    });
    const data = await response.json();
    const dataObj = { dirName, dirId, linkList: data };
    setLinkDataList(dataObj);
  };

  const getSubDir = () =>
    expand ? (
      subDirList.length ? (
        expandDir(subDirList)
      ) : (
        <div className="directory__no-directory">No sub-directory</div>
      )
    ) : (
      ""
    );

  const expandDir = dirListArr => {
    return dirListArr.map(dirItem => (
      <Directory dirName={dirItem.name} dirId={dirItem.dir_id} />
    ));
  };

  return (
    <li className="directory-container" key={index}>
      <div className="directory">
        <div
          onMouseOver={toggleOptionBtn}
          onMouseOut={toggleOptionBtn}
          className="directory-conatiner title-container"
        >
          <div className="title-container__title" onClick={getLinkData}>
            <ExpandBtn expand={expand} onClick={rotateBtn}>
              <ExpandBtnIcon fill="#A8A8A8" />
            </ExpandBtn>
            <div>{dirName}</div>
          </div>
          <OptionBtnArea reveal={reveal} className="title-container__option">
            <button onClick={toggleModal}>
              <SettingBtnIcon fill="#797979" />
            </button>

            <button>
              <ShareBtnIcon fill="#797979" />
            </button>
          </OptionBtnArea>
        </div>
        <ul className="directory__sub-directory">{getSubDir()}</ul>
      </div>
      <Modal
        size="tiny"
        closeOnEscape={false}
        closeOnDimmerClick={true}
        open={modalClose}
        onClose={toggleModal}
      >
        <Modal.Header>
          Share with:
          <Input
            icon="search"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </Modal.Header>
        <Modal.Content scrolling>
          <List divided relaxed>
            {showUserList({ userList: searchResult })}
          </List>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={toggleModal}>Complete</Button>
        </Modal.Actions>
      </Modal>
    </li>
  );
};

const ExpandBtn = styled.button`
  & > svg {
    transform: ${({ expand }) => (expand ? "rotate(90deg)" : "rotate(0)")};
    transition: transform 100ms ease-out 0s;
  }
`;

const OptionBtnArea = styled.div`
  display: ${({ reveal }) => (reveal ? "flex" : "none")};
`;

export default Directory;
