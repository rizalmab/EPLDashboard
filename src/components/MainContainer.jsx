import React from "react";
import LiveScores from "./LiveScores";
import News from "./News";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainContainer = () => {
  return (
    <Container>
      <Row>
        <Col>{/* <LiveScores /> */}</Col>
        <Col>
          <News />
        </Col>
      </Row>
    </Container>
  );
};

export default MainContainer;
