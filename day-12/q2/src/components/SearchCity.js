import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchCity() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim()) {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Weather App</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
