import React from "react";
import lionface from "../images/lionface.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={lionface}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            EPL Tracker
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
