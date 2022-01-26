import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            🦁 EPL Tracker
          </Link>
          <Link to="/ranking" className="navbar-brand">
            🏆 Ranking
          </Link>
          <Link to="/teams" className="navbar-brand">
            🏟 Teams
          </Link>
          <Link to="/topscorers" className="navbar-brand">
            🎯 Topscorers
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
