import React from "react";
import { weatherData } from "../../api/current-weather";
import Icon from "../Icon/icon";


const CurrentWeather = () => {
  const data = weatherData[0]?.data[0];
  // console.log("weatherdata",data)
  if (!data) return <div className="text-center mt-4 text-red-500">No weather data available</div>;

  const {
    cloud_cover,
    feels_like,
    humidity,
    icon,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
    precipitation,
  } = data;

  const otherInfoWidgets = [
    {
      id: 0,
      icon: 'droplet',
      name: 'Precipitation',
      value: Math.round(precipitation.total),
      unit: "in/h",
    },
    {
      id: 1,
      icon: 'wind',
      name: 'Wind',
      value: Math.round(wind.speed),
      unit: "mph",
    },
    {
      id: 2,
      icon: 'moisture',
      name: 'Humidity',
      value: Math.round(humidity),
      unit: "%",
    },
    {
      id: 3,
      icon: 'sunglasses',
      name: 'UV index',
      value: Math.round(uv_index),
      unit: "",
    },
    {
      id: 4,
      icon: 'cloud-fill',
      name: 'Clouds cover',
      value: Math.round(cloud_cover),
      unit: "%",
    },
    {
      id: 5,
      icon: 'eye',
      name: 'Visibility',
      value: Math.round(visibility),
      unit: "mi",
    },
  ];

  return (
    <div className="flex gap-4 p-6 bg-black items-stretch text-white">
  {/* Weather Overview */}
  <div className="p-4 rounded-2xl border border-gray-700 bg-gray-900 w-54 text-center h-full flex flex-col justify-center">
    {/* <img
      src={`${import.meta.env.VITE_PUBLIC_URL}/dist/weather_icons/set04/big/${icon}.png`}
      alt={summary}
      className="mx-auto mb-4 w-16"
    /> */}
        <Icon iconNo={icon} summary={summary}/>
    <p className="text-4xl font-semibold">{temperature}°C</p>
    <p className="text-sm text-gray-400 mt-1">feels like {feels_like}°C</p>
    <p className="mt-2 text-gray-300">{summary}</p>
  </div>

  {/* Other Info */}
  <div className="p-6 rounded-2xl border border-gray-700 bg-gray-900 w-full grid grid-cols-3 gap-4 h-full">
    {otherInfoWidgets.map(({ id, icon, name, value, unit }) => (
      <div key={id} className="text-center">
        <div className="flex flex-col items-center">
          <i className={`bi bi-${icon} text-xl mb-1`}></i>
          <span className="text-sm">{value} {unit}</span>
          <span className="text-xs text-gray-400 mt-1">{name}</span>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default CurrentWeather;
