import MiniCard from "./Components/MiniCard";
import WeatherCard from "./Components/WeatherCard";
import "./assets/css/components/app.css";
import clear from "./assets/images/Clear.jpg";

function App() {
  fetch(
    "meteosource.com/api/v1/free/point?place_id=london&sections=all&timezone=UTC&language=en&units=metric&key=b09f59chilzh0v05a7kiql6rjpt5lzvgmjfwcwl8"
  )
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
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
