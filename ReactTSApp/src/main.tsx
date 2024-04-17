import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cv from "./components/miniprojekt-v15/Cv.tsx";
import Header from "./components/header/Header.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header></Header> {/* Header and all content */}
        <Outlet></Outlet>
      </>
    ),
    children: [
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "app",
        element: <App></App>,
      },
      {
        path: "cv",
        element: <Cv></Cv>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
