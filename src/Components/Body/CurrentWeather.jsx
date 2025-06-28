import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext"
import Icon from "../Icon/icon";


const CurrentWeather = ({data}) => {



  const {
    cloud_cover,
    feels_like,
    humidity,
    icon_num,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
    precipitation,
  } = data;

  const {units} = useContext(WeatherContext)

  const otherInfoWidgets = [
    {
      id: 0,
      icon: 'droplet',
      name: 'Precipitation',
      value: Math.round(precipitation.total),
      unit: units.precipitation,
    },
    {
      id: 1,
      icon: 'wind',
      name: 'Wind',
      value: Math.round(wind.speed),
      unit: units.wind_speed,
    },
    {
      id: 2,
      icon: 'moisture',
      name: 'Humidity',
      value: Math.round(humidity),
      unit: units.humidity,
    },
    {
      id: 3,
      icon: 'sunglasses',
      name: 'UV index',
      value: Math.round(uv_index),
      unit: units.uv_index,
    },
    {
      id: 4,
      icon: 'cloud-fill',
      name: 'Clouds cover',
      value: Math.round(cloud_cover),
      unit: units.cloud_cover,
    },
    {
      id: 5,
      icon: 'eye',
      name: 'Visibility',
      value: Math.round(visibility),
      unit: units.visibility,
    },
  ];

  return <div className="flex gap-4 p-6 items-stretch">
      {/* Weather Overview */}
      <div className="p-4 rounded-2xl border border-gray-700 w-54 text-center h-full flex flex-col justify-center">
        {/* <img
      src={`${import.meta.env.VITE_PUBLIC_URL}/dist/weather_icons/set04/big/${icon}.png`}
      alt={summary}
      className="mx-auto mb-4 w-16"
    /> */}
        <Icon iconNo={icon_num} summary={summary} />
        <p className="text-4xl font-semibold">
          {temperature} {units.temperature}
        </p>
        <p className="text-sm mt-1">
          feels like {feels_like}
          {units.temperature}
        </p>
        <p className="mt-2 text-gray-800">
          {summary}
        </p>
      </div>

      {/* Other Info */}
      <div className="p-6 rounded-2xl border border-gray-700 w-full grid grid-cols-3 gap-4 h-full">
        {otherInfoWidgets.map(({ id, icon, name, value, unit }) =>
          <div key={id} className="text-center">
            <div className="flex flex-col items-center">
              <i className={`bi bi-${icon} text-xl mb-1`} />
              <span className="text-sm">
                {value} {unit}
              </span>
              <span className="text-xs text-gray-400 mt-1">
                {name}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>;
};

export default CurrentWeather;
