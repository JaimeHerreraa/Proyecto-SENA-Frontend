import React from "react";
import "./Order.css";

function OrderCard() {
  return (
    <div className="order--card">
      <h3 className="order-card--title">Herrera Pedido</h3>
      <p className="order-state">
        <strong>Estado:</strong>&nbsp;Pendiente&nbsp;
        <img
          alt="pending icon"
          className="order--state-icon"
          src="./images/circle-solid-24-orange.png"
        />
      </p>
      <p>
        <strong>Fecha:</strong> 21/06/2022
      </p>
      <p>
        <strong>Valor:</strong> 200.000
      </p>
      <p>
        <strong>Descripcion:</strong> 100 Tarjetas de visita y 2 estandarte.
      </p>
      <div className="card--buttons">
        <img alt="okay icon" src="./images/check-circle-regular-24.png" />
        <img alt="delete icon" src="./images/x-circle-regular-24.png" />
        <img alt="cancel icon" src="./images/no-entry-regular-24.png" />
      </div>
    </div>
  );
}

export default OrderCard;
