import React from "react";

export default function MovieList({ movies }) {
  return (
    <table border="1" cellPadding="8" style={{ width: "100%", marginBottom: 20 }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((m, idx) => (
          <tr key={idx}>
            <td>{m.title}</td>
            <td>{m.year}</td>
            <td>{m.genre}</td>
            <td>{m.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}