import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main.jsx";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

const App = () => {
  return <div className=" dark:bg-gray-800  px-6 py-8 ring shadow-xl ring-gray-900/5">
    <Header />
    <Main />
    </div>;
};
export default App;
