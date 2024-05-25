import MiniCard from "./Components/MiniCard";
import "./assets/css/components/app.css";
import clear from "./assets/images/Clear.jpg";

function App() {
  return (
    <>
      <main className="main-wrapper">
        <MiniCard />
        <img src={clear} alt="" className="background-image" />
      </main>
    </>
  );
}
export default App;
