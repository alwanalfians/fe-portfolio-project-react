import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "@pages/dashboard";
import Profile from "@pages/profile";
import Educations from "@pages/educations";
import Experiences from "@pages/experiences";
import Home from "@pages/home";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/educations" element={<Educations />} />
      <Route path="/experiences" element={<Experiences />} />
    </Routes>
  );
};

export default RoutesApp;
