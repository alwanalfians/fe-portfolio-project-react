import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "@pages/dashboard";
import Educations from "@pages/educations";
import Experiences from "@pages/experiences";
import Home from "@pages/home";
import ProtectedRoute from "./protectedRoute";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" index element={<ProtectedRoute />} />
      <Route path="home" index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="data">
        <Route path="educations" element={<Educations />} />
        <Route path="experiences" element={<Experiences />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
