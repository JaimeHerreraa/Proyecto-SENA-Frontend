import React, { createContext } from "react";
import "./Order.css";
import OrderLayout from "./OrderLayout";
import LoadingSpin from "../../LoadingSpin/LoadingSpin";
import useRequestDelay from "../../../hooks/useRequestDelay";
import { getPendingTask } from "../../../providers/TaskProvider";
import useUpdate from "../../../hooks/useUpdate";

export const OrderContent = createContext();

function Order() {
  const { loading, data, setData } = useRequestDelay(getPendingTask);
  const { setUpdate, update } = useUpdate();

  if (loading === "loading") {
    return <LoadingSpin />;
  } else {
    return (
      <OrderContent.Provider value={{ data, setUpdate, update, setData }}>
        <OrderLayout />
      </OrderContent.Provider>
    );
  }
}

export default Order;
