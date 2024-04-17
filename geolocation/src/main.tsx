import ReactDOM from "react-dom/client";
import App from "./pages/App/App";
import GeoLocationComponent from "./pages/geolocation/GeoLocationComponent";
import "./index.css";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Weather from "./pages/weather/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div>
          <h1>Geolocation App</h1>
          <Link to="about">About</Link> | <Link to="app">App</Link> |{" "}
          <Link to={"geolocation"}>GeoLocation</Link> |{" "}
          <Link to={"weather"}>Weather</Link>
        </div>
        <br />
        <Outlet></Outlet>
      </>
    ),

    children: [
      { path: "app", element: <App></App> },
      { path: "about", element: <div>About me</div> },
      {
        path: "geolocation",
        element: <GeoLocationComponent></GeoLocationComponent>,
      },
      {
        path: "weather",
        element: <Weather></Weather>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
