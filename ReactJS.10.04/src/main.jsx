import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Index from "./pages/index/Index.jsx";
import About from "./pages/about/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
  },
  {
    path: "about",
    element: <About></About>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
