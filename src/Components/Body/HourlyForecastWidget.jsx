import React from "react";
import Icon from "../Icon/icon";

const HourlyForecastWidget = hourlydata => {
  const data = hourlydata.data;
  const { date, icon, summary, temperature, wind, precipitation } = data;
  console.log("DFW", data);
  return <div className="widget flex flex-col items-center justify-between p-4 bg-white  rounded-2xl border border-gray-300 dark:border-gray-700 shadow-md min-w-[120px]">
      <div className="day ">
        {date}
      </div>
      <div className="time">
        {date}
      </div>
      <div className="icon">
        <Icon iconNo={icon} summary={summary} />
      </div>
      <div className="temperature">
        {Math.round(temperature)}°C
      </div>
      <div className="preciption">
        {Math.round(precipitation.total)} mm/h
      </div>
      <div className="wind flex">
        <div className="speed">{Math.round(wind.speed)} mph</div>
      <div className="dir">
        <i className="bi bi-send-fill"></i>
        </div>
      </div>
    </div>;
};

export default HourlyForecastWidget;
