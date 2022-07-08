import { useState } from "react";

function useEmployeeForm() {
  const [phone, setPhone] = useState(0);
  const [job, setJob] = useState("");
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState(0);

  return {
    phone,
    job,
    id,
    firstName,
    lastName,
    salary,
    setPhone,
    setJob,
    setId,
    setFirstName,
    setLastName,
    setSalary,
  };
}

export default useEmployeeForm;
