import React from "react";
import "./HomePage.css";
import CardList from "./CardList";

function HomeContent() {
  return (
    <div className="main--content">
      <div className="main--header">
        <h1 className="header--title">Pedidos Pendientes</h1>
      </div>
      <CardList />
    </div>
  );
}

export default HomeContent;
