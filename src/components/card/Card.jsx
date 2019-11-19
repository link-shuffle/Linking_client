import React from "react";
import Tag from "../tag/Tag";

function Card(props) {
  getMetaData({ url: props.url });
  return (
    <div className="card">
      {/* <img src={imageURL} alt="test" />
      <h2>{title}</h2>
      <p>{desc}</p>ㅇ
      <ul>
        {props.tags.map(tagName => (
          <li>
            <Tag name={tagName} />
          </li>
        ))}
      </ul> */}
    </div>
  );
}

const getMetaData = ({ url }) => {};

export default Card;
