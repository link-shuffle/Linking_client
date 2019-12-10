import React, { useState, useEffect } from "react";
import "./dir-list.scss";

import { PlusBtnIcon } from "../../iconSVG";
import { Button, Modal, Form, Grid } from "semantic-ui-react";

import { baseUrl } from "../../config/base";

import Directory from "../directory/Directory";

const DirList = ({ type }) => {
  const userName = sessionStorage.getItem("name");
  const [modalClose, setModalClose] = useState(false);
  const [name, setName] = useState({});

  const [dirList, setDirList] = useState([]);

  useEffect(() => {
    let url = `${baseUrl}/directory/${userName}/${type}`;
    if (type === "shared")
      url = `${baseUrl}/directory/${userName}/show/${type}`;

    fetch(url, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => setDirList(data));
  }, []);

  const expandDir = dirItemList => {
    return dirItemList.map((dirItem, index) => (
      <Directory dirName={dirItem.name} dirId={dirItem.dir_id} index={index} />
    ));
  };

  const plusBtn = type => {
    if (type === "private")
      return (
        <button className="plus-btn" onClick={toggleModal}>
          <PlusBtnIcon fill="#A8A8A8" />
        </button>
      );
  };

  const handleInputText = e => {
    const value = e.target.value;
    setName(value);
  };

  const toggleModal = e => {
    if (e.target.dataset.type === "save") {
      addNewDir();
    }
    setModalClose(modalClose ? false : true);
  };

  const addNewDir = async () => {
    await fetch(`${baseUrl}/directory/${userName}/0/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });

    const res = await fetch(`${baseUrl}/directory/${userName}/private`, {
      method: "POST"
    });
    const data = await res.json();
    setDirList(data);
  };

  return (
    <div className="dir-list">
      <div className="dir-list__type">
        <div>{type}</div>
        {plusBtn(type)}
      </div>
      <div className="dir-list__list">
        <ul>{expandDir(dirList)}</ul>
      </div>

      <Modal
        size="tiny"
        closeOnEscape="false"
        closeOnDimmerClick="true"
        open={modalClose}
        onClose={toggleModal}
      >
        <Modal.Content>
          <Grid columns="equal">
            <Grid.Column width={10}>
              <Form>
                <Form.Input
                  fluid
                  placeholder="Directory Name"
                  id="dirName"
                  onChange={handleInputText}
                />
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Button content="Save" data-type="save" onClick={toggleModal} />
            </Grid.Column>
          </Grid>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default DirList;
