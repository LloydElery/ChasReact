import { useEffect, useState } from "react";

import "./App.css";
import { useUserLocationStore } from "../store/useUserLocationStore";

function App() {
  const [room, setRoom] = useState(0);
  const userPosition = useUserLocationStore((state: any) => state.userLocation);

  useEffect(() => {
    // Initiell funktionallitet (Mount)
    console.log("component has mounted");
    return () => {
      // Dismunt funktionallitet
      console.log("component has un-mounted");
    };

    // Deklarare dependecies
  }, [room]);
  return (
    <>
      <div>
        <p>Welcome to my app</p>
        <p>Room: {room}</p>
        <button onClick={() => setRoom((room) => room + 1)}>
          Go the new room
        </button>
      </div>
      <div>
        <p>
          Your location is {userPosition.latitude}, {userPosition.longitude}
        </p>
      </div>
    </>
  );
}

export default App;
