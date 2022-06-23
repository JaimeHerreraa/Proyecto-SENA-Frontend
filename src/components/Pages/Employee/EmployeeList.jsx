import React from "react";
import EmployeeRow from "./EmployeeRow";
import "./Employee.css";

function EmployeeList() {
  return (
    <div className="employee--cards-container">
      <div className="employee--cards">
        <div className="row">
          <div className="column column-id">Identificacion</div>
          <div className="column">Nombre</div>
          <div className="column">Cargo</div>
          <div className="column">Salario</div>
          <div className="column column-phone">Telefono</div>
        </div>

        <EmployeeRow />
        <EmployeeRow />
        <EmployeeRow />
      </div>
    </div>
  );
}

export default EmployeeList;
