import { MemoryRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Content from "./components/Content";
import React from "react";
import { createContext } from "react";

type Props = {
  onNavigate: (to: string) => void;
};

interface NavigationContextProps {
  onNavigate: (to: string) => void;
}

export const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
);

const App: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MemoryRouter>
      <NavigationContext.Provider value={{ onNavigate }}>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </NavigationContext.Provider>
    </MemoryRouter>
  );
};

export default App;
