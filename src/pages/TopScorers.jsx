import React from "react";
import Dropdown from "../components/Dropdown";
import { Outlet } from "react-router-dom";

const TopScorers = () => {
  return (
    <>
      <h1>🎯 EPL Top Scorers</h1>
      <Dropdown page="topscorers" />
      <Outlet />
    </>
  );
};

export default TopScorers;
