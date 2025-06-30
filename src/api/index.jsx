
import axios from "axios";

const OPENWEATHER_API_KEY = "a8323381ab345bfa2e3c417c5072bf91";

export async function getWeatherData(lat, lon, units = "metric") {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${units}&appid=${OPENWEATHER_API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}

