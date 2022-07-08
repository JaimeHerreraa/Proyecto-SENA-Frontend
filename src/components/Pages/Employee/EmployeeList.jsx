import React from "react";
import "./Employee.css";
import ListData from "./ListData";

function EmployeeList({ data, setData, update, setUpdate }) {
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
        <ListData
          data={data}
          setData={setData}
          update={update}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
}

export default EmployeeList;
