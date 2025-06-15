import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "@components/errorBoundary";
import RoutesApp from "@routes/routes";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
