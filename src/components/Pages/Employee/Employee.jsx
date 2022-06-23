import React, { useState, useEffect } from "react";
import HomeHeader from "../HomePage/HomeHeader";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import HomeFooter from "../HomePage/HomeFooter";
import LoadingSpin from "../../LoadingSpin/LoadingSpin";
import "./Employee.css";

function Employee() {
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
      <div className="employee--container">
        <HomeHeader />
        <div className="employee--content">
          <EmployeeForm />
          <EmployeeList />
        </div>
        <HomeFooter />
      </div>
    );
  }
}

export default Employee;
