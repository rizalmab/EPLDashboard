import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card/Card";
import PlayerInfo from "./PlayerInfo";
import { trackPromise } from "react-promise-tracker";
import LoadingSpinner from "./LoadingSpinner";

const TopScorersCards = () => {
  const { season } = useParams();
  const [topScorersData, setTopScorersData] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", import.meta.env.VITE_API_FOOTBALL);
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    trackPromise(
      fetch(
        `https://v3.football.api-sports.io/players/topscorers?league=39&season=${season}`,
        requestOptions
      )
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data.response);
        setTopScorersData(data?.response);
        console.log("top scorers data:", topScorersData);
      })
      .catch((error) => console.log("error", error));
  }, [season]);

  return (
    <div>
      <LoadingSpinner />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-between",
        }}
      >
        {topScorersData.map((player, i) => {
          return (
            <Card
              title={player?.player?.name}
              text={<PlayerInfo data={topScorersData} index={i} />}
              alt={"player's picture"}
              src={player?.player?.photo}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopScorersCards;
