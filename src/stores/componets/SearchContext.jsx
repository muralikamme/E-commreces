import React, { createContext, useState, useContext } from "react";

// Create Search Context
const SearchContext = createContext();

// Provide Search Context
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Use Search Context
export const useSearch = () => useContext(SearchContext);
