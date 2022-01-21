import React from "react";
// import { Link } from "react-router-dom";
// import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img
        src={props.src}
        className="card-img-top"
        alt={props.alt}
        style={{ height: "15rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-text">{props.text}</div>
        {/* <Link to={`/profile/${props.to}`} className="btn btn-outline-primary">
          View Team Profile
        </Link> */}
      </div>
    </div>
  );
};

export default Card;
