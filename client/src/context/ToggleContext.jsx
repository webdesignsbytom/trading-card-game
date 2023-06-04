import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [viewCard, setViewCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedPack, setSelectedPack] = useState({});
  const [toggleUnopenedPacketsDisplay, setToggleUnopenedPacketDisplay] = useState(false);
  const [toggleOpeningPackDiplay, setToggleOpeningPackDiplay] = useState(false);

  const toggleOpenPackets = () => {
    console.log('togtoggleOpenPacketsgle');
    setToggleUnopenedPacketDisplay(!toggleUnopenedPacketsDisplay);
  };

  const toggleOpeningNewPack = (pack) => {
    console.log('togtoggleOpenPacketsgle', pack);
    setSelectedPack(pack)
    setToggleOpeningPackDiplay(!toggleOpeningPackDiplay);
  };

  const toggleNavbar = () => {
    setToggleNavigation(!toggleNavigation);
  };

  const toggleCardData = (card) => {
    console.log('toggleCardData');
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
        toggleOpenPackets,
        toggleOpeningNewPack,
        viewCard,
        selectedCard,
        toggleUnopenedPacketsDisplay,
        toggleOpeningPackDiplay,
        selectedPack
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
