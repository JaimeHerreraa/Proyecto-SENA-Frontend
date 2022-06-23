import React, { useState, useEffect } from "react";
import HomeHeader from "../HomePage/HomeHeader";
import HomeFooter from "../HomePage/HomeFooter";
import LoadingSpin from "../../LoadingSpin/LoadingSpin";
import "./History.css";
import HistoryOrderList from "./HistoryOrderList";

function History() {
  const [loading, setLoading] = useState(true);

  const delay = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    delay();
  }, []);
  if (loading === true) {
    return <LoadingSpin />;
  } else {
    return (
      <div className="history--container">
        <HomeHeader />
        <div className="history--content">
          <HistoryOrderList />
        </div>
        <HomeFooter />
      </div>
    );
  }
}

export default History;
