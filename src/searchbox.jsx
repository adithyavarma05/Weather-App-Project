import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "663bcaa58944c86591ae8ac4cd983cce";
  let getWeatherInfo = async (city) => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        feels_like: jsonResponse.main.feels_like,
        grnd_level: jsonResponse.main.grnd_level,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        sea_level: jsonResponse.main.sea_level,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        description: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          className="imput-box"
        />
        <br />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such Place Exists</p>}
      </form>
    </div>
  );
}
