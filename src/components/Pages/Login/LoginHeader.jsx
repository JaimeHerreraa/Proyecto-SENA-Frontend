import React from "react";
import "./Login.css";

function LoginHeader() {
  return (
    <header className="content--header">
      <div className="icon-card">
        <img
          alt="Ibrand-Ink Icon"
          src="./images/app-dark-icon.png"
          className="header--image"
        />
      </div>
      <div className="text--container">
        <p className="header--text">
          Ingresa correctamente tus datos para acceder al aplicativo.
        </p>
      </div>
    </header>
  );
}

export default LoginHeader;
