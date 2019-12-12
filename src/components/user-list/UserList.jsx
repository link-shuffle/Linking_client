import React from "react";
import { List } from "semantic-ui-react";

import User from "../user/User";

const UserList = ({ userList, callback }) => {
  return (
    <List>
      {userList.map(user => (
        <User user={user} callback={callback} />
      ))}
    </List>
  );
};

export default UserList;
