import React from "react";
import Card from "react-bootstrap/Card";

const NewsCard = (props) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.data.urlToImage} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>{props.data.description}</Card.Text>
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
