import React from "react";
import "./History.css";

function OrderRow() {
  return (
    <div className="order--row">
      <div className="history--column column-id border-top">Herrera Pedido</div>
      <div className="history--column border-top">1.500.000</div>
      <div className="history--column border-top">22/06/2022</div>
      <div className="history--column column-state border-top">Pendiente</div>
    </div>
  );
}

export default OrderRow;
