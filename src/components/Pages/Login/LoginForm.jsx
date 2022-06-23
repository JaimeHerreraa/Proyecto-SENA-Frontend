import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function LoginForm() {
  return (
    <div className="content--form">
      <div className="form--data">
        <div className="email-input">
          <img
            alt="email icon"
            src="./images/email-icon.png"
            className="input-icon"
          />
          <input
            type="text"
            placeholder="Ingresa correo electronico"
            className="input-field"
          />
        </div>
        <div className="password-input">
          <img
            alt="password icon"
            src="./images/locker-icon.png"
            className="input-icon"
          />
          <input
            type="password"
            placeholder="Ingresa contraseña"
            className="input-field"
          />
        </div>
        <button className="submit-button">
          <Link className="submit-link" to="/homepage">
            Iniciar Sesion
          </Link>
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
