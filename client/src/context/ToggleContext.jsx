import React, { useContext } from 'react';
import { useState } from 'react';
// Api
import client from '../api/client';
// Context
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [viewCard, setViewCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedPack, setSelectedPack] = useState({});
  const [returnedOpenPack, setReturnedOpenPack] = useState([]);
  const [toggleOpeningPackDiplay, setToggleOpeningPackDiplay] = useState(false);
  const [activeNav, setActiveNav] = useState('/');

  let navigate = useNavigate();


  const toggleOpeningNewPack = (pack) => {
    setSelectedPack(pack);
    const data = { packId: pack.id, userId: user.id };

    client
      .patch('/users/user/packs/open-pack', data, true)
      .then((res) => {
        console.log('res', res.data);
        setReturnedOpenPack(res.data.data.cards);
        setToggleOpeningPackDiplay(!toggleOpeningPackDiplay);
      })

      .catch((err) => {
        console.error('Unable to open packs', err);
      });
  };

  const toggleNavbar = () => {
    setToggleNavigation(!toggleNavigation);
  };

  const toggleCardData = (card) => {
    navigate(`/card-overview/${card.id}`, { state: card });
  };

  console.log('selectedCard', selectedCard);
  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        toggleNavbar,
        toggleCardData,
        toggleOpeningNewPack,
        activeNav,
        viewCard,
        selectedCard,
        toggleOpeningPackDiplay,
        selectedPack,
        returnedOpenPack,
        setActiveNav,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
