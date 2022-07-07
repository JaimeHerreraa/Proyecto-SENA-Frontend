import React, { useState } from "react";
import EmailInput from "./EmailInput";
import "./Login.css";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="content--form">
      <div className="form--data">
        <EmailInput setEmail={setEmail} />
        <PasswordInput setPassword={setPassword} />
        <SubmitButton email={email} password={password} />
      </div>
    </div>
  );
}

export default LoginForm;
