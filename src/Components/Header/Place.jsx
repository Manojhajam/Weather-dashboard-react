import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const Place = () => {
const {place} = useContext(WeatherContext)

    return <div className="place">
        <i className="bi bi-geo-alt" />
      <b>{place.name}</b>,{' '}{place.country} 
      </div>;
}

export default Place;