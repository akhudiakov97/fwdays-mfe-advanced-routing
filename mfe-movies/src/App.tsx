import {
  Outlet,
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { createContext } from "react";
import About from "./components/About";
import Content from "./components/Content";

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"], // Pass your initial url
});

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Content,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createRouter({
  routeTree,
  history: memoryHistory,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

type Props = {
  onNavigate?: (to: string) => void;
};

interface NavigationContextProps {
  onNavigate?: (to: string) => void;
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
