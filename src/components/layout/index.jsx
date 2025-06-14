import React, { lazy, Suspense } from "react";
import Loading from "@components/loading";

// Lazy load layout components
const HeaderBar = lazy(() => import("./headBar"));
const SideBar = lazy(() => import("./siderBar"));
const BreadcrumbBar = lazy(() => import("./breadcrumbBar"));
const ContentBar = lazy(() => import("./contentSection"));
const FootBar = lazy(() => import("./footbar"));

// Wrapper component for lazy-loaded layout components
const LayoutWrapper = ({ children }) => (
  <Suspense fallback={<Loading />}>
    {children}
  </Suspense>
);

export {
  HeaderBar,
  SideBar,
  BreadcrumbBar,
  ContentBar,
  FootBar,
  LayoutWrapper
}; 