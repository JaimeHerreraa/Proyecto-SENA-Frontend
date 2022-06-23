import React, { useEffect, useState } from "react";
import "./HomePage.css";
import HomeHeader from "./HomeHeader";
import LoadingSpin from "../../LoadingSpin/LoadingSpin";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";

function HomePage() {
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
      <div className="homepage--container">
        <HomeHeader />
        <HomeContent />
        <HomeFooter />
      </div>
    );
  }
}

export default HomePage;
