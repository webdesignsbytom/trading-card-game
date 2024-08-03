import React from 'react';
import { useState } from 'react';
// Context
import { useNavigate } from 'react-router-dom';
// Constants
import { HOME_PAGE_URL } from '../utils/Constants';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [activeNav, setActiveNav] = useState(HOME_PAGE_URL);

  let navigate = useNavigate();

  const toggleNavbar = () => {
    setToggleNavigation(!toggleNavigation);
  };

  const toggleCardData = (card) => {
    navigate(`/card-overview/${card.id}`, { state: card });
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        toggleNavbar,
        toggleCardData,
        activeNav,
        setActiveNav,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
