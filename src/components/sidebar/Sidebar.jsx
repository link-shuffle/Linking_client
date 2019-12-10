import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Icon, List, Label, Modal } from "semantic-ui-react";

import { FoldBtnIcon } from "../../iconSVG";
import { useMainContext } from "../../MyContext";
import { baseUrl } from "../../config/base";

import DirList from "../dir-list/DirList";

import "./sidebar.scss";

const Sidebar = () => {
  const userName = sessionStorage.getItem("name");
  const userImgUrl = sessionStorage.getItem("imgUrl");
  const [msgNumb, setMsgNumb] = useState("0");
  const [msgList, setMsgList] = useState([]);
  const [modalClose, setModalClose] = useState(false);

  const { isVisibleSidebar, toggleSidebar } = useMainContext();

  const closeSidebar = () => {
    toggleSidebar(true);
  };

  const toggleModal = e => {
    setModalClose(modalClose ? false : true);
  };

  const showMessageList = ({ messageList }) => {
    return messageList.map(message => {
      console.log(message);
      return (
        <List.Item>
          <List.Content>
            <List.Header>{message.message}</List.Header>
            <List.Description>{message.display_name}</List.Description>
          </List.Content>
          <List.Icon
            name="close"
            size="large"
            verticalAlign="middle"
            data-targetUser={message.sender}
            data-targetId={message.mail_id}
            onClick={sendReject}
          />
          <List.Icon
            name="check"
            size="large"
            verticalAlign="middle"
            data-targetUser={message.sender}
            data-targetId={message.mail_id}
            onClick={sendAccept}
          />
        </List.Item>
      );
    });
  };

  const sendReject = async e => {
    const msgId = e.currentTarget.dataset.targetid;
    const targetUser = e.currentTarget.dataset.targetuser;
    console.log(userName, targetUser);

    await fetch(`${baseUrl}/mail/${userName}/${targetUser}/1`, {
      method: "POST",
      body: JSON.stringify({ mail_id: msgId })
    });
    await fetch(`${baseUrl}/mail/${msgId}/delete`, {
      method: "GET"
    });
    const res = await fetch(`${baseUrl}/mail/${userName}/mailList`, {
      method: "GET"
    });
    const data = await res.json();
    console.log(msgList);
    setMsgList(data);
    toggleModal();
  };
  const sendAccept = async e => {
    const msgId = e.currentTarget.dataset.targetid;
    const targetUser = e.currentTarget.dataset.targetuser;
    await fetch(`${baseUrl}/mail/${userName}/${targetUser}/2`, {
      method: "POST",
      body: JSON.stringify({ mail_id: msgId })
    });
    await fetch(`${baseUrl}/mail/${msgId}/delete`, {
      method: "GET"
    });
    const res = await fetch(`${baseUrl}/mail/${userName}/mailList`, {
      method: "GET"
    });
    const data = await res.json();
    setMsgList(data);
    toggleModal();
  };

  useEffect(() => {
    fetch(`${baseUrl}/mail/${userName}/mailnumber`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => setMsgNumb(data.mailnumber));

    fetch(`${baseUrl}/mail/${userName}/mailList`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => setMsgList(data));
  }, []);

  return (
    <SidebarContainer isVisibleSidebar={isVisibleSidebar} className="sidebar">
      <div className="sidebar__navbar navbar">
        <div className="user-btn">
          <div className="user-btn__img">
            <img src={userImgUrl ? userImgUrl : ""} alt="user-profile" />
          </div>
          <div className="user-btn__title">{userName}</div>
        </div>
        <MsgDisplay onClick={toggleModal}>
          <Label color={msgNumb ? "" : "red"}>
            <Icon name="mail" />
            {msgNumb}
          </Label>
        </MsgDisplay>
        <button className="fold-btn" onClick={closeSidebar}>
          <FoldBtnIcon fill="#A8A8A8" />
        </button>
      </div>
      <div className="sidebar__directory">
        <DirList type="private" />
        <DirList type="shared" />
        <DirList type="public" />
      </div>
      <Modal
        size="tiny"
        closeOnEscape={false}
        closeOnDimmerClick={true}
        open={modalClose}
        onClose={toggleModal}
      >
        <Modal.Header>Message List</Modal.Header>
        <Modal.Content scrolling>
          <List divided relaxed>
            {showMessageList({ messageList: msgList })}
          </List>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={toggleModal}>Complete</Button>
        </Modal.Actions>
      </Modal>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: ${({ isVisibleSidebar }) => {
    return isVisibleSidebar ? "0px" : "240px";
  }}};
`;

const MsgDisplay = styled.div`
  cursor: pointer;
`;

export default Sidebar;
