import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function MovieStats({ movies }) {
  const genres = [...new Set(movies.map((m) => m.genre))];
  const counts = genres.map((g) => movies.filter((m) => m.genre === g).length);

  const data = {
    labels: genres,
    datasets: [
      {
        label: "Number of Movies",
        data: counts,
        backgroundColor: "#007BA7"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } }
  };

  return <Bar data={data} options={options} />;
}