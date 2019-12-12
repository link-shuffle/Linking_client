import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { List, Button } from "semantic-ui-react";

import { baseUrl } from "../../config/base";

const User = ({ user, callback }) => {
  const [followStatus, setFollowStatus] = useState(user.following_status);
  const userName = sessionStorage.getItem("name");

  const toggleFollower = e => {
    e.stopPropagation();
    const targetUser = e.target.dataset.targetuser;
    const type = followStatus === 1 ? "delete" : "add";
    const method = followStatus === 1 ? "GET" : "POST";
    const url = `${baseUrl}/following/${userName}/${targetUser}/${type}`;
    fetch(url, { method });

    setFollowStatus(followStatus ? 0 : 1);
  };

  return (
    <List.Item data-targetUser={user.display_name} onClick={callback}>
      <AlignedItem>
        <List.Icon name="github" size="large" />
        <List.Content>
          <div>{user.display_name}</div>
          <div>{user.name}</div>
        </List.Content>
        
        <Button
          data-targetUser={user.display_name}
          onClick={toggleFollower}
          color={followStatus ? "blue" : ""}
        >
          {followStatus ? "팔로잉" : "팔로우"}
        </Button>
      </AlignedItem>
    </List.Item>
  );
};

const AlignedItem = styled.div`
  display: flex;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
  & > div {
    flex: 1;
  }
`;

export default User;
