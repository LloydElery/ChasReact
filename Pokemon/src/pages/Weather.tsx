import { useRef, useState } from "react";
const getWeatherFromAPI = async () => {
  const url =
    "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
const getWeatherFromAPIMock = async () => {
  const mockData = {};
  return mockData;
};
const Weather = () => {
  const [weatherData, setWeatherData]: any = useState({});
  const inputRef = useRef<HTMLInputElement | null>(null);
  const getWeatherData = async () => {
    const data = await getWeatherFromAPIMock();
    setWeatherData(data);
  };
  return (
    <>
      <input ref={inputRef} defaultValue={""}></input>
      <button onClick={() => getWeatherData()}>Get weather data</button>
      {weatherData.timezone}
    </>
  );
};

export default Weather;
