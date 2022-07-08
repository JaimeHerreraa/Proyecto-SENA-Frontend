import React from "react";
import HomeHeader from "../HomePage/HomeHeader";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import HomeFooter from "../HomePage/HomeFooter";
import useUpdate from "../../../hooks/useUpdate";
import "./Employee.css";

function EmployeeLayout({ data, setData }) {
  const { update, setUpdate } = useUpdate();
  return (
    <div className="employee--container">
      <HomeHeader />
      <div className="employee--content">
        <EmployeeForm update={update} setUpdate={setUpdate} />
        <EmployeeList
          data={data}
          setData={setData}
          update={update}
          setUpdate={setUpdate}
        />
      </div>
      <HomeFooter />
    </div>
  );
}

export default EmployeeLayout;
