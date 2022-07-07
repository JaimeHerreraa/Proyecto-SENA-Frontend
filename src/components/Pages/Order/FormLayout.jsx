import React from "react";
import NameGroup from "./NameGroup";
import DateGroup from "./DateGroup";
import SubmitButton from "./SubmitButton";
import TextareaInput from "./TextareaInput";
import "./Order.css";

function FormLayout({
  setName,
  setLastName,
  setValue,
  setDate,
  setDescription,
  post,
}) {
  return (
    <div className="form">
      <h2 className="form--title">Pedido</h2>
      <NameGroup setName={setName} setLastName={setLastName} />
      <DateGroup setValue={setValue} setDate={setDate} />
      <TextareaInput setDescription={setDescription} />
      <SubmitButton post={post} />
    </div>
  );
}
export default FormLayout;
