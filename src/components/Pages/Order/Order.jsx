import React, { useState, useEffect } from "react";
import "./Order.css";
import HomeHeader from "../HomePage/HomeHeader";
import OrderForm from "./OrderForm";
import LoadingSpin from "../../LoadingSpin/LoadingSpin";
import OrderCardList from "./OrderCardList";
import HomeFooter from "../HomePage/HomeFooter";

function Order() {
  const [loading, setLoading] = useState(true);

  const delay = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    delay();
  }, []);

  if (loading === true) {
    return <LoadingSpin />;
  } else {
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
}

export default Order;
