import React from "react";
import "./Login.css";

function PasswordInput({ setPassword }) {
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="password-input">
      <img
        alt="password icon"
        src="./images/locker-icon.png"
        className="input-icon"
      />
      <input
        type="password"
        placeholder="Ingresa contraseña"
        className="input-field"
        onChange={onPasswordChange}
      />
    </div>
  );
}

export default PasswordInput;
