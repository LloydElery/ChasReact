import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Link,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import About from "./pages/About";
import Weather from "./pages/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <nav>
          <h1>Navbar</h1>
          <Link to={"about"}>About</Link> | <Link to={"app"}>Pokédex</Link> |{" "}
          <Link to={"weather"}>Weather</Link>
        </nav>
        <Outlet></Outlet>
      </>
    ),
    children: [
      {
        path: "app",
        element: <App></App>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "weather",
        element: <Weather></Weather>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
