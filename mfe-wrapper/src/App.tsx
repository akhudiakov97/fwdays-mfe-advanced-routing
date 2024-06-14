import "./styles.css";
import React from "react";

const MoviesLazy = React.lazy(() => import("movies/Movies"));

export const App = () => {
  return <MoviesLazy />;
};
