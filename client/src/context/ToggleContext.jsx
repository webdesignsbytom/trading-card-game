import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [viewCard, setViewCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const toggleNavbar = () => {
    setToggleNavigation(!toggleNavigation);
  };

  const toggleCardData = (card) => {
    console.log('xxxx');
    setViewCard(!viewCard);
    setSelectedCard(card);
  };
  console.log('selectedCard', selectedCard);
  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        toggleNavbar,
        toggleCardData,
        viewCard,
        selectedCard,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
