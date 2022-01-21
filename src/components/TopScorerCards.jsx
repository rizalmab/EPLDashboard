import React, { useEffect, useState } from "react";
import Card from "./Card";
import PlayerInfo from "./PlayerInfo";

const TopScorersCards = () => {
  const [topScorersData, setTopScorersData] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "20827bc0d6fd906fa27a287a71cd6900");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://v3.football.api-sports.io/players/topscorers?league=39&season=2021",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data.response);
        setTopScorersData(data?.response);
        console.log("top scorers data:", topScorersData);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Card
      title={topScorersData[0]?.player?.name}
      text={<PlayerInfo />}
      alt={"player's picture"}
      src={topScorersData[0]?.player?.photo}
    />
  );
};

export default TopScorersCards;
