import React from "react";
import Place from "./Header/Place";
import Search from "./Header/Search";
// import Settings from "./Header/Settings";

const Header = ({ setSelectedCityData }) => {
  return (
    <div className="flex justify-around items-center dark:bg-gray-400 p-7 ring shadow-xl ring-gray-900/5">
      <Place />
      <Search setSelectedCityData={setSelectedCityData} />
      {/* <Settings /> */}
    </div>
  );
};

export default Header;
