import MiniCard from "./Components/MiniCard";
import WeatherCard from "./Components/WeatherCard";
import "./assets/css/components/app.css";
import clear from "./assets/images/Clear.jpg";

function App() {
  return (
    <>
      <main className="main-wrapper">
        <div className="card">
          <WeatherCard />
        </div>
        <img src={clear} alt="" className="background-image" />
      </main>
    </>
  );
}
export default App;
