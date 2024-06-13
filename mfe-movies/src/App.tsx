import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import { createContext } from "react";

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"], // Pass your initial url
});

// Create a new router instance
const router = createRouter({ routeTree, history: memoryHistory });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

type Props = {
  onNavigate: (to: string) => void;
};

interface NavigationContextProps {
  onNavigate: (to: string) => void;
}

export const NavigationContext = createContext<
  NavigationContextProps | undefined
>(undefined);

export const App: React.FC<Props> = ({ onNavigate }) => {
  return (
    <NavigationContext.Provider value={{ onNavigate }}>
      <RouterProvider router={router} />
    </NavigationContext.Provider>
  );
};

export default App;
