
import { useContext, useState } from "react";
import { MEASUREMENT_SYSTEMS } from "../constants";
import WeatherContext from "../context/WeatherContext";

const Settings = () => {
  const [openSettings, setOpenSettings] = useState(false);

  const { measurementSystem, setMeasurementSystem } = useContext(
    WeatherContext
  );

  const changeMeasurementSystem = system => {
    setMeasurementSystem(system);
    setOpenSettings(false);
  };

  return (
    <div className="Settings flex justify-content-center gap-5">
      {/* <div className="theme-toggler">
        <div className="theme-buttons flex gap-5" onClick={toggleTheme}>
          <div className={`light-theme-btn ${dark ? "" : "active"}`}>
            <i className="bi bi-sun" />
          </div>
          <div className={`dark-theme-btn ${dark ? "active" : ""}`}>
            <i className="bi bi-moon" />
          </div>
        </div>
      </div> */}

      <div
        className="setting-btn flex justify-center"
        onClick={() => setOpenSettings(prevVal => !prevVal)}
      >
        <i className="bi bi-gear " />
      </div>

      <div
        className={`setting-menu absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 z-50 transition-all duration-300 ${openSettings
          ? "opacity-100 scale-100 visible"
          : "opacity-0 scale-95 invisible"}`}
      >
        <div className="measurement-systems">
          <h4>Measurements System:</h4>
          <div className="systems grid grid-cols-3 gap-2 mt-2">
            {Object.values(MEASUREMENT_SYSTEMS).map(system =>
              <div
                key={system}
                onClick={() => changeMeasurementSystem(system)}
                className={`systems ${system === measurementSystem
                  ? "active"
                  : ""}  cursor-pointer hover:bg-gray-100 p-2 rounded`}
              >
                {system}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
