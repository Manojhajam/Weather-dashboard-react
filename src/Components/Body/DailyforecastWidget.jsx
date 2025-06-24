import React from "react";
import Icon from "../Icon/icon";

const DailyforecastWidget = dailyData => {
  const data = dailyData.data;
  const {
    day,
    icon,
    summary,
    temperature,
    temperature_max,
    temperature_min,
    wind,
    precipitation
  } = data;
  console.log(data);

  //date format
  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit"
    }).format(new Date())
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit"
    }).format(new Date(day))
  };

  weather_date.day =
    weather_date.day === now_date.day? "Today":weather_date.day

  return (
    <div className="relative widget flex flex-col items-center justify-between p-4 bg-white  rounded-2xl border border-gray-300 dark:border-gray-700 shadow-md min-w-[120px] mt-2">
      <div className="day absolute -top-6 bg-white px-2 text-sm font-semibold rounded shadow">
        {weather_date.day}
      </div>
      <div className="icon">
        <Icon iconNo={icon} summary={summary} />
      </div>
      <div className="temperature">
        <div className="max">
          {Math.round(temperature_max)}°C
        </div>
        <div className="min">
          {Math.round(temperature_min)}°C
        </div>
      </div>
      <div className="preciption">
        {Math.round(precipitation.total)} mm/h
      </div>
    </div>
  );
};

export default DailyforecastWidget;
