import React from "react";

import Directory from "../directory/Directory";

import Layout from "../layout/Layout";
import "./sidebar.scss";

const Sidebar = () => {
  const testDir = [
    { name: "Programming", dirTree: [] },
    { name: "Game", dirTree: [] },
    {
      name: "Videos3123123123123123",
      dirTree: [
        {
          name: "Test",
          dirTree: [
            { name: "Videos3123123123123123", dirTree: [] },
            {
              name: "232423423",
              dirTree: [
                { name: "12312321312312", dirTree: [] },
                { name: "12451241234123123", dirTree: [] }
              ]
            }
          ]
        },
        { name: "test2", dirTree: [] }
      ]
    }
  ];

  const expandDir = dirList => {
    return dirList.map(dirItem => (
      <Directory dirName={dirItem.name}>{expandDir(dirItem.dirTree)}</Directory>
    ));
  };

  return (
    <div className="sidebar">
      <Layout className="directory-list">
        <ul>{expandDir(testDir)}</ul>
      </Layout>
    </div>
  );
};

export default Sidebar;
