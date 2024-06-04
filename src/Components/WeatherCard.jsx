import "../assets/css/components/weatherCard.css";
import one from "../assets/icons/1.png";
import two from "../assets/icons/2.png";
import tstorm from "../assets/icons/tstorm.png";
import { weatherIcons } from "../utils/imageIcon";

function WeatherCard(props) {
  console.log(props);
  return (
    <>
      <div className="card-wrapper">
        {/* weather section */}
        <div className="weather-section-wrapper">
          <div className="icon-section">
            <div className="icon">
              <img src={weatherIcons[props.weather]} alt="" />
            </div>
            <div>
              <h1>
                Max-Temperature : <span> {props.maxTemp}</span>
              </h1>
              <h1>
                Min-Temperature : <span> {props.minTemp}</span>
              </h1>
            </div>
          </div>

          {/* <hr />   */}

          <div className="location-section">
            <h1>Location: Kathmandu</h1>
            <br />
            <br />
            <div className="details">
              <h3>Date: {props.date}</h3>
              <h3>Weather: "{props.weather}"</h3>
            </div>
          </div>

          <div className="button-section">
            <label className="button-wind">
              Wind Speed: <br /> {props.windSpeed}
            </label>
            <label className="button-humidity">
              Average Temp : <br />
              {props.temp}
            </label>
          </div>
          <div className="end-section">"{props.summary}"</div>
        </div>
      </div>
    </>
  );
}
export default WeatherCard;
