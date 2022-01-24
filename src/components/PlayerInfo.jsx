import React from "react";

const PlayerInfo = (props) => {
  // console.log("props.data", props.data);
  const i = props.index;

  return (
    <>
      <p>Goals: {props.data[i].statistics[0].goals.total}</p>
      <p>Club: {props.data[i].statistics[0].team.name}</p>
      <p>Nationality: {props.data[i].player.nationality}</p>
      <p>Age: {props.data[i].player.age}</p>
    </>
  );
};

export default PlayerInfo;
