import React from "react";
import { Link } from "react-router-dom";

const seasons = [2021, 2020, 2019, 2018, 2017, 2016];

const Dropdown = (props) => {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Season
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {seasons.map((season) => {
            return (
              <li key={season}>
                <Link to={`/${props.page}/${season}`} className="dropdown-item">
                  {season}
                </Link>
              </li>
            );
          })}
          {/* <li>
            <Link to={`/${props.page}/2021`} className="dropdown-item">
              2021
            </Link>
          </li>
          <li>
            <Link to={`/${props.page}/2020`} className="dropdown-item">
              2020
            </Link>
          </li>
          <li>
            <Link to={`/${props.page}/2019`} className="dropdown-item">
              2019
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
