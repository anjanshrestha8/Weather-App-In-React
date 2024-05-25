import "../assets/css/components/background.css";
import clear from "../assets/images/Clear.jpg";

function Background() {
  return (
    <>
      <div className="background-image">
        <h1>Weather Of Kathmandu</h1>
        <img src={clear} alt="" />
      </div>
    </>
  );
}
export default Background;
