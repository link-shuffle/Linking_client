import React from "react";
import "./editform.scss";
const EditForm = ({ type }) => {
  return (
    <div className="edit-form">
      <div className="edit-form__input">
        <input type="text" />
      </div>
      <div className="edit-form__submit-btn">
        <button type="button">{type}</button>
      </div>
    </div>
  );
};

export default EditForm;
