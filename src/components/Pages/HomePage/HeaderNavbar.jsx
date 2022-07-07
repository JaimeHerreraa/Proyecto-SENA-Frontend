import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HeaderNavbar() {
  return (
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
  );
}

export default HeaderNavbar;
