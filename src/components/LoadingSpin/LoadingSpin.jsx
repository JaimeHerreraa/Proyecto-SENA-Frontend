import React from "react";
import "./LoadingSpin.css";

function LoadingSpin() {
  return (
    <div className="loading-container">
      <div className="loader-wrapper">
        <div className="loader">
          <div className="loader loader-inner"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpin;
