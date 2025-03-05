import React, { useState } from "react";
import weatherData from "./weatherData.json"; // Import JSON file
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = () => {
    if (weatherData[city]) {
      setWeather(weatherData[city]);
      setError(null);
    } else {
      setError("City not found. Try another.");
      setWeather(null);
    }
  };

  const getWeatherEmoji = (condition) => {
    if (!condition) return "🌥";
    if (condition.includes("Sunny")) return "☀️";
    if (condition.includes("Cloudy")) return "🌤";
    if (condition.includes("Rainy")) return "🌧";
    if (condition.includes("Snow")) return "❄️";
    return "⛈";
  };

  return (
    <div className="weather-container">
      <h1 className="title">🌎 Offline Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input-box"
      />
      <button onClick={fetchWeather} className="fetch-btn">
        Get Weather
      </button>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-box">
          <h2>{city} {getWeatherEmoji(weather.condition)}</h2>
          <p className="temp">🌡 Temperature: {weather.temperature}°C</p>
          <p className="wind">💨 Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
