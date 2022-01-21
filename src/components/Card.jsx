import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.src}
        className="card-img-top"
        alt="team logo"
        // styles={{ height: "500px", width: "100px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.longName}</h5>
        <p className="card-text">{props.shortName}</p>
        <Link to="/profile/arsenal" className="btn btn-primary">
          View Team Profile
        </Link>
      </div>
    </div>
  );
};

export default Card;
