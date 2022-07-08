import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeForm";
import "./Employee.css";
import "../Order/Order.css";

function PhoneGroup() {
  const { setPhone, setJob } = useContext(EmployeeContext);

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const onJobChange = (event) => {
    setJob(event.target.value);
  };

  return (
    <div className="form-group">
      <div className="input-group">
        <label className="input-label" htmlFor="phone">
          Telefono
        </label>
        <input
          type="number"
          id="phone"
          required
          className="input"
          onChange={onPhoneChange}
        />
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="job">
          Cargo
        </label>
        <input
          type="text"
          id="job"
          required
          className="input"
          onChange={onJobChange}
        />
      </div>
    </div>
  );
}

export default PhoneGroup;
