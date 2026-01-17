import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Kolkata",
    description: "overcast clouds",
    feels_like: 26.55,
    humidity: 78,
    pressure: 1009,
    temp: 26.55,
    temp_max: 26.55,
    temp_min: 26.55,
  });

  const handleWeatherInfo = (weatherData) => {
    setWeatherInfo(weatherData);
  }

  return (
    <>
      <SearchBox updateWeather={handleWeatherInfo}/>
      <InfoBox info={weatherInfo}/>
    </>
  );
}
