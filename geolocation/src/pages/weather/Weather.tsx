// Component for handeling weather

import { useEffect, useState } from "react";
import { useUserLocationStore } from "../store/useUserLocationStore";

const Weather = () => {
  const userPosition = useUserLocationStore((state: any) => state.userLocation);
  const [weather, setWeather]: any = useState(null);

  const APIKEY = import.meta.env.VITE_API_KEY;
  const units = "metric"; //
  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${userPosition.latitude}&lon=${userPosition.longitude}&units=${units}&appid=${APIKEY}`;
    const respons = await fetch(url);
    const result = await respons.json();
    console.log(result);
    setWeather(result);
  };

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <>
      {weather && (
        <>
          <h2>
            {weather.city.name} -- {weather.city.country}
          </h2>
          {weather.list.map((element: any) => {
            const date = new Date((element.dt + weather.city.timezone) * 1000); // Omvandlar millisekunder till sekunder samt sätter den korrekta tidszoonen
            return (
              <p>
                {/* Omvandlar dt till UTC standard att skriva datum */}
                Date: {date.toUTCString()}
                <br></br>
                Temp: {element.main.Temp}
                <br></br>
                {element.weather[0].description}
              </p>
            );
          })}
        </>
      )}
    </>
  );
};

export default Weather;
