import { useNavigate } from "react-router-dom";
import React, { Suspense } from "react";

const MoviesLazy = React.lazy(() => import("movies/Movies"));

export function Movies() {
  console.log("here in movies component, parent MFE !");
  const navigate = useNavigate();

  return (
    <Suspense fallback={<span>Loading !</span>}>
      <div className="movies-container">
        <MoviesLazy onNavigate={(to: string) => navigate(to)} />
      </div>
    </Suspense>
  );
}
