import React, { useContext } from "react";
import { OrderContent } from "./Order";
import { updateTaskComplete } from "../../../providers/TaskProvider";
import { updateTaskCancel } from "../../../providers/TaskProvider";
import { deleteTask } from "../../../providers/TaskProvider";
import "./Order.css";

function CardButtons({ id }) {
  const { setUpdate } = useContext(OrderContent);

  const onCompleteClick = () => {
    updateTaskComplete(id);
    setUpdate("progress");
  };

  const onCancelClick = () => {
    updateTaskCancel(id);
    setUpdate("progress");
  };

  const onDeleteClick = () => {
    deleteTask(id);
    setUpdate("progress");
  };
  return (
    <div className="card--buttons">
      <img
        alt="okay icon"
        src="./images/check-circle-regular-24.png"
        onClick={onCompleteClick}
      />
      <img
        alt="delete icon"
        src="./images/x-circle-regular-24.png"
        onClick={onDeleteClick}
      />
      <img
        alt="cancel icon"
        src="./images/no-entry-regular-24.png"
        onClick={onCancelClick}
      />
    </div>
  );
}

export default CardButtons;
