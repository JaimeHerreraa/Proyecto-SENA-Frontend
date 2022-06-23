import React from "react";
import "./HomePage.css";

function Card() {
  return (
    <div className="card">
      <h3 className="name">Herrera Pedido</h3>
      <p className="state">
        <strong>Estado:</strong> Pendiente{" "}
        <img
          alt="pending icon"
          className="state--icon"
          src="./images/circle-solid-24-orange.png"
        />
      </p>
      <p className="date">
        <strong>Fecha:</strong> 16/06/2022
      </p>
      <p className="description">
        <strong>Descripcion:</strong> 100 Tarjetas de visita y 2 Estandartes.
      </p>
    </div>
  );
}

export default Card;
