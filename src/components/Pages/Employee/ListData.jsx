import React, { useEffect } from "react";
import { getEmployee } from "../../../providers/EmployeeProvider";
import EmployeeRow from "./EmployeeRow";
import SkeletonRow from "../../SkeletonRow/SkeletonRow";

function ListData({ data, setData, update, setUpdate }) {
  useEffect(() => {
    const updating = async () => {
      console.log(update);
      try {
        const response = await getEmployee();
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
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
      </>
    );
  } else {
    return (
      <>
        {data.map((employee) => {
          return (
            <EmployeeRow
              key={employee.id}
              {...employee}
              setUpdate={setUpdate}
            />
          );
        })}
      </>
    );
  }
}

export default ListData;
