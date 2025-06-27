import { createContext, useEffect, useState } from "react"
import { DEFAULT_PLACE } from "../utils";

import { getWeatherData } from "../../api";

const WeatherContext = createContext();


  
  
    function WeatherProvider({ children })
    {
      const [place, setPlace] = useState(DEFAULT_PLACE);
      const [loading, setLoading] = useState(true);
      const [currentWeather, setCurrentWeather] = useState({});
      const [hourlyForecast, setHourlyForecast] = useState({});
      const [dailyForecast, setDailyForecast] = useState({});

      useEffect(() => {
  async function _getWeatherdata() {
    setLoading(true);

    const cw = await getWeatherData('current',
      place.place_id,
      'auto'
    )
    setCurrentWeather(cw.current);
console.log( "currentWeather",cw.current)
    const hf = await getWeatherData(
      'hourly',
      place.place_id,
      'auto'
    )

    setHourlyForecast(hf.hourly.data)


    const df = await getWeatherData(
      'daily',
      place.place_id,
      'auto'
    )

    setDailyForecast(df.daily.data)

    setLoading(false);
        }
        _getWeatherdata();
}, [place])

      return (
        <WeatherContext.Provider value={{
          place,
          loading,
          currentWeather,
          hourlyForecast,
          dailyForecast
        }}>
          {children}
       </WeatherContext.Provider>
     )
   }
  


export { WeatherProvider };
export default WeatherContext

