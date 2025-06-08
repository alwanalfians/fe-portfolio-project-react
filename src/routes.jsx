import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "@pages/dashboard";
import Profile from "@pages/dashboard";
import Educations from "@pages/educations";
import Experiences from "@pages/experiences";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/educations" element={<Educations />} />
      <Route path="/experiences" element={<Experiences />} />
    </Routes>
  );
};

export default RoutesApp;
