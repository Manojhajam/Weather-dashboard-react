import { createContext, useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEMS } from "../constants";
import { getWeatherData } from "../../api";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState(
    MEASUREMENT_SYSTEMS.AUTO
  );
  const [units, setUnits] = useState({ temp: "°C", speed: "m/s" });

  const fetchWeatherData = useCallback(
    debounce(async (lat, lon, system) => {
      setLoading(true);
      try {
        const data = await getWeatherData(lat, lon, system === "imperial" ? "imperial" : "metric");

        setCurrentWeather(data.current);
        setHourlyForecast(data.hourly.slice(0, 24));
        setDailyForecast(data.daily.slice(0, 7));

        setUnits(system === "imperial"
          ? { temp: "°F", speed: "mph" }
          : { temp: "°C", speed: "m/s" }
        );
      } catch (err) {
        console.error("Weather fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }, 1000),
    []
  );

  useEffect(() => {
    if (place?.lat && place?.lon) {
      fetchWeatherData(place.lat, place.lon, measurementSystem);
    }
  }, [place?.lat, place?.lon, measurementSystem, fetchWeatherData]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        setPlace,
        loading,
        currentWeather,
        hourlyForecast,
        dailyForecast,
        measurementSystem,
        setMeasurementSystem,
        units,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
