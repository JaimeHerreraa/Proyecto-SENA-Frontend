import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import HeaderOptions from "./HeaderOptions";
import "./HomePage.css";

function HomeHeader() {
  return (
    <div className="header">
      <div className="header--container">
        <div className="company">
          <div className="icon--card">
            <img
              className="app--icon"
              src="./images/app-dark-icon.png"
              alt="App logo"
            />
          </div>
          <strong className="company--text">Ibrand-Ink</strong>
        </div>

        <HeaderNavbar />
        <HeaderOptions />
      </div>
    </div>
  );
}

export default HomeHeader;
