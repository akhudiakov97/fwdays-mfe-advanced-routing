// movies.jsx
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import React from "react";

const MoviesLazy = React.lazy(() => import("movies/Movies"));

export const Movies = () => {
  const navigate = useNavigate();

  return (
    <div className="movies-container">
      <MoviesLazy
        onNavigate={(to: string) =>
          navigate({
            to,
          })
        }
      />
    </div>
  );
};

export const Route = createLazyFileRoute("/movies")({
  component: Movies,
});
