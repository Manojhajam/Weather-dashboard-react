import React from "react";
import Place from "./Place";
import Search from "./Search";
import Settings from "./Settings";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Place />
      <Search />
      <Settings />
    </div>
  );
};

export default Header;
