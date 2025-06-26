// import { createContext,useState, useEffect } from "react";

// export const ThemeContext = createContext();
// const THEME_KEY = "theme";

// export const ThemeProvider = ({ children }) => {
//     const [dark, setDark] = useState(true);
    
//     const saveThemeToLocalStorage = (theme) => {
//         localStorage.setItem(THEME_KEY, JSON.stringify(theme))
//     }

//   useEffect(() => {
//     const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
//     if (savedTheme !== null) {
//       setDark(savedTheme);
//       return;
//     }

//     const isSystemThemeDark = window.matchMedia("(prefers-color-schema: dark)")
//       .matches;
//       setDark(isSystemThemeDark === true);
//       console.log(isSystemThemeDark);
//   }, []);
    
//   return <ThemeContext.Provider value={{ dark, setDark, saveThemeToLocalStorage }}>
//       {children}
//     </ThemeContext.Provider>;
// };
