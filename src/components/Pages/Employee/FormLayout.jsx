import React, { useContext } from "react";
import PhoneGroup from "./PhoneGroup.";
import NameGroup from "./NameGroup";
import IDGroup from "./IDGroup";
import { EmployeeContext } from "./EmployeeForm";
import "./Employee.css";

function FormLayout() {
  const { post } = useContext(EmployeeContext);
  return (
    <div className="form">
      <h2 className="form--title">Empleado</h2>
      <NameGroup />
      <PhoneGroup />
      <IDGroup />
      <button className="submit" onClick={post}>
        Agregar
      </button>
    </div>
  );
}

export default FormLayout;
