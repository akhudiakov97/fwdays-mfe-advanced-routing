import { MemoryRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Content from "./components/Content";

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
