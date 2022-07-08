import { EmployeeContext } from "./EmployeeForm";
import "./Employee.css";
import "../Order/Order.css";
import React, { useContext } from "react";

function IDGroup() {
  const { setId, setSalary } = useContext(EmployeeContext);

  const onIdChange = (event) => {
    setId(event.target.value);
  };

  const onSalaryChange = (event) => {
    setSalary(event.target.value);
  };
  return (
    <div className="form-group">
      <div className="input-group">
        <label className="input-label" htmlFor="ID">
          Identificacion
        </label>
        <input
          type="number"
          id="ID"
          required
          className="input"
          onChange={onIdChange}
        />
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="salary">
          Salario
        </label>
        <input
          type="number"
          id="salary"
          required
          className="input"
          onChange={onSalaryChange}
        />
      </div>
    </div>
  );
}

export default IDGroup;
