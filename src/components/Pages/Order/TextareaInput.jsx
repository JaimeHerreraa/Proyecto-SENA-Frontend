import React from "react";
import "./Order.css";

function TextareaInput({ setDescription }) {
  const onTextChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="form-group">
      <div className="input-group">
        <label className="input-label" htmlFor="description">
          Descripcion
        </label>
        <textarea
          id="description"
          rows="4"
          cols="50"
          className="text-area"
          onChange={onTextChange}
        ></textarea>
      </div>
    </div>
  );
}

export default TextareaInput;
