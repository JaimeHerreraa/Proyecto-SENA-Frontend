import React from "react";
import "./Order.css";

function DateGroup({ setDate, setValue }) {
  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  const onValueChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-group">
      <div className="input-group">
        <label className="input-label" htmlFor="date">
          Fecha
        </label>
        <input
          type="date"
          id="date"
          required
          className="input"
          onChange={onDateChange}
        />
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="value">
          Valor
        </label>
        <input
          type="number"
          id="value"
          required
          className="input"
          onChange={onValueChange}
        />
      </div>
    </div>
  );
}

export default DateGroup;
