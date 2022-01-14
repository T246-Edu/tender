import React, { useState, createContext } from "react";
export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  return (
    <DataContext.Provider
      value={{
        userName,
        setUserName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
