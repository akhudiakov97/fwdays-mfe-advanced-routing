import "./Watchlist.css";
import { useWatchlistStore } from "../store/movie-store";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavigationContext } from "../App";


const Watchlist = () => {
  const onNavigateContext = useContext(NavigationContext);

  const { watchlist, removeFromWatchlist, clearWatchlist } = useWatchlistStore(
    (state) => ({
      watchlist: state.watchlist,
      removeFromWatchlist: state.removeFromWatchlist,
      clearWatchlist: state.clearWatchlist,
    })
  );


  return (
    <div className="watchlist">
      <Link to="/About">About</Link>
      <h3>Watchlist</h3>
      {watchlist?.map((movie) => (
        <div key={movie.id} className="watchlist-item">
          <h4>{movie.title}</h4>
          <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
        </div>
      ))}
      {watchlist.length > 0 && (
        <button className="clear-watchlist" onClick={clearWatchlist}>
          Clear Watchlist
        </button>
      )}

    <button onClick={()=>{ onNavigateContext?.onNavigate('/watchlist')}}>
         Go to Watchlist Mfe
        </button>
    </div>
  );
};

export default Watchlist;
