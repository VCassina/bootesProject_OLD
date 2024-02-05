import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/bootesProject" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/bootesProject" />} />
    </Routes>
  );
}

export default AppRoutes;