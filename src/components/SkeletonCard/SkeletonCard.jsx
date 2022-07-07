import React from "react";
import "./SkeletonCard.css";

function SkeletonCard() {
  return (
    <div className="skeleton--card">
      <div className="skeleton--name skeleton"></div>
      <div className="skeleton--state skeleton"></div>
      <div className="skeleton--value skeleton"></div>
      <div className="skeleton--info skeleton"></div>
      <div className="skeleton--buttons">
        <div className="button skeleton"></div>
        <div className="button skeleton"></div>
        <div className="button skeleton"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
