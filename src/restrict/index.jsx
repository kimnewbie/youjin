import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

const RestrictRoute = ({ component: Component, location }) => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default RestrictRoute;
