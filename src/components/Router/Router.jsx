import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import HomePage from "../Pages/HomePage/HomePage";
import Order from "../Pages/Order/Order";
import Employee from "../Pages/Employee/Employee";
import History from "../Pages/History/History";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="order" element={<Order />} />
        <Route path="employee" element={<Employee />} />
        <Route path="history" element={<History />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
