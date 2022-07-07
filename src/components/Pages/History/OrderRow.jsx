import React from "react";
import "./History.css";

function OrderRow({ last_name, cost, task_date, state }) {
  return (
    <div className="order--row">
      <div className="history--column column-id border-top">
        {last_name} Pedido
      </div>
      <div className="history--column border-top">{cost}</div>
      <div className="history--column border-top">{task_date}</div>
      <div className="history--column column-state border-top">{state}</div>
    </div>
  );
}

export default OrderRow;
