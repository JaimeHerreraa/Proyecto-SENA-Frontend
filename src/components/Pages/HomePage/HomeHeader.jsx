import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomeHeader() {
  return (
    <div className="header">
      <div className="header--container">
        <div className="company">
          <div className="icon--card">
            <img
              className="app--icon"
              src="./images/app-dark-icon.png"
              alt="App logo"
            />
          </div>
          <strong className="company--text">Ibrand-Ink</strong>
        </div>

        <div className="navbar">
          <ul className="list">
            <li className="link">
              <Link to="/homepage" className="link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/order" className="link">
                Pedidos
              </Link>
            </li>
            <li>
              <Link to="/employee" className="link">
                Empleados
              </Link>
            </li>
            <li>
              <Link to="/history" className="link">
                Historial
              </Link>
            </li>
          </ul>
        </div>

        <div className="header--options">
          <img
            className="options--icon"
            src="./images/github-light.png"
            alt="code icon"
          />
          <img
            className="options--icon"
            src="./images/logout-light.png"
            alt="Logout Icon"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
