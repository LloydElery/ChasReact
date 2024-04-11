import { useState } from "react";
import Card from "./components/Cards";
import "./App.css";

function App() {
  // [name, ] = variabel som sparar värde
  // [, setName] = en callback function som tar emot ett argument (onClick)
  const [name, setName] = useState("");
  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setName("Dennis")}>Set Name</button>
      </div>

      <div>
        <p>Hello there, {name}</p>
        <Card colorChoise={"card"}>
          <p>Hello there!</p>
          <p>This is some info</p>
        </Card>
      </div>
    </>
  );
}

export default App;
