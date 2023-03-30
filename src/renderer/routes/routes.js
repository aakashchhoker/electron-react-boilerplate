import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerDetail from "renderer/Component/CustomerDetail";
import Reporting from "renderer/Component/Reporting";
import DataTable from "renderer/Component/Table";
import UserTable from "renderer/Component/UserTable";


// layout HOC

const AppRoutes = () => {
  // rendering the router with layout
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="/customer" element={<CustomerDetail />} />
        <Route path="/customer/overview" element={<CustomerDetail />} />
        <Route path="/customer/user" element={<UserTable />} />
        <Route path="/customer/reporting" element={<Reporting />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
