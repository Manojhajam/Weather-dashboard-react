  
import Forecast from "./Body/Forecast";
import { hourlyData } from "../api/hourly-forecast";
import { dailyData } from "../api/daily-forecast";
import CurrentWeather from "./Body/CurrentWeather";

const Main = ({selectedCityData}) => {
  const datahourly = hourlyData[0]?.hourly?.data;
  const datadaily = dailyData[0]?.daily?.data; 

  // console.log("Hourly Data:", datahourly);
  // console.log("Daily Data:", datadaily);

  console.log('main/selectedcity', selectedCityData)

  return (
    <div>
      <CurrentWeather />
      <Forecast type="hourly" title="HOURLY FORECAST" data={selectedCityData?.data||datahourly} />
      <Forecast type="daily" title="DAILY FORECAST" data={datadaily} />
    </div>
  );
};

export default Main;
