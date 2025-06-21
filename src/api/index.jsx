import currentWeather from "./current-weather.json";

const getCurrentWeather = () => {
    return currentWeather.current;
}

export { getCurrentWeather }