import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key, initialValue);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  try {
    localStorage.setItem(key, JSON.stringify(storedValue));
  } catch (error) {
    console.log(error);
  }

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
