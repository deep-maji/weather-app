import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbox.css";
import { useState } from "react";

export default function SearchBox({ updateWeather }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "96c037ae8c80cb38228e8bb8e9099a44";

  const getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let resData = await res.json();
      let result = {
        city: city,
        temp: resData.main.temp,
        humidity: resData.main.humidity,
        pressure: resData.main.pressure,
        feels_like: resData.main.feels_like,
        temp_min: resData.main.temp_min,
        temp_max: resData.main.temp_max,
        description: resData.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getWeatherInfo();
    setCity("");
    try {
      let result = await getWeatherInfo();
      updateWeather(result);
      if (error) {
        setError(false);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="searchbox">
      <h1>Search for the weather</h1>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City"
          variant="outlined"
          onChange={handleChange}
          value={city}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>No such place exsit!</p>}
    </div>
  );
}
