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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div>
          <h1>Welcome to lilps corner</h1>
          <Link to="about">About</Link> | <Link to="app">App</Link> |{" "}
          <Link to={"geolocation"}>GeoLocation</Link>
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
