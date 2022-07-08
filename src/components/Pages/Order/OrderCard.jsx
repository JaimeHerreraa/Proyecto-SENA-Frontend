import React from "react";
import CardButtons from "./CardButtons";
import "./Order.css";

function OrderCard({ last_name, state, task_date, cost, info, id }) {
  return (
    <div className="order--card">
      <h3 className="order-card--title"> {last_name} Pedido</h3>
      <p className="order-state">
        <strong>Estado:</strong>&nbsp;{state}&nbsp;
        <img
          alt="pending icon"
          className="order--state-icon"
          src="./images/circle-solid-24-orange.png"
        />
      </p>
      <p>
        <strong>Fecha:</strong> {task_date}
      </p>
      <p>
        <strong>Valor:</strong> {cost}
      </p>
      <p>
        <strong>Descripcion:</strong> {info}
      </p>
      <CardButtons id={id} />
    </div>
  );
}

export default OrderCard;
