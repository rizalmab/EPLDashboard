import React from "react";
import Card from "./Card";
import epl2021 from "../footballdata/2021teams";
import "./Cards.css";

const standings2021 = epl2021.data.standings;

const Cards = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "space-between",
      }}
    >
      {standings2021.map((team, i) => {
        return (
          <Card
            src={team.team.logos[0].href}
            longName={team.team.displayName}
            shortName={team.team.shortDisplayName}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Cards;
