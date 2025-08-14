import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [systemActive, setSystemActive] = useState(true);

  return (
    <AppContext.Provider value={{ systemActive, setSystemActive }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
