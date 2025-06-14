import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "@components/loading";

// Lazy load components
const Dashboard = lazy(() => import("@pages/dashboard"));
const Educations = lazy(() => import("@pages/educations"));
const Experiences = lazy(() => import("@pages/experiences"));
const ProtectedRoute = lazy(() => import("./protectedRoute"));

const RoutesApp = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" index element={<ProtectedRoute />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="data">
          <Route path="educations" element={<Educations />} />
          <Route path="experiences" element={<Experiences />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesApp;
