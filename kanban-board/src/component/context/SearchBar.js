import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", query);
    //  I Implement search logic below
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
