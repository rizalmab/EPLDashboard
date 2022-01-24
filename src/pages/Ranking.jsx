import React, { useParams } from "react";
import Dropdown from "../components/Dropdown";
import Table from "../components/Table";
import { Outlet } from "react-router-dom";

const Ranking = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🏆 EPL Ranking</h1>
      <Dropdown page="ranking" />
      <Outlet />
    </div>
  );
};

export default Ranking;
