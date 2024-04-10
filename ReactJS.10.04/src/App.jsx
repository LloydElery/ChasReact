import { useState } from "react";
import "./App.css";
import CountButton from "./components/infobox/buttons/CountButton";
import InfoBox from "./components/infobox/InfoBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CountButton count={count} setCount={setCount}></CountButton>
        <InfoBox infoDisplay="Salami Bacon"></InfoBox>
        <InfoBox infoDisplay="Min broder"></InfoBox>
        <InfoBox infoDisplay="Yes sir!"></InfoBox>
        <InfoBox infoDisplay={count}></InfoBox>
        <InfoBox></InfoBox>
      </div>
    </>
  );
}

export default App;
