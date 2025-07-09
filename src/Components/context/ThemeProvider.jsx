import { createContext, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // const [dark, setDark] = useState(false);

  const [storedValue, setStoredValue] = useLocalStorage("theme", "");

  return (
    <ThemeContext.Provider value={{ storedValue, setStoredValue }}>
      {children}
    </ThemeContext.Provider>
  );
};
