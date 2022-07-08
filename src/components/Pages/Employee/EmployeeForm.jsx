import React, { createContext } from "react";
import FormLayout from "./FormLayout";
import useEmployeeForm from "../../../hooks/useEmployeeForm";
import { postEmployee } from "../../../providers/EmployeeProvider";
import "./Employee.css";

export const EmployeeContext = createContext();

function EmployeeForm({ update, setUpdate }) {
  const {
    firstName,
    lastName,
    salary,
    job,
    phone,
    id,
    setId,
    setFirstName,
    setLastName,
    setSalary,
    setJob,
    setPhone,
  } = useEmployeeForm();

  const post = () => {
    postEmployee(id, firstName, job, lastName, phone, salary);
    setUpdate("progress");
    console.log(update);
  };

  return (
    <EmployeeContext.Provider
      value={{
        setFirstName,
        setLastName,
        setSalary,
        setJob,
        setPhone,
        setId,
        post,
      }}
    >
      <FormLayout />
    </EmployeeContext.Provider>
  );
}

export default EmployeeForm;
