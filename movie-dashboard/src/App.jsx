import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";
import MovieStats from "./components/MovieStats";
import moviesData from "./data/movies.json";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (selectedGenre === "") setMovies(moviesData);
    else setMovies(moviesData.filter((m) => m.genre === selectedGenre));
  }, [selectedGenre]);

  const genres = [...new Set(moviesData.map((m) => m.genre))];

  return (
    <div style={{ maxWidth: 600, margin: "50px auto", padding: 20 }}>
      <h1>Mini Movie Dashboard</h1>
      <MovieFilter genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <MovieList movies={movies} />
      <MovieStats movies={movies} />
    </div>
  );
}

export default App;