import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "@components/errorBoundary";
import Loading from "@components/loading";

// Lazy load pages
const Dashboard = lazy(() => import("@pages/dashboard"));
const Educations = lazy(() => import("@pages/educations"));
const Experiences = lazy(() => import("@pages/experiences"));
const ProtectedRoute = lazy(() => import("./protectedRoute"));

// Lazy load layout components
const Layout = lazy(() => import("@components/layout"));

const RoutesApp = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/" index element={<ProtectedRoute />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="data">
              <Route path="educations" element={<Educations />} />
              <Route path="experiences" element={<Experiences />} />
            </Route>
          </Routes>
        </Layout>
      </Suspense>
    </ErrorBoundary>
  );
};

export default RoutesApp;
