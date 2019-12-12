import React, { useState } from "react";
import styled from "styled-components";
import "./search.scss";
import { baseUrl } from "../../config/base";

import { Link } from "react-router-dom";
import { Icon, Dropdown, Input, List, Button } from "semantic-ui-react";

import Card from "../../components/card/Card";
import UserList from "../../components/user-list/UserList";

const options = [
  { key: "link", text: "Link", value: "link" },
  { key: "people", text: "People", value: "people" },
  { key: "tags", text: "Tags", value: "tags" }
];

const Search = () => {
  const userName = sessionStorage.getItem("name");
  const [inputKeyword, setInputKeyword] = useState("");
  const [inputType, setInputType] = useState("link");
  const [searchResultList, setSearchResultList] = useState([]);

  const updateValue = (e, { name, value }) => {
    const keyword = e.target.value;
    setInputKeyword(keyword);
    if (name === "type") setInputType(value);

    let urlType = "";
    switch (inputType) {
      case "link":
        urlType = "all";
        break;
      case "people":
        urlType = "";
        break;
      case "tags":
        urlType = "tag";
        break;
    }

    if (keyword) {
      const url = `${baseUrl}/search/${userName}/${keyword}/${urlType}`;
      fetch(url, {
        method: "GET"
      })
        .then(res => res.json())
        .then(data => setSearchResultList(data));
    }
  };

  const getSearchResult = () => {
    switch (inputType) {
      case "link":
        return (
          <ul className="link-list__container">
            {searchResultList.map((link, index) => (
              <li key={index}>
                <Card linkData={link} />
              </li>
            ))}
          </ul>
        );
      case "people":
        return (
          <div className="social-result">
            <UserList userList={searchResultList} />
          </div>
        );
      case "tags":
        return (
          <ul className="link-list__container">
            {searchResultList.map((link, index) => (
              <li key={index}>
                <Card linkData={link} />
              </li>
            ))}
          </ul>
        );
    }
  };

  return (
    <SearchPage className="search">
      <div className="search-navbar_container">
        <div className="search-navbar">
          <div className="search-navbar__back-btn">
            <Link to={"/"}>
              <Icon name="arrow left"></Icon>
            </Link>
          </div>
          <Input
            className="search-navbar__search-box"
            action={
              <Dropdown
                className="select-box"
                button
                basic
                floating
                onChange={updateValue}
                options={options}
                name="type"
                defaultValue="link"
              />
            }
            onChange={updateValue}
            icon="search"
            fluid
            name="keyword"
            iconPosition="left"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="search-result">
        {inputKeyword ? (
          searchResultList.length ? (
            getSearchResult()
          ) : (
            <Alert>
              <span role="img">🙅‍♂️</span>No Matched Result, Please search again!
            </Alert>
          )
        ) : (
          ""
        )}
      </div>
    </SearchPage>
  );
};

const SearchPage = styled.div`
  background: #f4f4f4;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Alert = styled.div`
  text-align: center;
  font-weight: bold;
  fone-size: 1.2rem;
`;
export default Search;
