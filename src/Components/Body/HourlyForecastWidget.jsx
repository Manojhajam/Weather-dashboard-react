import React from "react";
import Icon from "../Icon/icon";
import { UNITS } from "../constants";

const HourlyForecastWidget = hourlydata => {
  // Use a default unit system or accept it as a prop
  const unitSystem = hourlydata.unitSystem || "metric";
  const units = UNITS[unitSystem];
  const data = hourlydata.data;
  const { date, icon, summary, temperature, wind, precipitation } = data;
  // console.log("DFW", data);

  //date format
  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit"
    }).format(new Date()),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date().setMinutes(0))
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit"
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(date).setMinutes(0))
  };

  weather_date.day =
    weather_date.day === now_date.day && weather_date.time === now_date.time
      ? "Today"
      : weather_date.time === "12:00 AM" ? weather_date.day : "";

  return <div className=" hover:scale-[1.05] transition-transform duration-300 hover:shadow-2xl relative widget flex flex-col items-center justify-between p-4 bg-white  rounded-2xl border border-gray-300 dark:border-gray-700 shadow-md min-w-[120px] mt-2">
      <div className="day absolute -top-6 bg-white px-2 text-sm font-semibold rounded shadow">
        {weather_date.day}
      </div>
      <div className="time">
        {weather_date.time}
      </div>
      <div className="icon">
        <Icon iconNo={icon} summary={summary} />
      </div>
      <div className="temperature">
        {Math.round(temperature)}
        {units.temperature}
      </div>
      <div className="preciption">
        {Math.round(precipitation.total)} {units.precipitation}
      </div>
      <div className="wind flex">
        <div className="speed">
          {Math.round(wind.speed)} {units.wind_speed}
        </div>
        <div className="dir" style={{ transform: `rotate(${-45 + wind.angle}deg)` }}>
          <i className="bi bi-send-fill" />
        </div>
      </div>
    </div>;
};

export default HourlyForecastWidget;
