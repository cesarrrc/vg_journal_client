import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
