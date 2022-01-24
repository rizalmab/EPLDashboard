import React from "react";
import Dropdown from "../components/Dropdown";
import "./Teams.css";
import { Outlet } from "react-router-dom";

const Teams = () => {
  return (
    <>
      <h1>🏟 EPL Teams</h1>
      <Dropdown page="teams" />
      <Outlet />
    </>
  );
};

export default Teams;
