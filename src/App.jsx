import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  // const [info, setInfo] = useState({});

  // useEffect(() => {
  //   fetch(
  //     "https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setInfo(data);
  //     });
  // }, []);

  return (
    <div className="App">
      <h1>EPL Tracker</h1>
      <p>Introduction to the app</p>
      <p>Latest News</p>
    </div>
  );
}

export default App;
