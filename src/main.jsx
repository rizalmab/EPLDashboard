import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ranking from "./pages/Ranking";
import Teams from "./pages/Teams";
import TopScorers from "./pages/TopScorers";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import TeamCards from "./components/TeamCards/TeamCards";
import TeamProfile from "./components/TeamProfile";
import TopScorerCards from "./components/TopScorerCards";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ranking" element={<Ranking />}>
          <Route path=":season" element={<Table />} />
        </Route>
        <Route path="/teams" element={<Teams />}>
          <Route path=":season" element={<TeamCards />} />
        </Route>
        <Route path="/profile">
          <Route path=":club" element={<TeamProfile />} />
        </Route>
        <Route path="/topscorers" element={<TopScorers />}>
          <Route path=":season" element={<TopScorerCards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
