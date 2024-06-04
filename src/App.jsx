import { useEffect, useState } from "react";
import MiniCard from "./Components/MiniCard";
import WeatherCard from "./Components/WeatherCard";
import "./assets/css/components/app.css";
import clear from "./assets/images/Clear.jpg";
import Nav from "./Components/Nav";

function App() {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [placeId, setPlaceId] = useState("kathmandu");
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=all&timezone=UTC&language=en&units=metric&key=b09f59chilzh0v05a7kiql6rjpt5lzvgmjfwcwl8`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeather(data.daily.data[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [placeId]);

  const handleSearchNewArea = (text) => {
    console.log("outside ma ho hai vai", text);
    setPlaceId(text);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <main className="main-wrapper">
          <Nav handleClick={handleSearchNewArea} />
          <div className="card">
            <div className="weather-card">
              {weather?.day ? (
                <WeatherCard
                  date={weather.day}
                  windSpeed={weather.all_day?.wind.speed + " km/s"}
                  temp={weather.all_day?.temperature + " °C"}
                  weather={weather.weather}
                  maxTemp={weather.all_day.temperature_max + " °C"}
                  minTemp={weather.all_day.temperature_min + " °C"}
                  summary={weather.summary}
                />
              ) : (
                <div>Sorry, no data found.</div>
              )}
            </div>
          </div>
          <img src={clear} alt="" className="background-image" />
        </main>
      )}
    </>
  );
}
export default App;
