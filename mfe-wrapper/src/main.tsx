import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Movies } from "./components/movies";

const router = createBrowserRouter([
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/watchlist",
    element: <div>About</div>,
  },
]);

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  const authentication = useAuth();

  root.render(
    <StrictMode>
      <RouterProvider router={router} context={{ authentication }} />
    </StrictMode>
  );
}
