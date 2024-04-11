import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Header></Header>
        <Outlet></Outlet>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
