import { Link, createLazyFileRoute } from "@tanstack/react-router";
import React, { useEffect } from "react";

export const Route = createLazyFileRoute("/")({
  component: Watchlist,
});

function Watchlist() {
  const [watchlist, setWatchlist] = React.useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const accountId = "21289655";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    };

    // Make the API request to fetch the watchlist data
    fetch(
      `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=${apiKey}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setWatchlist(data.results);
      })
      .catch((error) => {
        console.error("Error fetching watchlist:", error);
      });
  }, []);

  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Watchlist</h1>
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
