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

  return (
    <div className="flex justify-around items-center dark:bg-gray-400 p-5 ring shadow-xl ring-gray-900/5">
      <Place
        setSelectedCityData={setSelectedCityData}
        selectedCityData={selectedCityData}
      />
      <Search setSelectedCityData={setSelectedCityData} />
      <Settings setSelectedCityData={setSelectedCityData} />

      {storedValue === "dark"
        ? <button onClick={() => setStoredValue("")}>Light</button>
        : <button onClick={() => setStoredValue("dark")}>Dark</button>}
    </div>
  );
};

export default Header;
