import React from "react";

const LiveScores = () => {
  return (
    <div>
      <h5>Latest scores</h5>
      <div
        id="wg-api-football-fixtures"
        data-host="v3.football.api-sports.io"
        data-refresh="0"
        data-date=""
        data-league="39"
        data-team=""
        data-season="2021"
        data-last="10"
        data-next=""
        data-key="20827bc0d6fd906fa27a287a71cd6900"
        data-theme="grey"
        data-show-errors="false"
        className="api_football_loader"
      ></div>
      {/* <script
        type="module"
        src="https://widgets.api-sports.io/football/1.1.8/widget.js"
      ></script> */}
    </div>
  );
};

export default LiveScores;
