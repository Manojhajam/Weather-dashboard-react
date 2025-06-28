import React, { useContext } from "react";
import Header from "./Components/Header";
import Main from "./Components/Body";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { ThemeContext } from "./Components/context/theme_context";

const App = () => {
  // const { dark } = useContext(ThemeContext);

  return (
    <div className="">
      <Header />
      <Main />
    </div>
  );
};
export default App;
