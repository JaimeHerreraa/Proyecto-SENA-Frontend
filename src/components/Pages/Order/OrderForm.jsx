import React, { useContext } from "react";
import useFormData from "../../../hooks/useFormData";
import "./Order.css";
import { postTask } from "../../../providers/TaskProvider";
import FormLayout from "./FormLayout";
import { OrderContent } from "./Order";

function OrderForm() {
  const {
    name,
    lastName,
    date,
    value,
    description,
    setName,
    setLastName,
    setValue,
    setDate,
    setDescription,
  } = useFormData();

  const { setUpdate } = useContext(OrderContent);

  const post = () => {
    postTask(name, lastName, description, value, date);
    setUpdate("progress");
  };

  return (
    <FormLayout
      setName={setName}
      setLastName={setLastName}
      setValue={setValue}
      setDate={setDate}
      setDescription={setDescription}
      post={post}
    />
  );
}

export default OrderForm;
