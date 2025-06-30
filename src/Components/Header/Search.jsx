import React, { useState } from "react";
import { searchData } from "../../api/search-data";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";

const Search = ({ setSelectedCityData }) => {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchResults, setOpenSearchResults] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const onCityChange = async city => {
    setSelectedCity(city);
    const data = searchData.find(data => data.name === city);

    setSelectedCityData(data);
  };

  const changePlace = place => {
    console.log("Selected place:", place);
    setText(place.name); // optionally update input
    setOpenSearchResults(false);
    // You might want to lift state or use context to set selected place
  };

  return (
    <div className="relative w-full">
      <div className="search-container">
        <div className="search-input relative">
          {/* <input
            type="search"
            name="search-city"
            placeholder="Search city..."
            value={text}
            onChange={onSearch}
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          /> */}

          <SelectSearch
            options={searchData.map(data => ({ ...data, value: data.name }))}
            value={selectedCity}
            placeholder="Choose your city"
            onChange={onCityChange}
            search
          />
        </div>

        {openSearchResults &&
          searchResults.length > 0 &&
          <div className="search-results absolute z-50 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            <div className="results-container">
              {searchResults.map(place =>
                <div
                  key={place.place_id}
                  className="result px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => changePlace(place)}
                >
                  {place.name}, {place.adm_area1}, {place.country}
                </div>
              )}
            </div>
          </div>}
      </div>
    </div>
  );
};

export default Search;
