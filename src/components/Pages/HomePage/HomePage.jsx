import React, { createContext } from "react";
import "./HomePage.css";
import useRequestDelay from "../../../hooks/useRequestDelay";
import { getPendingTask } from "../../../providers/TaskProvider";
import HomeLayout from "./HomeLayout";

export const HomeContext = createContext();

function HomePage() {
  const { loading, data } = useRequestDelay(getPendingTask);

  return (
    <HomeContext.Provider value={{ loading, data }}>
      <HomeLayout />
    </HomeContext.Provider>
  );
}

export default HomePage;
