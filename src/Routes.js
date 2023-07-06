import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/Projet-12" element={<HomePage />} />
      <Route path="/*" element={<Navigate to ="/Projet-12" />} />
    </Routes>
  );
};

export default AppRoutes;