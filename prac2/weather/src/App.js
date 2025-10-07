import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

   try {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5402372b5e48b1e1f9c53d108e943ac6&units=metric`
  );
  const data = await response.json();


      if (response.ok) {
        setWeather(`The weather in ${city} is ${data.main.temp}°C`);
        setError("");
      } else {
        setWeather("");
        setError("City not found");
      }
    } catch {
      setWeather("");
      setError("Error fetching data");
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Click here to Get Weather</button>
      {weather && <p>{weather}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
