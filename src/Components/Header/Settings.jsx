import { useState } from "react";
import { UNITS } from "../constants";

const Settings = ({ setSelecselectedCityData }) => {
  const [openSettings, setOpenSettings] = useState(false);
  const [measurementSystem, setMeasurementSystem] = useState("metric");

  const changeMeasurementSystem = system => {
    setMeasurementSystem(system);
    setOpenSettings(false);
    // If you need to pass this to parent component, uncomment the line below
    // setSelecselectedCityData(prev => ({ ...prev, measurementSystem: system }));
  };

  return (
    <div className="Settings flex justify-content-center gap-5">
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
          <h4>Units System:</h4>
          <div className="systems grid grid-cols-3 gap-2 mt-2">
            {Object.keys(UNITS).map(system =>
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
