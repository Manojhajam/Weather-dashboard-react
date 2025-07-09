import React, { useContext, useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Body";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from "./Components/context/ThemeProvider";
// import { ThemeContext } from "./Components/context/theme_context";

const App = () => {
  // const { dark } = useContext(ThemeContext);
  const [selectedCityData, setSelectedCityData] = useState();

  return <div className="">
      <ThemeProvider>
        <Header setSelectedCityData={setSelectedCityData} selectedCityData={selectedCityData} />
        <Main selectedCityData={selectedCityData} />
      </ThemeProvider>
    </div>;
};
export default App;
