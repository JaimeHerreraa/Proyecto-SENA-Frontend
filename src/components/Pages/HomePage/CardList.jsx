import React, { useContext } from "react";
import { HomeContext } from "./HomePage";
import "./HomePage.css";
import Card from "./Card";

function CardList() {
  const { data } = useContext(HomeContext);

  return (
    <div className="cards--container">
      {data.map((task) => {
        return <Card key={task.id} {...task} />;
      })}
    </div>
  );
}

export default CardList;
