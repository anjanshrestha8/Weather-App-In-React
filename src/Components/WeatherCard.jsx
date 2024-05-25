import "../assets/css/components/weatherCard.css";
import search from "../assets/icons/search.svg";
import sun from "../assets/icons/sun.png";
function WeatherCard() {
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
          <div>
            <div className="icon">
              <img src={sun} alt="" />
            </div>
            <h1>Max Temperature</h1>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}
export default WeatherCard;
