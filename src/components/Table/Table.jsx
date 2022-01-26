import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import "./Table.css";
import LoadingSpinner from "../LoadingSpinner";

const Table = () => {
  const { season } = useParams();

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    trackPromise(
      fetch(
        `https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=${season}&sort=asc`
      )
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data.data.standings);
        setTableData(data.data.standings);
      });
  }, [season]);

  return (
    <>
      <LoadingSpinner />
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Ranking</th>
            <th />
            <th scope="col">Team Name</th>
            <th scope="col">Total Points</th>
            <th scope="col">Games Played</th>
            <th scope="col">Wins</th>
            <th scope="col">Ties</th>
            <th scope="col">Losses</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((standing, i) => {
            const logoImg = standing?.team?.logos[0].href;

            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>
                  <img src={logoImg} alt="team logo" />
                </td>
                <td>{standing?.team?.displayName}</td>
                <td>{standing?.stats[6]?.value}</td>
                <td>{standing?.stats[3]?.value}</td>
                <td>{standing?.stats[0]?.value}</td>
                <td>{standing?.stats[2]?.value}</td>
                <td>{standing?.stats[1]?.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
