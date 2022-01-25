import React from "react";
import NewsCard from "./NewsCard";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import newsData from "../footballdata/newsdata";

const newsDataArr = newsData.articles;

const News = () => {
  return (
    <>
      <h5>Latest news</h5>
      <Container>
        <CardGroup>
          {newsDataArr.map((news, i) => {
            return <NewsCard data={news} key={i} />;
          })}
        </CardGroup>
      </Container>
    </>
  );
};

export default News;
