import React, { useContext } from "react";
import { HomeContext } from "./HomePage";
import HomeHeader from "./HomeHeader";
import LoadingSpin from "../../LoadingSpin/LoadingSpin";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";
import "./HomePage.css";

function HomeLayout() {
  const { loading } = useContext(HomeContext);

  if (loading === "loading") {
    return <LoadingSpin />;
  } else {
    return (
      <div className="homepage--container">
        <HomeHeader />
        <HomeContent />
        <HomeFooter />
      </div>
    );
  }
}

export default HomeLayout;
