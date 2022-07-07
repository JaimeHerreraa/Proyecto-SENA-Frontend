import React from "react";

import "./HomePage.css";

function Card({ first_name, info, last_name, state, task_date }) {
  return (
    <div className="card">
      <h3 className="name">
        {first_name} {last_name} Pedido
      </h3>
      <p className="state">
        <strong>Estado:</strong> {state}{" "}
        <img
          alt="pending icon"
          className="state--icon"
          src="./images/circle-solid-24-orange.png"
        />
      </p>
      <p className="date">
        <strong>Fecha:</strong> {task_date}
      </p>
      <p className="description">
        <strong>Descripcion:</strong> {info}
      </p>
    </div>
  );
}

export default Card;
