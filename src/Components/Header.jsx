
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState, useEffect } from "react";
import Place from "./Header/Place";
import Search from "./Header/Search";
import Settings from "./Header/Settings";
import { ThemeContext } from "./context/ThemeProvider";

const Header = ({ setSelectedCityData, selectedCityData }) => {
  const { storedValue, setStoredValue } = useContext(ThemeContext);

  useEffect(
    () => {
      if (storedValue === "dark") {
        document.documentElement.setAttribute("data-theme", storedValue);
      } else {
        document.documentElement.setAttribute("data-theme", storedValue);
      }
    },
    [storedValue]
  );

  console.log(storedValue);

  return <div className="header flex justify-around items-center p-5 ring ">
      <Place setSelectedCityData={setSelectedCityData} selectedCityData={selectedCityData} />
      <Search setSelectedCityData={setSelectedCityData} />
      <div className="flex gap-3">
        <Settings setSelectedCityData={setSelectedCityData} />

        {storedValue === "dark" ? <button onClick={() => setStoredValue("")}>
              {/* Light */}
              <SunIcon className="h-6 w-6 text-yellow-500" />
            </button> : <button onClick={() => setStoredValue("dark")}>
              {/* Dark */}
              <MoonIcon className="h-6 w-6 text-gray-800" />
            </button>}
      </div>
    </div>;
};

export default Header;
