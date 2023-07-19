import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "../backend/service.js";

const WeatherWidget = () => {
  const [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(city);
        setWeatherData(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError("Unable to fetch weather data. Please try again later.");
      }
    };

    fetchData();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-widget">
      <h2>Weather Widget</h2>
      <label htmlFor="city">Select City: </label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={handleCityChange}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <p>City: {weatherData.city}</p>
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>Description: {weatherData.description}</p>
          <p>Humidity: {weatherData.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
