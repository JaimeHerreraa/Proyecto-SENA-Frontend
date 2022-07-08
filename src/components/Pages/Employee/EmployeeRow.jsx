import React from "react";
import { deleteEmployee } from "../../../providers/EmployeeProvider";
import "./Employee.css";

function EmployeeRow({
  first_name,
  last_name,
  salary,
  job,
  phone,
  id,
  setUpdate,
}) {
  const onDeleteClick = () => {
    deleteEmployee(id);
    setUpdate("progress");
  };
  return (
    <div className="employee-row">
      <div className="column column-id border-top">{id}</div>
      <div className="column border-top">
        {first_name} {last_name}
      </div>
      <div className="column border-top">{job}</div>
      <div className="column border-top">{salary}</div>
      <div className="column border-top column-phone">
        {phone} &nbsp;
        <img
          src="./images/x-circle-regular-24.png"
          alt="delete icon"
          className="icon"
          onClick={onDeleteClick}
        />
      </div>
    </div>
  );
}

export default EmployeeRow;
