import React from "react";
import Place from "./Header/Place";
import Search from "./Header/Search";
import Settings from "./Header/Settings";

const Header = () => {
  return (
    <div className="flex justify-around">
      <Place />
      <Search />
      <Settings />
    </div>
  );
};

export default Header;
