import React from "react";
import Card from "react-bootstrap/Card";

const NewsCard = (props) => {
  return (
    <>
      <Card style={{ minWidth: "150px" }}>
        <Card.Img
          variant="top"
          src={props.data.urlToImage}
          style={{ height: "100px" }}
        />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text style={{ width: "100%" }}>
            {props.data.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Published on: {props.data.publishedAt}
          </small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default NewsCard;
