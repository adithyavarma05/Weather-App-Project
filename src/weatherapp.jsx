import { useState } from "react";
import SearchBox from "./searchbox";
import InfoBox from "./infobox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "hyderabad",
    description: "clear sky",
    feels_like: 305.59,
    grnd_level: 948,
    humidity: 31,
    pressure: 1010,
    sea_level: 1010,
    temp: 306.38,
    temp_max: 306.88,
    temp_min: 306.38,
  });
  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div>
      <h1>Weather App by Delta</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
