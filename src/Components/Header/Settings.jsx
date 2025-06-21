// import React from "react";

// const Settings = () => {
//   return (
//     <div className="fixed top-4 right-4 z-50 flex">
//       <div className="flex flex-row items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//         <div className="flex gap-2">
//           <button className="p-2 text-yellow-600 rounded-full hover:bg-yellow-200 transition">
//             <i className="bi bi-sun" />
//           </button>
//           <button className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
//             <i className="bi bi-moon" />
//           </button>
//         </div>
//       </div>
//       <div className="mt-2 flex justify-center">
//         <button className="p-2  bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
//           <i className="bi bi-gear " />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Settings;


import React, { useState, useEffect } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage or default
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  // Handle toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex flex-row items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="flex gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition
              ${theme === "light"
                ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                : "bg-gray-700 text-white hover:bg-gray-600"}
            `}
          >
            <i className={`bi ${theme === "light" ? "bi-sun" : "bi-moon"}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
