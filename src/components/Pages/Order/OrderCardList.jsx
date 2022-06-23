import React from "react";
import "./Order.css";
import OrderCard from "./OrderCard";

function OrderCardList() {
  return (
    <div className="cards-container">
      <div className="cards">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default OrderCardList;
