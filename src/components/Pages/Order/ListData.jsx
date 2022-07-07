import React, { useContext, useEffect } from "react";
import { OrderContent } from "./Order";
import OrderCard from "./OrderCard";
import { getPendingTask } from "../../../providers/TaskProvider";
import SkeletonCard from "../../SkeletonCard/SkeletonCard";

function ListData() {
  const { data, setData, update, setUpdate } = useContext(OrderContent);

  useEffect(() => {
    const updating = async () => {
      try {
        const response = await getPendingTask();
        setData(response.data);
        if (response.status === 200) {
          setTimeout(() => {
            setUpdate("success");
          }, 2000);
        }
      } catch (error) {
        alert(error.message);
      }
    };
    updating();
  }, [update]);

  if (update === "progress") {
    return (
      <>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </>
    );
  } else {
    return (
      <>
        {data.map((task) => {
          return <OrderCard key={task.id} {...task} />;
        })}
      </>
    );
  }
}

export default ListData;
