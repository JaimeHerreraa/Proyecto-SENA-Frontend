import React from "react";
import "./Login.css";

function EmailInput({ setEmail }) {
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="email-input">
      <img
        alt="email icon"
        src="./images/email-icon.png"
        className="input-icon"
      />
      <input
        type="text"
        placeholder="Ingresa correo electronico"
        className="input-field"
        onChange={onEmailChange}
      />
    </div>
  );
}

export default EmailInput;
