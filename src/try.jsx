import { useEffect, useState } from "react";

function App() {
  const url =
    "https://www.meteosource.com/api/v1/free/point?place_id=kathmandu&sections=all&timezone=UTC&language=en&units=metric&key=hzfhekximnmo73kvfx94jsde6r0e7oe4omrjf67z";
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the entire response to inspect its structure
        setData(data.daily.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data.map((entry, index) => (
        <div key={index}>
          <p>Date: {entry.date}</p>
          <p>Max Temperature: {entry.all_day.temperature_max}°C</p>
          <p>Min Temperature: {entry.all_day.temperature_min}°C</p>
        </div>
      ))}
    </>
  );
}

export default App;
