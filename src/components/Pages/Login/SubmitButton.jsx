import React from "react";
import { Link } from "react-router-dom";
import validateUser from "../../../providers/LoginProvider";
import "./Login.css";

function SubmitButton({ email, password }) {
  return (
    <button
      className="submit-button"
      onClick={() => {
        validateUser(email, password);
      }}
    >
      <Link className="submit-link" to="#">
        Iniciar Sesion
      </Link>
    </button>
  );
}

export default SubmitButton;
