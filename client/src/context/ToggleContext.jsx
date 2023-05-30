import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const toggleNavbar = () => {
    setToggleNavigation(!toggleNavigation)
  }
 
  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        toggleNavbar
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;