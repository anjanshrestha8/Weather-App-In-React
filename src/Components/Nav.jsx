import search from "../assets/icons/search.svg";
import "../assets/css/components/nav.css";
function Nav() {
  return (
    <>
      <div className="header">
        <h1>Weather Of Kathmandu</h1>
        <div className="search-part">
          <input type="search" placeholder="Search location here..." />
          <div className="search-icon">
            <img src={search} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
