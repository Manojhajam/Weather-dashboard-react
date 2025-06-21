import React from 'react'

const Search = () => {
  return <div className="search-container">
      <div className="search-icon" />
      <div className="search-input">
       
        <input type="search" name="search-city" placeholder="Search city..." className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500&quot; placeholder=&quot;Search Mockups, Logos...&quot; required" />
      </div>
    </div>;
}

export default Search
