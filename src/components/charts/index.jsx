import React, { lazy, Suspense } from "react";
import Loading from "@components/loading";

// Lazy load chart components
const UserEngagementChart = lazy(() => import("./userEngagementChart"));
const TrafficSourcesChart = lazy(() => import("./trafficSourcesChart"));
const PublishingActivityChart = lazy(() => import("./publishingActivityChart"));
const ContentPerformanceChart = lazy(() => import("./contentPerformanceChart "));

// Wrapper component for lazy-loaded charts
const ChartWrapper = ({ children }) => (
  <Suspense fallback={<Loading />}>
    {children}
  </Suspense>
);

export {
  UserEngagementChart,
  TrafficSourcesChart,
  PublishingActivityChart,
  ContentPerformanceChart,
  ChartWrapper
}; 