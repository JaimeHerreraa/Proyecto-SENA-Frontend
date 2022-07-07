import React from "react";
import HomeHeader from "../HomePage/HomeHeader";
import HomeFooter from "../HomePage/HomeFooter";
import LoadingSpin from "../../LoadingSpin/LoadingSpin";
import useRequestDelay from "../../../hooks/useRequestDelay";
import { getTasks } from "../../../providers/TaskProvider";
import "./History.css";
import HistoryOrderList from "./HistoryOrderList";

function History() {
  const { loading, data } = useRequestDelay(getTasks);

  if (loading === "loading") {
    return <LoadingSpin />;
  } else {
    return (
      <div className="history--container">
        <HomeHeader />
        <div className="history--content">
          <HistoryOrderList data={data} />
        </div>
        <HomeFooter />
      </div>
    );
  }
}

export default History;
