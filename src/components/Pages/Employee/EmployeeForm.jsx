import React from "react";
import "./Employee.css";

function EmployeeForm() {
  return (
    <div className="form">
      <h2 className="form--title">Empleado</h2>
      <div className="form-group">
        <div className="input-group">
          <label className="input-label" htmlFor="name">
            Nombre
          </label>
          <input type="text" id="name" required className="input" />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="lastname">
            Apellido
          </label>
          <input type="text" id="lastname" required className="input" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <label className="input-label" htmlFor="ID">
            Identificacion
          </label>
          <input type="number" id="ID" required className="input" />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="salary">
            Salario
          </label>
          <input type="number" id="salary" required className="input" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <label className="input-label" htmlFor="phone">
            Telefono
          </label>
          <input type="number" id="phone" required className="input" />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="job">
            Cargo
          </label>
          <input type="text" id="job" required className="input" />
        </div>
      </div>
      <button className="submit">Agregar</button>
    </div>
  );
}

export default EmployeeForm;
