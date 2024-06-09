import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Watchlist from './Watchlist';
import About from './About';
import './App.css';

function App() {
  return (
    <MemoryRouter>
      <div> 
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </MemoryRouter>
  );
}

export default App;
