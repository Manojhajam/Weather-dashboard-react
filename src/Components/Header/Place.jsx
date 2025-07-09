
import { useEffect } from "react";
import { searchData } from "../../api/search-data";

const Place = ({ setSelectedCityData, selectedCityData }) => {
  const data = searchData;

  // Use selectedCityData if available, otherwise default to first city
  const currentPlace = selectedCityData || data[0];

  // Only set the selected city data once when component mounts
  useEffect(() => {
    if (!selectedCityData && setSelectedCityData) {
      setSelectedCityData(data[0]);
    }
  }, [setSelectedCityData, selectedCityData]);

  return (
    <div className="place">
      <i className="bi bi-geo-alt dark:w-10" />
      <b>
        {currentPlace?.name || "Loading..."}
      </b>
    </div>
  );
};

export default Place;