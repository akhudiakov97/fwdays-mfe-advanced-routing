import React from "react";
import { useNavigate } from "react-router-dom";

const WatchlistLazy = React.lazy(() => import("watchlist/Watchlist"));

export function Watchlist() {
  const navigate = useNavigate();

  return (
      <WatchlistLazy onNavigate={(to: string) => navigate(to)} />
  );
}
