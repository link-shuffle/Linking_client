import React, { useState } from "react";
import styled from "styled-components";
import { baseUrl } from "../../config/base";
import "./social.scss";
import { Link } from "react-router-dom";
import { Icon, Dropdown, Input, List, Button } from "semantic-ui-react";

function Social() {
  return (
    <div className="social">
      <div className="social-navbar_container">
        <div className="social-navbar">
          <div className="social-navbar__back-btn">
            <Link to={"/"}>
              <Icon name="arrow left"></Icon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
