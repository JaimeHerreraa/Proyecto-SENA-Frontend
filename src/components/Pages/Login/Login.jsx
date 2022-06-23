import React from "react";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="content">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
