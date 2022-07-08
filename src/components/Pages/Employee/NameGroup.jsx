import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeForm";
import "./Employee.css";
import "../Order/Order.css";

function NameGroup() {
  const { setFirstName, setLastName } = useContext(EmployeeContext);

  const onNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div className="form-group">
      <div className="input-group">
        <label className="input-label" htmlFor="name">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          required
          className="input"
          onChange={onNameChange}
        />
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="lastname">
          Apellido
        </label>
        <input
          type="text"
          id="lastname"
          required
          className="input"
          onChange={onLastNameChange}
        />
      </div>
    </div>
  );
}

export default NameGroup;
