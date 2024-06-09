import "./Content.css";
import Watchlist from "./Watchlist";
import Movies from "./Movies";

function Content() {
    return (
        <div className="App">
            <h2>Top rated movies</h2>
            <div className="content">
                <Movies />
                <Watchlist />
            </div>
        </div>
    );
}

export default Content;