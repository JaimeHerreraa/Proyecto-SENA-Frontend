import React from "react";
import HomeHeader from "../HomePage/HomeHeader";
import OrderForm from "./OrderForm";
import OrderCardList from "./OrderCardList";
import HomeFooter from "../HomePage/HomeFooter";
import "./Order.css";

function OrderLayout() {
  return (
    <div className="order--container">
      <HomeHeader />
      <div className="order--content">
        <OrderForm />
        <OrderCardList />
      </div>
      <HomeFooter />
    </div>
  );
}

export default OrderLayout;
