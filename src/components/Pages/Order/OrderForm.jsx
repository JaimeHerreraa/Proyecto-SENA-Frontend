import React from "react";
import "./Order.css";

function OrderForm() {
  return (
    <div className="form">
      <h2 className="form--title">Pedido</h2>
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
          <label className="input-label" htmlFor="date">
            Fecha
          </label>
          <input type="date" id="date" required className="input" />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="value">
            Valor
          </label>
          <input type="number" id="value" required className="input" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <label className="input-label" htmlFor="description">
            Descripcion
          </label>
          <textarea
            id="description"
            rows="4"
            cols="50"
            className="text-area"
          ></textarea>
        </div>
      </div>
      <button className="submit">Agregar</button>
    </div>
  );
}

export default OrderForm;
