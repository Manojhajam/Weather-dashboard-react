import React from "react";
import Place from "./Header/Place";
import Search from "./Header/Search";
// import Settings from "./Header/Settings";



const Header = () => {
  return (
    <div className="flex justify-around  dark:bg-gray-400  px-6 py-8 ring shadow-xl ring-gray-900/5">
      <Place />
      <Search />
      {/* <Settings /> */}
    </div>
  );
};

export default Header;
