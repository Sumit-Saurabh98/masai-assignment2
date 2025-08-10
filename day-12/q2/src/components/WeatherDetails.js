import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function WeatherDetails() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
        setLoading(false);
      })
      .catch(() => {
        setWeather(null);
        setLoading(false);
      });
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (!weather) return <p>City not found.</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Condition: {weather.weather[0].description}</p>

      {/* Bonus: Google Map Embed */}
      <iframe
        title="map"
        width="400"
        height="300"
        style={{ border: 0, marginTop: "20px" }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${weather.name}`}
      ></iframe>
    </div>
  );
}
