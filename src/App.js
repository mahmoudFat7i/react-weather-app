// App.js

import { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [data, setdata] = useState({});
  const [location, setLocation] = useState("");

  const apiKey = "9134077683e8f4ee1f4a5f8e17591807";
  const unit = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`;

  const searchLocation = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await axios.get(url);
        setdata(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
      setLocation("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-full md:w-[400px] text-lg rounded-3xl border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white shadow-md"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
