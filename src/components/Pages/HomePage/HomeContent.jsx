import React from "react";
import "./HomePage.css";
import CardList from "./CardList";

function HomeContent({ data }) {
  return (
    <div className="main--content">
      <div className="main--header">
        <h1 className="header--title">Pedidos Pendientes</h1>
      </div>
      <CardList data={data} />
    </div>
  );
}

export default HomeContent;
