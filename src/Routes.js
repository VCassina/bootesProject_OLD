import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/bootesProject_OLD" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/bootesProject_OLD" />} />
    </Routes>
  );
}

export default AppRoutes;