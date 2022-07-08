import React from "react";
import LoadingSpin from "../../LoadingSpin/LoadingSpin";
import EmployeeLayout from "./EmployeeLayout";
import { getEmployee } from "../../../providers/EmployeeProvider";
import useRequestDelay from "../../../hooks/useRequestDelay";
import "./Employee.css";

function Employee() {
  const { data, loading, setData } = useRequestDelay(getEmployee);
  if (loading === "loading") {
    return <LoadingSpin />;
  } else {
    return <EmployeeLayout data={data} setData={setData} />;
  }
}

export default Employee;
