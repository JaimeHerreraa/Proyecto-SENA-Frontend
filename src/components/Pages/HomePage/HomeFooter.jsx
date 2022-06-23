import React from "react";
import "./HomePage.css";

function HomeFooter() {
  return (
    <div className="footer">
      <div className="footer--container">
        <p className="footer--text">
          Copyright &copy; Ibrand Colombia, Inc. All rights reserved.{" "}
          <a href="/homepage" className="footer--link">
            Terms of use
          </a>{" "}
          |{" "}
          <a href="/homepage" className="footer--link">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default HomeFooter;
