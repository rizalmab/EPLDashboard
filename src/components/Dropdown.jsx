import React, { useState } from "react";
import { Link } from "react-router-dom";
import seasonsArr from "../footballdata/seasonsArr";

const Dropdown = (props) => {
  const [season, setSeason] = useState("Season");

  const handleClick = (e) => {
    setSeason(e.target.text);
  };

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
          {season}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {seasonsArr.map((season) => {
            return (
              <li key={season} onClick={handleClick}>
                <Link to={`/${props.page}/${season}`} className="dropdown-item">
                  {season}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
