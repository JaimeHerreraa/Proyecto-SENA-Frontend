import React from "react";
import "./Employee.css";

function EmployeeRow() {
  return (
    <div className="employee-row">
      <div className="column column-id border-top">1143340797</div>
      <div className="column border-top">Jaime Herrera</div>
      <div className="column border-top">Desarrollador</div>
      <div className="column border-top">2.000.000</div>
      <div className="column border-top column-phone">
        3205750249 &nbsp;
        <img
          src="./images/x-circle-regular-24.png"
          alt="delete icon"
          className="icon"
        />
      </div>
    </div>
  );
}

export default EmployeeRow;
