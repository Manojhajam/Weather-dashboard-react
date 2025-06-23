import HourlyForecastWidget from "./HourlyForecastWidget";
import DailyforecastWidget from "./DailyforecastWidget";

const Forecast = ({ title, type, data }) => {
  return <div className="Forecast p-4">
      <div className="forecast-container">
        <h3 className="text-xl font-semibold mb">
          {title}
        </h3>
        <div className="flex gap-4 overflow-x-auto p-4">
          {data.map((singleData, index) => <div key={index}>
              {type === "hourly" ? <HourlyForecastWidget data={singleData} /> : <DailyforecastWidget data={singleData} />}
            </div>)}
        </div>
      </div>
    </div>;
};

export default Forecast;
