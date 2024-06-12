import React from "react";
import { useNavigate } from "react-router-dom";

const MoviesLazy = React.lazy(() => import("movies/Movies"));

export function Movies() {
  const navigate = useNavigate();

  return (
    <div className="movies-container">
      <MoviesLazy onNavigate={(to: string) => navigate(to)} />
    </div>
  );
}
