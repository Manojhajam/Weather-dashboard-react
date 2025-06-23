import React from "react";
import Icon from "../Icon/icon";

const HourlyForecastWidget = hourlydata => {
  const data = hourlydata.data;
  const { date, icon, summary, temperature, wind } = data;
  console.log("DFW", data);
  return (
    <div className="widget flex flex-col items-center justify-between p-4 bg-white  rounded-2xl border border-gray-300 dark:border-gray-700 shadow-md min-w-[120px]">
      {/* <img
      src={`${import.meta.env.VITE_PUBLIC_URL}/dist/weather_icons/set04/big/${icon}.png`}
      alt={summary}
      className="mx-auto mb-4 w-16"
    /> */}
      <Icon iconNo={icon} summary={summary} />
      <div className="day ">
        {date}
      </div>
      <div className="time">
        {date}
      </div>
    </div>
  );
};

export default HourlyForecastWidget;
