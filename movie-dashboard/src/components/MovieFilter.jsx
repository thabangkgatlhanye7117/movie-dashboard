import React from "react";

export default function MovieFilter({ genres, selectedGenre, setSelectedGenre }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label>Filter by Genre: </label>
      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">All</option>
        {genres.map((g, i) => (
          <option key={i} value={g}>{g}</option>
        ))}
      </select>
    </div>
  );
}