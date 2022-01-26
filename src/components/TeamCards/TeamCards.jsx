import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import "./TeamCards.css";
import LoadingSpinner from "../LoadingSpinner";
import { trackPromise } from "react-promise-tracker";

const Cards = () => {
  const { season } = useParams();
  // console.log("season", season);

  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    trackPromise(
      fetch(
        `https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=${season}&sort=asc`
      )
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data.data.standings);
        setTeamData(data.data.standings);
        // console.log("teamData", teamData);
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
        {teamData.map((team, i) => {
          return (
            <Card
              src={team?.team?.logos[0]?.href}
              title={team?.team?.displayName}
              text={team?.team?.shortDisplayName}
              key={i}
              to={team?.team?.abbreviation}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
