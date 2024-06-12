import React from "react";
import { useNavigate } from "react-router-dom";

const WatchlistLazy = React.lazy(() => import("watchlist/Watchlist"));

export function Watchlist() {
  const navigate = useNavigate();

  return (
    <div className="movies-container">
      <WatchlistLazy onNavigate={(to: string) => navigate(to)} />
    </div>
  );
}
