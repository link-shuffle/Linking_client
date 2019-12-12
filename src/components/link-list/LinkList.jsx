import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Button, Modal, Form, Icon } from "semantic-ui-react";
import "./linklist.scss";

import { LinkPlusBtnIcon } from "../../iconSVG";
import { useMainContext } from "../../MyContext";
import { baseUrl } from "../../config/base";

import Card from "../card/Card";
import Tag from "../tag/Tag";

var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const LinkList = ({ className }) => {
  const regex = new RegExp(expression);
  const userName = sessionStorage.getItem("name");
  const [tags, setTags] = useState([]);
  const [modalClose, setModalClose] = useState(false);
  const [inputData, setInputData] = useState({});
  const [wrongUrl, setWrongUrl] = useState(false);
  const { linkData, setLinkDataList, copiedLink } = useMainContext();

  window.addEventListener("beforeunload", () => {
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
    setWrongUrl(false);
    if (e.target.dataset.type === "save") {
      console.log(inputData.url);
      if (!inputData.url || !inputData.url.match(regex)) {
        setWrongUrl(true);
        return;
      }
      saveLinkData();
    }
    setTags([]);
    setModalClose(modalClose ? false : true);
  };
  const resetTags = () => {
    setTags([]);
  };

  const resetWrongUrl = () => {
    setWrongUrl(false);
  };

  const saveLinkData = async () => {
    const newLinkData = {
      link: inputData.url,
      desc: inputData.description,
      tag: tags
    };
    const res = await fetch(
      `${baseUrl}/link/${userName}/${linkData.dirId}/saved`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLinkData)
      }
    );
    const data = await res.json();
    if ("msg" in data) {
      setWrongUrl(true);
      return;
    }
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

  const deleteTag = e => {
    const targetIndex = e.target.dataset.tagindex;
    console.log(typeof targetIndex);
    const filtered = tags.filter((tag, index) => index !== +targetIndex);
    console.log(filtered);
    setTags(filtered);
  };

  const getTagList = () =>
    tags.map((tag, index) => (
      <Tag name={tag}>
        <Icon name="cancel" data-tagindex={index} onClick={deleteTag}></Icon>
      </Tag>
    ));

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
              error={wrongUrl}
              onChange={handleInputText}
              onClick={resetWrongUrl}
            />
            <div className="wrong-url-msg">
              {wrongUrl ? "🙊 Oops! Wrong URL, Please type Correct URL" : ""}
            </div>
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
                  <Icon name="redo" />
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
