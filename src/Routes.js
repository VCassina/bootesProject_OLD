import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to ="/" />} />
    </Routes>
  );
};

export default AppRoutes;