import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Button, Modal, Form, Icon } from "semantic-ui-react";
import "./linklist.scss";

import { LinkPlusBtnIcon } from "../../iconSVG";
import { useMainContext } from "../../MyContext";
import { baseUrl } from "../../config/base";

import Card from "../card/Card";
import Tag from "../tag/Tag";

const LinkList = ({ className }) => {
  const userName = sessionStorage.getItem("name");
  const [tags, setTags] = useState([]);
  const [modalClose, setModalClose] = useState(false);
  const [inputData, setInputData] = useState({});
  const { linkData, setLinkDataList, copiedLink } = useMainContext();

  window.addEventListener("beforeunload", event => {
    if (linkData.dirId)
      localStorage.setItem("lastLinkData", JSON.stringify(linkData));
  });

  const handleChange = e => {
    if (e.target.value.includes(",")) {
      const tagName = e.target.value.replace(",", "").replace(/\s/g, "");
      e.target.value = "";
      if (tagName && tags.length < 4) setTags([...tags, tagName]);
    }
  };

  const handleInputText = e => {
    const type = e.target.id;
    const value = e.target.value;
    setInputData({ ...inputData, [type]: value });
  };

  const toggleModal = e => {
    if (e.target.dataset.type === "save") {
      saveLinkData();
    }
    setTags([]);
    setModalClose(modalClose ? false : true);
  };
  const resetTags = () => {
    setTags([]);
  };

  const saveLinkData = async () => {
    const newLinkData = {
      link: inputData.url,
      desc: inputData.description,
      tag: tags
    };
    await fetch(`${baseUrl}/link/${userName}/${linkData.dirId}/saved`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLinkData)
    });
    await getLinkData();
  };

  const getLinkData = async () => {
    const response = await fetch(`${baseUrl}/link/${linkData.dirId}/read`, {
      method: "POST"
    });
    const data = await response.json();
    const dataObj = {
      dirName: linkData.dirName,
      dirId: linkData.dirId,
      linkList: data
    };
    await setLinkDataList(dataObj);
  };

  const getTagList = () => tags.map(tag => <Tag name={tag} />);

  const getLinkList = () => {
    const linkList = linkData.linkList ? linkData.linkList : [];
    return linkList.map((link, index) => (
      <li key={index}>
        <Card linkData={link} />
      </li>
    ));
  };

  return (
    <div className={className}>
      <ul className="link-list__container">{getLinkList()}</ul>
      <button className="new-link-btn" onClick={toggleModal}>
        <LinkPlusBtnIcon fill="#fff" />
      </button>

      <Modal
        size="tiny"
        open={modalClose}
        closeOnEscape="false"
        closeOnDimmerClick="true"
        onClose={toggleModal}
      >
        <Modal.Header>Save New Link</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              fluid
              label="Link URL"
              placeholder="Link URL"
              id="url"
              onChange={handleInputText}
            />
            <Form.Input
              fluid
              label="Tags"
              placeholder="Tags"
              onChange={handleChange}
            />
            <div className="tag-display">
              <div className="tag-display__taglist">{getTagList()}</div>
              <div className="tag-display__reset-btn">
                <Button icon onClick={resetTags}>
                  <Icon name="delete" />
                </Button>
              </div>
            </div>
            <Form.TextArea
              label="Description"
              placeholder="Notes about Link"
              onChange={handleInputText}
              id="description"
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={toggleModal} negative content="Discard" />
          <Button
            onClick={toggleModal}
            positive
            data-type="save"
            content="Save"
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default LinkList;
