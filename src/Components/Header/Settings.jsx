import { useContext } from "react";

const Settings = () => {


  const toggleTheme = () => {
    setDark((prevDark) => !prevDark)
    saveThemeToLocalStorage(!dark);
  }

  return <div className="Settings flex justify-content-center gap-5">
      <div className="theme-toggler">
        <div className="theme-buttons flex gap-5" onClick={toggleTheme}>
          <div className={`light-theme-btn ${dark ? "" : "active"}`}>
            <i className="bi bi-sun" />
          </div>
          <div className={`dark-theme-btn ${dark ? "active" : ""}`}>
            <i className="bi bi-moon" />
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <i className="bi bi-gear " />
      </div>
    </div>;
};

export default Settings;



