import React, { useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "YOUR_OMDB_API_KEY";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
      }
    } catch {
      setError("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
          style={{ padding: "5px", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "5px 10px" }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ margin: "10px" }}>
            <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none", color: "black" }}>
              <img src={movie.Poster} alt={movie.Title} width="150" />
              <p>{movie.Title} ({movie.Year})</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
