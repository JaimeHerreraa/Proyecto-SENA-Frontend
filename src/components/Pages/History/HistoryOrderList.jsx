import React from "react";
import "./History.css";
import OrderRow from "./OrderRow";

function HistoryOrderList() {
  return (
    <div className="orders--container">
      <div className="history--row">
        <div className="history--column column-id">Pedido</div>
        <div className="history--column">Costo</div>
        <div className="history--column">Fecha</div>
        <div className="history--column column-state">Estado</div>
      </div>

      <OrderRow />
      <OrderRow />
      <OrderRow />
      <OrderRow />
    </div>
  );
}

export default HistoryOrderList;
