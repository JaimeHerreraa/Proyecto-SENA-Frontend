import React from "react";
import "./Order.css";

function SubmitButton({ post }) {
  return (
    <button className="submit" onClick={post}>
      Agregar
    </button>
  );
}

export default SubmitButton;
