import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import newsData from "../../footballdata/newsdata";

const newsDataArr = newsData.articles;

const News = () => {
  // const [newsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `https://newsapi.org/v2/top-headlines?country=gb&q=football&category=sports&apiKey=8cd8af422f8b42dba4037103e89de9a5`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setNewsData(data.articles);
  //     });
  // }, []);

  return (
    <>
      <h5>Latest news</h5>
      <Container>
        <CardGroup
          className="overflow-auto"
          style={{
            flexFlow: "row nowrap",
            height: "350px",
            maxHeight: "350px",
          }}
        >
          {newsDataArr.map((news, i) => {
            return <NewsCard data={news} key={i} />;
          })}
        </CardGroup>
      </Container>
    </>
  );
};

export default News;
