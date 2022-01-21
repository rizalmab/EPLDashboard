import React, { useEffect, useState } from "react";

const TeamProfile = () => {
  const [teamProfile, setTeamProfile] = useState({});

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
      "https://v3.football.api-sports.io/teams?league=39&season=2021",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response);
        setTeamProfile(data.response);
        // console.log("teamProfile", teamProfile);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <h1>{teamProfile[0]?.team?.name}</h1>
      <img src={teamProfile[0]?.team?.logo} alt="team logo" />
      <h2>Founded: {teamProfile[0]?.team?.founded}</h2>
      <h1>Venue</h1>
      <img src={teamProfile[0]?.venue?.image} alt="stadium" />
      <h2>Stadium: {teamProfile[0]?.venue?.name}</h2>
      <h2>City: {teamProfile[0]?.venue?.city}</h2>
    </div>
  );
};

export default TeamProfile;
