import "./App.css";
import Watchlist from "./components/Watchlist";
import Movies from "./components/Movies";

function App() {
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

export default App;