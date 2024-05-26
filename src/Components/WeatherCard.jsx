import "../assets/css/components/weatherCard.css";
import search from "../assets/icons/search.svg";
import sun from "../assets/icons/sun.png";
function WeatherCard(props) {
  return (
    <>
      <div className="card-wrapper">
        {/* Header section */}
        <div className="header">
          <h1>Weather Of Kathmandu</h1>
          <div className="search-part">
            <input type="search" placeholder="Search location here..." />
            <div className="search-icon">
              <img src={search} alt="" />
            </div>
          </div>
        </div>
        {/* weather section */}
        <div className="weather-section-wrapper">
          <div className="icon-section">
            <div className="icon">
              <img src={sun} alt="" />
            </div>
            <h1>Max - Temperature</h1>
          </div>
          <hr />
          <div className="location-section">
            <h1>Location: Kathmandu</h1>
            <div className="details">
              <h3>Day: Sunday</h3>
              <h3>Date: 2002/08/02</h3>
            </div>
          </div>
          <hr />
          <div className="button-section">
            <label className="button-wind">
              Wind Speed: <br /> 25km/s
            </label>

            <label className="button-humidity">
              Humidity : <br /> 48.7gm/m3
            </label>
          </div>
          <div className="end-section">e</div>
        </div>
      </div>
    </>
  );
}
export default WeatherCard;
