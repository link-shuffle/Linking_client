import React from "react";
import Tag from "../tag/Tag";

function Card(props) {
  const { title, desc, imgUrl } = getMetaData(props.url);
  return (
    <div className="card">
      <img src={imgUrl} title={title} alt="link thumbnail image" />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ul>
        {props.tags.map((tagName, index) => (
          <li key={index}>
            <Tag name={tagName} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const getMetaData = url => {
  return { title: "testTitle", desc: "testDesc", imgUrl: "testUrl" };
};

export default Card;
