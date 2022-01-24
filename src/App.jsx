import "./App.css";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <h1>⚽️ EPL Tracker ⚽️</h1>
      <p>
        The English Premier League (EPL), based in England 🏴󠁧󠁢󠁥󠁮󠁧󠁿, is one of the
        most popular leagues in the world 🌏. <br />
        <br /> Browse around to learn more about the rankings 🏆, teams 🏟 and
        top scorers 🎯 in the EPL.
      </p>
      <News />
    </div>
  );
}

export default App;
