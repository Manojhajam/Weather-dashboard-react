import React, { useContext, useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Body";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { ThemeContext } from "./Components/context/theme_context";

const App = () => {
  // const { dark } = useContext(ThemeContext);
  const [selectedCityData, setSelectedCityData] = useState();

  return (
    <div className="">
      <Header setSelectedCityData={setSelectedCityData} />
      <Main selectedCityData={selectedCityData} />
    </div>
  );
};
export default App;
