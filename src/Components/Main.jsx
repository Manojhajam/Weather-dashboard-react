import CurrentWeather from "./Body/currentWeather";
import Forecast from "./Body/Forecast";
import { hourlyData } from "../api/hourly-forecast";
import { dailyData } from "../api/daily-forecast";

const Main = () => {
  const datahourly = hourlyData[0]?.hourly?.data;
  const datadaily = dailyData[0]?.daily?.data; 

  // console.log("Hourly Data:", datahourly);
  // console.log("Daily Data:", datadaily);

  return (
    <div>
      <CurrentWeather />
      <Forecast type="hourly" title="HOURLY FORECAST" data={datahourly} />
      <Forecast type="daily" title="DAILY FORECAST" data={datadaily} />
    </div>
  );
};

export default Main;
