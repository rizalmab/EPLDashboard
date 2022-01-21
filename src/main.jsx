import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ranking from "./pages/Ranking";
import Teams from "./pages/Teams";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Cards from "./components/Cards";
import TeamProfile from "./components/TeamProfile";

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
          <Route path=":season" element={<Cards />} />
        </Route>
        <Route path="/profile">
          <Route path=":club" element={<TeamProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
