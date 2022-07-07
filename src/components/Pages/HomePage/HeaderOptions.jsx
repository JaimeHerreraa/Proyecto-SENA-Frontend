import React from "react";
import "./HomePage.css";

function HeaderOptions() {
  const logout = () => {
    window.location.href = "/";
  };

  return (
    <div className="header--options">
      <img
        className="options--icon"
        src="./images/github-light.png"
        alt="code icon"
      />
      <img
        className="options--icon"
        src="./images/logout-light.png"
        alt="Logout Icon"
        onClick={logout}
      />
    </div>
  );
}

export default HeaderOptions;
