import React from "react";
import { searchData } from "../../api/search-data";
import Icon from "../Icon/icon";

const CurrentWeather = ({ selectedCityData }) => {
  const data1 = searchData
  // Use selectedCityData if available, otherwise fallback to searchData[0] (Biratnagar)
  const cityData = selectedCityData || data1[0];
  
  // Access the current weather data from hourly.data[0]
  const data = cityData?.hourly?.data?.[0];
  
  console.log("Current city data:", cityData);
  console.log("Current weather data:", data);
  
  if (!data) {
    return <div className="text-center mt-4 text-red-500">No weather data available</div>;
  }

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
    <div className="flex gap-4 p-6 items-stretch text-black">
      {/* Weather Overview */}
      <div className="p-4 rounded-2xl border border-gray-900 w-54 text-center flex flex-col justify-center">
        <Icon iconNo={icon} summary={summary}/>
        <p className="text-4xl font-semibold">{Math.round(temperature)}°C</p>
        <p className="text-sm mt-1">feels like {Math.round(feels_like)}°C</p>
        <p className="mt-2">{summary}</p>
        <p className="text-xs mt-1 text-gray-600">{cityData.name}</p>
      </div>

      {/* Other Info */}
      <div className="p-6 rounded-2xl border text-black border-gray-900 w-full grid grid-cols-3 gap-4">
        {otherInfoWidgets.map(({ id, icon, name, value, unit }) => (
          <div key={id} className="text-center">
            <div className="flex flex-col items-center">
              <i className={`bi bi-${icon} text-xl mb-1`}></i>
              <span className="text-sm">{value} {unit}</span>
              <span className="text-xs mt-1">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentWeather;