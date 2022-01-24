import React from "react";

const PlayerInfo = (props) => {
  // console.log("props.data", props.data);
  const i = props.index;
  const imgSrc = props.data[i].statistics[0].team.logo;

  return (
    <>
      <p>Goals: {props.data[i].statistics[0].goals.total}</p>
      <p>
        Club: {props.data[i].statistics[0].team.name}
        <span>
          <img src={imgSrc} alt="team logo" />
        </span>
      </p>
      <p>Nationality: {props.data[i].player.nationality}</p>
      <p>Age: {props.data[i].player.age}</p>
    </>
  );
};

export default PlayerInfo;
