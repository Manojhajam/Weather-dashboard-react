import CurrentWeather from "./Body/currentWeather";
import Forecast from "./Body/Forecast";
import { hourlyData } from "../api/hourly-forecast";
import { dailyData } from "../api/daily-forecast";
import { useContext } from "react";
import Loader from "./Body/Loader";
import WeatherContext from "./context/WeatherContext";

const Main = () => {
  // const datahourly = hourlyData[0]?.hourly?.data;
  // const datadaily = dailyData[0]?.daily?.data; 

  const { loading, currentWeather, dailyForecast, hourlyForecast } = useContext(WeatherContext);

  return (
    <div>
      {loading ? (
        <Loader/>
      ) : (
          <>
            <CurrentWeather data={ currentWeather} />
            <Forecast
              type="hourly"
              title="HOURLY FORECAST"
              data={hourlyForecast} />

      <Forecast type="daily" title="DAILY FORECAST" data={dailyForecast} />
          </>
      )}
    </div>
  );
};

export default Main;
